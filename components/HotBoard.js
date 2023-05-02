import React from "react";
import { StyleSheet, Text, View } from "react-native";
import styled from "styled-components/native";
import Icon from 'react-native-vector-icons/Ionicons';
import { useNavigation } from "@react-navigation/native";

//------------------------------------------------------------------------------
//-------------------------------핫 게시판---------------------------------------
//------------------------------------------------------------------------------
const HotBoardBox = styled.View`
    //border: 1px;
    border-radius: 15px;
    height:140px; 
    width: 100%;
    align-self: center;
`;
    const HotTextBox = styled.View`
        height:40px;
        flex-direction: row;
        padding-left: 5px;
    `;
        const HotIconBox = styled.Image`
            height: 30px;
            width: 30px;
            margin: 5px;
        `;   
        const HotText = styled.Text`
            color : black;
            font-size: 15px;
            padding-top: 10px;
            font-weight: 500;
        `;
    const HotArticle = styled.Pressable`
        //border: 1px;
        border-radius: 15px;
        background-color: #E3E3E3;
        height: 100px;
        flex-direction: row;
        justify-content: space-between;
        padding: 15px;
    `;
        const AricleText = styled.View`
            //border:1px;
            width: 75%;
        `;
            const ArticleTitleBox = styled.View`
                //border: 1px;
                width: 100%;
                flex-direction: row;
            `;
                const ArticleTitle = styled.Text`
                    font-size: 15px;
                    font-weight: 500;
                    margin-right: 5px;
                `;
                const ArticleTimeBox = styled.View`
                    //border: 1px;
                    height : 20px;
                    justify-content: center;
                `;
                const ArticleTime = styled.Text`
                    font-weight: 400;
                    font-size: 8px;
                    color: #818181;
                `;
            const ArticleContents = styled.Text`
                margin-top: 3px;
                font-size : 13px;
                font-weight: 400;
                color: #1D1D1D;
            `;
        const ArticleImageBox = styled.View`
            //border : 1px;
            width : 65px;
            align-items: center;
            justify-content: space-between;
            padding-bottom: 15px;
        `;
            const HotImage = styled.Image`
                border-radius: 10px;
                background-color: #BBBBBB;
                width : 60px;
                height : 60px;
                margin-bottom: 3px;
            `;
            const ReactionBox = styled.View`
                //border : 1px;
                width: 60px;
                height: 15px;
                flex-direction: row;
            `;
                const CommentIcon = styled.View`
                    width: 25%;
                    height: 100%;
                    //border: 1px;
                `;
                const CommentText = styled.Text`
                    font-size: 11px;
                `;
                const GoodIcon = styled.View`
                    margin-left: 5px;
                    width: 25%;
                    height: 100%;
                    //border: 1px;
                    justify-content: center;
                `;
                const GoodText = styled.Text`
                    font-size: 11px;
                `;
const HotPlusBar = styled.View`
     //border:1px;
     margin-top: 10px;
     margin-left: 10px;
     margin-right: 10px;
     margin-bottom : 30px; 
     align-content: center;
     justify-content: center;
     flex-direction : row;
`;  
    const PlusBarCircle = styled.View`
        background-color: #C4BFBF;
        width: 5px;
        height: 5px;
        border-radius: 5px;
        margin-right: 5px;
    `;
    const PlusBarBar = styled.View`
        background-color: #C4BFBF;
        border-radius: 5px;
        height: 5px;
        width: 60px;
        margin-right: 5px;
    `;
const HotBoard=() => {
    const navigation = useNavigation();
    return (
        <>
    <HotBoardBox>
            <HotTextBox>
                <HotIconBox
                    source={require('../images/HOT.png')}>
                    </HotIconBox>
                <HotText>HOT</HotText>
            </HotTextBox>
            <HotArticle
                onPress={()=>navigation.navigate("Stack",{screen:"HotBoard_min"})}>
                <AricleText>
                    <ArticleTitleBox>
                        <ArticleTitle>제목을 입력하세요</ArticleTitle>
                        <ArticleTimeBox>
                            <ArticleTime>00분 전</ArticleTime>
                        </ArticleTimeBox>
                    </ArticleTitleBox>
                    
                    <ArticleContents>내용을 입력하세요</ArticleContents>
                </AricleText>
                <ArticleImageBox>
                    <HotImage></HotImage>
                    <ReactionBox>
                        <CommentIcon>
                            <Icon name="chatbox-ellipses" size = {12} color = "#1655E9"/>
                        </CommentIcon>
                        <CommentText>18</CommentText>
                        <GoodIcon>
                            <Icon name="thumbs-up" size = {12} color = "#FF0000"/>
                        </GoodIcon>
                        <GoodText>18</GoodText>
                    </ReactionBox>
                </ArticleImageBox>
            </HotArticle>
        </HotBoardBox>
        <HotPlusBar>
            <PlusBarCircle></PlusBarCircle>
            <PlusBarCircle></PlusBarCircle>
            <PlusBarBar></PlusBarBar>
            <PlusBarCircle></PlusBarCircle>
            <PlusBarCircle></PlusBarCircle>
        </HotPlusBar>
        </>
    )
}
export default HotBoard;