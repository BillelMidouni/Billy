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
import SnackBar from '@/components/SnackBar';
import { Chase } from 'react-native-animated-spinkit';
import LoadingOverlay from '@/components/LoadingOverlay';
import { register } from '@/core/services/Auth';

type SignUpForm = {
    name: string;
    email: string;
    password: string;
}

export default function SignUpScreen() {

    const { t } = useTranslation();
    const {control, handleSubmit, watch, formState: {errors}} = useForm<SignUpForm>();
    const [isSubmitting, setIsSubmitting] = useState(false);  

    const onSubmit = (data: SignUpForm) => {
        console.log(data);
        setIsSubmitting(true);
        register(data.email, data.password).then((response) => {
            setIsSubmitting(false);
            router.navigate("home" as any);
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
        return (watch("name") === "" || watch("name") === undefined)
        || (watch("email") === "" || watch("email") === undefined)
        || (watch("password") === "" || watch("password") === undefined)
        || Object.keys(errors).length > 0;
    }

    return (
        <ThemedView style={{flex: 1}}>
            <Header title={t("signup.title")} notification={false} />
            <Text style={styles.letsCreateYour}>{t("signup.slogan")}</Text>

            <View style={{paddingHorizontal: padding_horizontal, flex: 1, gap: 20}}>
                <Controller
                    control={control}
                    name="name"
                    rules={{ required: true }}
                    render={({field: { onChange, onBlur, value }}) => (
                        <ThemedInputText 
                            title={t("signup.nameinput.label")} 
                            placeHolder={t("signup.nameinput.placeholder")} 
                            status={checkStatus("name")}
                            onChangeText={value => onChange(value)}
                            value={value}
                        />
                    )}
                />

                <Controller
                    control={control}
                    name="email"
                    rules={{ required: true }}
                    render={({field: { onChange, onBlur, value }}) => (
                        <ThemedInputText 
                            title={t("signup.emailinput.label")}
                            placeHolder={t("signup.emailinput.placeholder")}
                            status={checkStatus("email")}
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
                            title={t("signup.passwordinput.label")}
                            placeHolder={t("signup.passwordinput.placeholder")}
                            status={checkStatus("password")}
                            onChangeText={value => onChange(value)}
                            value={value}
                            secureTextEntry={true}
                        />
                    )}
                />

                <Text style={styles.bySigningUpContainer}>
                    <Text style={styles.bySigningUp}>{`By signing up you agree to our `}</Text>
                    <Text style={styles.terms}>Terms</Text>
                    <Text style={styles.bySigningUp}>{`, `}</Text>
                    <Text style={styles.terms}>Privacy Policy</Text>
                    <Text style={styles.bySigningUp}>{`, and `}</Text>
                    <Text style={styles.terms}>Cookie Use</Text>
                </Text>

                <ThemedButton 
                    title={t("signup.submit")} 
                    onPress={handleSubmit(onSubmit)}
                    disable={isDisabled()}
                />

                <View style={styles.container}>
                    <View style={styles.line} />
                        <Text style={styles.or}>Or</Text>
                    <View style={styles.line} />
                </View>

                <ThemedButton 
                    title={t("signup.subit_google")} 
                    onPress={handleSubmit(onSubmit)}
                    color={"#FFF"}
                    textStyles={{color: "#000"}}
                    containerStyle={{borderColor: "#CCCCCC", borderWidth: 1}}
                    leftIcon={<Image source={require("@/assets/icon/Google.png")} style={{width: size_icon, height: size_icon}} />}
                />

                <ThemedButton 
                    title={t("signup.subit_facebook")} 
                    onPress={handleSubmit(onSubmit)}
                    color={"#1A77F2"}
                    leftIcon={<Image source={require("@/assets/icon/Facebook.png")} style={{width: size_icon, height: size_icon}} />}
                />

                <TouchableOpacity onPress={() => {router.navigate("login" as any)}}>
                    <Text style={[styles.bySigningUpContainer, {textAlign: "center"}]}>
                        <Text style={styles.bySigningUp}>{`Already have an account? `}</Text>
                        <Text style={styles.terms}>Log In</Text>
                    </Text>
                </TouchableOpacity>
            </View>
            
            <LoadingOverlay isVisible={isSubmitting} />
            <SnackBar message="This is a test message" type="success" duration={5000} />

        </ThemedView>
    );
}

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