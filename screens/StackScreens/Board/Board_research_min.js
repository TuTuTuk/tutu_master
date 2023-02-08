import React, { useState } from "react";
import { Text, TouchableOpacity, View,Modal } from "react-native";
import styled from "styled-components/native";
import Icon from 'react-native-vector-icons/Ionicons';

import TopBar_Search from "../../../components/TopBar_Search";
import ModalTwoOptions from "../../../components/ModalTwoOptions";

const Container = styled.ScrollView.attrs(()=>({
        contentContainerStyle:{
            showVerticalScrollIndicator:false,
        }
    }))`
    flex:1;
    margin:10px;
`;

//----------------------------------------------------------------
//---------------------------선택 버튼-----------------------------
//----------------------------------------------------------------
const SelectBox = styled.View`
    margin-top: 5.5%;
    //border : 1px;
    height: 45px;
    width: 86%;
    margin-bottom: 15px;
    flex-direction:row;
    justify-content: space-between;
    align-self: center;
`;
        const SearchText = styled.Text`
            color : white;
            font-family: 'Pretendard';
            font-style: normal;
            font-weight: 600;
            font-size: 16px;
            line-height: 19px;
            text-align: center;
        `;
//-------------------------------------------------------------------
//----------------------------검색 기록-------------------------------
const SeachHistoryBox = styled.View`
    //border  : 1px;
    margin-top: 1.37%;
    width : 86%;
    height : 30px;
    flex-direction: row;
    justify-content: space-between;
    border-radius: 10px;
    padding-left: 8px;
    background-color: #E3E3E3 ;
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
//-------------------------------------------------------------------
//--------------------------기록 전체 삭제----------------------------
const AllDelect = styled.TouchableOpacity`
    margin-top: 40px;
    width: 86%;
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

const Board_research_min = ({navigation:{navigate}})=>{
    const [click,setClick] = useState(false);
    const [modalVisible,setModalVisible] = useState(false)

    const [recent, setRecent] = useState("#E3E3E3");
    const [hot, setHot] = useState("#E3E3E3");
    const [filter, setFilter] = useState("#E3E3E3");

    const ClickRecent=()=>{
        recent === "#E3E3E3" ? setRecent("#1398FF"):setRecent("#1398FF");
        hot === "#1398FF" ? setHot("#E3E3E3"):setHot("#E3E3E3");
        filter === "#1398FF" ? setFilter("#E3E3E3"):setFilter("#E3E3E3");
    }
    const ClickHot=()=>{
        recent === "#1398FF" ? setRecent("#E3E3E3"):setRecent("#E3E3E3");
        hot === "#E3E3E3" ? setHot("#1398FF"):setHot("#1398FF");
        filter === "#1398FF" ? setFilter("#E3E3E3"):setFilter("#E3E3E3");
    }
    const ClickFilter=()=>{
        recent === "#1398FF" ? setRecent("#E3E3E3"):setRecent("#E3E3E3");
        hot === "#1398FF" ? setHot("#E3E3E3"):setHot("#E3E3E3");
        filter === "#E3E3E3" ? setFilter("#1398FF"):setFilter("#1398FF");
    }

    const RecentBox = styled.TouchableOpacity`
        border-radius: 10px;
        height : 45px;
        width: 32.25%;
        justify-content: center;
        background-color: ${recent};
    `;
    const HotBox = styled.TouchableOpacity`
        border-radius: 10px;
        height : 45px;
        width: 32.25%;
        justify-content: center;
        background-color: ${hot};
    `;
    const FilterBox = styled.TouchableOpacity`
        border-radius: 10px;
        height : 45px;
        width: 32.25%;
        justify-content: center;
        background-color: ${filter};
    `;

    return(
        <Container>
            <ModalTwoOptions
                transparent={true}
                visible={modalVisible}
                setvisible={setModalVisible}
                title = "전체 삭제"
                contents="최근 검색 기록을 전체 삭제 하시겠습니까?"
                yestext="삭제하기"
            />
            <TopBar_Search title = "디자인문화리서치"/>
            <SelectBox>
                <RecentBox onPress = {()=> ClickRecent()}>
                    <SearchText>최근 검색어</SearchText>
                </RecentBox>
                <HotBox onPress = {()=> ClickHot()}>
                    <SearchText>인기 키워드</SearchText>
                </HotBox>
                <FilterBox onPress = {()=> ClickFilter()}>
                    <SearchText>검색 필터</SearchText>
                </FilterBox>
            </SelectBox>
            <SeachHistoryBox>
                <SearchHistoryTextBox>
                    <SearchHistoryText>검색기록</SearchHistoryText>
                </SearchHistoryTextBox>
                <DelectHistoryBox>
                    <DelectHistoryIcon source={require('../../../images/X.png')}></DelectHistoryIcon>
                </DelectHistoryBox>
            </SeachHistoryBox>
            <SeachHistoryBox>
                <SearchHistoryTextBox>
                    <SearchHistoryText>검색기록</SearchHistoryText>
                </SearchHistoryTextBox>
                <DelectHistoryBox>
                    <DelectHistoryIcon source={require('../../../images/X.png')}></DelectHistoryIcon>
                </DelectHistoryBox>
            </SeachHistoryBox>
            <SeachHistoryBox>
                <SearchHistoryTextBox>
                    <SearchHistoryText>검색기록</SearchHistoryText>
                </SearchHistoryTextBox>
                <DelectHistoryBox>
                    <DelectHistoryIcon source={require('../../../images/X.png')}></DelectHistoryIcon>
                </DelectHistoryBox>
            </SeachHistoryBox>
            <SeachHistoryBox>
                <SearchHistoryTextBox>
                    <SearchHistoryText>검색기록</SearchHistoryText>
                </SearchHistoryTextBox>
                <DelectHistoryBox>
                    <DelectHistoryIcon source={require('../../../images/X.png')}></DelectHistoryIcon>
                </DelectHistoryBox>
            </SeachHistoryBox>
            <SeachHistoryBox>
                <SearchHistoryTextBox>
                    <SearchHistoryText>검색기록</SearchHistoryText>
                </SearchHistoryTextBox>
                <DelectHistoryBox>
                    <DelectHistoryIcon source={require('../../../images/X.png')}></DelectHistoryIcon>
                </DelectHistoryBox>
            </SeachHistoryBox>
            <SeachHistoryBox>
                <SearchHistoryTextBox>
                    <SearchHistoryText>검색기록</SearchHistoryText>
                </SearchHistoryTextBox>
                <DelectHistoryBox>
                    <DelectHistoryIcon source={require('../../../images/X.png')}></DelectHistoryIcon>
                </DelectHistoryBox>
            </SeachHistoryBox>
            <SeachHistoryBox>
                <SearchHistoryTextBox>
                    <SearchHistoryText>검색기록</SearchHistoryText>
                </SearchHistoryTextBox>
                <DelectHistoryBox>
                    <DelectHistoryIcon source={require('../../../images/X.png')}></DelectHistoryIcon>
                </DelectHistoryBox>
            </SeachHistoryBox>
            <AllDelect ConfigureBtn onPress={()=>setModalVisible(true)}>
                <AllDelectText>검색기록 전체삭제</AllDelectText>
            </AllDelect>

        </Container>
)}
export default Board_research_min;