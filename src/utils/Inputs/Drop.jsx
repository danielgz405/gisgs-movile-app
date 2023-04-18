import RNPickerSelect from 'react-native-picker-select';
import { styles } from '../../assets/styles/global';

export const Dropdown = ({items, onValueChange, style, placeholder}) => {
    return (
        <RNPickerSelect
            placeholder={placeholder}
            style={{inputAndroid: { ...styles.defaultInput, ...style }, inputIOS: { ...styles.defaultInput, ...style }}}
            onValueChange={(e) => onValueChange(e)}
            items={items}
        />
    );
};
