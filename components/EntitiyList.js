const { View, FlatList } = require("react-native");
const { default: EntityTile } = require("./EntityTile");

// const dummy=[{
//     id:'1',
//     title:'abcd',
//     description:'this is first',
//     date:'2023-05-15'
// },
// {
//     id:'2',
//     title:'abcd',
//     description:'this is first',
//     date:'2023-05-15'
// },
// {
//     id:'4',
//     title:'abcd',
//     description:'this is first',
//     date:'2023-05-15'
// },
// {
//     id:'3',
//     title:'abcd',
//     description:'this is first',
//     date:'2023-05-15'
// },]

function EntityList({data,onPress}){
    function renderEntity(itemData){
        return <EntityTile title={itemData.item.title} description={itemData.item.description} date={itemData.item.date} onPress={onPress}/>
    }
    return(
        <FlatList data={data} keyExtractor={(item)=>item.id} renderItem={renderEntity}/>
    )
}

export default EntityList