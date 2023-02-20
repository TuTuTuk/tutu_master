
import React from "react";
import { StyleSheet, Text} from 'react-native';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../screens/TabScreens/Home";
import Board_min from "../screens/TabScreens/Board_min";
import Matching_min from "../screens/TabScreens/Matching_min";
import My from "../screens/TabScreens/My";
import Timetable from "../screens/TabScreens/Timetable";
import LinearGradient from 'react-native-linear-gradient';

const Tab = createBottomTabNavigator();

const Tabs=()=>(
    <Tab.Navigator screenOptions={{
        headerShown:false,
        tabBarStyle:{
            borderTopLeftRadius:30,
            borderTopRightRadius:30,
            backgroundColor:()=>(
                <LinearGradient style={{height:200}} colors={['#5f0d80', '#7c22a1', '#c487de']} >
                </LinearGradient>
            )
        },
    }}>
        <Tab.Screen name="Home" component={Home}/>
        <Tab.Screen name="Timetable" component={Timetable}/>
        <Tab.Screen name="Board_min" component={Board_min}/>
        <Tab.Screen name="Matching_min" component={Matching_min}/>
        <Tab.Screen name="My" component={My}/>
    </Tab.Navigator>
)

export default Tabs;