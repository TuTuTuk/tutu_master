import React, { useState,useEffect } from "react";
import { FlatList,ScrollView,Text,View } from "react-native";
import styled from "styled-components/native";
import { useNavigation } from '@react-navigation/native';
import auth from "@react-native-firebase/auth";
import firestore from '@react-native-firebase/firestore';
import LinearGradient from 'react-native-linear-gradient';

//---------------------------------------------------------------
//-------------------------인기 키워드----------------------------
//---------------------------------------------------------------

const HotKeywordBox = styled.View`
    //border  : 1px;
    margin-top: 1.37%;
    width : 100%;
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
        justify-content: center;
        width : 80%;
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

const HotResearch = (HotKwd)=>{

    let HotKWD = HotKwd.HotKwd
    HotKWD = HotKWD.slice(0,10);
    return(
        <View>
            { HotKWD.map((keyword,index)=>{
                return(<HotKeywordBox>
                    <HotNumberBox><NumberTopText>{index+1}</NumberTopText></HotNumberBox>
                    { keyword == null?
                    <KeywordTextBox><KeywordText></KeywordText></KeywordTextBox>
                    :<KeywordTextBox><KeywordText>{keyword.id}</KeywordText></KeywordTextBox>
                    }
                    <UpDownBox><UpDownIcon source={require('../../../images/UpArrow.png')}></UpDownIcon></UpDownBox>
                    </HotKeywordBox>
                )
            })}
            
        </View>
    )
}
export default HotResearch;