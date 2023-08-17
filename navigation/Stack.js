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
//마이페이지(준범)
import RecentWatch from "../screens/StackScreens/My/RecentWatch_jun";

//게시판(민정)
import Designboard_min from "../screens/StackScreens/Board/Designboard_min";
import Research from "../screens/StackScreens/Research";
import HotBoard_min from "../screens/StackScreens/Board/HotBoard_min";
import Integrated_Board_min from "../screens/StackScreens/Board/Integrated_Board_min";
import BoardWriting_min from "../screens/StackScreens/Board/BoardWriting_min";
import BoardWriting_min2 from "../screens/StackScreens/Board/BoardWriting_min2";
import Writing_self_min from "../screens/StackScreens/Board/Writing_self_min";
import ViewMyBoard from "../screens/StackScreens/Board/ViewMyBoard";

//게시판(준범)
import BoardDetail_jun from "../screens/StackScreens/Board/BoardDetail_jun";


//마이페이지(민정)
import NoteHistory_min from "../screens/StackScreens/My/NoteHistory_min";
import Withdrawal from "../screens/StackScreens/My/Withdrawal";
import Inquiry from "../screens/StackScreens/My/Inquiry";
import Announcement from "../screens/StackScreens/My/Announcement";
import PrivacyPolicy from "../screens/StackScreens/My/PrivacyPolicy";
import Certification from "../screens/StackScreens/My/Certification_All/Certification";
import CurrentStudent from "../screens/StackScreens/My/Certification_All/CurrentStudent";
import ChangeEmail from "../screens/StackScreens/My/Account/ChangeEmail/ChangeEmail";
import IdentifyVerification_email from "../screens/StackScreens/My/Account/ChangeEmail/IdentityVerification_email"
import ChangePW from "../screens/StackScreens/My/Account/ChangePW";
import MyComments from "../screens/StackScreens/My/Imformation/MyComments";
import MyBoards from "../screens/StackScreens/My/Imformation/MyBoards";
import MyScrap from "../screens/StackScreens/My/Imformation/MyScrap";
import Announce_Detail from "../screens/StackScreens/My/Announce_Detail"
//매칭(민정)
import Registration from "../screens/StackScreens/Matching/Registration";
import Matching111 from "../screens/StackScreens/Matching/Matching111";
import Matching_Request from "../screens/StackScreens/Matching/Matching_Request";
//매칭(준서)
import Matching_junseo from "../screens/StackScreens/Matching/Matching_junseo";
import Agreement from "../screens/StackScreens/Agreement/Agreement";


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

        <NativeStack.Screen name="RecentWatch" component={RecentWatch}/>

        <NativeStack.Screen name="Designboard_min" component={Designboard_min}/>
        <NativeStack.Screen name="Research" component={Research}/>
        <NativeStack.Screen name="BoardDetail_jun" component={BoardDetail_jun}/>
        <NativeStack.Screen name="HotBoard_min" component={HotBoard_min}/>
        <NativeStack.Screen name="Integrated_Board_min" component={Integrated_Board_min}/>
        <NativeStack.Screen name="BoardWriting_min" component={BoardWriting_min}/>
        <NativeStack.Screen name="BoardWriting_min2" component={BoardWriting_min2}/>
        <NativeStack.Screen name="Writing_self_min" component={Writing_self_min}/>
        <NativeStack.Screen name="NoteHistory_min" component={NoteHistory_min}/>
        <NativeStack.Screen name="ViewMyBoard" component={ViewMyBoard}/>
        <NativeStack.Screen name= "Withdrawal" component={Withdrawal}/>
        <NativeStack.Screen name= "Inquiry" component={Inquiry}/>
        <NativeStack.Screen name= "Announcement" component={Announcement}/>
        <NativeStack.Screen name= "PrivacyPolicy" component={PrivacyPolicy}/>
        <NativeStack.Screen name="Certification"component={Certification}/>
        <NativeStack.Screen name="CurrentStudent"component={CurrentStudent}/>
        <NativeStack.Screen name="Registration"component={Registration}/>
        <NativeStack.Screen name="Matching111"component={Matching111}/>
        <NativeStack.Screen name="Matching_Request"component={Matching_Request}/>
        <NativeStack.Screen name="ChangePW"component={ChangePW}/>
        <NativeStack.Screen name="ChangeEmail"component={ChangeEmail}/>
        <NativeStack.Screen name="IdentifyVerification_email" component={IdentifyVerification_email}/>
        <NativeStack.Screen name="MyComments" component={MyComments}/>
        <NativeStack.Screen name="MyBoards" component={MyBoards}/>
        <NativeStack.Screen name="MyScrap" component={MyScrap}/>
        <NativeStack.Screen name="Announce_Detail" component={Announce_Detail}/>


        <NativeStack.Screen name="Matching_junseo" component={Matching_junseo}/>

        <NativeStack.Screen name="Agreement" component={Agreement}/>

    </NativeStack.Navigator>
)

export default Stack;