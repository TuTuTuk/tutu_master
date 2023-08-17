import React, { useEffect, useState } from "react"
import { Pressable, ScrollView, Text,View } from "react-native";
import TopBar from "../../../components/TopBar";
import TopBar_Close from "../../../components/TopBar_Close";
import LinearGradient from 'react-native-linear-gradient';
import styled from "styled-components/native";

import firestore from '@react-native-firebase/firestore';

const Container = styled.View`
    flex:1;
    margin-top: 10px;
    margin-bottom: 10px;
    margin-Right: 7%;
    margin-left: 7%;
`;

const ContentBox = styled.View`
    width: 100%;
    height: 49.18%;
    background: #E3E3E3;
    border-Radius: 10px;
    padding : 10px;
`;
    const TitleText = styled.Text`
        font-size: 16px;
        font-weight: 500;
        margin-bottom: 7px;
    `;
    const ContentText = styled.Text`
        font-size: 14px;
        font-weight: 400;
    `;

const Announce_Detail =({navigation:{navigate}, route})=>{


    return(
    <Container>
        <TopBar title={route.params.title}/>
        <ContentBox>
            <TitleText>{route.params.title}</TitleText>
            <ContentText>{route.params.content}</ContentText>
        </ContentBox>
    </Container>
    )
}
export default Announce_Detail;