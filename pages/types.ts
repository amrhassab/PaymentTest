import type { NativeStackScreenProps } from '@react-navigation/native-stack';

type DetailComponent = {
    variant: 'Detail1' | 'Detail2' | 'Error';
    objectId: string
};

export type TStackParamList = {
    Home: undefined;
    Detail1: DetailComponent;
    Detail2: DetailComponent;
    Error: DetailComponent;
};

export type THome = NativeStackScreenProps<TStackParamList, 'Home'>;
export type TDetail = NativeStackScreenProps<TStackParamList, 'Detail1'>;

export type TTestDataItem = {
    objectType: 'TRANSACTION';
    objectId: string;
    status: 'APPROVED' | 'DECLINED' | 'PENDING' | 'CANCELLED' | 'IN_REVIEW';
    details: {
        origin: 'MOBILE_APP' | 'WEB_PORTAL' | 'IN_PERSON' | 'ATM_MACHINE' | 'PHONE_CALL';
    },
    timestamp: string;
}

export type TTestData = Array<TTestDataItem>;

export interface Dictionary<T> {
    [key: string]: T;
}