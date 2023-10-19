import {
    MD3LightTheme as DefaultTheme,
  } from 'react-native-paper';
  

const theme = {
    ...DefaultTheme,
    // Specify custom property
    myOwnProperty: true,
    // Specify custom property in nested object
    colors: {
        ...DefaultTheme.colors,
        blue: '#00A2EF', // 0 162 239
    },
};

export default theme;

