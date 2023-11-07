import { useState } from "react";

const { View, Button } = require("react-native");
const { default: Input } = require("./Input");

function ToDoForm({onConfirm}){
    const[inputValues,setInputValues]=useState({
        title:'',
        description:'',
        date:''
    })
    function inputHandler(inputType,value){
        setInputValues((currValue)=>{
            return {...currValue,
            [inputType]:value}
        })
    }
    function onSaveHandler(){
        onConfirm(inputValues)
    }
    return(
        <View>
            <Input label={'Title'} inputConfigs={{onChangeText:inputHandler.bind(this,'title') ,value:inputValues.title}}/>
            <Input label={'Date'} inputConfigs={{placeholder:'YYYY-MM-DD',onChangeText:inputHandler.bind(this,'date'),value:inputValues.date
}}/>
            <Input label={'Description'} inputConfigs={{onChangeText:inputHandler.bind(this,'description'),value:inputValues.description
}}/>
            <Button title="Save" onPress={onSaveHandler}/>
        </View>
    )
}

export default ToDoForm