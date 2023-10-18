import React from 'react';
import {
    ScrollView,
    Text,
    View,
    Button,
} from 'react-native';

import type { THome } from 'types'

function Home({ navigation }: THome): JSX.Element {
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
