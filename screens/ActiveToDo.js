import { useSelector } from "react-redux";
import EntityTile from "../components/EntityTile";
const { View, Text, StyleSheet,FlatList } = require("react-native");

function ActiveToDo(){
    const completed=useSelector(state=>state.data.completed)
    const dummy=useSelector(state=>state.data.dummy)
    const list=dummy.filter((entity)=>!completed.includes(entity.id))
    function renderEntity(itemData){
        return <EntityTile {...itemData.item} />
    }
    return (
        <View style={styles.container}>
            <Text style={styles.heading}>Today's Tasks</Text>
            <FlatList data={list} keyExtractor={(item)=>item.id} renderItem={renderEntity}/>
           
        </View>
    )
}

export default ActiveToDo

const styles=StyleSheet.create({
    container:{
        
        alignContent:"center",
        justifyContent:"center"
    },
    heading:{
        fontWeight:"bold",
        fontSize:20,
        margin:20
      }
})