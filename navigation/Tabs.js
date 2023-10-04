
import React from "react";
import { Image, StyleSheet, Text } from 'react-native';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../screens/TabScreens/Home";
import Board_min from "../screens/TabScreens/Board_min";
import Matching_min from "../screens/TabScreens/Matching_min";
import My from "../screens/TabScreens/My";
import Timetable from "../screens/TabScreens/Timetable";
import LinearGradient from 'react-native-linear-gradient';
import styled from "styled-components/native";
import Icon from "react-native-vector-icons/Ionicons";
import MakeTimeTable from "../screens/StackScreens/Timetable/Timetable";
 

const Tab = createBottomTabNavigator();

const Tabs=()=>(
    <Tab.Navigator 
        screenOptions={({route})=>({
            tabBarStyle:{height:56,shadowColor:'transparent'},
            headerShown:false,
            tabBarBackground:()=>(
                <LinearGradient 
                    colors={['#0062FF', '#0A7DFF', '#1398FF']}
                    style={{height:56,borderTopLeftRadius:30,borderTopRightRadius:30}}
                    start={{x:1,y:0}} end={{x:0,y:0}}
                />
            ),
            tabBarLabel:()=>{return null},
        })} 
    >
        <Tab.Screen name="Home" component={Home} options={{
            tabBarIcon:({color,size,focused})=><Image source={require('../images/TabIcon/Home.png')} color='white' size={size}/>
        }}/>
        <Tab.Screen name="Timetable" component={Timetable} options={{
            tabBarIcon:({color,size,focused})=><Image source={require('../images/TabIcon/Timetable.png')} color='white' size={size}/>
        }}/>
        <Tab.Screen name="Board_min" component={Board_min} options={{
            tabBarIcon:({color,size,focused})=><Image source={require('../images/TabIcon/Board.png')} color='white' size={size}/>
        }}/>
        <Tab.Screen name="Matching_min" component={Matching_min} options={{
            tabBarIcon:({color,size,focused})=><Image source={require('../images/TabIcon/Matching.png')} color='white' size={size}/>
        }}/>
        <Tab.Screen name="My" component={My} options={{
            tabBarIcon:({color,size,focused})=><Image source={require('../images/TabIcon/My.png')} color='white' size={size}/>
        }}/>
    </Tab.Navigator>
)

export default Tabs;