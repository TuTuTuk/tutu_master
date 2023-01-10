import React, { useState,useEffect } from "react";
import { View,Text,Pressable } from "react-native";
import styled from "styled-components/native";
import Icon from "react-native-vector-icons/Ionicons";
import Input from "../../../components/Input";
import BlueButton from "../../../components/BlueButton";
import BlackButton from "../../../components/BlackButton";


const Container = styled.View`
    width:100%;
    align-items: center;
    background-color: #FFFFFF;
`;


const Header = styled.View`
    width:310px;
    flex-direction: row;
    justify-content: space-between;
    margin-bottom:20px;
    margin-top: 10px;
`;
    const HeaderText = styled.Text`
        font-weight: 600;
        font-size: 20px;
        line-height: 24px;
        margin-top: 10px;
    `;

const InputBox = styled.View`
    width:310px;
    align-items: center;
`
const PressableBox = styled.View`
    width:310px;
    align-items: center;
`;


const JoinPage =()=>{
    const [nameText,setNameText] = useState("");
    const [idText,setIdText] = useState("");
    const [pwText,setPwText] = useState("");
    const [pwCheckText,setPwCheckText] = useState("");
    const [emailText,setEmailText] = useState("");
    const [numText,setNumText] = useState("");

    const [finish,setFinish] = useState(false);

    useEffect(()=>{
        console.log("nameText"+nameText);
        console.log("idText"+idText);
        console.log("pwText"+pwText);
        console.log("pwCheckText"+pwCheckText);
        console.log("emailText"+emailText);
        console.log("numText"+numText);
        console.log("==============================");
        setFinish(false);
    },[finish]);

    return(
        <Container>
            <Header>
                <Pressable>
                    <Icon name="chevron-back-outline" size={30} color="#1D1D1D"/>
                </Pressable>
                <HeaderText>회원가입</HeaderText>
                <Pressable>
                    <Icon name="close-outline" size={30} color="#1D1D1D"/>
                </Pressable>
            </Header>
            <InputBox>
                <Input title="이름" changeText={setNameText} mbottom="10"/>
                <Input title="ID" changeText={setIdText} mbottom="10"/>
                <Input title="P/W" changeText={setPwText} mbottom="10"/>
                <Input title="P/W 확인" changeText={setPwCheckText} mbottom="10"/>
                <Input title="E-mail" changeText={setEmailText} mbottom="10"/>
                <Input title="학번" changeText={setNumText} mbottom="10"/>
                <Input title="123" changeText={setNumText} mbottom="30"/>
            </InputBox>
            <PressableBox>
                <View>
                    <Text>학부/학과</Text>
                </View>
                <BlackButton title="본인인증 하기" mbottom="60" move=""/>
                <BlueButton title="회원가입 완료" click={setFinish} mbottom="68"/>
            </PressableBox>
        </Container>
    )
}

export default JoinPage;