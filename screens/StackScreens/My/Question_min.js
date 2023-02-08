import React from "react";
import { useState } from "react";
import styled from "styled-components/native";
import Icon from 'react-native-vector-icons/Ionicons';
import {Text, Modal} from "react-native";

import Input from "../../../components/Input";

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
const TitleBox = styled.View`
    align-self: center;
    width: 86%;
    //border: 1px;
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


const Question_min = ({navigation:{navigate}})=>{

    const [modalVisible,setModalVisible] = useState(false)

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
                            문의하기
                        </MiddleText>
                    </Modalinquire>
                    <Modalinquire onPress={()=>setModalVisible(false)}>
                        <MiddleText>
                            새로고침
                        </MiddleText>
                    </Modalinquire>
                </ModalView>
            </Modal>
            <HeaderBox>
                <BackView>
                    <BackBtn 
                        onPress={()=>navigate("Tabs",{screen:"My"})}>
                        <Icon name="chevron-back-outline" size = {30} />
                    </BackBtn>
                </BackView>
                <BoardTextBox>
                    <BoardText>문의하기</BoardText>   
                </BoardTextBox>
                <PlusBtn
                    onPress={()=>setModalVisible(true)}>
                    <Icon name="ellipsis-vertical-outline" size = {25}/>
                </PlusBtn>
            </HeaderBox>
            <TitleBox>
                <Input title="제목" changeText="55" mbottom="10"/>
            </TitleBox>
    </Container>
    );
};
export default Question_min;