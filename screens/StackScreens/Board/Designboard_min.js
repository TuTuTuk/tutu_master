import React from "react";
import { FlatList, Text, View } from "react-native";
import styled from "styled-components/native";
import Icon from 'react-native-vector-icons/Ionicons';
import LinearGradient from 'react-native-linear-gradient';
import { useNavigation } from '@react-navigation/native';

import BoardBox from "../../../components/BoardBox";
import BoardBox_min from "../../../components/BoardBox_min";
import KeywordSearchBox_min from "../../../components/KeywordSearchBox_min";
import TopBar_Search from "../../../components/TopBar_Search";

import auth from "@react-native-firebase/auth";
import firestore from '@react-native-firebase/firestore';
import storage from '@react-native-firebase/storage';
import { useEffect } from "react";
import { useState } from "react";


const Container = styled.View`
    flex:1;
    margin-bottom: 10px;
`;
//----------------------------------------------------------------------------
//----------------------------------검색box------------------------------------
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

const Designboard_min = ({navigation:{navigate}})=>{
    const navigation = useNavigation();

    const [boardSave,setBoardSave] = useState("");

    const UpdateData=async()=>{
        const tempSave = await firestore().collection("boards").doc("Design").get();
        setBoardSave(tempSave._data);
    }

    useEffect(()=>{
        UpdateData()
    },[])

    return(
        <>
            <Container>
                <AllBoardBox>
                    <FlatList
                        ListHeaderComponent={
                            <>
                                <TopBar_Search title="검색 키워드"/>
                                <KeywordSearchBox_min></KeywordSearchBox_min>
                            </>
                        }
                        showsVerticalScrollIndicator={false} //scroll바 가리기
                        keyExtractor={(item)=>`${item.create_time}`}//고유 키값 부여
                        data={boardSave.arr}
                        renderItem={({item})=>
                            <BoardBox title={item.title} contents={item.contents}/>
                        }
                    />
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