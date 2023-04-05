import React,{useState} from "react";
import styled from "styled-components/native";
import { Text, TouchableOpacity, View,Modal } from "react-native";

import ModalTwoOptions from "./ModalTwoOptions";


const Container = styled.ScrollView.attrs(()=>({
        contentContainerStyle:{
            showVerticalScrollIndicator:false,
        }
    }))`
    flex:1;
    margin:10px;
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

const SearchHistory = ({visible}) => {
    
    const [modalVisible,setModalVisible] = useState(false);

    
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
        <SeachHistoryBox>
            <SearchHistoryTextBox>
                <SearchHistoryText>검색기록
                </SearchHistoryText>
            </SearchHistoryTextBox>
            <DelectHistoryBox>
                <DelectHistoryIcon source={require('../images/X.png')}></DelectHistoryIcon>
            </DelectHistoryBox>
        </SeachHistoryBox>
        <SeachHistoryBox>
            <SearchHistoryTextBox>
                <SearchHistoryText>검색기록
                </SearchHistoryText>
            </SearchHistoryTextBox>
            <DelectHistoryBox>
                <DelectHistoryIcon source={require('../images/X.png')}></DelectHistoryIcon>
            </DelectHistoryBox>
        </SeachHistoryBox>
        <SeachHistoryBox>
            <SearchHistoryTextBox>
                <SearchHistoryText>검색기록
                </SearchHistoryText>
            </SearchHistoryTextBox>
            <DelectHistoryBox>
                <DelectHistoryIcon source={require('../images/X.png')}></DelectHistoryIcon>
            </DelectHistoryBox>
        </SeachHistoryBox>
        <SeachHistoryBox>
            <SearchHistoryTextBox>
                <SearchHistoryText>검색기록
                </SearchHistoryText>
            </SearchHistoryTextBox>
            <DelectHistoryBox>
                <DelectHistoryIcon source={require('../images/X.png')}></DelectHistoryIcon>
            </DelectHistoryBox>
        </SeachHistoryBox>
        <SeachHistoryBox>
            <SearchHistoryTextBox>
                <SearchHistoryText>검색기록
                </SearchHistoryText>
            </SearchHistoryTextBox>
            <DelectHistoryBox>
                <DelectHistoryIcon source={require('../images/X.png')}></DelectHistoryIcon>
            </DelectHistoryBox>
        </SeachHistoryBox>
        <AllDelect ConfigureBtn onPress={()=>setModalVisible(true)}>
                <AllDelectText>검색기록 전체삭제</AllDelectText>
            </AllDelect>
        </Container>
    )
}
export default SearchHistory;