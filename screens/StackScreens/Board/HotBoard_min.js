import React, { useState } from "react";
import { Modal } from "react-native";
import styled from "styled-components/native";
import Icon from 'react-native-vector-icons/Ionicons';
import AllBoardBox_min from "../../../components/AllBoardBox_min";
import CommentBox_min from "../../../components/CommentBox_min";
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
    flex:1;
    width: 89.7%;
    height: 5.4%;
    align-self: center;
    margin-bottom: 3%;
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
        width: 25px;
        height: 25px;
        border: 1px;
        margin-top: 2%;
        margin-right: 1.75%;
    `;

const HotBoard_min = ({navigation:{navigate}})=>{
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
                        <MiddleText>문의하기</MiddleText>
                    </Modalinquire>
                    <Modalinquire onPress={()=>setModalVisible(false)}>
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
            <HeaderBox>
                <BackView>
                    <BackBtn 
                        onPress={()=>navigate("Tabs",{screen:"Board_min"})}>
                        <Icon name="chevron-back-outline" size = {30} />
                    </BackBtn>
                </BackView>
                <PlusBtn onPress={()=>setModalVisible(true)}> 
                    <Icon name="ellipsis-vertical-outline" size = {25}/>
                </PlusBtn>
            </HeaderBox>
            <AllBoardBox_min/>
            <CommentBox_min></CommentBox_min>
            <CommentBox_min></CommentBox_min>
            <CommentBox_min></CommentBox_min>
            <InputWindow>
                <InputText>입력창</InputText>
                <InputIcon></InputIcon>
            </InputWindow>
        </Container>
    )
}
export default HotBoard_min;