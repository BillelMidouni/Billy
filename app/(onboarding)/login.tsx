import Header from '@/components/home/Header';
import ThemedButton from '@/components/ThemedButton';
import ThemedInputText from '@/components/ThemedInputText';
import { ThemedView } from '@/components/ThemedView';
import { padding_horizontal, size_icon } from '@/constants/Theme';
import { useTranslation } from 'react-i18next';
import { Image, Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import 'react-native-reanimated';
import { useForm, Controller } from "react-hook-form"
import { useState } from 'react';
import { router } from 'expo-router';
import { login } from '@/core/services/Auth';

type LogInForm = {
    email: string;
    password: string;
}

export default function LogInScreen() {

    const { t } = useTranslation();
    const {control, handleSubmit, watch, formState: {errors}} = useForm<LogInForm>();
    const [isSubmitting, setIsSubmitting] = useState(false);  

    const onSubmit = (data: LogInForm) => {
        setIsSubmitting(true);

        login(data.email, data.password).then((response) => {
            setIsSubmitting(false);
            router.navigate("/(tabs)/(home)")
            console.log(response);
        }).catch((error) => {
            setIsSubmitting(false);
            console.log(error);
        });
    }

    const checkStatus = (field: string) => {
        if (!isSubmitting){
            return "neutral";
        }else{
            return field in errors ? "invalid" : "valid";
        }
    }

    const isDisabled = () => {
        return (watch("email") === "" || watch("email") === undefined)
        || (watch("password") === "" || watch("password") === undefined)
        || Object.keys(errors).length > 0;
    }

    return (
        <ThemedView style={{flex: 1}}>
            <Header title={t("login.title")} notification={false} />
            <Text style={styles.letsCreateYour}>{t("login.slogan")}</Text>

            <View style={{paddingHorizontal: padding_horizontal, flex: 1, gap: 20}}>
                <Controller
                    control={control}
                    name="email"
                    rules={{ required: true }}
                    render={({field: { onChange, onBlur, value }}) => (
                        <ThemedInputText 
                            title={t("login.emailinput.label")} 
                            placeHolder={t("login.emailinput.placeholder")} 
                            status={checkStatus("name")}
                            onChangeText={value => onChange(value)}
                            value={value}
                        />
                    )}
                />

                <Controller
                    control={control}
                    name="password"
                    rules={{ required: true }}
                    render={({field: { onChange, onBlur, value }}) => (
                        <ThemedInputText 
                            title={t("login.passwordinput.label")}
                            placeHolder={t("login.passwordinput.placeholder")}
                            status={checkStatus("email")}
                            onChangeText={value => onChange(value)}
                            value={value}
                            secureTextEntry={true}
                        />
                    )}
                />

                <TouchableOpacity onPress={() => {router.navigate("resetpassword" as any)}}>
                    <Text style={[styles.bySigningUpContainer, {textAlign: "center"}]}>
                        <Text style={styles.bySigningUp}>{`Forgot your password ? `}</Text>
                        <Text style={styles.terms}>Reset your password</Text>
                    </Text>
                </TouchableOpacity>

                <ThemedButton 
                    title={t("login.submit")} 
                    onPress={handleSubmit(onSubmit)}
                    disable={isDisabled()}
                />

                <View style={styles.container}>
                    <View style={styles.line} />
                        <Text style={styles.or}>Or</Text>
                    <View style={styles.line} />
                </View>

                <ThemedButton 
                    title={t("login.subit_google")} 
                    onPress={handleSubmit(onSubmit)}
                    color={"#FFF"}
                    textStyles={{color: "#000"}}
                    containerStyle={{borderColor: "#CCCCCC", borderWidth: 1}}
                    leftIcon={<Image source={require("@/assets/icon/Google.png")} style={{width: size_icon, height: size_icon}} />}
                />

                <ThemedButton 
                    title={t("login.subit_facebook")} 
                    onPress={handleSubmit(onSubmit)}
                    color={"#1A77F2"}
                    leftIcon={<Image source={require("@/assets/icon/Facebook.png")} style={{width: size_icon, height: size_icon}} />}
                />

                <TouchableOpacity onPress={() => {router.navigate("signup" as any)}}>
                    <Text style={[styles.bySigningUpContainer, {textAlign: "center"}]}>
                        <Text style={styles.bySigningUp}>{`Don't have an account ? `}</Text>
                        <Text style={styles.terms}>Join</Text>
                    </Text>
                </TouchableOpacity>
            </View>
        </ThemedView>
    );

};

const styles = StyleSheet.create({
    createAnAccount: {
        fontSize: 32,
        letterSpacing: -1.6,
        lineHeight: 32,
        fontWeight: "600",
        fontFamily: "General Sans",
        color: "#1a1a1a",
        textAlign: "left",
        width: 262
    },
    letsCreateYour: {
        marginHorizontal: padding_horizontal,
        fontSize: 16,
        lineHeight: 22,
        fontFamily: "General Sans",
        color: "#808080",
        textAlign: "left",
        marginBottom: 20
    },
    bySigningUp: {
        fontFamily: "General Sans"
    },
    terms: {
        textDecorationLine: "underline",
        fontWeight: "500",
        fontFamily: "General Sans"
    },
    bySigningUpContainer: {
        fontSize: 14,
        lineHeight: 20,
        color: "#1a1a1a",
        textAlign: "left",
        width: 341
    },
    line: {
        borderStyle: "solid",
        borderColor: "#e6e6e6",
        borderTopWidth: 1,
        width: 155,
        height: 1
    },
    or: {
        fontSize: 14,
        lineHeight: 20,
        fontFamily: "General Sans",
        color: "#808080",
        textAlign: "left"
    },
    container: {
        width: "100%",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between"
    }
});