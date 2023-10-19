import React from 'react';
import { View } from 'react-native';
import type { TTestDataItem, THome } from '@pages/types';
import { List, Text } from 'react-native-paper';
import { TRANSACTION_STATUS, TRANSACTION_ORIGIN } from '@pages/enums';
import { useTheme } from 'react-native-paper';
import theme from '@pages/theme';
import moment from 'moment';
import styles from './style';

function Home({ objectId, status, details, timestamp, navigation }
    : TTestDataItem & Pick<THome, 'navigation'>)
    : JSX.Element {

    const { origin } = details;


    function TransactionIcon({ status, details }: Pick<TTestDataItem, 'status' | 'details'>): JSX.Element {
        let icon = "phone";

        if (origin === TRANSACTION_ORIGIN.PHONE_CALL || origin === TRANSACTION_ORIGIN.MOBILE_APP) {
            if (origin === TRANSACTION_ORIGIN.MOBILE_APP) {
                icon = "cellphone";
            }
        } else {
            switch (status) {
                case TRANSACTION_STATUS.APPROVED:
                    icon = "progress-check";
                    break;
                case TRANSACTION_STATUS.DECLINED:
                    icon = "progress-close";
                    break;
                case TRANSACTION_STATUS.PENDING:
                    icon = "progress-clock";
                    break;
                case TRANSACTION_STATUS.CANCELLED:
                    icon = "cancel";
                    break;
                default:
                    icon = "progress-wrench";
            }
        }
        return <List.Icon color={theme.colors.blue} style={styles.icon} icon={icon} />
    }

    const handlePress = () => {
        if(status === TRANSACTION_STATUS.DECLINED || status === TRANSACTION_STATUS.CANCELLED) {
            navigation.navigate('Error', { objectId, variant: 'Error' })
        } else if (origin === TRANSACTION_ORIGIN.IN_PERSON || origin === TRANSACTION_ORIGIN.ATM_MACHINE) {
            navigation.navigate('Detail1', { objectId, variant: 'Detail1' })
        } else {
            navigation.navigate('Detail2', { objectId, variant: 'Detail2' })
        }
    }

    return (
        <List.Item
            key={objectId}
            title={() => (
                <View style={styles.titleContainter}>
                    <Text variant="titleSmall">{`Transaction ${status}`}</Text>
                    <Text variant="labelSmall" style={styles.subText}>{moment(timestamp).format("h:mm A")}</Text>
                </View>
            )}
            description={() =>
                <Text variant="bodySmall" style={styles.subText}>
                    {`The transaction ${objectId} has been ${status} from ${details.origin}`}
                </Text>}
            left={() => <TransactionIcon status={status} details={details} />}
            onPress={handlePress}
        />
    );
}

export default Home;
