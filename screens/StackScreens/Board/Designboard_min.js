import React from "react";
import { Text, View } from "react-native";
import styled from "styled-components/native";
import Icon from 'react-native-vector-icons/Ionicons';
import LinearGradient from 'react-native-linear-gradient';
import { useNavigation } from '@react-navigation/native';

import BoardBox from "../../../components/BoardBox";
import BoardBox_min from "../../../components/BoardBox_min";
import KeywordSearchBox_min from "../../../components/KeywordSearchBox_min";
import TopBar_Search from "../../../components/TopBar_Search";


const Container = styled.ScrollView.attrs(()=>({
    contentContainerStyle:{
        showsVerticalScrollIndicator:false,
    }
}))`
    flex:1;
    margin-bottom: 10px;
`;
//----------------------------------------------------------------------------
//----------------------------------검색box------------------------------------
//----------------------------------------------------------------------------
const AllBoardBox = styled.View`
    //border: 1px;
    margin-left: 7%;
    margin-right: 7%;
    
`;

const WritingBtn = styled.TouchableOpacity`
    width: 47%;
    height: 50px;
    background-color: black;
    align-self: center;
    border-radius: 28px;
    justify-content: center;
    position: absolute;
    bottom: 67px;
`;
    const WritingBtnText = styled.Text`
        color: white;
        text-align: center;
        font-size: 20px;
        font-weight: 400;
    `;

const Designboard_min = ({navigation:{navigate}})=>{

    const navigation = useNavigation();

    return(
        <>
    <Container>
        <TopBar_Search title="검색 키워드"/>
        <KeywordSearchBox_min></KeywordSearchBox_min>
        <AllBoardBox>
        <BoardBox_min move = "Writing_self_min"/>
            <BoardBox></BoardBox>
            <BoardBox></BoardBox>
            <BoardBox></BoardBox>
            <BoardBox></BoardBox>
            <BoardBox></BoardBox>
            <BoardBox></BoardBox>
            <BoardBox></BoardBox>
        </AllBoardBox>
    </Container>
    <WritingBtn
            onPress={()=>navigate("Stack",{screen:"BoardWriting_min"})}>
            <WritingBtnText>글쓰기</WritingBtnText>
        </WritingBtn>
    </>
    );
};
export default Designboard_min;