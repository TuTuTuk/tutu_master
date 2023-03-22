import React, {useState, useEffect} from "react";
import { Text, View, TouchableOpacitym, Modal} from "react-native";
import styled from "styled-components/native";
import LinearGradient from 'react-native-linear-gradient';
import { firebase } from "@react-native-firebase/auth";

import auth from "@react-native-firebase/auth";
import firestore from '@react-native-firebase/firestore';
import TopBar from "../../../components/TopBar";
import Input from "../../../components/Input";
import BlueButton from "../../../components/BlueButton";
import ModalTwoOptions from "../../../components/ModalTwoOptions"


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

const CautionAllBox = styled.View`
    margin-bottom: 40px;
`;
const CautionBox = styled.View`
    //border: 1px;
    width: 86%;
    align-self: center;
    flex-direction: row;
`;
    const MarkText = styled.Text`
        font-family: 'Pretendard';
        font-style: normal;
        font-weight: 500;
        font-size: 10px;
        line-height: 12px;
        letter-spacing: -0.408px;
        //border: 1px;
    `;
    const CautionText = styled.Text`
        font-family: 'Pretendard';
        font-style: normal;
        font-weight: 500;
        font-size: 10px;
        line-height: 12px;
        letter-spacing: -0.408px;
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

const ChangeEmail = ({navigation:{navigate}}) => {

    const [currentPW,setCurrentPW] = useState(null)
    const [newPW, setNewPW] = useState(null)
    const [checkModal, setCheckModal] = useState(false)
    const [checkModal2, setCheckModal2] = useState(false)

    function reauthenticate(currentPassword){
        var user = firebase.auth().currentUser;
        var cred = firebase.auth.EmailAuthProvider().credential(
            user.email, currentPassword);
        return user.reauthenticateWithCredential(cred);
    };


        return(
            <Container>
                <ModalTwoOptions
                    visible = {checkModal}
                    setvisible = {setCheckModal} 
                    title = "이메일 주소를 변경하시겠습니까?/"
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
                        <ModalTitle>이메일 주소가 변경되었습니다.</ModalTitle>
                        <ModalYesPressable onPress={()=>{{
                            setCheckModal2(false)
                            reauthenticate(currentPW)
                            
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
            
                <TopBar title="이메일 변경" mbottom={20}></TopBar>
                <InputBox>
                    <Input title = "현재 E-mail" changeText = {setCurrentPW} mbottom = {10}></Input>
                    <Input title = "새 E-mail" changeText = {setNewPW} mbottom = {30}></Input>
                    <Input title = "P/W" changeText = {setCurrentPW} mbottom = {30}></Input>
                </InputBox>
                <CautionAllBox>
                    <CautionBox>
                        <MarkText>*  </MarkText>
                        <CautionText
                        >
                        반드시 본인의 이메일을 입력해주세요
                        </CautionText>
                    </CautionBox>
                    <CautionBox>
                        <MarkText>*  </MarkText>
                        <CautionText>
                        계정 분실 시 아이디/비밀번호 찾기, 개인정보 관련 주요 고지사항 안내 등에 사용됩니다.
                        </CautionText>
                    </CautionBox>
                </CautionAllBox>
                <BlueButton title = "이메일 변경" click = {setCheckModal} mbottom = {0}></BlueButton>
            </Container>
        )
    }
export default ChangeEmail;