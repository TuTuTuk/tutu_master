import React, { useState , useEffect, createRef } from "react";
import { Modal , FlatList } from "react-native";
import styled from "styled-components/native";
import Icon from 'react-native-vector-icons/Ionicons';
import moment from "moment"

import auth from "@react-native-firebase/auth";
import firestore from '@react-native-firebase/firestore';

const Container = styled.View`
    flex:1;
    margin-top: 10px;
    margin-left: 7%;
    margin-right: 7%;
`;

const InputWindow = styled.View`
    background-color: gray;
    border-radius: 10px;
    width: 86%;
    height: 40px;
    align-self: center;
    justify-content: space-between;
    flex-direction: row;
    position: absolute;
    bottom: 8px;
    padding-left: 4.16%;
    padding-right: 2.78%;
`;      
    const InputBox = styled.TextInput`
        border-radius: 10px;
        width: 80%;
        height: 100%;
        justify-content: center;
    `;

    const InputText = styled.Text`
        font-size: 12px;
        font-weight: 500;
        color: white;
        margin-left: 4.8%;
        margin-top: 3.2%;
    `;
    
    const InputBtn = styled.Pressable`
        width: 25px;
        height: 25px;
        //border: 1px;
        margin-top: 8px;
    `;
        const InputIcon = styled.Image`
            width: 100%;
            height: 100%;
        `;

const InputComment = ()=>{

    const [modalVisible,setModalVisible] = useState(false)
    const [content, setContent] = useState("")

    const [commentSave,setCommentSave] = useState([]);

    const UpdateData=async()=>{
        setCommentSave([])
        const tempSave = await firestore().collection("users").doc(auth().currentUser.uid).collection('Comments').orderBy("create_time","desc").get();
        if(tempSave.empty){
            console.log('empty');
            return;
        }
        tempSave.forEach(document => {
            const recentSave = {
                id: document.id,
                ...document.data()
            }
            setCommentSave(prev => [recentSave, ...prev])
        })
        console.log(commentSave)
    }

    useEffect(()=>{
        UpdateData()
    },[])

    const DoneComment=async()=>{
        const timeNow = new Date();
        const nowTime = moment().format('MM/DD HH:mm');
        
        
        firestore().collection("users").doc(auth().currentUser.uid).collection("Comments").doc(content).set({
            contents:content,
            create_time:timeNow, 
            time : nowTime
        }).then(onReset())
        .catch((error)=>{
            console.log(error)
        })
    }

    //댓글 달기 눌렀을 때, 댓글창에 있는 글씨 초기화
    const displayText = (e) => {
        setContent(e.target.value);
    };
    const onReset = (e) => {
        setContent("");
    }

    return(
        <>
        <InputWindow>
            <InputBox
                onChange={displayText}
                value = {content}
                placeholder="입력창"
                placeholderTextColor = "white"
                multiline = {true}
            >
            </InputBox>
            <InputBtn onPress={() => {
                DoneComment();
                UpdateData();
            }}>
                <InputIcon source={require('../../images/input.png')}></InputIcon>
            </InputBtn>
        </InputWindow>  
        </>
    )
}
export default InputComment;