import { View,StyleSheet } from "react-native"
import Button from "../UI/button"

function NumberPad(){
    return (
        <View style={styles.padView}>
            <View style={styles.pad}>
                <Button onPress={()=>numberInput(7)}>7</Button>
                <Button onPress={()=>numberInput(8)}>8</Button>
                <Button onPress={()=>numberInput(9)}>9</Button>
                <Button onPress={allClear}>AC</Button>
            </View>
            <View style={styles.pad}>
                <Button onPress={()=>numberInput(4)}>4</Button>
                <Button onPress={()=>numberInput(5)}>5</Button>
                <Button onPress={()=>numberInput(6)}>6</Button>
                <Button onPress={()=>handleOperator('+')}>+</Button>
            </View>
            <View style={styles.pad}>
                <Button onPress={()=>numberInput(1)}>1</Button>
                <Button onPress={()=>numberInput(2)}>2</Button>
                <Button onPress={()=>numberInput(3)}>3</Button>
                <Button onPress={()=>handleOperator('-')}>-</Button>
            </View>
            <View style={styles.pad}>
                <Button onPress={()=>numberInput('0')} >0</Button>
                <Button onPress={()=>handleOperator('/')}>/</Button>
                <Button onPress={()=>handleOperator('*')}>*</Button>
                <Button onPress={()=>[operatorInput()]}>=</Button>
            </View>
            </View>
    )
}

const styles=StyleSheet.create({
    
})

export default NumberPad