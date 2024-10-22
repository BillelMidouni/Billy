import Header from '@/components/home/Header';
import ThemedButton from '@/components/ThemedButton';
import ThemedInputText from '@/components/ThemedInputText';
import { ThemedView } from '@/components/ThemedView';
import { padding_horizontal } from '@/constants/Theme';
import { useTranslation } from 'react-i18next';
import { Text, View, StyleSheet, KeyboardAvoidingView } from 'react-native';
import 'react-native-reanimated';
import { useForm, Controller } from "react-hook-form"
import { useState } from 'react';
import { router } from 'expo-router';

type ResetPasswordForm = {
    email: string;
}

export default function ResetPasswordScreen() {

    const { t } = useTranslation();

    const [step, setStep] = useState(0);
    
    const {control, handleSubmit, watch, formState: {errors}} = useForm<ResetPasswordForm>();
    const [isSubmitting, setIsSubmitting] = useState(false);  

    const onSubmit = (data: ResetPasswordForm) => {
        router.navigate("/(tabs)/(home)")
        setIsSubmitting(true);
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
        || Object.keys(errors).length > 0;
    }

    return (
        <ThemedView style={{flex: 1}}>
            <Header title={t("resetpassword.title")} notification={false} />
            <Text style={styles.letsCreateYour}>{t("resetpassword.slogan")}</Text>

            <KeyboardAvoidingView 
                style={{paddingHorizontal: padding_horizontal, flex: 1, gap: 20 }}
                behavior="padding">

                <Controller
                    control={control}
                    name="email"
                    rules={{ required: true }}
                    render={({field: { onChange, onBlur, value }}) => (
                        <ThemedInputText 
                            title={t("resetpassword.emailinput.label")}
                            placeHolder={t("resetpassword.emailinput.placeholder")}
                            status={checkStatus("email")}
                            onChangeText={value => onChange(value)}
                            value={value}
                        />
                    )}
                />

                <View 
                    style={{flex: 1, justifyContent: "flex-end", paddingBottom: 30}}>
                    <ThemedButton 
                        title={t("resetpassword.submit_1")} 
                        onPress={handleSubmit(onSubmit)}
                        disable={isDisabled()}
                    />
                </View>
               
            </KeyboardAvoidingView>

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
});