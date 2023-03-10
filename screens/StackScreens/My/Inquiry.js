import React, {useState} from "react";
import { Text, View, Modal} from "react-native";
import styled from "styled-components/native";

import TopBar from "../../../components/TopBar";
import BlackButton from "../../../components/BlackButton";
import BlueButton from "../../../components/BlueButton";
import ModalOneOptions from "../../../components/ModalOneOptions";

import auth from "@react-native-firebase/auth";
import firestore from '@react-native-firebase/firestore';

const Container = styled.ScrollView.attrs(() => ({
    contentContainerStyle: {
        showVerticalScrollIndicator: false,
    }
}))`
    flex:1;
    margin-top: 10px;
    margin-bottom: 10px;
`;

const InputBox = styled.View`
    //border: 1px;
    width: 86%;
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
    const InputTItle = styled.TextInput`
        width: 100%;
        height: 40px;
        //border: 1px;
        background: #E3E3E3;
        border-radius: 10px;
        margin-bottom: 16px;
    `;
    const InputContent = styled.TextInput`
        width: 100%;
        height: 250px;
        //border: 1px;
        background: #E3E3E3;
        border-radius: 10px;
        margin-bottom: 16px;
    `;
    const Btn1Box = styled.View`
        width: 86%;
        align-self: center;
        margin-bottom: 8.2%;
    `;


const Inquiry = ({navigation:{navigate}}) => {

    const [modalVisible, setModalVisible] = useState(false);
    const [saveTitle, setSaveTitle] = useState("");
    const [saveContent, setSaveContent] = useState("");
    const [saveFile, setSaveFile] = useState("");

    if(modalVisible == true){
        firestore().collection("users").doc(auth().currentUser.uid).collection("Inquiry").doc(saveTitle).set({
            Title: saveTitle,
            Content : saveContent,
            File : saveFile
        })
        firestore().collection("Inquiry").doc(saveTitle).set({
            UserID : auth().currentUser.uid,
            Title: saveTitle,
            Content : saveContent,
            File : saveFile
        })
    }

    return(
    <Container>
        <TopBar title="????????????"/>
        <InputBox>
            <Text1>??????</Text1>
            <InputTItle 
                placeholder = "  ????????? ????????? ???????????? ??????????????????."
                onChangeText={(title)=>setSaveTitle(title)}>
            </InputTItle>
        </InputBox>
        <InputBox>
            <Text1>?????? ??????</Text1>
            <InputContent 
                placeholder = "  ????????? ????????? ????????? ??????????????????."
                multiline = {true}
                onChangeText={(content)=>setSaveContent(content)}
            >
            </InputContent>
        </InputBox>
        <InputBox>
            <Text1>?????? ?????? ??????</Text1>
            <InputTItle 
                placeholder = "  ????????? ??????????????????."
                onChangeText={(file)=>setSaveFile(file)}
            >
            </InputTItle>
        </InputBox>
        <Btn1Box>
            <BlackButton 
                title="?????? ????????????"
                mbottom={10}
            ></BlackButton>
        </Btn1Box>
            <BlueButton 
                title="????????????"
                mbottom={10}
                click = {setModalVisible}
            ></BlueButton>
        <ModalOneOptions
            title="?????? ????????? ?????????????????????."
            yestext="??????"
            visible={modalVisible}
            setvisible = {setModalVisible}
        ></ModalOneOptions>
    </Container>
    )
}


export default Inquiry;