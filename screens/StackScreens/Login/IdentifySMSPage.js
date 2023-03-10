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
            <TopBar title="SMS??? ????????????"/>
            <InfoBox>
                <Input title="??????" changeText={setNameText} mbottom="10"/>
                {clickDone? nameText=="" ? <RedText>????????? ????????? ?????????.</RedText>:null : null}
                <SelectInfo>
                    <ForeignGenderView>
                        <ForeignGenderText>???-?????????</ForeignGenderText>
                        <LeftRightChooseBox>
                            <SelectLeft onPress={()=>setAreForeign(false)} choose={areForeign} divide={true}>
                                <Text>?????????</Text>
                            </SelectLeft>
                            <SelectRight onPress={()=>setAreForeign(true)} choose={areForeign} divide={true}>
                                <Text>?????????</Text>
                            </SelectRight>
                        </LeftRightChooseBox>
                    </ForeignGenderView>
                    <ForeignGenderView>
                        <ForeignGenderText>??????</ForeignGenderText>
                        <LeftRightChooseBox>
                        <SelectLeft onPress={()=>setAreMale(true)} choose={areMale} divide={false}>
                                <Text>??????</Text>
                            </SelectLeft>
                            <SelectRight onPress={()=>setAreMale(false)} choose={areMale} divide={false}>
                                <Text>??????</Text>
                            </SelectRight>
                        </LeftRightChooseBox>
                    </ForeignGenderView>
                </SelectInfo>
                <Input title="????????????" changeText={setNameText} mbottom="10"/>
                {clickDone? birthText=="" ? <RedText>??????????????? ?????? ????????? ?????????.</RedText>:null : null}
                <Input title="????????? ??????" changeText={setNameText} mbottom="10"/>
                {clickDone? phoneNumText=="" ? <RedText>????????? ???????????? ????????????.</RedText>:null : null}
                <Input title="????????????" changeText={setNameText} mbottom="15"/>
                {clickDone? identNumText=="" ? <RedText>??????????????? ???????????? ????????????.</RedText>:null : null}
                <BlackButton title="???????????? ????????????" mbottom="60" click={null} move=""/>
            </InfoBox>
            <CompleteBox>
                <BlueButton title="???????????? ??????" click={checkBlank} mbottom="10"/>
            </CompleteBox>
        </Container>
    )
}
export default IdentifySMSPage;