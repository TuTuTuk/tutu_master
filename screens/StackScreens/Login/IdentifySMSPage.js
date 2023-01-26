import React, { useState } from "react";
import { Text, View } from "react-native";
import TopBar from "../../../components/TopBar";
import styled from "styled-components";
import Input from "../../../components/Input";
import BlackButton from "../../../components/BlackButton";
import BlueButton from "../../../components/BlueButton";

const Container = styled.View`
    width:100%;
    height:100%;
    align-items:center;
`;
const InfoBox = styled.View`
    width:86.11%;
    height:80%;
`;
    const SelectInfo = styled.View`
        width:100%;
        height:15%;
        flex-direction: row;
        justify-content: space-between;
    `;
        const ForeignGenderView = styled.View`
            width:45.2%;
            height:100%;
        `;
            const ForeignGenderText = styled.Text`
                font-weight: 400;
                font-size: 14px;
                line-height: 17px;
                margin-bottom:8px;
            `;
            const LeftRightChooseBox = styled.View`
                width:100%;
                height:35px;
                flex-direction: row;
            `;
                const SelectLeft = styled.Pressable`
                    border:1px;
                    border-right-width:0;
                    border-top-left-radius: 10px;
                    border-bottom-left-radius: 10px;
                    width:50%;
                    height:100%;
                    background-color: ${(props)=>props.divide? (props.choose? "#E3E3E3":"#545454" ):(props.choose?"#545454":"#E3E3E3")};
                `;
                const SelectRight = styled.Pressable`
                    border:1px;
                    border-top-right-radius: 10px;
                    border-bottom-right-radius: 10px;
                    width:50%;
                    height:100%;
                    background-color: ${(props)=>props.divide? (props.choose? "#545454":"#E3E3E3" ):(props.choose?"#E3E3E3":"#545454")};          
                `;
const CompleteBox = styled.View`
    width:86.11%;
`;

const RedText = styled.Text`
    font-weight: 400;
    font-size: 14px;
    line-height: 17px;
    color: #FF3D00;
    margin-bottom:8px;
`;

const IdentifySMSPage=()=>{
    const [nameText,setNameText] = useState("");
    const [birthText,setBirthText] = useState("");
    const [phoneNumText,setPhoneNumText] = useState("");
    const [identNumText,setIdentNumText] = useState("");

    const [clickDone,setClickDone] = useState(false);
    
    const [areForeign,setAreForeign] = useState(false);
    const [areMale,setAreMale] = useState(false);

    const checkBlank=()=>{
        setClickDone(true);
    }

    return(
        <Container>
            <TopBar title="SMS로 인증하기"/>
            <InfoBox>
                <Input title="이름" changeText={setNameText} mbottom="10"/>
                {clickDone? nameText=="" ? <RedText>이름을 입력해 주세요.</RedText>:null : null}
                <SelectInfo>
                    <ForeignGenderView>
                        <ForeignGenderText>내-외국인</ForeignGenderText>
                        <LeftRightChooseBox>
                            <SelectLeft onPress={()=>setAreForeign(false)} choose={areForeign} divide={true}>
                                <Text>내국인</Text>
                            </SelectLeft>
                            <SelectRight onPress={()=>setAreForeign(true)} choose={areForeign} divide={true}>
                                <Text>외국인</Text>
                            </SelectRight>
                        </LeftRightChooseBox>
                    </ForeignGenderView>
                    <ForeignGenderView>
                        <ForeignGenderText>성별</ForeignGenderText>
                        <LeftRightChooseBox>
                        <SelectLeft onPress={()=>setAreMale(true)} choose={areMale} divide={false}>
                                <Text>남자</Text>
                            </SelectLeft>
                            <SelectRight onPress={()=>setAreMale(false)} choose={areMale} divide={false}>
                                <Text>여자</Text>
                            </SelectRight>
                        </LeftRightChooseBox>
                    </ForeignGenderView>
                </SelectInfo>
                <Input title="생년월일" changeText={setNameText} mbottom="10"/>
                {clickDone? birthText=="" ? <RedText>생년월일을 다시 입력해 주세요.</RedText>:null : null}
                <Input title="휴대폰 번호" changeText={setNameText} mbottom="10"/>
                {clickDone? phoneNumText=="" ? <RedText>정보가 올바르지 않습니다.</RedText>:null : null}
                <Input title="인증번호" changeText={setNameText} mbottom="15"/>
                {clickDone? identNumText=="" ? <RedText>인증번호가 일치하지 않습니다.</RedText>:null : null}
                <BlackButton title="인증번호 확인하기" mbottom="60" click={null} move=""/>
            </InfoBox>
            <CompleteBox>
                <BlueButton title="본인인증 완료" click={checkBlank} mbottom="10"/>
            </CompleteBox>
        </Container>
    )
}
export default IdentifySMSPage;