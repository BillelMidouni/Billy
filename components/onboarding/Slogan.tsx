import * as React from "react";
import { useTranslation } from "react-i18next";
import {Text, StyleSheet} from "react-native";

const Slogan = ({style = {}}) => {

    const { t } = useTranslation();

  	return (
    	<Text style={[styles.defineYourselfIn, {...style}]}>{t("onbording.slogan")}</Text>
    );
};

const styles = StyleSheet.create({
  	defineYourselfIn: {
        fontSize: 64,
        letterSpacing: -3.2,
        lineHeight: 51,
        fontWeight: "600",
        fontFamily: "General Sans",
        color: "#1a1a1a",
        textAlign: "left",
        width: 324,
        paddingTop: 15
  	}
});

export default Slogan;
