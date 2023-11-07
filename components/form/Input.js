const { View,TextInput,Text} = require("react-native");

function Input({label,inputConfigs}){
    return(
        <View>
            <Text>{label}</Text>
            <TextInput {...inputConfigs}/>
        </View>
    )
}
export default Input