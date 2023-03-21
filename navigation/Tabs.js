
import React from "react";
import { Image, StyleSheet, Text} from 'react-native';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../screens/TabScreens/Home";
import Board_min from "../screens/TabScreens/Board_min";
import Matching_min from "../screens/TabScreens/Matching_min";
import My from "../screens/TabScreens/My";
import Timetable from "../screens/TabScreens/Timetable";
import LinearGradient from 'react-native-linear-gradient';
import styled from "styled-components/native";
import Icon from "react-native-vector-icons/Ionicons";

const BottomImge = styled.Image`
    width:30px;
    height:30px;
`;

const Tab = createBottomTabNavigator();

const Tabs=()=>(
    <Tab.Navigator screenOptions={{
        headerShown:false,
        tabBarStyle:{
            borderTopLeftRadius:30,
            borderTopRightRadius:30,
            backgroundColor:()=>(
                <LinearGradient style={{
                    width:"100%",
                    height:"100%",
                    borderRadius: 10,
                    alignItems:"center",
                    justifyContent:"center"
                }}
                    colors={['#0062FF', '#0A7DFF', '#1398FF']}
                    start={{x:1,y:0}} end={{x:0,y:0}}>
                    <Text>{title}</Text>
                </LinearGradient>
            )
            
        }
    }}>
        <Tab.Screen name="Home" component={Home} options={{
            tabBarIcon:({color,size,focused})=><Icon name="home-outline" color={color} size={size}/>
            
        }}/>
        <Tab.Screen name="Timetable" component={Timetable} options={{
            tabBarIcon:({color,size,focused})=><Icon name="time-outline" color={color} size={size}/>
            
        }}/>
        <Tab.Screen name="Board_min" component={Board_min} options={{
            tabBarIcon:({color,size,focused})=><Icon name="clipboard-outline" color={color} size={size}/>
            
        }}/>
        <Tab.Screen name="Matching_min" component={Matching_min} options={{
            tabBarIcon:({color,size,focused})=><Icon name="people-outline" color={color} size={size}/>
            
        }}/>
        <Tab.Screen name="My" component={My} options={{
            tabBarIcon:({color,size,focused})=><Icon name="person-outline" color={color} size={size}/>
            
        }}/>
    </Tab.Navigator>
)

export default Tabs;