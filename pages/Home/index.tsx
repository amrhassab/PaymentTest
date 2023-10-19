import React, { Fragment, useState, useEffect } from 'react';
import {
    View,
    FlatList
} from 'react-native';
import testData from './test-data.json';
import type { THome, TTestData } from '@pages/types';
import sortAndGroup from './serializers';
import TransactionListItem from './TransactionListItem';
import { List, Divider } from 'react-native-paper';

function Home({ navigation }: THome): JSX.Element {
    const [serializedData, setSerializedData] = useState<Map<string, TTestData>>();

    useEffect(() => {
        setSerializedData(sortAndGroup(testData as TTestData))
    }, [])


    return (
        <View>
            {serializedData ? <FlatList
                data={Array.from(serializedData.entries())}
                renderItem={({ item }) => {
                    const [title, entries] = item;
                    return (
                        <List.Section
                         key={title}>
                            <List.Subheader>{title}</List.Subheader>
                            {
                                entries?.map(entry => {
                                    const { objectId } = entry;
                                    return (
                                        <Fragment key={objectId}>
                                            <TransactionListItem navigation={navigation} {...entry} />
                                            <Divider horizontalInset />
                                        </Fragment>
                                    )
                                })
                            }
                        </List.Section>
                    )
                }}
            /> : <></>}
        </View>
    );
}

export default Home;
