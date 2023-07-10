import React from "react";
import styled from "styled-components/native";
import  Icon  from "react-native-vector-icons/Ionicons";
import { useNavigation } from '@react-navigation/native';
import { View, Text, Image } from "react-native";

const Container = styled.View`
    width:100%;
    height:40px;
    margin-top:9px;
    margin-bottom:20px;
    flex-direction:row;
    align-items: center;
    justify-content: space-between;
`;

const PressableBox = styled.Pressable`
    width: 10%;
`;

const TitleText = styled.Text`
    font-weight: 600;
    font-size: 20px;
    text-align: center;
`;

const TopBar_Close=({title})=>{
    const navigation = useNavigation();
    return(
        <Container>
            <PressableBox
                onPressOut={()=>navigation.goBack()}
            >
                <Image style={{marginLeft:20}} source={require('../images/Back.png')}/>
            </PressableBox>
            <TitleText>{title}</TitleText>
            <Image style={{marginRight:20}} source={require('../images/Close.png')}/>
        </Container>
    )
}

export default TopBar_Close;