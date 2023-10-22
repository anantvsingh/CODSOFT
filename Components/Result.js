import { Text,StyleSheet } from "react-native"
function Result(){
    return (
        <View>
        <Text style={styles.text}>{values}</Text>
        <Text style={styles.text}>{currValue}</Text>
        </View>
    )
}

const styles=StyleSheet.create({

})

export default Result