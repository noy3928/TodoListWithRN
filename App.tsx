import React from "react"
import { NavigationContainer } from "@react-navigation/native"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { RootStackParamList } from "./src/shared/types"
import { Provider } from "react-redux"
import createStore from "./src/store"

import Home from "./src/screens/Home"
import Detail from "./src/screens/Detail"
import theme from "./src/shared/theme"

const Stack = createNativeStackNavigator<RootStackParamList>()
const store = createStore()

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerTintColor: theme.primary,
          }}
        >
          <Stack.Screen
            name="Home"
            component={Home}
            options={{ title: "Todolist" }}
          />
          <Stack.Screen
            name="Detail"
            component={Detail}
            options={{
              headerTitle: "Detail Page",
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  )
}
