import React, { useState,useEffect } from "react";
import styled from "styled-components/native";
import Icon from "react-native-vector-icons/Ionicons";
import Input from "../../../components/Input";
import BlueButton from "../../../components/BlueButton";
import BlackButton from "../../../components/BlackButton";

import auth from "@react-native-firebase/auth";
import firestore from '@react-native-firebase/firestore';

import TopBar from "../../../components/TopBar";
import { Dimensions } from "react-native";

const Container = styled.ScrollView.attrs(()=>({
    contentContainerStyle:{
        showsVerticalScrollIndicator:false,
        alignItems:"center"
    }
}))`
    width:100%;
    background-color: #FFFFFF;
`;

const InputBox = styled.View`
    width:86.1%;
    align-items: center;
`
    const IDView = styled.View`
        width:100%;
        flex-direction: column;
        margin-bottom:10px;
    `;
        const IDText = styled.Text`
            font-weight: 400;
            font-size: 14px;
            margin-bottom:5px;
            color: #1D1D1D;
        `;
        const IDTextButtonView = styled.View`
        `;
            const IDTextInput = styled.TextInput`
                width:100%;
                height:${({height})=>height*0.0589}px;
                padding-left:10px;
                background: #E3E3E3;
                font-weight: 400;
                font-size: 16px;
                border-radius: 10px;        
            `;
            const OverlapPressable = styled.Pressable`
                width: 24.1%;
                height: ${({height})=>height*0.0516}px;
                position:absolute;
                border-radius: 10px;
                right:2px;
                top:3px;
                bottom:2px;
                background-color: #545454;
                justify-content: center;
            `;
                const OverlapText = styled.Text`
                    font-weight: 500;
                    font-size: 16px;
                    color: #FFFFFF;
                    text-align: center;
                `;
    const DepartmentBox = styled.View`
        width:100%;
        margin-bottom: 30px;
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
        margin-bottom:10px;
        background: #E3E3E3;
        justify-content: center;
        padding-left:10px;
    `;
        const DepartmentText = styled.Text`
            font-weight: 400;
            font-size: 16px;
            color: #818181;
        `;


const PressableBox = styled.View`
    width:86.1%;
    align-items: center;
`;

const DepartBackView=styled.Pressable`
    position:absolute;
    background-color: black;
    opacity: 0.7;
    width:100%;
    height:100%;
`;
const ModalView = styled.View`
    position:absolute;
    width:86.11%;
    top:92px;
    background-color: #FFFFFF;
    border-radius: 10px;
    align-items:center;
`;
    const ModalTitle = styled.Text`
        font-weight: 700;
        font-size: 16px;
        color: #1D1D1D;
        margin-top:14px;
        margin-bottom:27px;
    `;

    const RadioBox = styled.View`
        width:100%;
        height:100%;
        flex-direction: column;
        align-items: flex-start;

    `;
        const RadioPressable = styled.Pressable`
            width:100%;
            padding-left:15px;
            flex-direction:row;
            margin-bottom:25px;
        `;
        const RadioContent= styled.Text`
            margin-left:15px;
            font-weight: 400;
            font-size: 14px;
            text-align: center;
            justify-content:center;
            color: #1D1D1D;
        `;

const ErrorMessage = styled.Text`
    width:100%;
    font-weight: 400;
    font-size: 14px;
    color: #FF3D00;
    margin-top:-5px;
    margin-bottom:8px;
`;


