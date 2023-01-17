import React, { useState,useEffect } from "react";
import { View,Pressable, TextInput } from "react-native";
import styled from "styled-components/native";
import Icon from "react-native-vector-icons/Ionicons";
import Input from "../../../components/Input";
import BlueButton from "../../../components/BlueButton";
import BlackButton from "../../../components/BlackButton";
import RadioGroup from 'react-native-radio-buttons-group';


const Container = styled.ScrollView.attrs(()=>({
    contentContainerStyle:{
        showsVerticalScrollIndicator:false,
        alignItems:"center"
    }
}))`
    width:100%;
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
    const DepartmentBox = styled.View`
        width:100%;
    `;
    const Text = styled.Text`
        font-weight: 400;
        font-size: 14px;
        line-height: 17px;
        margin-bottom: 5px;
    `;
    const DepartmentPress = styled.Pressable`
        border-radius:10px;
        width:100%;
        height:40px;
        background: #E3E3E3;
        margin-bottom: 30px;
    `;


const PressableBox = styled.View`
    width:310px;
    align-items: center;
`;

const DepartBackView=styled.View`
    position:absolute;
    background-color: black;
    opacity: 0.7;
    width:100%;
    height:100%;
`;
const ModalView = styled.View`
    position:absolute;
    width:86.11%;
    background-color: #FFFFFF;
    border-radius: 10px;
    padding-top:15px;
    padding-bottom:15px;
    align-items:center;
    justify-content: space-between;
`;



const JoinPage =()=>{
    const [nameText,setNameText] = useState("");
    const [idText,setIdText] = useState("");
    const [pwText,setPwText] = useState("");
    const [pwCheckText,setPwCheckText] = useState("");
    const [emailText,setEmailText] = useState("");
    const [numText,setNumText] = useState("");

    const [radioButtons, setRadioButtons] = useState([
        {
            id: '1', // acts as primary key, should be unique and non-empty string
            label: '컴퓨터공학부',
            value: 'option1',
            borderSize:1,
            marginBottom:2
        },
        {
            id: '2',
            label: '게임공학과',
            value: 'option2'
        },
        {
            id: '3',
            label: '인공지능학과',
            value: 'option3'
        },
        {
            id: '4',
            label: '기계공학과',
            value: 'option4'
        },
        {
            id: '5',
            label: '기계설계공학과',
            value: 'option5'
        },
        {
            id: '6',
            label: '메카트로닉스공학부',
            value: 'option6'
        },
        {
            id: '7',
            label: '전자공학부',
            value: 'option7'
        },
        {
            id: '8',
            label: '신소재공학과',
            value: 'option8'
        },
        {
            id: '9',
            label: '생명화학공학과',
            value: 'option9'
        },
        {
            id: '10',
            label: '나노반도체공학과',
            value: 'option10'
        },
        {
            id: '11',
            label: '에너지-전기 공학과',
            value: 'option11'
        },
        {
            id: '12',
            label: '경영학부',
            value: 'option12'
        },
        {
            id: '13',
            label: '디자인공학부',
            value: 'option13'
        }
    ]);


    const [department,setDepartment] = useState(false);
    const [finish,setFinish] = useState(false);


    function onPressRadioButton(radioButtonsArray) {
        setRadioButtons(radioButtonsArray);
    }

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
                <Input title="123" changeText={setNumText} mbottom="10"/>
                <DepartmentBox>
                    <Text>학부/학과</Text>
                    <DepartmentPress onPress={()=>setDepartment(true)}>
                    </DepartmentPress>
                </DepartmentBox>
            </InputBox>
            <PressableBox>
                <BlackButton title="본인인증 하기" mbottom="60" move=""/>
                <BlueButton title="회원가입 완료" click={setFinish} mbottom="68"/>
            </PressableBox>
            {department?
                <>
                    <DepartBackView></DepartBackView>
                    <ModalView>
                        <RadioGroup
                            containerStyle={{
                                width:"100%",
                                alignItems:"flex-start"
                            }}
                            radioButtons={radioButtons}
                            onPress={onPressRadioButton}
                        />
                    </ModalView>
                </>
            :null}
        </Container>
    )
}

export default JoinPage;