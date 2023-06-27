import React, {useState} from "react";
import { Text, View, Modal} from "react-native";
import styled from "styled-components/native";
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';

import UploadModeModal from "../../../components/UploadModeModal";
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
    margin: 10px;

`;

const InputBox = styled.View`
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
        width: 100%;
        align-self: center;
        margin-bottom: 8.2%;
    `;


const Inquiry = ({navigation:{navigate}}) => {

    // 선택 사진 또는 촬영된 사진 정보
    const onPickImage = (res) => { 
        if (res.didCancel || !res) {
        return;
        }
        console.log("PickImage", res);
    }
    
    // 카메라 촬영
    const onLaunchCamera = () => {
        launchCamera(imagePickerOption, onPickImage);
    };
    
    // 갤러리에서 사진 선택
    const onLaunchImageLibrary = () => {
        launchImageLibrary(imagePickerOption, onPickImage);
    };

  // 안드로이드를 위한 모달 visible 상태값
  const [pictureVisible, setPictureVisible] = useState(false);


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
        <>
        <UploadModeModal 
                visible={pictureVisible} 
                onClose={() => setPictureVisible(false)}
                onLaunchCamera={onLaunchCamera}
                onLaunchImageLibrary={onLaunchImageLibrary} 
            />
        <Container>
            <TopBar title="문의하기"/>
            <InputBox>
                <Text1>제목</Text1>
                <InputTItle 
                    placeholder = "  문의할 내용을 간략하게 작성해주세요."
                    onChangeText={(title)=>setSaveTitle(title)}>
                </InputTItle>
            </InputBox>
            <InputBox>
                <Text1>문의 내용</Text1>
                <InputContent 
                    placeholder = "  문의할 내용을 자세히 작성해주세요."
                    multiline = {true}
                    onChangeText={(content)=>setSaveContent(content)}
                >
                </InputContent>
            </InputBox>
            <InputBox>
                <Text1>관련 파일 첨부</Text1>
                <InputTItle 
                    placeholder = "  파일을 첨부해주세요."
                    onChangeText={(file)=>setSaveFile(file)}
                >
                </InputTItle>
            </InputBox>
            <Btn1Box>
                <BlackButton 
                    title="파일 첨부하기"
                    mbottom={10}
                    actOn={setPictureVisible(true)}
                ></BlackButton>
            </Btn1Box>
                <BlueButton 
                    title="제출하기"
                    mbottom={10}
                    click = {setModalVisible}
                ></BlueButton>
            <ModalOneOptions
                title="문의 사항이 제출되었습니다."
                yestext="확인"
                visible={modalVisible}
                setvisible = {setModalVisible}
            ></ModalOneOptions>
        </Container>
    </>
    )
}


export default Inquiry;