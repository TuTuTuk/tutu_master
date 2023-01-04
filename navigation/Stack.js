import React from "react";
import {createNativeStackNavigator}from "@react-navigation/native-stack";
import { TouchableOpacity } from "react-native";

import LoginPage from "../screens/StackScreens/Login/LoginPage";
import PopularBoard from "../screens/StackScreens/PopularBoard";
import ProfilePage from "../screens/StackScreens/My/ProfilePage";
import JoinPage from "../screens/StackScreens/Login/JoinPage";

const NativeStack = createNativeStackNavigator();

const Stack =()=>(
    <NativeStack.Navigator screenOptions={{
        animation : "simple_push",
        presentation:"card",
        headerTintColor:"#f1c40f",
        headerBackTitleStyle:false,
        headerShown:false
    }}>
        <NativeStack.Screen name="LoginPage" component={LoginPage}/>
        <NativeStack.Screen name="JoinPage" component={JoinPage}/>
        
        <NativeStack.Screen name="PopularBoard" component={PopularBoard}/>
        <NativeStack.Screen name="ProfilePage" component={ProfilePage}/>
    </NativeStack.Navigator>
)

export default Stack;