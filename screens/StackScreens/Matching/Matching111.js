import React, {useState, useEffect} from "react";
import { View, Modal} from "react-native";
import styled from "styled-components/native";
import Icon from 'react-native-vector-icons/Ionicons';
import LinearGradient from 'react-native-linear-gradient';
import { useNavigation } from "@react-navigation/native";

import auth from "@react-native-firebase/auth";
import firestore from '@react-native-firebase/firestore';
import TopBar from "../../../components/TopBar";
import BlueButton from "../../../components/BlueButton";
import ModalTwoOptions from "../../../components/Modal/ModalTwoOptions";

import { RadioButton } from "react-native-paper";


const Container = styled.ScrollView.attrs(() => ({
    contentContainerStyle: {
        showVerticalScrollIndicator: false,
    }
}))`
    flex:1;
`;

    const LogoBox = styled.View`
        //border: 1px;
        width : 86%;
        align-self: center;
        padding-top: 15px;
        padding-bottom: 15px;
        margin-bottom: 20px;
    `;  
        const LogoImg = styled.Image`
            align-self: center;
            width: 105.13px;
            height: 62.12px;
            //border: 1px;
            margin-bottom: 16px;
        `;
        const LogoText = styled.Text`
            font-family: 'Pretendard';
            font-style: normal;
            font-weight: 400;
            font-size: 12px;
            line-height: 14px;
            text-align: center;
        `;
    const AllProfileBox = styled.View`
        width: 86%;
        padding: 15px;
        background-color: #E3E3E3;
        border-radius: 10px;
        align-self: center;
        margin-bottom: 10px;
    `;
        const ProfileBox1 = styled.View`
            flex-direction: row;
        `;
        const ImageBox = styled.Image`
            width: 100px;
            height: 100px;
            background: #FFFFFF;
            border-radius: 50px;
            margin-right: 15px;
        `;
        const ProfileTextBox = styled.View`
            height: 100px;
            //border: 1px;
        `;
            const ProfileTextBox2 = styled.View`
                //border: 1px;
                margin-bottom: 10px;
            `;
                const ProfileText = styled.Text`
                    width: 100%;
                `;
    const BlueBtn = styled.Pressable`
        width: 100%;
        height: 40px;
        border-radius: 10px;
        margin-top: 20px;
    `;
        const BtnText =styled.Text`
            font-family: 'Pretendard';
            font-style: normal;
            font-weight: 600;
            font-size: 16px;
            line-height: 19px;
            text-align: center;
            color: #FFFFFF;
        `;
const Box = styled.Pressable`
    border: 1px solid #818181;
    border-radius: 10px;
    width: 86%;
    align-self: center;
    margin-top: 10px;
    height: 80px;
    justify-content: center;
`;
    const WaitText = styled.Text`
        font-family: 'Pretendard';
        font-style: normal;
        font-weight: 500;
        font-size: 12px;
        line-height: 14px;
        text-align: center;
        color: #0062FF;
    `;
    const AdditionIcon = styled.Image`
        align-self: center;
        width: 40px;
        height: 40px;
    `;



const Matching111 = ({navigation:{navigate}}) => {


    return(
    <>
        <Container>
            <TopBar title="선후배 1:1:1 매칭"></TopBar>
            <LogoBox>
                <LogoImg source={require('../../../images/tutu-logo.png')}></LogoImg>
                <LogoText>선후배 1:1:1 매칭은{'\n'}한국공학대 학생 1명이 선배 1명, 후배 1명과{'\n'}
                        연결되는 매칭 시스템 입니다.</LogoText>
            </LogoBox>
            <AllProfileBox>
                <ProfileBox1>
                <ImageBox></ImageBox>
                <ProfileTextBox>
                    <ProfileTextBox2>
                        <ProfileText>[후배]</ProfileText>
                    </ProfileTextBox2>
                    <ProfileTextBox2>
                        <ProfileText>산업디자인공학과 (20학번)</ProfileText>
                    </ProfileTextBox2>
                </ProfileTextBox>
                </ProfileBox1>
                <ProfileBox1>
                    <BlueBtn>
                        <LinearGradient style={{
                            width:"100%",
                            height:"100%",
                            borderRadius: 10,
                            alignItems:"center",
                            justifyContent:"center"
                        }}
                            colors={['#0062FF', '#0A7DFF', '#1398FF']}
                            start={{x:1,y:0}} end={{x:0,y:0}}>
                            <BtnText>오픈채팅방 바로가기</BtnText>
                        </LinearGradient>
                    </BlueBtn>
                </ProfileBox1>
            </AllProfileBox>
            <Box>
                <WaitText>매칭 대기중</WaitText>
            </Box>
            <Box onPress={()=>navigate("Stack",{screen:"Matching_Request"})}>
                <AdditionIcon source={require('../../../images/매칭추가.png')}></AdditionIcon>
            </Box>
        </Container>
    </>
    )}
export default Matching111;