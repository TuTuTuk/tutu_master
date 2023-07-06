import React from "react";
import { Text ,FlatList,Keyboard,TouchableWithoutFeedback} from "react-native";
import TopBar from "../../../components/TopBar";
import styled from "styled-components/native";
import { useEffect } from "react";

import auth from "@react-native-firebase/auth";
import firestore from '@react-native-firebase/firestore';

import { useState  } from "react";
import CommentBox from "../../../components/CommentBox_jun";

const Container = styled.View`
    //border:2px;
    border-color:red;
    width:100%;
    height:100%;
    justify-content: center;
`;

const MainDetail = styled.View`
    //border: 2px;
    border-color:green;
    background-color: #E3E3F3;
    border-radius: 10px;
    width: 100%;
    align-self:center;
    
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
        height:172;
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
    
    const ChatBox = styled.View`
        //border:1px;
        border-radius:10px;
        width:86.11%;
        height:40px;
        bottom:8px;
        padding-left:15px;
        padding-right:15px;
        flex-direction: row;
        align-self:center;
        justify-self: start;
        justify-content: space-between;
        align-items: center;
        background-color: #818181;
        position:absolute;        
    `;
        const ChatInput = styled.TextInput`
            //border:1px;
            border-radius:10px;
            width:80%;
            height:100%;
        `;
            const SendBtn = styled.Pressable`
                //border:1px;      
                width:25px;
                height:25px;
            `;
                const ImageBtn = styled.Image`
                `;

const BoardDetail_jun =({route})=>{


    const [userData,setUserData] = useState(null);
    const [commentData,setCommentData] = useState(null);
    const [comment,setComment] = useState("");

    const UpdateData=async()=>{ //게시물을 쓴 사용자 정보,댓글 정보 가져오기
        const tempData = await firestore().collection("users").doc(route.params.info.user_uid).get();
        const tempCommentsData = await firestore().collection("Comments").doc(route.params.info.boards_uid).get()
        
        setUserData(tempData._data)
        setCommentData(tempCommentsData._data)

       // console.log("route"+route.params)
       console.log(commentData)
    }

    useEffect(()=>{
        UpdateData()
    },[])



    //댓글달기
    const SendComment = async()=>{
        Keyboard.dismiss()
        const tempSave = await firestore().collection("Comments").doc(route.params.info.boards_uid).get();
        const tempUser = await firestore().collection("users").doc(auth().currentUser.uid).get();

        var timeNow = new window.Date();
        const timeMili = timeNow.getMilliseconds()
        const timeSec = timeNow.getSeconds()
        const timeMin = timeNow.getMinutes()
        const timeHour = (timeNow.getHours()+9)%24
        const timeDate = timeNow.getDate()
        const timeMonth = timeNow.getMonth()+1
        const timeYear = timeNow.getFullYear()
        const timeStr = timeYear+"-"+timeMonth+"-"+timeDate+"-"+timeHour+":"+timeMin+":"+timeSec+"."+timeMili
        
        await firestore().collection("Comments").doc(route.params.info.boards_uid).update({
            arr:[...tempSave._data.arr,{
                user_name:auth().currentUser.displayName,
                user_uid: auth().currentUser.uid,
                user_class_number : tempUser._data.user_class_number,
                user_profile: tempUser._data.user_profile,
                comment: comment,
                time: timeStr
            }]
        })
        setComment("")
        console.log(tempSave._data)
        UpdateData()
    }

    return(
        <Container>
                <TopBar title=""/>
                {commentData==null? <Text>Loading</Text> :
                    <FlatList
                        ListHeaderComponent={
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
                        }
                        showsVerticalScrollIndicator={false} //scroll바 가리기
                        keyExtractor={(item)=>`${item.time}`}//고유 키값 부여
                        data={commentData.arr}
                        renderItem={({item})=>
                            <CommentBox info={item}/>
                        }
                    />
                }
                <ChatBox>
                    <ChatInput placeholder="입력창" onChangeText={(text)=>setComment(text)} value={comment}/>
                    <SendBtn onPress={()=>SendComment()}>
                        <ImageBtn resizeMode="stretch" source={require('../../../images/sendBtn.png')}/>
                    </SendBtn>
                </ChatBox>
        </Container>
    )
}

export default BoardDetail_jun;