import React, {useState, useEffect} from "react";
import { Text, View, TouchableOpacitym, Modal} from "react-native";
import styled from "styled-components/native";
import LinearGradient from 'react-native-linear-gradient';
import { firebase } from "@react-native-firebase/auth";

import auth from "@react-native-firebase/auth";
import firestore from '@react-native-firebase/firestore';
import TopBar from "../../../../../components/TopBar";
import BlueButton from "../../../../../components/BlueButton";
import ModalTwoOptions from "../../../../../components/ModalTwoOptions"


const Container = styled.ScrollView.attrs(() => ({
    contentContainerStyle: {
        showVerticalScrollIndicator: false,
    }
}))`
    flex:1;
    margin-left: 7%;
    margin-right: 7%;
`;

const Title = styled.Text`
    font-family: 'Pretendard';
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    line-height: 19px;
    margin-top: 15px;
    margin-bottom: 10px;
`;
    const Title2 = styled.Text`
        color : #818181;
        font-weight: 400;
        font-size: 16px;
        margin-bottom: 15px;
    `;
    const NumberInput = styled.TextInput`
        width:100%;
        height:40px;
        padding-left:10px;
        border-radius: 10px;
        background-color: #E3E3E3;
        font-weight: 400;
        font-size: 16px;
    `;
const BtnView = styled.View`
    //border: 1px;
    margin-top: 30%;
`;



const IdentifyVerification_email = ({navigation:{navigate}}) => {


        return(
            <Container>
                <TopBar title="본인인증" mbottom={20}></TopBar>
                <Title>휴대폰 번호를 입력해주세요.</Title>
                <Title2>본인 인증을 위해 필요합니다.</Title2>
                <NumberInput></NumberInput>
                <BtnView>
                    <BlueButton title = "확인" mbottom = {0} move = "ChangeEmail"></BlueButton>
                </BtnView>
            </Container>
        )
    }
export default IdentifyVerification_email;