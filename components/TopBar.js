import React from "react";
import styled from "styled-components/native";
import  Icon  from "react-native-vector-icons/Ionicons";
import { useNavigation } from '@react-navigation/native';

const Container = styled.View`
    // border:1px;
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
//--------------------------------
    const BackIcon = styled.Image`
        //border:1px;
        left:25px;
        /* width:30px;
        height: 40px; */
        `;

    const ViewMoreIcon = styled.Image`
        //border:1px;
    `;
//--------------------------------


const TitleText = styled.Text`
    font-weight: 600;
    font-size: 20px;
    text-align: center;
`;
const XButton = styled.View``;

const TopBar=({title,useStateFunc,useStateValue})=>{
    const navigation = useNavigation();
    return(
        <Container>
            <PressableBox
                onPressOut={()=>navigation.goBack()}
            >
                <BackIcon source={require('../images/Back.png')}></BackIcon>
            </PressableBox>
            <TitleText>{title}</TitleText>
            <PressableBox
                onPressOut={()=>useStateFunc(!useStateValue)}
            >
                <ViewMoreIcon source={require('../images/ViewMore.png')}/>
            </PressableBox>
        </Container>
    )
}

export default TopBar;