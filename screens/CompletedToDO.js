import { useSelector } from "react-redux";
import EntityTile from "../components/EntityTile";
const { View, FlatList,StyleSheet } = require("react-native");

function CompletedToDo(){
    const completed=useSelector(state=>state.data.completed)
    const dummy=useSelector(state=>state.data.dummy)
    const list=dummy.filter((entity)=>completed.includes(entity.id))
    function renderEntity(itemData){
        return <EntityTile {...itemData.item} />
    }
    return (
        <View style={styles.container}>
        <FlatList data={list} keyExtractor={(item)=>item.id} renderItem={renderEntity}/>
    </View>
    )
}

export default CompletedToDo

const styles=StyleSheet.create({
    container:{
        
        alignContent:"center",
        justifyContent:"center"
    }
})