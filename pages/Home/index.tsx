import React from 'react';
import {
    ScrollView,
    Text,
    View,
    Button,
} from 'react-native';
import testData from './test-data.json';
import type { THome, TTestData } from 'types'
import sortAndGroup from './serializers'

console.log("test data", testData);

function Home({ navigation }: THome): JSX.Element {

    

    console.log("test", sortAndGroup(testData as TTestData))


    return (
        <ScrollView
            contentInsetAdjustmentBehavior="automatic">
            <View>
                <Text>Hellodsfsdfsdfsdf</Text>
                <Button
                    title="Go to Details"
                    onPress={() => navigation.push('Detail1', { objectId: '123', variant: 'Detail1' })}
                />

            </View>
        </ScrollView>
    );
}

export default Home;
