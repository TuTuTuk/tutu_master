import React, { useState,useEffect } from "react";
import { FlatList,ScrollView,Text } from "react-native";
import styled from "styled-components/native";
import { useNavigation } from '@react-navigation/native';
import auth from "@react-native-firebase/auth";
import firestore from '@react-native-firebase/firestore';
import LinearGradient from 'react-native-linear-gradient';

//---------------------------------------------------------------
//-------------------------인기 키워드----------------------------
//---------------------------------------------------------------

const AllBox = styled.View`
    //border: 1px;
`;

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
        //border: 1px;
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

    const HotKWD = HotKwd.HotKwd
    return(
        <AllBox>
            <HotKeywordBox>
                <HotNumberBox><NumberTopText>1</NumberTopText></HotNumberBox>
                {
                HotKWD[0] == null?
                    <KeywordTextBox><KeywordText></KeywordText></KeywordTextBox>
                :<KeywordTextBox><KeywordText>{HotKWD[0].id}</KeywordText></KeywordTextBox>
                }
                <UpDownBox><UpDownIcon source={require('../../../images/UpArrow.png')}></UpDownIcon></UpDownBox>
            </HotKeywordBox>
            <HotKeywordBox>
                <HotNumberBox><NumberTopText>2</NumberTopText></HotNumberBox>
                {
                    HotKWD[1] == null?
                    <KeywordTextBox><KeywordText></KeywordText></KeywordTextBox>
                    :<KeywordTextBox><KeywordText>{HotKWD[1].id}</KeywordText></KeywordTextBox>
                }
                <UpDownBox><UpDownIcon source={require('../../../images/UpArrow.png')}></UpDownIcon></UpDownBox>
                </HotKeywordBox>
            <HotKeywordBox>
                <HotNumberBox><NumberTopText>3</NumberTopText></HotNumberBox>
                {
                    HotKWD[2] == null?
                    <KeywordTextBox><KeywordText></KeywordText></KeywordTextBox>
                    :<KeywordTextBox><KeywordText>{HotKWD[2].id}</KeywordText></KeywordTextBox>
                }
                <UpDownBox><UpDownIcon source={require('../../../images/UpArrow.png')}></UpDownIcon></UpDownBox>
            </HotKeywordBox>
            <HotKeywordBox>
                <HotNumberBox><NumberText>4</NumberText></HotNumberBox>
                {
                    HotKWD[3] == null?
                    <KeywordTextBox><KeywordText></KeywordText></KeywordTextBox>
                    :<KeywordTextBox><KeywordText>{HotKWD[3].id}</KeywordText></KeywordTextBox>
                }
                        <UpDownBox><UpDownIcon source={require('../../../images/UpArrow.png')}></UpDownIcon></UpDownBox>
                    </HotKeywordBox>
                    <HotKeywordBox>
                        <HotNumberBox><NumberText>5</NumberText></HotNumberBox>
                        {
                            HotKWD[4] == null?
                            <KeywordTextBox><KeywordText></KeywordText></KeywordTextBox>
                            :<KeywordTextBox><KeywordText>{HotKWD[4].id}</KeywordText></KeywordTextBox>
                        }
                        <UpDownBox><UpDownIcon source={require('../../../images/UpArrow.png')}></UpDownIcon></UpDownBox>
                    </HotKeywordBox>
                    <HotKeywordBox>
                        <HotNumberBox><NumberText>6</NumberText></HotNumberBox>
                        {
                            HotKWD[5] == null?
                            <KeywordTextBox><KeywordText></KeywordText></KeywordTextBox>
                            :<KeywordTextBox><KeywordText>{HotKWD[5].id}</KeywordText></KeywordTextBox>
                        }
                        <UpDownBox><UpDownIcon source={require('../../../images/UpArrow.png')}></UpDownIcon></UpDownBox>
                    </HotKeywordBox>
                    <HotKeywordBox>
                        <HotNumberBox><NumberText>7</NumberText></HotNumberBox>
                        {
                            HotKWD[6] == null?
                            <KeywordTextBox><KeywordText></KeywordText></KeywordTextBox>
                            :<KeywordTextBox><KeywordText>{HotKWD[6].id}</KeywordText></KeywordTextBox>
                        }
                        <UpDownBox><UpDownIcon source={require('../../../images/UpArrow.png')}></UpDownIcon></UpDownBox>
                    </HotKeywordBox>
                    <HotKeywordBox>
                        <HotNumberBox><NumberText>8</NumberText></HotNumberBox>
                        {
                            HotKWD[7] == null?
                            <KeywordTextBox><KeywordText></KeywordText></KeywordTextBox>
                            :<KeywordTextBox><KeywordText>{HotKWD[7].id}</KeywordText></KeywordTextBox>
                        }
                        <UpDownBox><UpDownIcon source={require('../../../images/UpArrow.png')}></UpDownIcon></UpDownBox>
                    </HotKeywordBox>
                    <HotKeywordBox>
                        <HotNumberBox><NumberText>9</NumberText></HotNumberBox>
                        {
                            HotKWD[8] == null?
                            <KeywordTextBox><KeywordText></KeywordText></KeywordTextBox>
                            :<KeywordTextBox><KeywordText>{HotKWD[8].id}</KeywordText></KeywordTextBox>
                        }
                        <UpDownBox><UpDownIcon source={require('../../../images/UpArrow.png')}></UpDownIcon></UpDownBox>
                    </HotKeywordBox>
                    <HotKeywordBox>
                        <HotNumberBox><NumberText>10</NumberText></HotNumberBox>
                        {
                            HotKWD[9] == null?
                            <KeywordTextBox><KeywordText></KeywordText></KeywordTextBox>
                            :<KeywordTextBox><KeywordText>{HotKWD[9].id}</KeywordText></KeywordTextBox>
                        }
                        <UpDownBox><UpDownIcon source={require('../../../images/UpArrow.png')}></UpDownIcon></UpDownBox>
                    </HotKeywordBox>
                </AllBox>
    )
}
export default HotResearch;