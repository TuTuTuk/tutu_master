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
        <TopBar_Search title="?????????"></TopBar_Search>
        <HotBoard></HotBoard>
        <BlueButton title="???????????? ???-?????? ????????? ??????" mbottom={0} click={null} move="Matching_junseo"></BlueButton>
        <MenuBox onPress={()=>navigate("Stack",{screen:"Matching111"})}>
            <Title>????????? 1:1:1 ??????</Title>
            <Content>1:1:1 ????????? ??????????????? ?????? ????????? ??????1???,??????1??????{'\n'}
            ???????????? ?????? ????????? ?????????.</Content>
        </MenuBox>
        <MenuBox>
            <Title>????????? ????????????</Title>
            <Content>????????? ??????????????? ??????????????? ???????????? ???????????? ?????? ????????? ????????? ????????????{'\n'}
            ?????? ?????? ????????? ?????? ???????????? ????????? ??? ?????? ?????? ??????????????????.</Content>
        </MenuBox>
        <MeneBtnBox>
            <MenuBtn onPress={()=>navigate("Stack",{screen:"Designboard_min"})}>
                <Image><MajorIcon source={require('../../images/?????????.png')}></MajorIcon></Image>
                <TextBox><ImageText>??????/??????</ImageText></TextBox>
            </MenuBtn>
            <MenuBtn onPress={()=>navigate("Stack",{screen:"Designboard_min"})}>
                <Image><MajorIcon source={require('../../images/?????????.png')}></MajorIcon></Image>
                <TextBox><ImageText>?????????</ImageText></TextBox>
            </MenuBtn>
            <MenuBtn onPress={()=>navigate("Stack",{screen:"Designboard_min"})}>
                <Image><MajorIcon source={require('../../images/????????????.png')}></MajorIcon></Image>
                <TextBox><ImageText>????????????</ImageText></TextBox>
            </MenuBtn>
        </MeneBtnBox>
        <MeneBtnBox>
            <MenuBtn onPress={()=>navigate("Stack",{screen:"Designboard_min"})}>
                <Image><MajorIcon source={require('../../images/??????.png')}></MajorIcon></Image>
                <TextBox><ImageText>??????</ImageText></TextBox>
            </MenuBtn>
            <MenuBtn onPress={()=>navigate("Stack",{screen:"Designboard_min"})}>
                <Image><MajorIcon source={require('../../images/????????????.png')}></MajorIcon></Image>
                <TextBox><ImageText>????????????</ImageText></TextBox>
            </MenuBtn>
            <MenuBtn onPress={()=>navigate("Stack",{screen:"Designboard_min"})}>
                <Image><MajorIcon source={require('../../images/??????????????????.png')}></MajorIcon></Image>
                <TextBox><ImageText>?????? ????????????</ImageText></TextBox>
            </MenuBtn>
        </MeneBtnBox>
    </Container>
    )
}
export default Matching_min;