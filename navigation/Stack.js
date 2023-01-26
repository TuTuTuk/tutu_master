import React from "react";
import {createNativeStackNavigator}from "@react-navigation/native-stack";

import LoginPage from "../screens/StackScreens/Login/LoginPage";
import LogoutPage from "../screens/StackScreens/Login/LogoutPage";
import JoinPage from "../screens/StackScreens/Login/JoinPage";
import IdentificationPage from "../screens/StackScreens/Login/IdentificationPage";
import IdentifySMSPage from "../screens/StackScreens/Login/IdentifySMSPage";
import IdSearchPage from "../screens/StackScreens/Login/IdSearchPage";
import PopularBoard from "../screens/StackScreens/PopularBoard";
import ProfilePage from "../screens/StackScreens/My/ProfilePage";
import Contributor from "../screens/StackScreens/Contributor";

//게시판(민정)
import Designboard_min from "../screens/StackScreens/Board/Designboard_min";
import Board_research_min from "../screens/StackScreens/Board/Board_research_min";
import HotBoard_min from "../screens/StackScreens/Board/HotBoard_min";
import Integrated_Board_min from "../screens/StackScreens/Board/Integrated_Board_min";
import BoardWriting_min from "../screens/StackScreens/Board/BoardWriting_min";
import BoardWriting_min2 from "../screens/StackScreens/Board/BoardWriting_min2";
import Writing_self_min from "../screens/StackScreens/Board/Writing_self_min";
//마이페이지(민정)
import NoteHistory_min from "../screens/StackScreens/My/NoteHistory_min";
import Question_min from "../screens/StackScreens/My/Question_min";




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
        <NativeStack.Screen name="LogoutPage" component={LogoutPage}/>
        <NativeStack.Screen name="IdSearchPage" component={IdSearchPage}/>
        <NativeStack.Screen name="JoinPage" component={JoinPage}/>
        <NativeStack.Screen name="IdentificationPage" component={IdentificationPage}/>
        <NativeStack.Screen name="IdentifySMSPage" component={IdentifySMSPage}/>
        <NativeStack.Screen name="PopularBoard" component={PopularBoard}/>
        <NativeStack.Screen name="ProfilePage" component={ProfilePage}/>
        <NativeStack.Screen name="Contributor" component={Contributor}/>

        <NativeStack.Screen name="Designboard_min" component={Designboard_min}/>
        <NativeStack.Screen name="Board_research_min" component={Board_research_min}/>
        <NativeStack.Screen name="HotBoard_min" component={HotBoard_min}/>
        <NativeStack.Screen name="Integrated_Board_min" component={Integrated_Board_min}/>
        <NativeStack.Screen name="BoardWriting_min" component={BoardWriting_min}/>
        <NativeStack.Screen name="BoardWriting_min2" component={BoardWriting_min2}/>
        <NativeStack.Screen name="Writing_self_min" component={Writing_self_min}/>
        <NativeStack.Screen name="NoteHistory_min" component={NoteHistory_min}/>
        <NativeStack.Screen name="Question_min" component={Question_min}/>
    </NativeStack.Navigator>
)

export default Stack;