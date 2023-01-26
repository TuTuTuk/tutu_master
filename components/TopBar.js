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
    width:86.11%;
    height:40px;
    margin-top:9px;
    margin-bottom:20px;
    flex-direction:row;
    justify-content: space-between;
    align-items: center;
`;

const PressableBox = styled.Pressable`
`;
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
                    <Icon name="chevron-back-outline" size={30} color='#545454'/>
                </PressableBox>
                <TitleText>{title}</TitleText>
                <Icon name="close-outline" size={30} color='#545454'/>
            </Box>
        </Container>
    )
}

export default TopBar;