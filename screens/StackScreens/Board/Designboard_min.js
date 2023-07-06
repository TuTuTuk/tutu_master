import React from "react";
import { FlatList } from "react-native";
import styled from "styled-components/native";
import { useNavigation } from '@react-navigation/native';

import BoardBox from "../../../components/BoardPart/BoardBox";
import KeywordSearchBox_min from "../../../components/KeywordSearchBox_min";
import TopBar_Search from "../../../components/TopBar_Search";

import auth from "@react-native-firebase/auth";
import firestore from '@react-native-firebase/firestore';
import storage from '@react-native-firebase/storage';
import { useEffect } from "react";
import { useState } from "react";


const Container = styled.View`
    border:1px;
    width:86%;
    height:100%;
    margin-left: 7%;
    margin-right: 7%;
`;

//---------------------------------------------------------------------------
//----------------------------------검색box-----------------------------------
//----------------------------------------------------------------------------

const AllBoardBox = styled.View`
    border: 1px; 
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

const Designboard_min = ({navigation:{navigate},route})=>{
    const navigation = useNavigation();
    const [boardSave,setBoardSave] = useState("");

    const UpdateData=async()=>{
        console.log(route.params.kind)
        const tempSave = await firestore().collection("boards").doc(route.params.kind).get();
        setBoardSave(tempSave._data);
    }

    useEffect(()=>{
        UpdateData()
    },[])

        //수정중
        const AddBoardUid= async ()=>{
            const tempSave = await firestore().collection("users").doc(auth().currentUser.uid).get()
    
           await firestore().collection("users").doc(auth().currentUser.uid).update({
                 user_watch_board_uid:[...tempSave._data.user_watch_board_uid,{}]
            });
            setList(tempSave._data.user_watch_board_uid);
       }

    return(
        <>
            <Container>
                <FlatList
                    ListHeaderComponent={
                        <>
                            <TopBar_Search title="검색 키워드"/>
                            <KeywordSearchBox_min tag={route.params.kind}/>
                        </>
                    }
                    showsVerticalScrollIndicator={false} //scroll바 가리기
                    keyExtractor={(item)=>`${item.create_time}`}//고유 키값 부여
                    data={boardSave.arr}
                    renderItem={({item,index})=>
                        //info={item} 으로 한번에 안넘기고 item.title 로 나눠서 넘기는 이유
                        //route.params.info.title 처럼 쓰지 않으면 info.title로 바로 쓸 수 없다.
                        <BoardBox info={item} title={item.title} contents={item.contents} kind={route.params.kind} index={index}/>
                    }
                />
            </Container>
            <WritingBtn
                onPress={()=>navigate("Stack",{screen:"BoardWriting_min",params:{kind:route.params.kind}})}>
                <WritingBtnText>글쓰기</WritingBtnText>
            </WritingBtn>
        </>
    );
};
export default Designboard_min;