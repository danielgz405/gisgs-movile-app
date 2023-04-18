import { StyleSheet } from "react-native";
import { themes } from "../themes/themes";

export const styles = StyleSheet.create({
    titleText: {
        color: themes.colors.gray[900],
        fontWeight: themes.fontWeight["font-bold"],
        fontFamily: themes.fontFamily["font-sans"],
        fontSize: themes.fontsSize.lg,   
    },
    defaultText: {
        color: themes.colors.slate[700],
        fontWeight: themes.fontWeight["font-normal"],
        fontFamily: themes.fontFamily["font-sans"],
        fontSize: themes.fontsSize["base"],         
    },
    defaultInput: {
        backgroundColor: themes.colors.slate[700],
        color: themes.colors.white,
        borderRadius: themes.rounded["rounded-full"],
        paddingLeft: 10,
        height: 45
    },
    defaultButton: {
        backgroundColor: themes.colors.primary,
        borderRadius: themes.rounded["rounded-lg"],
        color: themes.colors.white,
    }
})