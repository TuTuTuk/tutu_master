import React, { useState, useEffect }from "react";
import { Modal, FlatList } from "react-native";
import styled from "styled-components/native";

import auth from "@react-native-firebase/auth";
import firestore from '@react-native-firebase/firestore';
import storage from '@react-native-firebase/storage';

import KeywordSearchBox_min from "../../../components/KeywordSearchBox_min";
import TopBar_Search from "../../../components/TopBar_Search";
import BoardBox from "../../../components/BoardPart/BoardBox";

const BoardsBoxs = styled.View`
    //border: 1px;
    margin-left: 7%;
    margin-right: 7%;
`;

const Integrated_Board_min = ({navigation:{navigate}})=>{

    const [boardSave,setBoardSave] = useState("");

    const UpdateData=async()=>{
        const tempSave = await firestore().collection("boards").doc('Integrated').get();
        setBoardSave(tempSave._data);
    }

    useEffect(()=>{
        UpdateData()
    },[])

    return(
        <>
            <BoardsBoxs>
            <FlatList
                ListHeaderComponent={
                    <>
                    <TopBar_Search title="게시판 이름/및 검색키워드"/>
                    <KeywordSearchBox_min/>
                    </>
                }
                showsVerticalScrollIndicator={false} //scroll바 가리기
                keyExtractor={(item)=>`${item.boards_uid}`}//고유 키값 부여
                data={boardSave.arr}
                renderItem={({item})=> <BoardBox info={item}/>}
            />
            </BoardsBoxs>
        </>
    );
};

export default Integrated_Board_min;