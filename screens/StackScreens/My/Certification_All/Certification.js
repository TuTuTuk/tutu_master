import React, {useState, useEffect} from "react";
import { Text, View, TouchableOpacity} from "react-native";
import styled from "styled-components/native";
import Icon from 'react-native-vector-icons/Ionicons';

import auth from "@react-native-firebase/auth";
import firestore from '@react-native-firebase/firestore';
import TopBar from "../../../../components/TopBar"
import MoveBox from "../../../../components/MoveBox";

const Container = styled.ScrollView.attrs(() => ({
    contentContainerStyle: {
        showVerticalScrollIndicator: false,
    }
}))`
    flex:1;
`;

const Choicetitle = styled.Text`
    font-weight: 700;
    font-size: 20px;
    margin-left: 7%;
    margin-bottom: 20px;
`;
const Certification = ({navigation:{navigate}}) => {

    return(
        <Container>
            <TopBar title="학교 인증"></TopBar>
            <Choicetitle>인증 방식 선택</Choicetitle>
            <MoveBox title="합격자 인증" move="Announcement" ></MoveBox>
            <MoveBox title="재학생 인증" move="CurrentStudent"></MoveBox>
            <MoveBox title="졸업생 인증" move={null}></MoveBox>
        </Container>
    )}
export default Certification;