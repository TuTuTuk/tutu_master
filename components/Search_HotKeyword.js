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
const HotKeywordBox = styled.View`
    //border  : 1px;
    margin-top: 1.37%;
    width : 86%;
    height : 30px;
    flex-direction: row;
    border-radius: 10px;
    background-color: #E3E3E3 ;
    align-self: center;
`; 
    const HotNumberBox = styled.View`
        justify-content: center;
        width: 24px;
        height: 24px;
        //border: 1px;
        margin-top: 3px;
        margin-right: 10px;
    `;
        const NumberTopText = styled.Text`
            font-family: 'Pretendard';
            font-style: normal;
            font-weight: 500;
            font-size: 16px;
            line-height: 19px;
            align-self: center;
            color: #0062FF;
        `;
        const NumberText = styled.Text`
            font-family: 'Pretendard';
            font-style: normal;
            font-weight: 500;
            font-size: 16px;
            line-height: 19px;
            align-self: center;
            color: #818181;
        `;
    const KeywordTextBox = styled.View`
        height: 30px;
        //border: 1px;
        width: 240px;
        justify-content: center;
    `;
        const KeywordText = styled.Text`
            font-family: 'Pretendard';
            font-style: normal;
            font-weight: 500;
            font-size: 12px;
            line-height: 14px;
            display: flex;
            align-items: center;
        `;
    const UpDownBox = styled.View`
        //border: 1px;
        width: 30px;
        height: 30px;
    `;    
    const UpDownIcon = styled.Image`
        width: 100%;
        height: 100%;
    `;

    

const SearchHistory = ({visible}) => {
    
    const [modalVisible,setModalVisible] = useState(false);

    if(visible == true){
    return(
        <Container>
        <HotKeywordBox>
            <HotNumberBox><NumberTopText>1</NumberTopText></HotNumberBox>
            <KeywordTextBox><KeywordText>실시간 검색어</KeywordText></KeywordTextBox>
            <UpDownBox>
                <UpDownIcon  source={require('../images/UpArrow.png')}></UpDownIcon>
            </UpDownBox>
        </HotKeywordBox>
        <HotKeywordBox>
            <HotNumberBox><NumberTopText>2</NumberTopText></HotNumberBox>
            <KeywordTextBox><KeywordText>실시간 검색어</KeywordText></KeywordTextBox>
            <UpDownBox>
                <UpDownIcon  source={require('../images/DownArrow.png')}></UpDownIcon>
            </UpDownBox>
        </HotKeywordBox>
        <HotKeywordBox>
            <HotNumberBox><NumberTopText>3</NumberTopText></HotNumberBox>
            <KeywordTextBox><KeywordText>실시간 검색어</KeywordText></KeywordTextBox>
            <UpDownBox>
                <UpDownIcon  source={require('../images/UpArrow.png')}></UpDownIcon>
            </UpDownBox>
        </HotKeywordBox>
        <HotKeywordBox>
            <HotNumberBox><NumberText>4</NumberText></HotNumberBox>
            <KeywordTextBox><KeywordText>실시간 검색어</KeywordText></KeywordTextBox>
            <UpDownBox>
                <UpDownIcon  source={require('../images/UpArrow.png')}></UpDownIcon>
            </UpDownBox>
        </HotKeywordBox>
        <HotKeywordBox>
            <HotNumberBox><NumberText>5</NumberText></HotNumberBox>
            <KeywordTextBox><KeywordText>실시간 검색어</KeywordText></KeywordTextBox>
            <UpDownBox>
                <UpDownIcon  source={require('../images/UpArrow.png')}></UpDownIcon>
            </UpDownBox>
        </HotKeywordBox>
        </Container>
    )
}else{null}}
export default SearchHistory;