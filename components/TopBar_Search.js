import React from "react";
import styled from "styled-components/native";
import Icon from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';
import { useState } from "react";
import { Modal } from "react-native";

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
    width: 86%;
    height: 45px;
    align-self: center;
    flex-direction:row;
    justify-content: space-between;
    align-items: center;
`;
    const BackView = styled.View`
        border-color: orange;
        width:30px;
        height : 40px;
        //border: 1px;
    `;
        const BackBtn = styled.TouchableOpacity`
            //border : 1px;
            width  : 100%;
            height: 100%;
            justify-content: center;
        `;
            const BackIcon = styled.Image`
                width: 100%;
                height: 100%;
            `;
    const BoardTextBox = styled.Pressable`
        //border: 1px;
        border-color: black;
        border-radius: 3px;
        background-color: #E3E3E3;
        width : 79.03%;
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
            width:25px;
            height:25px;
            margin-right: 10px;
            margin-top: 8px;
        `;
            const SearchImage = styled.Image`
                width: 100%;
                height: 100%;
            `;
    const PlusBtn = styled.TouchableOpacity`
        border-color: orange;
        width:15px;
        height: 100%;
        justify-content: center;
    `;
        const PlusImage = styled.Image`
            width: 100%;
            height: 100%;
        `;

const ModalBox = styled.View`
    width: 26.39%;
    background: #BBBBBB;
    border-radius: 5px;
    padding-top: 8px;
    padding-bottom: 8px;
    padding-right: 10px;
    top : 8%;
    left: 66.6%;
`; 
    const TextBox = styled.Pressable`
        //border: 1px;
    `;

    const ModalText = styled.Text`
        font-family: 'Pretendard';
        font-style: normal;
        font-weight: 500;
        font-size: 12px;
        line-height: 14px;
        display: flex;
        align-items: center;
        text-align: right;
        margin-bottom: 6px;
    `;


const TopBar_Search=({title})=>{
    const navigation = useNavigation();
    const [modal, setModal] = useState(false);

    return(
        <>
        <Modal
            animationType="fade"
            transparent={true}
            visible = {modal}
        >
            <ModalBox>
                <TextBox onPress={()=>{
                    setModal(false)
                    navigation.navigate("Stack", {screen:"Inquiry"})}}
                ><ModalText>문의하기</ModalText></TextBox>
                <TextBox onPress={()=>setModal(false)}><ModalText>새로고침</ModalText></TextBox>
            </ModalBox>
        </Modal>
        <Container>
            <HeaderBox>
            <BackView>
                <BackBtn 
                    onPressOut={()=>navigation.goBack()}>
                    <BackIcon source={require('../images/Back.png')}></BackIcon>
                </BackBtn>
            </BackView>
            <BoardTextBox onPress={()=>navigation.navigate("Stack",{screen:"Board_research_min"})}>
                <BoardText>{title}</BoardText>   
                <SearchBtn
                    onPress={()=>navigation.navigate("Stack",{screen:"Board_research_min"})}>
                    <SearchImage source={require('../images/Search.png')}></SearchImage>
                </SearchBtn>
            </BoardTextBox>
            <PlusBtn onPress={()=> setModal(true)}> 
                <PlusImage source={require('../images/ViewMore.png')}></PlusImage>
            </PlusBtn>
        </HeaderBox>
        </Container>
        </>
    )
}

export default TopBar_Search;