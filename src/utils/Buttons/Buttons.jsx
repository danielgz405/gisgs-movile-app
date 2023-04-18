import { TouchableHighlight, View } from "react-native";
import { styles } from "../../assets/styles/global";
import { themes } from "../../assets/themes/themes";
import { Link } from "react-router-native";
import { PrimaryText } from "../Texts/Texts";

export function PrimaryButton({ onPress, className, style, text }, ...props ){
    const classNames = [ 
        styles.defaultButton,
        style && style,
        className?.includes('bg-secondary') && {backgroundColor: themes.colors.secondary},
        className?.includes('rounded-full') && {borderRadius: themes.rounded["rounded-full"]},
        className?.includes('text-black') && {color: themes.colors.cyan[900]},
        className?.includes('p-10') && {padding: 10},
        className?.includes('m-15') && {margin: 15},
        className?.includes('mb-15') && {marginBottom: 15},
        className?.includes('mt-15') && {marginTop: 15}
    ]
    
    return (
        <TouchableHighlight onPress={() => onPress && onPress()}>
            <View style={classNames} {...props}>
                <PrimaryText className={['text-white']} style={{textAlign: 'center'}}>{text}</PrimaryText>
            </View>
        </TouchableHighlight>
    )
}

export function PrimaryLink({ to, className, style, text }, ...props){
    const classNames = [ 
        styles.defaultButton,
        style && style,
        className?.includes('bg-secondary') && {backgroundColor: themes.colors.secondary},
        className?.includes('text-black') && {color: themes.colors.cyan[900]},
        className?.includes('p-10') && {padding: 10},
        className?.includes('m-15') && {margin: 15}
    ]
    
    return (
        <Link to={to}>
            <View style={classNames} {...props}>
                <PrimaryText className={['text-white']} style={{textAlign: 'center'}}>{text}</PrimaryText>
            </View>
        </Link>
    )
}

export function PrimaryButtonIcon({ onPress, className, style, children }, ...props ){
    const classNames = [ 
        styles.defaultButton,
        style && style,
        className?.includes('bg-secondary') && {backgroundColor: themes.colors.secondary},
        className?.includes('bg-transparent') && {backgroundColor: themes.colors.transparent, opacity: 1},
        className?.includes('rounded-full') && {borderRadius: themes.rounded["rounded-full"]},
        className?.includes('text-black') && {color: themes.colors.cyan[900]},
        className?.includes('p-10') && {padding: 10},
        className?.includes('m-15') && {margin: 15}
    ]
    
    return (
        <TouchableHighlight onPress={() => onPress && onPress()}>
            <View style={classNames} {...props}>
                {children}
            </View>
        </TouchableHighlight>
    )
}