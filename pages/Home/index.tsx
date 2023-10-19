import React, { useState, useEffect } from 'react';
import {
    ScrollView,
    Text,
    View,
    Button,
    FlatList
} from 'react-native';
import testData from './test-data.json';
import type { THome, TTestData, TTestDataItem } from 'types';
import sortAndGroup from './serializers';
import { List, MD3Colors } from 'react-native-paper';


function Home({ navigation }: THome): JSX.Element {
    const [serializedData, setSerializedData] = useState<Map<string, TTestData>>();

    useEffect(() => {
        setSerializedData(sortAndGroup(testData as TTestData))
    }, [])


    return (
        <View>
            {serializedData ? <FlatList
                data={Array.from(serializedData.entries())}
                renderItem={({item}) => {
                    const [title, entries] = item;
                    return (
                        <List.Section key={title}>
                            <List.Subheader>{title}</List.Subheader>
                            {
                                entries?.map(entry => {
                                    const {
                                        status,
                                        details: { origin },
                                        objectId,
                                        timestamp,
                                        objectType } = entry;
                                    return (
                                        <List.Item
                                            key={objectId}
                                            title={() =>
                                                <Text>{`The transaction ${objectId} has been ${status} from ${origin}`}</Text>}
                                            left={() => <List.Icon color={MD3Colors.tertiary70} icon="folder" />}
                                        />
    
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
