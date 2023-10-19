import React from 'react';
import { View } from 'react-native';
import type { TTestDataItem, THome } from '@pages/types';
import { List, Text } from 'react-native-paper';
import { TRANSACTION_STATUS, TRANSACTION_ORIGIN } from '@pages/enums';
import { useTheme } from 'react-native-paper';
import moment from 'moment';
import styles from './style';

function Home({ objectId, status, details, timestamp, navigation }
    : TTestDataItem & Pick<THome, 'navigation'>)
    : JSX.Element {

    const theme = useTheme();

    function TransactionIcon({ status, details }: Pick<TTestDataItem, 'status' | 'details'>): JSX.Element {
        const { origin } = details;
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
        return <List.Icon color={theme.colors.blue} style={{ paddingLeft: 16 }} icon={icon} />
    }

    return (
        <List.Item
            key={objectId}
            title={() => (
                <View style={styles.titleContainter}>
                    <Text variant="titleSmall">{`Transaction ${status}`}</Text>
                    <Text variant="labelSmall" style={{ color: 'grey' }}>{moment(timestamp).format("h:mm A")}</Text>
                </View>
            )}
            description={() =>
                <Text variant="bodySmall" style={{ color: 'grey' }}>
                    {`The transaction ${objectId} has been ${status} from ${details.origin}`}
                </Text>}
            left={() => <TransactionIcon status={status} details={details} />}
        />
    );
}

export default Home;
