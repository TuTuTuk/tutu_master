import React from "react";
import { useState } from "react";
import { Modal } from "react-native";
import styled from "styled-components/native";
import Icon from 'react-native-vector-icons/Ionicons';

import BoardBox_min from "../../../components/BoardBox_min";
import KeywordSearchBox_min from "../../../components/KeywordSearchBox_min";
import TopBar_Search from "../../../components/TopBar_Search";
import BoardBox from "../../../components/BoardBox";

const Container = styled.ScrollView.attrs(()=>({
    contentContainerStyle:{
        showsVerticalScrollIndicator:false,
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
const BoardsBox = styled.View`
    //border: 1px;
    margin-left: 7%;
    margin-right: 7%;
`;

const Integrated_Board_min = ({navigation:{navigate}})=>{
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
                        <MiddleText>문의하기</MiddleText>
                    </Modalinquire>
                    <Modalinquire onPress={()=>setModalVisible(false)}>
                        <MiddleText>글쓰기</MiddleText>
                    </Modalinquire>
                    <Modalinquire onPress={()=>setModalVisible(false)}>
                        <MiddleText>새로고침</MiddleText>
                    </Modalinquire>
                    <Modalinquire onPress={()=>setModalVisible(false)}>
                        <MiddleText>URL 복사</MiddleText>
                    </Modalinquire>
                </ModalView>
            </Modal>
            <TopBar_Search title="게시판 이름/및 검색키워드"/>
            <KeywordSearchBox_min></KeywordSearchBox_min>
            <BoardsBox>
                <BoardBox></BoardBox>
                <BoardBox></BoardBox>
                <BoardBox></BoardBox>
                <BoardBox></BoardBox>
                <BoardBox></BoardBox>
                <BoardBox></BoardBox>
                <BoardBox></BoardBox>
                <BoardBox></BoardBox>
                <BoardBox></BoardBox>
                <BoardBox></BoardBox>
                <BoardBox></BoardBox>
                <BoardBox></BoardBox>
            </BoardsBox>
        </Container>
    );
};

export default Integrated_Board_min;