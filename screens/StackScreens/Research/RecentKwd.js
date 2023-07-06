import React, { useState,useEffect } from "react";
import { FlatList,ScrollView,Text } from "react-native";
import styled from "styled-components/native";
import { useNavigation } from '@react-navigation/native';
import auth from "@react-native-firebase/auth";
import firestore from '@react-native-firebase/firestore';
import LinearGradient from 'react-native-linear-gradient';

import ModalTwoOptions from "../../../components/Modal/ModalTwoOptions";

const BigView = styled.View`
`;
const SeachHistoryBox = styled.View`
    //border  : 1px;
    margin-top: 1.37%;
    width : 100%;
    height : 30px;
    flex-direction: row;
    justify-content: space-between;
    border-radius: 10px;
    padding-left: 8px;
    background-color: #E3E3E3;
    align-self: center;
`; 
    const SearchHistoryTextBox = styled.Pressable`
        //border : 1px;
        width : 90%;
        height: 100%;
        align-items: flex-start;
        justify-content: center;
    `;
        const SearchHistoryText = styled.Text`
            font-family: 'Pretendard';
            font-style: normal;
            font-weight: 400;
            font-size: 12px;
            line-height: 14px;
            display: flex;
            align-items: center;
        `;
    const DelectHistoryBox = styled.Pressable`
        //border : 1px;
        border-color: red;
        justify-content: center;
        height: 100%;
        width : 30px;
    `;
        const DelectHistoryIcon = styled.Image`
            width: 100%;
            height: 100%;
        `;

const AllDelect = styled.TouchableOpacity`
    margin-top: 40px;
    width: 100%;
    height : 30px;
    justify-content: center;
    border-radius: 10px;
    background-color: #545454;
    align-self: center;
`;
    const AllDelectText = styled.Text`
        font-family: 'Pretendard';
        font-style: normal;
        font-weight: 600;
        font-size: 16px;
        line-height: 19px;
        align-self: center;
        color: white;
    `;


const RecentKwd = (recentSave,setRecentSave)=>{

    const [modalVisible, setModalVisible] = useState(false);
    console.log(recentSave)
    
    const onRemove=() => {
        firestore().collection("users").doc(auth().currentUser.uid).collection("recent_searches").doc("arr").delete();
    }

    return(
        <BigView>
            <ModalTwoOptions
                transparent={true}
                visible={modalVisible}
                setvisible={setModalVisible}
                title = "전체 삭제"
                contents="최근 검색 기록을 전체 삭제 하시겠습니까?"
                yestext="삭제하기"
                actOn={onRemove}
            />
        {
            recentSave.recentSave != null?
            <BigView>
                <FlatList
                    showsVerticalScrollIndicator={false} //scroll바 가리기
                    keyExtractor={(item)=>`${item.keyword}`}//고유 키값 부여
                    data={recentSave.recentSave.arr}
                    renderItem= {({item})=>
                    <SeachHistoryBox>
                        <SearchHistoryTextBox><SearchHistoryText>{item.keyword}</SearchHistoryText></SearchHistoryTextBox>
                        <DelectHistoryBox><DelectHistoryIcon source={require('../../../images/X.png')}></DelectHistoryIcon></DelectHistoryBox>
                    </SeachHistoryBox>}
                />
                <AllDelect onPress={()=>setModalVisible(true)}><AllDelectText>검색기록 전체삭제</AllDelectText></AllDelect>
            </BigView>
            :
            <AllDelect onPress={()=>setModalVisible(true)}><AllDelectText>검색기록 전체삭제</AllDelectText></AllDelect>
        }
        </BigView>
    )
}
export default RecentKwd;