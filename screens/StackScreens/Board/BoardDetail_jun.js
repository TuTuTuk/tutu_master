import React from "react";
import { Text } from "react-native";
import TopBar from "../../../components/TopBar";
import styled from "styled-components/native";
import { useEffect } from "react";
import firestore from '@react-native-firebase/firestore';
import { useState } from "react";
import CommentBox from "../../../components/CommentBox_jun";

const Container = styled.ScrollView.attrs(()=>({
    contentContainerStyle:{
        showVerticalScrollIndicator:false,
        alignItems:"center"
    }
}))`
    //border:1px;
    margin-bottom: 10px;
    width:100%;
`;

const MainDetail = styled.View`
    //border:1px;
    background-color: #E3E3F3;
    border-radius: 10px;
    width:100%;
    `;
    const ProfileBox = styled.View`
        width:100%;
        margin-top:10px;
    margin-bottom:10px;
        flex-direction: row;
        justify-content: space-between;
    `;
        const ProfileInfo = styled.View`
            //border:1px;
            width:100px;
            margin-left:25px;
            flex-direction: row;
            justify-content: space-between;
        `;
            const ProfileImage = styled.Image`
                background-color: #BBBBBB;
                border-radius: 10px;
                width:40px;
                height:40px;
            `;
            const ProfileText = styled.View`
               //border:1px;
                margin-left: 5px;
                width:100%;
                height:100%;
            `
                const UserName = styled.Text`
                    font-size: 12px;
                    line-height: 14px;
                    color: #0062FF
                `;
                const Date = styled.Text`
                    font-size: 8px;
                    line-height: 10px;
                    color: #1D1D1D;
                `;
        const FunctionBox = styled.View`
            //border:1px;
            width:100px;
            height:100%;
            margin-right: 25px;
            flex-direction: row;
            align-items: center;
            justify-content: space-between;
        `;  
            const FunctionImage = styled.Image`
                //border:1px;
                border-radius: 3px;
                background-color: #C3C3C3;
                width:20px;
                height:20px;
            `;
    const MainContain = styled.View`
        //border:1px;
        background-color: #C3C3C3;
        width:100%;
        height:172px;
        border-radius: 10px;
    `;
        const MainTitle = styled.Text`
            font-size:16px;
            line-height: 19px;
            margin-top:15px;
            margin-right: 25px;
            margin-left: 25px;
            color: #1d1d1d;
        `;
        const MainContents = styled.Text`
            font-size: 12px;
            line-height: 14px;
            margin-top:15px;
            margin-right: 25px;
            margin-left: 25px;
            color: #1D1D1D;
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
                <MainDetail>
                    <ProfileBox>
                            <ProfileInfo>
                                <ProfileImage source={{uri:userData?userData.user_profile:null}}/>
                                <ProfileText>
                                    <UserName>{route.params.info.user_name}</UserName>
                                    <Date>{route.params.info.create_time}</Date>
                                </ProfileText>
                            </ProfileInfo>
                        <FunctionBox>
                            <FunctionImage></FunctionImage>
                            <FunctionImage></FunctionImage>
                            <FunctionImage></FunctionImage>
                        </FunctionBox>
                    </ProfileBox>
                    <MainContain>
                        <MainTitle>{route.params.info.title}</MainTitle>
                        <MainContents>{route.params.info.contents}</MainContents>
                    </MainContain>
                </MainDetail>
                <CommentBox name="프로필 익명 1" content="내용을 입력하세요"/>
                <CommentBox name="프로필 익명 1" content="내용을 입력하세요"/>
                <CommentBox name="프로필 익명 1" content="내용을 입력하세요"/>
            </Container>
        </>
    )
}

export default BoardDetail_jun;