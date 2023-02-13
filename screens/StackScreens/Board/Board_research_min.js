import React, { useState } from "react";
import { Text, TouchableOpacity, View,Modal } from "react-native";
import styled from "styled-components/native";
import Icon from 'react-native-vector-icons/Ionicons';

import TopBar_Search from "../../../components/TopBar_Search";
import ModalTwoOptions from "../../../components/ModalTwoOptions";
import SearchHistory from "../../../components/SearchHistory";
import Search_HotKeyword from "../../../components/Search_HotKeyword";

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


const Board_research_min = ({navigation:{navigate}})=>{
    const [click,setClick] = useState(false);
    const [modalVisible,setModalVisible] = useState(false);

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

    const [recentVisible, setRecentVisible] = useState(false);
    const [hotVisible, setHotVisible] = useState(false);
    const [filterVisible, setFilterVisible] = useState(false);
    
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
                <RecentBox onPress = {()=> {
                    ClickRecent();
                    setRecentVisible(true);
                    setHotVisible(false);
                    setFilterVisible(false);
                }}>
                    <SearchText>최근 검색어</SearchText>
                </RecentBox>
                <HotBox onPress = {()=> {
                    ClickHot();
                    setRecentVisible(false);
                    setHotVisible(true);
                    setFilterVisible(false);
                }}>
                    <SearchText>인기 키워드</SearchText>
                </HotBox>
                <FilterBox onPress = {()=> {
                    ClickFilter()
                    setRecentVisible(false);
                    setHotVisible(false);
                    setFilterVisible(true);
                }}>
                    <SearchText>검색 필터</SearchText>
                </FilterBox>
            </SelectBox>
            <SearchHistory visible={recentVisible}/>
            <Search_HotKeyword visible={hotVisible}/>
            
        </Container>
)}
export default Board_research_min;