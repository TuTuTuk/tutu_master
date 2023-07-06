import React, {useState} from "react";
import { Text, View, Modal} from "react-native";
import styled from "styled-components/native";
import auth from "@react-native-firebase/auth";
import firestore from '@react-native-firebase/firestore';

import TopBar from "../../../components/TopBar";
import BlueButton from "../../../components/BlueButton";
import ModalTwoOption from "../../../components/Modal/ModalTwoOptions";
import ModalOneOption from "../../../components/Modal/ModalOneOptions";

const Container = styled.ScrollView.attrs(() => ({
    contentContainerStyle: {
        showVerticalScrollIndicator: false,
    }
}))`
    flex:1;
    margin: 10px;
`;

const PWInputBox = styled.View`
    //border: 1px;
    width: 100%;
    align-self: center;
`;
    const Text1 = styled.Text`
        font-family: 'Pretendard';
        font-style: normal;
        font-weight: 400;
        font-size: 14px;
        line-height: 17px;
        padding-left: 6px;
        margin-bottom: 5px;
    `;
    const InputPW = styled.TextInput`
        width: 100%;
        height: 40px;
        //border: 1px;
        background: #E3E3E3;
        border-radius: 10px;
        margin-bottom: 16px;
    `;
const CautionBox = styled.View`
    //border: 1px;
    width: 100%;
    align-self: center;
    margin-bottom: 16px;
`;
    const CautionText = styled.Text`
        font-family: 'Pretendard';
        font-style: normal;
        font-weight: 500;
        font-size: 10px;
        line-height: 12px;
        letter-spacing: -0.408px;
        color: #545454;
    `;

const Withdrawal = ({navigation:{navigate,reset}}) => {

    const [modalVisible, setModalVisible] = useState(false);
    const [modalVisible2, setModalVisible2] = useState(false);

    const Delete = () =>{
        let user = auth().currentUser
        user?.delete()
        firestore().collection("users").doc(auth().currentUser.uid).delete();
        reset({routes:[{name:"Home"}]})
        navigate("Tabs",{screen:"Home"})
    }

    return(
    <Container>
    <ModalTwoOption 
        visible={modalVisible}
        setvisible = {setModalVisible}
        title = "정말 탈퇴하시겠습니까?"
        contents = "탈퇴 시 모든 계정 정보가 삭제되며, 삭제된 정보는 복구할 수 없습니다."
        yestext = "탈퇴하기"
        visibleyes={modalVisible2}
        setvisibleyes = {setModalVisible2}
        actOn={Delete}

    ></ModalTwoOption>
    <ModalOneOption
        visible = {modalVisible2}
        setvisible = {setModalVisible2}
        title = "탈퇴가 완료 되었습니다."
        yestext = "확인"
    >
    </ModalOneOption>
        <TopBar title="회원 탈퇴"></TopBar>
        <PWInputBox>
            <Text1>계정 비밀번호</Text1>
            <InputPW placeholder = "  계정 비밀번호">
            </InputPW>
        </PWInputBox>
        <CautionBox>
            <CautionText> *  탈퇴 및 가입을 반복할 경우, 서비스 악용 방지를 위해 가입이 제한됩니다.{'\n    '}
            최초 탈퇴 시에는 가입 시점을 기준으로 1일간 제한되며, 2회 이상 탈퇴를 반복할 경우 30일간 제한됩니다.{'\n\n '}
             *  탈퇴 후 개인 정보, 시간표 등의 데이터가 삭제되며, 복구할 수 없습니다.{'\n '}
            *  다시 가입하여도, 게시판 등 이용 제한 기록은 초기화되지 않습니다.{'\n '}
            *  작성한 게시물은 삭제되지 않으며, (알수없음)으로 닉네임이 표시됩니다.{'\n '}
            *  자세한 내용은 개인정보처리방침을 확인해주세요.</CautionText>
        </CautionBox>
            <BlueButton
                title = "회원 탈퇴하기"
                mbottom = {40}
                click = {setModalVisible}
            ></BlueButton>
    </Container>
)
    }


export default Withdrawal;