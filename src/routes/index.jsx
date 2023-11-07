import { NavigationContainer } from "@react-navigation/native"
import { createStackNavigator } from "@react-navigation/stack"
import "react-native-gesture-handler"
import Main from "../pages/Main"
import NewCar from "../pages/NewCar"
import NewDrive from "../pages/NewDrive"

const Stack = createStackNavigator()

export default function Routes() {
  return(
    <Stack.Navigator>
      <Stack.Screen
        name="Main"
        component={Main}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="NewCar"
        component={NewCar}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="NewDrive"
        component={NewDrive}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  )
}