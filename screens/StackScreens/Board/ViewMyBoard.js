import React, { useState } from "react";
import { TouchableOpacity } from "react-native";
import { Text } from "react-native";
import { Modal } from "react-native";
import styled from "styled-components/native";
import Icon from 'react-native-vector-icons/Ionicons';
import { Route } from "@react-navigation/native";

import AllBoardBox_min from "../../../components/AllBoardBox_min";
import BoardBoxSelf_min from "../../../components/BoardBoxSelf_min";
import CommentBox_min from "../../../components/CommentBox_min";
import ModalOneOptions from "../../../components/ModalOneOptions";
import TopBar from "../../../components/TopBar";

import firestore from '@react-native-firebase/firestore';
import auth from "@react-native-firebase/auth";


const Container = styled.ScrollView.attrs(()=>({
    contentContainerStyle:{
        showVerticalScrollIndicator:false,
    }
}))`
flex:1;
    margin-top: 10px;
    margin-bottom: 10px;
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


const InputWindow = styled.TouchableOpacity`
    margin-top: 6%;
    background-color: gray;
    border-radius: 10px;
    width: 86%;
    height: 40px;
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
        width: 25px;
        height: 25px;
        //border: 1px;
        margin-right: 10px;
        align-self: center;
    `;

const ViewMyBoard = ({navigation:{navigate}, route})=>{
    const [click,setClick] = useState(false);
    const [modalVisible,setModalVisible] = useState(false)

    

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
                        <MiddleText>????????????</MiddleText>
                    </Modalinquire>
                    <Modalinquire onPress={()=>setModalVisible(false)}>
                        <MiddleText>????????????</MiddleText>
                    </Modalinquire>
                    <Modalinquire onPress={()=>setModalVisible(false)}>
                        <MiddleText>????????????</MiddleText>
                    </Modalinquire>
                    <Modalinquire onPress={()=>setModalVisible(false)}>
                        <MiddleText>URL ??????</MiddleText>
                    </Modalinquire>
                </ModalView>
            </Modal>
            <TopBar/>
            <BoardBoxSelf_min title = {route.params.GiveTitle} content = {route.params.GiveContent} date = {route.params.GiveDate} time = {route.params.GiveTime}/>
            <CommentBox_min></CommentBox_min>
            <CommentBox_min></CommentBox_min>
            <CommentBox_min></CommentBox_min>
            <InputWindow>
                <InputText>?????????</InputText>
                <InputIcon><Icon name="send-sharp" size = {20} color="white"/></InputIcon>
            </InputWindow>
        </Container>
    )
}
export default ViewMyBoard;