const { View } = require("react-native");
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import AllToDo from "./screens/AllToDo";
import CompletedToDo from "./screens/CompletedToDO";
import ActiveToDo from "./screens/ActiveToDo";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ManageToDo from "./screens/ManageToDo";

const Tab=createBottomTabNavigator();
const Stack=createNativeStackNavigator()

function App(){
  function BottomTab(){
    return (
      <Tab.Navigator>
        <Tab.Screen name="All" component={AllToDo}/>
        <Tab.Screen name="Completed" component={CompletedToDo}/>
        <Tab.Screen name="Active" component={ActiveToDo}/>
      </Tab.Navigator>
    )
  }
  return (
    <Provider store={store}>
    <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen name="BottomTab "component={BottomTab}/>
      <Stack.Screen name="Manage" component={ManageToDo}/>
      </Stack.Navigator>
    </NavigationContainer>
    </Provider>
  )
}

export default App