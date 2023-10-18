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

