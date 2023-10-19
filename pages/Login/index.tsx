import React from 'react';
import { View, Text } from "react-native"
import { TextInput, Button, HelperText, Divider } from "react-native-paper"
import { useForm, Controller } from "react-hook-form"
import {PASSWORD_MIN_LENGTH, REGEX, ERROR_MESSAGES, MOCK_EMAIL, MOCK_PASSWORD} from './constants';
import { TLogin } from '@pages/types';
import styles from './style';

type FormData = {
    email: string
    password: string
}

function Detial({ navigation }: TLogin): JSX.Element {

    const { control, formState: { errors }, formState, handleSubmit } = useForm<FormData>({
        mode: "onChange",
    })

    const submit = (data: FormData) => {
        const { email, password } = data;

        if (email !== MOCK_EMAIL || password !== MOCK_PASSWORD) {
            setTopLevelError("Email or Password is incorrect")
        } else {
            navigation.navigate("Home");
        }
    };

    const [topLevelError, setTopLevelError] = React.useState("");

    return (
        <View style={styles.container}>

            <Text>{`Email: ${MOCK_EMAIL}`}</Text>
            <Text>{`Password (Case Sensitive): ${MOCK_PASSWORD}`}</Text>

            <View style={{ paddingVertical: 20 }}>
                <Divider />
            </View>


            <Controller
                control={control}
                name="email"
                defaultValue=""
                rules={{
                    required: { message: ERROR_MESSAGES.REQUIRED, value: true },
                    pattern: {
                        value: REGEX.email,
                        message: ERROR_MESSAGES.EMAIL_INVALID,
                    },
                }}
                render={({ field }) => (
                    <>
                        <TextInput
                            value={field.value}
                            label="Email"
                            style={styles.input}
                            onBlur={field.onBlur}
                            textContentType="emailAddress"
                            autoCapitalize="none"
                            onChangeText={(value) => field.onChange(value)}
                            error={errors.email && true}
                        />
                        {errors.email ? <HelperText type="error">{errors.email.message}</HelperText> : <></>}

                    </>
                )}
            />
            <Controller
                control={control}
                name="password"
                defaultValue=""
                rules={{
                    required: { message: ERROR_MESSAGES.REQUIRED, value: true },
                    minLength: {
                        value: PASSWORD_MIN_LENGTH,
                        message: "Password must have at least 6 characters",
                    },
                }}
                render={({ field }) => (
                    <>
                        <TextInput
                            value={field.value}
                            label="Password"
                            style={styles.input}
                            onBlur={field.onBlur}
                            secureTextEntry
                            textContentType="password"
                            onChangeText={(value) => field.onChange(value)}
                            error={errors.password && true}
                        />
                    </>
                )}
            />
            {errors.password ? <HelperText type="error">{errors.password.message}</HelperText> : <></>}
            {topLevelError ? <HelperText type="error">{topLevelError}</HelperText> : <></>}

            <Button
                mode="contained"
                onPress={handleSubmit(submit)}
                disabled={!formState.isValid}
            >
                Submit
            </Button>
        </View>
    )
}

export default Detial;
