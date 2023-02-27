import React,{useState} from "react";
import { StyleSheet, Text, View} from "react-native";
import styled from "styled-components/native";
import Icon from 'react-native-vector-icons/Ionicons';
import LinearGradient from 'react-native-linear-gradient';
import TopBar_Search from "../../components/TopBar_Search";
import HotBoard from "../../components/HotBoard";
import BlueButton from "../../components/BlueButton";

const Container = styled.ScrollView.attrs(()=>({
    contentContainerStyle:{
        showVerticalScrollIndicator:false,
    }
}))`
    flex:1;
    margin-top: 10px;
    margin-bottom: 10px;
`;

const MenuBox = styled.Pressable`
    width: 86%;
    align-self: center;
    background: #E3E3E3;
    border-radius: 10px;
    margin-bottom: 20px;
    margin-top: 20px;
    padding: 15px;
`;
    const Title = styled.Text`
        font-family: 'Pretendard';
        font-style: normal;
        font-weight: 600;
        font-size: 18px;
        line-height: 21px;
        color: #0062FF;
        margin-bottom: 10px;
    `;
    const Content =styled.Text`
        font-family: 'Pretendard';
        font-style: normal;
        font-weight: 400;
        font-size: 8px;
        line-height: 10px;
    `;

const MeneBtnBox= styled.View`
        width : 86%;
        flex-direction: row;
        //border: 1px;
        align-self: center;
        padding-left: 4.8%;
        padding-right: 4.8%;
        justify-content: space-between;
        margin-bottom: 3.4%;
    `;
        const MenuBtn = styled.Pressable`
            //border: 1px;
            width : 30%;
            height : 100%;
            align-items: center;
        `;
            const Image = styled.View`
                //border: 1px;
                border-radius: 40px;
                background-color: #E3E3E3;
                width: 80px;
                height: 80px;
                margin-top: 5px;
                margin-bottom: 10px;
                justify-content: center;
            `;
            const TextBox = styled.View`
                width : 60px;
                height: 13px;
                align-items: center;
            `;
                const ImageText = styled.Text`
                    font-size : 10px;
                    font-weight: 300;
            `;
            const MajorIcon = styled.Image`
                    //border: 1px;
                    width: 80%;
                    height: 80%;
                    align-self: center;
            `;

const Matching_min = ({navigation:{navigate}})=>{

    return(
    <Container>
        <TopBar_Search title="게시판"></TopBar_Search>
        <HotBoard></HotBoard>
        <BlueButton title="한국공대 선-후배 한눈에 보기" mbottom={0} click={null} move="Matching_junseo"></BlueButton>
        <MenuBox onPress={()=>navigate("Stack",{screen:"Matching111"})}>
            <Title>선후배 1:1:1 매칭</Title>
            <Content>1:1:1 매칭은 한국공학대 학생 한명이 선배1명,후배1명과{'\n'}
            연결되는 매칭 시스템 입니다.</Content>
        </MenuBox>
        <MenuBox>
            <Title>키워드 그룹매칭</Title>
            <Content>키워드 그룹매칭은 한국공학대 학생들이 키워드를 통해 자신과 유사한 관심사를{'\n'}
            갖고 있는 학우를 찾고 소모임을 구성할 수 있는 매칭 시스템입니다.</Content>
        </MenuBox>
        <MeneBtnBox>
            <MenuBtn onPress={()=>navigate("Stack",{screen:"Designboard_min"})}>
                <Image><MajorIcon source={require('../../images/비교과.png')}></MajorIcon></Image>
                <TextBox><ImageText>전공/교양</ImageText></TextBox>
            </MenuBtn>
            <MenuBtn onPress={()=>navigate("Stack",{screen:"Designboard_min"})}>
                <Image><MajorIcon source={require('../../images/비교과.png')}></MajorIcon></Image>
                <TextBox><ImageText>비교과</ImageText></TextBox>
            </MenuBtn>
            <MenuBtn onPress={()=>navigate("Stack",{screen:"Designboard_min"})}>
                <Image><MajorIcon source={require('../../images/대외활동.png')}></MajorIcon></Image>
                <TextBox><ImageText>대외활동</ImageText></TextBox>
            </MenuBtn>
        </MeneBtnBox>
        <MeneBtnBox>
            <MenuBtn onPress={()=>navigate("Stack",{screen:"Designboard_min"})}>
                <Image><MajorIcon source={require('../../images/핫플.png')}></MajorIcon></Image>
                <TextBox><ImageText>핫플</ImageText></TextBox>
            </MenuBtn>
            <MenuBtn onPress={()=>navigate("Stack",{screen:"Designboard_min"})}>
                <Image><MajorIcon source={require('../../images/취업진로.png')}></MajorIcon></Image>
                <TextBox><ImageText>취업진로</ImageText></TextBox>
            </MenuBtn>
            <MenuBtn onPress={()=>navigate("Stack",{screen:"Designboard_min"})}>
                <Image><MajorIcon source={require('../../images/기타프로젝트.png')}></MajorIcon></Image>
                <TextBox><ImageText>기타 프로젝트</ImageText></TextBox>
            </MenuBtn>
        </MeneBtnBox>
    </Container>
    )
}
export default Matching_min;