import React, { useState,useEffect } from "react";
import styled from "styled-components/native";
import Input from "../../../components/Input";
import BlueButton from "../../../components/BlueButton";
import TopBar from "../../../components/TopBar";

import auth from "@react-native-firebase/auth";

const Container = styled.View`
    width:100%;
    height:100%;
    align-items: center;
    background-color: #FFFFFF;
`;


const Header = styled.View`
    width:86.11%;
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
    width:86.11%;
    align-items: center;
`
const PressableBox = styled.View`
    width:86.11%;
    align-items: center;
`;

const InfoText = styled.Text`
    font-weight: 400;
    font-size: 14px;
    line-height: 17px;
    color: #818181;
`;


const IdSearchPage =()=>{
    const [nameText,setNameText] = useState("");
    const [emailText,setEmailText] = useState("");

    const [finish,setFinish] = useState(false);

    useEffect(()=>{
        if(finish && emailText!=null){
            auth().sendPasswordResetEmail(emailText)
            .then(()=>console.log("email전송완료"))
            .catch((error)=>console.log(error))
        }
        
        setFinish(false)
    },[finish]);

    return(
        <Container>
            <TopBar title="비밀번호 변경"/>
            <InputBox>
                <Input title="이름" changeText={setNameText} mbottom="10"/>
                <Input title="E-mail" changeText={setEmailText} mbottom="30"/>
            </InputBox>
            <PressableBox>
                <BlueButton title="본인 인증" click={()=>setFinish(!finish)} mbottom="68"/>
            </PressableBox>
            <InfoText>
                ※ 가입된 아이디가 있을 경우, 입력하신 이메일{"\n"}로 아이디를 안내해 드립니다.{"\n"}※ 만약 이메일이 오지 않는다면, 스팸 메일함으{"\n"}로 이동하지 않았는지 확인해주세요.{"\n"}※ 이메일 서비스 제공자 사정에 의해 즉시 도착{"\n"}하지 않을 수 있으니, 최대{"\n"}30분 정도 기다리신 후 다시 시도해 주세요.
            </InfoText>
        </Container>
    )
}

export default IdSearchPage;