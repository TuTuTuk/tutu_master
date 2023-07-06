import React,{ useEffect, useState }from "react";
import { Text } from "react-native";
import styled from "styled-components/native";
import firestore from '@react-native-firebase/firestore';

import CommentBox from "../../../components/BoardPart/CommentBox_min";
import TopBar from "../../../components/TopBar";
import AllBoardBox_min from "../../../components/BoardPart/AllBoardBox_min";

const Container = styled.ScrollView.attrs(()=>({
    contentContainerStyle:{
        showVerticalScrollIndicator:false,
        alignItems:"center"
}}))`
    //border:1px;
    margin-bottom: 10px;
    width:100%;
`;

const BoardDetail_jun =({route})=>{
    console.log(route)

    const [userData,setUserData] = useState(null);

    const UpdateData=async()=>{ //게시물을 쓴 사용자 정보 가져오기
        const tempData = await firestore().collection("users").doc(route.params.info.user_uid).get();
        console.log(tempData._data)
        setUserData(tempData._data)
    }
    useEffect(()=>{
        UpdateData()
    },[])

    return(
        <>
        <TopBar title=""/>
        <Container>
            <AllBoardBox_min name = {route.params.info.user_name} profile = {{uri:userData?userData.user_profile:null}} title={route.params.info.title} content={route.params.info.contents} time={route.params.info.create_time} goodCount="20" commentCountt="5" ></AllBoardBox_min>
            <CommentBox name="프로필 익명 1" content="내용을 입력하세요"/>
            <CommentBox name="프로필 익명 1" content="내용을 입력하세요"/>
            <CommentBox name="프로필 익명 1" content="내용을 입력하세요"/>
        </Container>
        </>
    )}
export default BoardDetail_jun;