import react from "react";
import { useState } from "react";
import { useEffect } from "react";
import { FlatList } from "react-native";
import styled from "styled-components/native";

import auth from "@react-native-firebase/auth";
import firestore from '@react-native-firebase/firestore';

const Container= styled.View`
    border-radius:5px;
    width:95px;
    padding-top:3px;
    padding-bottom:3px;
    background-color: #aeaeae;
    position:absolute;
    top:44px; 
    right:6%;
`;

const PressBtn = styled.Pressable`
    //border:1px;
`;
    const PressTxt = styled.Text`
        font-size:12px;
        right:3px;
        align-self:flex-end;
    `;

const ViewMoreBox=({kind,data,info})=>{
    const timeNow = new Date();

    const timeMili = timeNow.getMilliseconds()
    const timeSec = timeNow.getSeconds()
    const timeMin = timeNow.getMinutes()
    const timeHour = (timeNow.getHours()+9)%24
    const timeDate = timeNow.getDate()
    const timeMonth = timeNow.getMonth()+1
    const timeYear = timeNow.getFullYear()

    const timeStr = timeYear+"-"+timeMonth+"-"+timeDate+"-"+timeHour+":"+timeMin+":"+timeSec+"."+timeMili

    const Report= async ()=>{
        kind=="board"?
            await firestore().collection("Reports").doc("ReportBoard : "+info.boards_uid).set({
                title:info.title,
                time:timeStr
            })
        :
            null
    }

    return(
        <Container>
            <FlatList
                data={data}
                renderItem={({item})=>{
                        return(
                        <PressBtn onPress={()=>
                            {item == "신고하기"?Report():null}
                        }>
                            <PressTxt>{item}</PressTxt>
                        </PressBtn>
                        )
                    }
                }
            />
        </Container>
    )
}

export default ViewMoreBox;