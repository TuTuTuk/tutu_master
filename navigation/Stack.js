import React from "react";
import {createNativeStackNavigator}from "@react-navigation/native-stack";
import { TouchableOpacity } from "react-native";

import LoginPage from "../screens/StackScreens/Login/LoginPage";
import JoinPage from "../screens/StackScreens/Login/JoinPage";
import PopularBoard from "../screens/StackScreens/PopularBoard";
import ProfilePage from "../screens/StackScreens/My/ProfilePage";

import Designboard_min from "../screens/StackScreens/Designboard_min";
import Board_research_min from "../screens/StackScreens/Board_research_min";
import HotBoard_min from "../screens/StackScreens/HotBoard_min";
import Integrated_Board_min from "../screens/StackScreens/Integrated_Board_min";



const NativeStack = createNativeStackNavigator();

const Stack =()=>(
    <NativeStack.Navigator screenOptions={{
        animation : "simple_push",
        presentation:"card",
        headerTintColor:"#f1c40f",
        headerBackTitleStyle:false,
    }}>
        <NativeStack.Screen name="LoginPage" component={LoginPage}/>
        <NativeStack.Screen name="JoinPage" component={JoinPage}/>
        <NativeStack.Screen name="PopularBoard" component={PopularBoard}/>
        <NativeStack.Screen name="ProfilePage" component={ProfilePage}/>

        <NativeStack.Screen name="Designboard_min" component={Designboard_min}/>
        <NativeStack.Screen name="Board_research_min" component={Board_research_min}/>
        <NativeStack.Screen name="HotBoard_min" component={HotBoard_min}/>
        <NativeStack.Screen name="Integrated_Board_min" component={Integrated_Board_min}/>
    </NativeStack.Navigator>
)

export default Stack;