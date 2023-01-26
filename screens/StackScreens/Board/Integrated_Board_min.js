import React from "react";
import { useState } from "react";
import { Modal } from "react-native";
import styled from "styled-components/native";
import Icon from 'react-native-vector-icons/Ionicons';

import BoardBox_min from "../../../components/BoardBox_min";
import KeywordSearchBox_min from "../../../components/KeywordSearchBox_min";

const Container = styled.ScrollView.attrs(()=>({
    contentContainerStyle:{
        showsVerticalScrollIndicator:false,
    }
}))`
    flex:1;
    margin-top: 10px;
    margin-bottom: 10px;
`;
//----------------------------------------------------------------------------
//----------------------------------검색box------------------------------------
//----------------------------------------------------------------------------
const HeaderBox = styled.View`
    //border: 1px;
    flex:1;
    width: 89.7%;
    height: 5.4%;
    align-self: center;
    margin-bottom: 10px;
    margin-left: 7px;
    margin-right: 7px;

    flex-direction:row;
    justify-content: space-between;
    align-items: center;
`;
    const BackView = styled.View`
        border-color: orange;
        width:10%;
    `;
        const BackBtn = styled.TouchableOpacity`
            //border : 1px;
            width  : 100%;
            height : 40px;
            justify-content: center;
        `;
    const BoardTextBox = styled.View`
        border-color: black;
        border-radius: 3px;
        background-color: lightgray;
        width : 76%;
        height: 100%;
        flex-direction: row;
        justify-content:space-between;
    `;
        const BoardText = styled.Text`
            margin-top: 10px;
            margin-left: 15px;
            font-size: 16px;
            color : black;
            font-weight: 600;
        `;
        const SearchBtn = styled.TouchableOpacity`
            //border : 1px;
            width:30px;
            height:30px;
            margin-right: 10px;
            margin-top: 5px;
        `;
    const PlusBtn = styled.TouchableOpacity`
        border-color: orange;
        width:5%;
        height: 100%;
        justify-content: center;
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
            <HeaderBox>
                <BackView>
                    <BackBtn 
                        onPress={()=>navigate("Tabs",{screen:"Board_min"})}>
                        <Icon name="chevron-back-outline" size = {25} />
                    </BackBtn>
                </BackView>
                <BoardTextBox>
                    <BoardText>게시판 이름/및 검색키워드</BoardText>   
                    <SearchBtn
                        onPress={()=>navigate("Stack",{screen:"Board_research_min"})}>
                        <Icon name="search-outline" size = {25}/>
                    </SearchBtn>
                </BoardTextBox>
                <PlusBtn onPress={()=>setModalVisible(true)}> 
                    <Icon name="ellipsis-vertical-outline" size = {25}/>
                </PlusBtn>
            </HeaderBox>
            <KeywordSearchBox_min></KeywordSearchBox_min>
            <BoardBox_min/>
            <BoardBox_min/>
            <BoardBox_min/>
            <BoardBox_min/>
            <BoardBox_min/>
            <BoardBox_min/>
        </Container>
    );
};

export default Integrated_Board_min;