import { Text } from "react-native";
import { styles } from "../../assets/styles/global";
import { themes } from "../../assets/themes/themes";

export function PrimaryText({ className, style, children }, ...props) {
    const classNames = [ 
        styles.defaultText,
        style && style,
        className?.includes('bold') && {fontWeight: themes.fontWeight["font-bold"]},
        className?.includes('text-xs') && {fontSize: themes.fontsSize.xl},
        className?.includes('text-sm') && {fontSize: themes.fontsSize["sm"]},
        className?.includes('text-black') && {color: themes.colors.cyan[900]},
        className?.includes('text-white') && {color: themes.colors.white},
        className?.includes('text-gray-400') && {color: themes.colors.gray[400]},
        className?.includes('text-center') && { textAlign: 'center' },
        className?.includes('text-y-center') && { marginBottom: 'auto', marginTop: 'auto' },
        className?.includes('mb-10') && { marginBottom: 10 },
        className?.includes('mb-30') && { marginBottom: 30 },
        className?.includes('mx-10') && { marginLeft: 10, marginRight: 10 },
    ]
    return <Text style={classNames} {...props}>{children}</Text>
}

export function Title({ className, style, children }, ...props) {
    const classNames = [ 
        styles.titleText,
        style && style,
        className?.includes('extra-bold') && {fontWeight: themes.fontWeight["font-extrabold"]},
        className?.includes('text-xs') && {fontSize: themes.fontsSize.xl},
        className?.includes('text-sm') && {fontSize: themes.fontsSize["sm"]},
        className?.includes('text-xl') && {fontSize: themes.fontsSize["xl"]},
        className?.includes('text-2xl') && {fontSize: themes.fontsSize["2xl"]},
        className?.includes('text-4xl') && {fontSize: themes.fontsSize["4xl"]},
        className?.includes('text-black') && {color: themes.colors.cyan[900]},
        className?.includes('text-white') && {color: themes.colors.white},
        className?.includes('text-center') && { textAlign: 'center' },
        className?.includes('mb-10') && { marginBottom: 10 }
    ]
    return <Text style={classNames} {...props}>{children}</Text>
}