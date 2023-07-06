import React, {useState, useEffect} from "react";
import { Text, View, TouchableOpacitym, Modal} from "react-native";
import styled from "styled-components/native";
import LinearGradient from 'react-native-linear-gradient';
import {EmailAuthProvider} from "@react-native-firebase/auth";

import auth from "@react-native-firebase/auth";
import { sendPasswordResetEmail } from "@react-native-firebase/auth";
import firestore from '@react-native-firebase/firestore';
import TopBar from "../../../../components/TopBar";
import Input from "../../../../components/Input";
import BlueButton from "../../../../components/BlueButton";
import ModalTwoOptions from "../../../../components/Modal/ModalTwoOptions"


const Container = styled.ScrollView.attrs(() => ({
    contentContainerStyle: {
        showVerticalScrollIndicator: false,
    }
}))`
    flex:1;
`;
const InputBox = styled.View`
    width: 86%;
    align-self: center;
    //border: 1px;
`;
//----------------------------------------------------
//modal-function--------------------------------------
const ModalBackView=styled.View`
    position:absolute;
    background-color: black;
    opacity: 0.5;
    width:100%;
    height:100%;
`;
const ModalView = styled.View`
    width:88.9%;
    background-color: #FFFFFF;
    border-radius: 10px;
    padding-top:15px;
    padding-bottom:15px;
    top:39.72%;
    align-items: center;
    align-self: center;
`;
    const ModalTitle = styled.Text`
        font-family: Pretendard;
        font-style: normal;
        font-weight: 600;
        font-size: 18px;
        line-height: 22px;
        color:#1D1D1D;
        margin-bottom: 20px;
    `;
    const ModalYesPressable = styled.Pressable`
        border-radius: 5px;
        background-color: #BBBBBB;
        width:90.6%;
        height:39px;
        justify-content: center;
        align-items: center;

    `;
        const ModalYesText = styled.Text`
            font-family: Pretendard;
            font-style: normal;
            font-weight: 600;
            font-size: 16px;
            line-height: 19px;
            color: #FFFFFF;
        `;

const ChangePW = ({navigation:{navigate}}) => {

    const [currentPW,setCurrentPW] = useState(null)
    const [newPW, setNewPW] = useState(null)
    const [checkModal, setCheckModal] = useState(false)
    const [checkModal2, setCheckModal2] = useState(false)

    /* function reauthenticate(currentPassword){
        const user = firebase.auth.currentUser;
        const cred = firebase.auth.EmailAuthProvider.credential(
            user.email, currentPassword);
        return user.reauthenticateWithCredential(cred);
    };
    
    function changePassword(currentPassword, newPassword){
        reauthenticate(currentPassword).then(() => {
          var user = firebase.auth().currentUser;
          user.updatePassword(newPassword).then(() => {
            console.log("Password updated!");
          }).catch((error) => { console.log(error); });
        }).catch((error) => { console.log(error); });
    }; */

        return(
            <Container>
                <ModalTwoOptions
                    visible = {checkModal}
                    setvisible = {setCheckModal} 
                    title = "비밀번호를 변경하시겠습니까?/"
                    yestext = "확인"
                    visibleyes = {checkModal2}
                    setvisibleyes = {setCheckModal2}
                ></ModalTwoOptions>
                <Modal
                    animationType="fade"
                    transparent={true}
                    visible={checkModal2}
                >
                    <ModalBackView></ModalBackView>
                    <ModalView>
                        <ModalTitle>비밀번호가 변경되었습니다.</ModalTitle>
                        <ModalYesPressable onPress={()=>{{
                            setCheckModal2(false);
                            
                        }}}>
                            <LinearGradient style={{
                                width:"100%",
                                height:"100%",
                                borderRadius: 10,
                                alignItems:"center",
                                justifyContent:"center"
                            }}
                            colors={['#0062FF', '#0A7DFF', '#1398FF']}
                            start={{x:1,y:0}} end={{x:0,y:0}}>
                            <ModalYesText>확인</ModalYesText>
                            </LinearGradient>
                        </ModalYesPressable>
                    </ModalView>
                </Modal>
            
                <TopBar title="비밀번호 변경" mbottom={20}></TopBar>
                <InputBox>
                    <Input title = "현재 비밀번호" changeText = {setCurrentPW} mbottom = {30}></Input>
                    <Input title = "새 비밀번호" changeText = {setNewPW} mbottom = {10}></Input>
                    <Input title = "새 비밀번호 확인" changeText = {setCurrentPW} mbottom = {30}></Input>
                </InputBox>
                <BlueButton title = "비밀번호 변경" click = {setCheckModal} mbottom = {0}></BlueButton>
            </Container>
        )
    }
export default ChangePW;