import React, {useState, useEffect} from "react";
import { Text, View, TouchableOpacity} from "react-native";
import styled from "styled-components/native";
import Icon from 'react-native-vector-icons/Ionicons';

import auth from "@react-native-firebase/auth";
import firestore from '@react-native-firebase/firestore';
import TopBar from "../../../../components/TopBar"
import BlueButton from "../../../../components/BlueButton";

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

const MoveTextBox = styled.Pressable`
    width: 86%;
    height: 40px;
    //border: 1px;
    background: #E3E3E3;
    border-radius: 10px;
    align-self: center;
    padding-left: 15px;
    padding-right: 5px;
    flex-direction: row;
    justify-content: space-between;
    margin-bottom: 10px;
`;
    const MoveText = styled.Text`
        font-family: 'Pretendard';
        font-style: normal;
        font-weight: 500;
        font-size: 16px;
        line-height: 19px;
        margin-top: 10.5px;
    `;
    const Move = styled.Pressable`
        width: 30px;
        height: 30px;
        margin-top: 5px;
        //border: 1px;
    `;
    const MoveIcon = styled.Image`
        width: 100%;
        height: 100%;
    `;

const StudentIDBox = styled.View`
    width: 86%;
    height: 20%;
    background: #E3E3E3;
    border-radius: 10px;
    align-self: center;
    padding: 15px;
    margin-bottom: 20px;
`;
    const StudentIDtitle = styled.Text`
        font-family: 'Pretendard';
        font-style: normal;
        font-weight: 500;
        font-size: 16px;
        line-height: 19px;
        margin-bottom: 10px;
    `;
    const StudentIDContent = styled.Text`
        color: #818181;
        font-family: 'Pretendard';
        font-style: normal;
        font-weight: 400;
        font-size: 14px;
        line-height: 17px;
    `;
    
const CurrentStudent = ({navigation:{navigate}}) => {

    const [checkImg, setCheckImg] = useState(require('../../../../images/checkX.png'))
    const [studentID, setStudentID] = useState(false);

    if(studentID==true){ //???????????? ????????? ???
        return(
            <>
            <TopBar title="?????? ??????"></TopBar>
            <Choicetitle>????????? ??????</Choicetitle>
            <StudentIDBox>
                <StudentIDtitle>?????????</StudentIDtitle>
                <StudentIDContent>?????? ????????? ??????,????????? ???????????? ??????????????????.</StudentIDContent>
            </StudentIDBox>
            <BlueButton title="?????? ????????????" mbottom={10} click={null}></BlueButton>
            </>
        )
    }else{
        return(
            <Container>
                <TopBar title="?????? ??????"></TopBar>
                <Choicetitle>????????? ??????</Choicetitle>
                <MoveTextBox onPress={()=>{
                    setCheckImg(require('../../../../images/check.png'))
                    setStudentID(true)
                }} >
                <MoveText>?????????</MoveText>
                    <Move>
                        <MoveIcon source={checkImg}></MoveIcon>
                    </Move>
                </MoveTextBox>
            </Container>
        )
    }
    }
export default CurrentStudent;