import { TextInput } from "react-native";
import { styles } from "../../assets/styles/global"
import { themes } from "../../assets/themes/themes"

export function GeneralInput({ onChange, placeholder, className, style, value, keyboardType, secureTextEntry }) {

    const classNames = [ 
        styles.defaultInput,
        style && style,
        className?.includes('bg-light') && {backgroundColor: themes.colors.gray[100]},
        className?.includes('text-black') && {color: themes.colors.gray[900]},
        className?.includes('p-10') && {padding: 10},
        className?.includes('m-15') && {margin: 15}
    ]

    return (<TextInput
        keyboardType={keyboardType}
        secureTextEntry={secureTextEntry}
        placeholder={placeholder}
        style={classNames}
        onChangeText={(e) => onChange && onChange(e)}
        value={value}
    />);
}