import React from "react";
import { useState } from "react";
import styled from "styled-components/native";
import Icon from 'react-native-vector-icons/Ionicons';
import {Text, Modal} from "react-native";

import ModalTwoOptions from "../../../components/ModalTwoOptions";
import ModalOneOptions from "../../../components/ModalOneOptions";


const Container = styled.ScrollView.attrs(()=>({
    contentContainerStyle:{
        showVerticalScrollIndicator:false,
    }
}))`
    flex:1;
    margin-top: 10px;
    margin-bottom: 10px;
`;

const HeaderBox = styled.View`
    //border: 1px;
    width: 86%;
    margin:10px;
    justify-content: space-between;
    align-self: center;
    flex-direction:row;
`;
    const BackView = styled.View`
        //border: 1px;
        border-color: orange;
        width:8.8%;
        height:40px;
    `;
        const BackBtn = styled.TouchableOpacity`
            //border : 1px;
            height : 40px;
            justify-content: center;
        `;
    const BoardTextBox = styled.View`
        //border: 1px;
        border-radius: 7px;
        width : 79%;
        justify-content: center;
    `;
        const BoardText = styled.Text`
            font-family: 'Pretendard';
            font-style: normal;
            font-weight: 600;
            font-size: 16px;
            align-self: center;
        `;
    const PlusBtn = styled.TouchableOpacity`
        //border: 1px;
        border-color: orange;
        height: 40px;
        justify-content: center;
    `;
const NoteHistoryBox = styled.Pressable`
    //border: 1px;
    background-color: #E3E3E3;
    border-radius: 10px;
    width: 86%;
    align-self: center;
    padding: 2.05%;
    margin-top: 2.7%;
`;
    const NoteWriterBox = styled.View`
        margin-bottom: 5px;
        flex-direction: row;
        justify-content : space-between;
    `;
        const NoteWriterText = styled.Text`
            font-family: 'Pretendard';
            font-style: normal;
            font-weight: 500;
            font-size: 14px;
            line-height: 17px;
        `;
        const DeleteIcon = styled.Pressable`
        `;
        const NoteDetailBox = styled.View`
        `;
            const NoteDetailText = styled.Text`
                font-family: 'Pretendard';
                font-style: normal;
                font-weight: 400;
                font-size: 12px;
                line-height: 14px;
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
    height:50px;
    border-radius: 5px;
    justify-content: space-between;
    align-items: flex-end;
    left:68%;    
    top:110px;
    padding-left:10px;
    padding-right:10px;
    padding-top:5px;
`;
    const Modalinquire = styled.Pressable`
        height:50%;
    `;
        const MiddleText = styled.Text`
            font-size:12px;
        `;

const NoteHistory_min = ({navigation:{navigate}})=>{

    const [modalVisible,setModalVisible] = useState(false)
    const [modalVisibleReport, setmodalVisibleReport] = useState(false)
    const [modalVisibleCheck, setmodalVisibleCheck] = useState(false)

    return(
        <Container>
            <Modal
                animationType="fade"
                transparent={true}
                visible={modalVisible}>
                <ModalBackView>
                </ModalBackView>
                <ModalView>
                    <Modalinquire onPress={()=>setModalVisible(false)}>
                        <MiddleText>
                            ????????????
                        </MiddleText>
                    </Modalinquire>
                    <Modalinquire onPress={()=>setModalVisible(false)}>
                        <MiddleText>
                            ????????????
                        </MiddleText>
                    </Modalinquire>
                </ModalView>
            </Modal>

            <ModalTwoOptions
                visible={modalVisibleReport} 
                setvisible={setmodalVisibleReport}
                title ="?????? ?????? ??????"
                contents = "?????? ????????? ????????????????????????? ????????? ???????????????."
                yestext="??????"
                visibleyes={modalVisibleCheck}
                setvisibleyes = {setmodalVisibleCheck}
            />

            <ModalOneOptions
                visible={modalVisibleCheck}
                setvisible = {setmodalVisibleCheck}
                title = "?????????????????????."
                yestext="??????"
            />

            <HeaderBox>
                <BackView>
                    <BackBtn 
                        onPress={()=>navigate("Tabs",{screen:"My"})}>
                        <Icon name="chevron-back-outline" size = {30} />
                    </BackBtn>
                </BackView>
                <BoardTextBox>
                    <BoardText>?????? ??????</BoardText>   
                </BoardTextBox>
                <PlusBtn
                    onPress={()=>setModalVisible(true)}>
                    <Icon name="ellipsis-vertical-outline" size = {25}/>
                </PlusBtn>
            </HeaderBox>
            <NoteHistoryBox>
                <NoteWriterBox>
                    <NoteWriterText>???*??? ???????????????????????? (19??????)</NoteWriterText>
                    <DeleteIcon
                        onPress={()=> setmodalVisibleReport(true)}>
                        <Icon name="close-outline" size={20} color = "#FF3D00"/>
                    </DeleteIcon>
                </NoteWriterBox>
                <NoteDetailBox>
                    <NoteDetailText>????????? ?????? ????????? ?????? ??????????????????. ????????? ?????? ?????????...</NoteDetailText>
                </NoteDetailBox>
            </NoteHistoryBox>
            <NoteHistoryBox>
                <NoteWriterBox>
                    <NoteWriterText>???*??? ??????????????? (20??????)</NoteWriterText>
                    <DeleteIcon>
                        <Icon name="close-outline" size={20} color = "#FF3D00"/>
                    </DeleteIcon>
                </NoteWriterBox>
                <NoteDetailBox>
                    <NoteDetailText>????????? ?????? ????????? ?????? ??????????????????. ????????? ?????? ?????????...</NoteDetailText>
                </NoteDetailBox>
            </NoteHistoryBox>
    </Container>
    );
};
export default NoteHistory_min;