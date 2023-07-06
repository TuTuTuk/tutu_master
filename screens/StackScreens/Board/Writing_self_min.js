import React, { useState } from "react";
import { Modal } from "react-native";
import styled from "styled-components/native";
import Icon from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';

import ModalOneOptTwoTitle from "../../../components/Modal/ModalOneOptTwoTitle";
import ModalOneOptions from "../../../components//Modal/ModalOneOptions";
import ModalTwoOptions from "../../../components//Modal/ModalTwoOptions";
import TopBar from "../../../components/TopBar";
import CommentBox_min from "../../../components/BoardPart/CommentBox_min";
import AllBoardBox_min from "../../../components/BoardPart/AllBoardBox_min";

const Container = styled.ScrollView.attrs(()=>({
    contentContainerStyle:{
        showVerticalScrollIndicator:false,
    }
}))`
flex:1;
    margin-top: 10px;
    margin-bottom: 10px;
`;


const InputWindow = styled.TouchableOpacity`
    margin-top: 6%;
    background-color: gray;
    border-radius: 10px;
    width: 86%;
    height: 5.5%;
    align-self: center;
    justify-content: space-between;
    flex-direction: row;
`;      
    const InputText = styled.Text`
        font-size: 12px;
        font-weight: 500;
        color: white;
        margin-left: 4.8%;
        margin-top: 3.2%;
    `;
    const InputIcon = styled.View`
        //border: 1px;
        margin-top: 2%;
        margin-right: 1.75%;
    `;
//-------------Modal-----------------
const ModalBackView=styled.View`
    position:absolute;
    width:100%;
    height:100%; 
`;
const ModalView = styled.View`
    background-color: #BBBBBB;
    width:95px;
    height:87px;
    border-radius: 5px;
    justify-content: space-between;
    align-items: flex-end;
    margin-right: 6.5%;
    align-self: flex-end;
    top:15%;
    padding-left:10px;
    padding-right:10px;
    padding-top:5px;
`;
    const Modalinquire = styled.Pressable`
        height:25%;
    `;
        const MiddleText = styled.Text`
            font-size:12px;
        `;

const Writing_self_min = ({navigation:{navigate}})=>{
    const [modalVisible,setModalVisible] = useState(false)
    const [modalVisible2,setModalVisible2] = useState(false)
    const [modalVisible3,setModalVisible3] = useState(false)

    const navigation = useNavigation();

    return(
        <Container>
            <Modal
                animationType="fade"
                transparent={true}
                visible={modalVisible}
            >
                <ModalBackView>
                </ModalBackView>
                <ModalView>
                    <Modalinquire onPress={()=>setModalVisible(false)}>
                        <MiddleText>문의하기</MiddleText>
                    </Modalinquire>
                    <Modalinquire onPress={()=>setModalVisible2(true)}>
                        <MiddleText>신고하기</MiddleText>
                    </Modalinquire>
                    <Modalinquire onPress={()=>setModalVisible(false)}>
                        <MiddleText>새로고침</MiddleText>
                    </Modalinquire>
                    <Modalinquire onPress={()=>setModalVisible(false)}>
                        <MiddleText>URL 복사</MiddleText>
                    </Modalinquire>
                </ModalView>
            </Modal>
            <ModalTwoOptions
                visible={modalVisible2} 
                setvisible={setModalVisible2}
                title="신고하기"
                contents="해당 게시물을 신고 하시겠습니까?"
                yestext="신고하기"
            />
            <ModalOneOptions
                visible={modalVisible3} 
                setvisible={setModalVisible3}
                title="신고가 접수되었습니다."
                yestext="확인"
            />
            <TopBar/>
            <AllBoardBox_min></AllBoardBox_min>
            <CommentBox_min></CommentBox_min>
            <CommentBox_min></CommentBox_min>
            <CommentBox_min></CommentBox_min>
            <InputWindow>
                <InputText>입력창</InputText>
                <InputIcon>
                    <Icon name="send-sharp" size = {20} color="white"/>
                </InputIcon>
            </InputWindow>
        </Container>
    )
}
export default Writing_self_min;