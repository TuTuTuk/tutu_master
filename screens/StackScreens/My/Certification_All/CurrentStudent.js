import React, {useState, useEffect} from "react";
import { Text, View, TouchableOpacity} from "react-native";
import styled from "styled-components/native";
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import UploadModeModal from "../../../../components/UploadModeModal";

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
const imagePickerOption = {
	mediaType: "photo",
	maxWidth: 768,
	maxHeight: 768,
	includeBase64: Platform.OS === "android",
};



const CurrentStudent = ({navigation:{navigate}}) => {

    const [checkImg, setCheckImg] = useState(require('../../../../images/checkX.png'))
    const [studentID, setStudentID] = useState(false);
    const [enrollment, setEnrollment] = useState(false);

    const [func, setFunc] = useState(false)

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
  const [modalVisible, setModalVisible] = useState(false);
  
  

    if(studentID==true){ //학생증을 눌렀을 때
        return(
            <>
            <UploadModeModal 
                visible={modalVisible} 
                onClose={() => setModalVisible(false)}
                onLaunchCamera={onLaunchCamera}
                onLaunchImageLibrary={onLaunchImageLibrary} 
            />
            <TopBar title="학교 인증"></TopBar>
            <Choicetitle>재학생 인증</Choicetitle>
            <StudentIDBox>
                <StudentIDtitle>학생증</StudentIDtitle>
                <StudentIDContent>실물 학생증 카드,모바일 학생증을 첨부해주세요.</StudentIDContent>
            </StudentIDBox>
            <BlueButton title="사진 첨부하기" mbottom={10} click={setModalVisible}></BlueButton>
            </>
        )
    }else if(enrollment==true){ //재학증명서를 눌렀을 때
        return(
        <>
            <UploadModeModal 
                visible={modalVisible} 
                onClose={() => setModalVisible(false)}
                onLaunchCamera={onLaunchCamera}
                onLaunchImageLibrary={onLaunchImageLibrary} 
            />
            <TopBar title="학교 인증"></TopBar>
            <Choicetitle>재학생 인증</Choicetitle>
            <StudentIDBox>
                <StudentIDtitle>재학증명서</StudentIDtitle>
                <StudentIDContent>실물 학생증 카드,모바일 학생증을 첨부해주세요.</StudentIDContent>
            </StudentIDBox>
            <BlueButton title="사진 첨부하기" mbottom={10} click={setModalVisible}></BlueButton>
        </>
        )
    }else{
        return(
            <Container>
                <TopBar title="학교 인증"></TopBar>
                <Choicetitle>재학생 인증</Choicetitle>
                <MoveTextBox onPress={()=>{
                    setCheckImg(require('../../../../images/check.png'))
                    setStudentID(true)
                }} >
                <MoveText>학생증</MoveText>
                    <Move>
                        <MoveIcon source={checkImg}></MoveIcon>
                    </Move>
                </MoveTextBox>
                <MoveTextBox onPress={()=>{
                    setCheckImg(require('../../../../images/check.png'))
                    setEnrollment(true)
                }} >
                <MoveText>재학증명서</MoveText>
                    <Move>
                        <MoveIcon source={checkImg}></MoveIcon>
                    </Move>
                </MoveTextBox>
                
            </Container>
        )
    }
    }
export default CurrentStudent;