const { View } = require("react-native");
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import AllToDo from "./screens/AllToDo";
import CompletedToDo from "./screens/CompletedToDO";
import ActiveToDo from "./screens/ActiveToDo";

const Tab=createBottomTabNavigator();

function App(){
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="All" component={AllToDo}/>
        <Tab.Screen name="Completed" component={CompletedToDo}/>
        <Tab.Screen name="Active" component={ActiveToDo}/>
      </Tab.Navigator>
    </NavigationContainer>
  )
}

export default App