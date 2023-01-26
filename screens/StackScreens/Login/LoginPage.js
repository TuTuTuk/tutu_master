import React, { useEffect, useState } from "react";
import { Text,ActivityIndicator } from "react-native";
import styled from "styled-components/native";
import Input from "../../../components/Input";
import BlueButton from "../../../components/BlueButton";
import BlackButton from "../../../components/BlackButton";
import auth from "@react-native-firebase/auth";


const Container = styled.ScrollView.attrs(()=>({
        contentContainerStyle:{
            showsVerticalScrollIndicator:false,
            alignItems:"center"
        }
    }))`
    width:100%;
    background-color: white;
`;

const LogoImage = styled.Image`
    width:33.33%;
    height:95px;
    margin-top:44px;
    margin-bottom:25px;
`;

const LoginBox = styled.View`
    border-bottom-width: 1px;
    width:86.11%;
    margin-bottom:30px;
`;

const JoinSearchView = styled.View`
    width:86.11%;
`;
const HelpView = styled.View`
    width:86.11%;
`;
    const HelpTextPressable = styled.Pressable`
        align-items: center;
        margin-bottom:3px;
    `;
        const HelpText = styled.Text`
            font-weight: 400;
            font-size: 14px;
            line-height: 17px;
            color: #818181;
        `;
    const PolicyTextPressable = styled.Pressable`
            align-items: center;
            margin-bottom:3px;
    `;
        const PolicyText = styled.Text`
            font-weight: 400;
            font-size: 14px;
            line-height: 17px;
            color: #818181;
        `;
    const ClauseTextPressable = styled.Pressable`
            align-items: center;
            margin-bottom:76px;
    `;
        const ClauseText = styled.Text`
            font-weight: 400;
            font-size: 14px;
            line-height: 17px;
            color: #818181;
        `;

const ErrorMessage = styled.Text`
    width:100%;
    font-weight: 400;
    font-size: 14px;
    color: #FF3D00;
    margin-top:-5px;
    margin-bottom:8px;
`;

const LoginPage =({navigation:{navigate,reset}})=>{
    //setIdChange()함수를 통해 idChange 변수값 변경, 초기값은 ""
    const [idChange,setIdChange] = useState("");
    const [pwChange,setPwChange] = useState("");

    const [loadingCheck,setLoadingCheck] = useState(false);
    const [finish,setFinish] = useState(false);

    const [idErrorMessage,setIdErrorMessage] = useState("");
    const [pwErrorMessage,setPwErrorMessage] = useState("");

    const LoginDone = async ()=>{
        await reset({routes:[{name:"Home"}]})
        navigate("Tabs",{screen:"Home"})
    }

    const idCheck=()=>{
        if(idChange==""){
            setIdErrorMessage("ID를 입력해주세요")
            return false;
        }
        setIdErrorMessage("")
        return true;
    }

    const pwCheck=()=>{
        if(pwChange==""){
            setPwErrorMessage("Password를 입력해주세요")
            return false;
        }
        setPwErrorMessage("")
        return true;
    }

    const pressLogin=()=>{
        const idBool = idCheck();
        const pwBool = pwCheck();

        if(idBool && pwBool){ //둘다 true이면
            auth().signInWithEmailAndPassword(idChange,pwChange)
                .then(()=>LoginDone())
                .catch((error)=>{
                    console.log(error)
                    if(error.toString().includes('invalid-email')){
                        setIdErrorMessage("유효하지 않은 이메일 형식 입니다.")
                    }
                    if(error.toString().includes('user-not-found')){
                        setIdErrorMessage("이메일을 찾을 수 없습니다.")
                    }
                    if(error.toString().includes("wrong-password")){
                        setIdErrorMessage("");
                        setPwErrorMessage("비밀번호가 틀렸습니다.");
                    }
                    if(error.toString().includes("too-many-requests")){
                        setIdErrorMessage("잠시 후 다시 시도해 주세요.")
                    }
                })
        }
    }

    return (
        <Container>
            {loadingCheck ?<ActivityIndicator style={{position:"absolute"}} size="large"/> :null}
            <LogoImage
                resizeMode="stretch"
                source={require('../../../images/tutu-logo.png')}
            />
            <LoginBox>
                    <Input title="ID" changeText={setIdChange} mbottom="10"/>
                        {idErrorMessage==""? null : <ErrorMessage>{idErrorMessage}</ErrorMessage>}
                    <Input title="P/W" changeText={setPwChange} mbottom="20"/>
                        {pwErrorMessage==""? null : <ErrorMessage>{pwErrorMessage}</ErrorMessage>}
                    <BlueButton title="로그인" click={pressLogin} mbottom="35" />
            </LoginBox>
            <JoinSearchView>
                <BlackButton title="회원가입" mbottom="30" click={null} move="JoinPage"/>
                <BlackButton title="아이디 찾기" mbottom="10" click={null} move="IdSearchPage"/>
                <BlackButton title="비밀번호 찾기" mbottom="45" click={null} move=""/>
            </JoinSearchView>
            <HelpView>
                <HelpTextPressable>
                    <HelpText>도움말</HelpText>
                </HelpTextPressable>
                <PolicyTextPressable>
                    <PolicyText>개인정보처리방침</PolicyText>
                </PolicyTextPressable>
                <ClauseTextPressable>
                    <ClauseText>약관</ClauseText>
                </ClauseTextPressable>
            </HelpView>
        </Container>
    )
}

export default LoginPage;