const JoinPage =({navigation:{navigate,reset}})=>{
    const height = Dimensions.get('window').height;
    console.log(height);
    //input
    const [nameText,setNameText] = useState("");
    const [idText,setIdText] = useState("");
    const [pwText,setPwText] = useState("");
    const [pwCheckText,setPwCheckText] = useState("");
    const [emailText,setEmailText] = useState("");
    const [numText,setNumText] = useState("");

    //????????? ????????? ??????
    const [chooseRadio,setChooseRadio] = useState("");
    
    //modal
    const [dpartmentModal,setDepartModal] = useState("");

    const [finish,setFinish] = useState(false);
    
    //?????? ?????????
    const [nameError,setNameError] = useState("");
    const [pwError,setPwError] = useState("");
    const [pwCheckError,setPwCheckError] = useState("");
    const [emailError,setEmailError] = useState("");
    const [numError,setNumError] = useState("");
    const [departError,setDepartError] = useState("");


    const nameCheck=()=>{
        if(nameText==""){
            setNameError("????????? ???????????? ?????????");
            return false;
        }
        setNameError("");
        return true;
    }
    const passwordCheck=async()=>{
        if(pwText.length<6) {
            setPwError("6?????? ?????? ??????????????????");
            return false;
        }
        if(pwText.includes(' ')) {
            setPwError("??????, ??????????????? ????????? ??? ????????????.");
            return false;
        }
        if(pwText!=pwCheckText) {
            setPwError("");
            setPwCheckError("P/W??? ???????????? ????????????.");
            return false;
        }
        setPwError("");
        setPwCheckError("");
        console.log("pw")
        return true;
    }

    const emailCheck=()=>{
        const regex = /\w+@+[a-z]+.com/; 
        if(!regex.test(emailText)) {
            setEmailError("????????? ????????? ?????? ?????? ????????? ??????????????????")
            return false;
        }
        setEmailError("");
        console.log("email")
        return true;
    }

    const numCheck=()=>{
        const regex = /\d{10}/; 
        if(!regex.test(numText)){
            setNumError("????????? ????????? ????????? ?????????")
            return false;
        }
        setNumError("");
        console.log("num")
        return true;
    }

    const departCheck=()=>{
        if(chooseRadio==""){
            setDepartError("????????? ??????/????????? ??????????????????")
            return false;
        }
        setDepartError("");
        console.log("depart")
        return true;
    }

    useEffect(()=>{ //?????? ???????????? modal ??????
        setTimeout(
            ()=>setDepartModal(false)
        ,200); 
    },[chooseRadio])
    
    const onPress=()=>{

        //??????
        const nameBool = nameCheck();
        const pwBool = passwordCheck();
        const emailBool = emailCheck();
        const numBool = numCheck(); 
        const departBool = departCheck();

        if(!nameBool || !pwBool || !emailBool || !numBool || !departBool) return; //???????????? false ?????? return

        auth().createUserWithEmailAndPassword(emailText,pwText)
            .then(async()=>{ //???????????? ?????? ???
                await auth().currentUser.updateProfile({displayName:nameText,photoURL:"false"})
                await firestore().collection("users").doc(auth().currentUser.uid).set({ //?????? ?????? ?????? ??????
                    user_uid:auth().currentUser.uid,
                    user_name:auth().currentUser.displayName,
                    user_department:chooseRadio,
                    user_class_number:numText,
                    user_boards_count:0,
                    user_comment_count:0,
                    user_reported_count:0,
                    user_createTime:new Date()
                }).then(()=>{
                    console.log("join!!");
                    console.log(auth().currentUser.photoURL);
                    reset({routes:[{name:"Home"}]}) //????????????
                    navigate("Tabs",{screen:"Home"})
                })
            })
            .catch((error)=>{ //???????????? ?????? ???
                if(error.code=='auth/email-already-in-use'){ //????????? ?????? ??????
                    setEmailError("?????? ???????????? ????????? ?????????.")
                    setPwError("")
                }
                if (error.code === 'auth/invalid-email') { //email??? ????????? ?????? ?????? ???
                    setEmailError("????????? ????????? ?????? ?????? ????????? ??????????????????")
                    setPwError("")
                }
                console.error(error);
            })
    }
    
    return(
        <Container>
            <TopBar title="????????????"/>
            <InputBox>
                <Input title="??????" changeText={setNameText} mbottom="10"/>
                {nameError==""?null:<ErrorMessage>{nameError}</ErrorMessage>}
                <IDView>
                    <IDText>ID</IDText>
                    <IDTextButtonView>
                        <IDTextInput height={height} placeholder="ID??? ???????????????"/>
                        <OverlapPressable height={height}>
                            <OverlapText>????????????</OverlapText>
                        </OverlapPressable>
                    </IDTextButtonView>
                </IDView>
                <Input title="P/W" changeText={setPwText} mbottom="10"/>
                {pwError==""?null:<ErrorMessage>{pwError}</ErrorMessage>}
                <Input title="P/W ??????" changeText={setPwCheckText} mbottom="10"/>
                {pwCheckError==""?null:<ErrorMessage>{pwCheckError}</ErrorMessage>}
                <Input title="E-mail" changeText={setEmailText} mbottom="10"/>
                {emailError==""?null:<ErrorMessage>{emailError}</ErrorMessage>}
                <Input title="??????" changeText={setNumText} mbottom="10"/>
                {numError==""?null:<ErrorMessage>{numError}</ErrorMessage>}
                <DepartmentBox>
                    <Text>??????/??????</Text>
                    <DepartmentPress onPress={()=>setDepartModal(true)}>
                        {chooseRadio==""?<DepartmentText>????????? ???????????????</DepartmentText>:<DepartmentText style={{color:"#1D1D1D"}}>{chooseRadio}</DepartmentText>}
                    </DepartmentPress>
                    {departError==""?null:<ErrorMessage>{departError}</ErrorMessage>}
                </DepartmentBox>
            </InputBox>
            <PressableBox>
                <BlackButton title="???????????? ??????" mbottom="60" click={null} move="IdentificationPage"/>
                <BlueButton title="???????????? ??????" click={onPress} mbottom="68"/>
            </PressableBox>
            {dpartmentModal?
                <>
                    <DepartBackView
                        onPress={()=>setDepartModal(false)}                    
                    />
                    <ModalView>
                        <ModalTitle>????????? ???????????????</ModalTitle>
                        <RadioBox>
                            <RadioPressable 
                                onPress={()=>setChooseRadio("??????????????????")}
                            >
                            {chooseRadio=="??????????????????"?<Icon name="radio-button-on-outline" size={20}/>:<Icon name="radio-button-off-outline" size={20}/>}
                                <RadioContent>??????????????????</RadioContent>
                            </RadioPressable>
                            <RadioPressable 
                                onPress={()=>setChooseRadio("???????????????")}
                            >
                            {chooseRadio=="???????????????"?<Icon name="radio-button-on-outline" size={20}/>:<Icon name="radio-button-off-outline" size={20}/>}
                                <RadioContent>???????????????</RadioContent>
                            </RadioPressable>
                            <RadioPressable                                
                                onPress={()=>setChooseRadio("??????????????????")}
                            >
                            {chooseRadio=="??????????????????"?<Icon name="radio-button-on-outline" size={20}/>:<Icon name="radio-button-off-outline" size={20}/>}
                                <RadioContent>??????????????????</RadioContent>
                            </RadioPressable>
                            <RadioPressable                                
                                onPress={()=>setChooseRadio("???????????????")}
                            >
                            {chooseRadio=="???????????????"?<Icon name="radio-button-on-outline" size={20}/>:<Icon name="radio-button-off-outline" size={20}/>}
                                <RadioContent>???????????????</RadioContent>
                            </RadioPressable>
                            <RadioPressable                                
                            onPress={()=>setChooseRadio("?????????????????????")}
                            >
                            {chooseRadio=="?????????????????????"?<Icon name="radio-button-on-outline" size={20}/>:<Icon name="radio-button-off-outline" size={20}/>}
                                <RadioContent>?????????????????????</RadioContent>
                            </RadioPressable>
                            <RadioPressable                                
                            onPress={()=>setChooseRadio("???????????????????????????")}
                            >
                            {chooseRadio=="???????????????????????????"?<Icon name="radio-button-on-outline" size={20}/>:<Icon name="radio-button-off-outline" size={20}/>}
                                <RadioContent>???????????????????????????</RadioContent>
                            </RadioPressable>
                            <RadioPressable                                
                            onPress={()=>setChooseRadio("???????????????")}
                            >
                            {chooseRadio=="???????????????"?<Icon name="radio-button-on-outline" size={20}/>:<Icon name="radio-button-off-outline" size={20}/>}
                                <RadioContent>???????????????</RadioContent>
                            </RadioPressable>
                            <RadioPressable                                
                            onPress={()=>setChooseRadio("??????????????????")}
                            >
                            {chooseRadio=="??????????????????"?<Icon name="radio-button-on-outline" size={20}/>:<Icon name="radio-button-off-outline" size={20}/>}
                                <RadioContent>??????????????????</RadioContent>
                            </RadioPressable>
                            <RadioPressable                                
                            onPress={()=>setChooseRadio("?????????????????????")}
                            >
                            {chooseRadio=="?????????????????????"?<Icon name="radio-button-on-outline" size={20}/>:<Icon name="radio-button-off-outline" size={20}/>}
                                <RadioContent>?????????????????????</RadioContent>
                            </RadioPressable>
                            <RadioPressable                                
                            onPress={()=>setChooseRadio("????????????????????????")}
                            >
                            {chooseRadio=="????????????????????????"?<Icon name="radio-button-on-outline" size={20}/>:<Icon name="radio-button-off-outline" size={20}/>}
                                <RadioContent>????????????????????????</RadioContent>
                            </RadioPressable>
                            <RadioPressable                                
                            onPress={()=>setChooseRadio("?????????-?????? ?????????")}
                            >
                            {chooseRadio=="?????????-?????? ?????????"?<Icon name="radio-button-on-outline" size={20}/>:<Icon name="radio-button-off-outline" size={20}/>}
                                <RadioContent>?????????-?????? ?????????</RadioContent>
                            </RadioPressable>
                            <RadioPressable                                
                            onPress={()=>setChooseRadio("????????????")}
                            >
                            {chooseRadio=="????????????"?<Icon name="radio-button-on-outline" size={20}/>:<Icon name="radio-button-off-outline" size={20}/>}
                                <RadioContent>????????????</RadioContent>
                            </RadioPressable>
                            <RadioPressable                                
                            onPress={()=>setChooseRadio("??????????????????")}
                            >
                            {chooseRadio=="??????????????????"?<Icon name="radio-button-on-outline" size={20}/>:<Icon name="radio-button-off-outline" size={20}/>}
                                <RadioContent>??????????????????</RadioContent>
                            </RadioPressable>
                            
                        </RadioBox>
                    </ModalView>
                </>
            :null}
        </Container>
    )
}

export default JoinPage;