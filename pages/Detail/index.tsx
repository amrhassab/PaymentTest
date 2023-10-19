import React from 'react';
import {
    Text,
    View,
} from 'react-native';

import { TDetail1, TDetail2, TDetialError } from '@pages/types';
import { DETAIL_PAGE_VARIANTS } from '@pages/enums';

type IDetial = TDetail1 | TDetail2 | TDetialError;

function Detial({ route }: IDetial): JSX.Element {
    const { variant, objectId } = route.params;

    const getMessage = () => {
        if (variant === DETAIL_PAGE_VARIANTS.ERROR) {
            return `Error Screen with ${objectId}`
        }

        if (variant === DETAIL_PAGE_VARIANTS.DETAIL_1) {
            return `Detail Screen 1 ${objectId}`
        }

        if (variant === DETAIL_PAGE_VARIANTS.DETAIL_2) {
            return `Detail Screen 2 with ${objectId}`
        }
    }


    return (
        <View style={{ justifyContent: 'center', alignItems: 'center' }}>
            <Text>{getMessage()}</Text>
        </View>
    );
}

export default Detial;
