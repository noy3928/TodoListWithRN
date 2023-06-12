import React from "react"
import { NavigationContainer } from "@react-navigation/native"
import { createNativeStackNavigator } from "@react-navigation/native-stack"

import Home from "./src/screens/Home"
import theme from "./src/shared/theme"

const Stack = createNativeStackNavigator()

export default function App() {
  return (
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
      </Stack.Navigator>
    </NavigationContainer>
  )
}
