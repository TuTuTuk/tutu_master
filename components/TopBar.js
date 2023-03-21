import React from "react";
import styled from "styled-components/native";
import  Icon  from "react-native-vector-icons/Ionicons";
import { useNavigation } from '@react-navigation/native';

const Container = styled.View`
    width:100%;
    align-items: center;
    justify-content: center;
`;
const Box = styled.View`
    width:100%;
    height:40px;
    margin-top:9px;
    margin-bottom:20px;
    flex-direction:row;
    justify-content: space-between;
    align-items: center;
`;

const PressableBox = styled.Pressable`
    width: 10%;
`;
//--------------------------------
const BackIcon = styled.Image`
    width:100%;
    height: 100%;
`;
const PlusIcon = styled.Image`
    width:5%;
    height: 100%;
`;
//--------------------------------
const Arrow = styled.View``;

const TitleText = styled.Text`
    font-weight: 600;
    font-size: 20px;
    text-align: center;
`;
const XButton = styled.View``;

const TopBar=({title})=>{
    const navigation = useNavigation();
    return(
        <Container>
            <Box>
                <PressableBox
                    onPressOut={()=>navigation.goBack()}
                >
                    <BackIcon source={require('../images/Back.png')}></BackIcon>
                </PressableBox>
                <TitleText>{title}</TitleText>
                <PlusIcon source={require('../images/ViewMore.png')}/>
            </Box>
        </Container>
    )
}

export default TopBar;