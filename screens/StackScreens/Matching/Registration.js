import React, {useState, useEffect} from "react";
import { Text, View, TouchableOpacity} from "react-native";
import styled from "styled-components/native";
import Icon from 'react-native-vector-icons/Ionicons';

import auth from "@react-native-firebase/auth";
import firestore from '@react-native-firebase/firestore';
import TopBar from "../../../components/TopBar";
import Input from "../../../components/Input";
import BlueButton from "../../../components/BlueButton";
import ModalTwoOptions from "../../../components/ModalTwoOptions";


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
`;

const Registration = ({navigation:{navigate}}) => {

    const [name, setName] = useState("");
    const [major, setMajor] = useState("");
    const [registModal, setRegistModal] = useState(false);

    return(
    <>
        <ModalTwoOptions
            visible={registModal}
            setvisible={setRegistModal}
            visibleyes={null}
            setvisibleyes = {null}
            yestext="확인"
            title="선후배 등록하기"
            contents="선-후배들이 연락처를 보고 연락할 수 있습니다. 선후배 목록에 등록하시겠습니까?"
        ></ModalTwoOptions>
        <Container>
            <TopBar title="한국공대 선,후배 등록하기"></TopBar>
            <InputBox>
                <Input title="이름" mbottom={10}></Input>
            </InputBox>
            <InputBox>
                <Input title="학과" mbottom={10}></Input>
            </InputBox>
            <InputBox>
                <Input title="세부학과" mbottom={10}></Input>
            </InputBox>
            <InputBox>
                <Input title="연락처 (이메일 등)" mbottom={10}></Input>
            </InputBox>
            <BlueButton title="등록하기" mbottom={0} click={setRegistModal}></BlueButton>
        </Container>
    </>
    )}
export default Registration;