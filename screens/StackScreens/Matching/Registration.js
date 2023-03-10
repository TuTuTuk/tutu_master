import React, {useState, useEffect} from "react";
import { View, TouchableOpacitym, Modal} from "react-native";
import styled from "styled-components/native";
import Icon from 'react-native-vector-icons/Ionicons';
import LinearGradient from 'react-native-linear-gradient';
import { useNavigation } from "@react-navigation/native";

import auth from "@react-native-firebase/auth";
import firestore from '@react-native-firebase/firestore';
import TopBar from "../../../components/TopBar";
import Input from "../../../components/Input";
import BlueButton from "../../../components/BlueButton";
import ModalTwoOptions from "../../../components/ModalTwoOptions";

import { RadioButton } from "react-native-paper";


const Container = styled.ScrollView.attrs(() => ({
    contentContainerStyle: {
        showVerticalScrollIndicator: false,
    }
}))`
    flex:1;
`;

const InputBox = styled.View`
    width: 86%;
    align-self: center;
`;

//--------------------------------------------------------
//----------------------Radio Button----------------------
//--------------------------------------------------------
const ModalBackView = styled.View`
    position: absolute;
    background-color: black;
    opacity: 0.5;
    width: 100%;
    height: 100%;
`;
const RadioView = styled.View`
    background-color: white;
    width : 86%;
    top : 12.6%;
    border-radius: 10px;
    padding: 15px;
    align-self: center;
    //border: 1px;
`;
    const ChoiceText = styled.Text`
        font-family: 'Pretendard';
        font-style: normal;
        font-weight: 700;
        font-size: 16px;
        line-height: 19px;
        text-align: center;
        margin-bottom: 20px;
        //border: 1px;
    `;

    const RadioPressable = styled.Pressable`
            width:100%;
            flex-direction:row;
            margin-bottom:4%;
            //border: 1px;
        `;
        const RadioContent= styled.Text`
            margin-left:15px;
            font-weight: 400;
            font-size: 14px;
            text-align: center;
            justify-content:center;
        `;
    //-------------------------------------
    //?????? ????????????-------------------------
    const Box = styled.View`
        width:86%;
        margin-bottom: 10px;
        align-self: center;
`;
    const Text = styled.Text`
        font-weight: 400;
        font-size: 14px;
        line-height: 17px;
        margin-bottom: 5px;
        margin-left: 6px;
    `;
    const TextInput = styled.TouchableOpacity`
        width:100%;
        height:40px;
        padding-left:10px;
        border-radius: 10px;
        background-color: #E3E3E3;
        font-weight: 400;
        font-size: 16px;
        justify-content: center;
    `;
        const InText = styled.Text`
            font-family: 'Pretendard';
            font-style: normal;
            font-weight: 400;
            font-size: 16px;
            line-height: 19px;
            color: #818181;
        `;
    //-----------------------------------------------------
    //--------------------Blue Button----------------------
    const BlueBtn = styled.Pressable`
        width:86%;
        height:40px;
        border-radius: 10px;
        background-color:#0062FF;
        align-items: center;
        justify-content: center;
        align-self: center;
    `;

    const BlueBtnText = styled.Text`
        font-weight: 600;
        font-size: 16px;
        line-height: 19px;
        color: #FFFFFF;
    `;


const Registration = ({navigation:{navigate}}) => {

    const navigation = useNavigation();

    const [name, setName] = useState("");
    const [major, setMajor] = useState("");
    const [DetailMajor, setDetailMajor] = useState("");
    const [Contact, setContact] = useState("");
    
    const [registModal, setRegistModal] = useState(false);
    
    const [radioVisible, setRadioVisible] = useState(false);

    return(
    <>
        <ModalTwoOptions
            visible={registModal}
            setvisible={setRegistModal}
            visibleyes={null}
            setvisibleyes = {null}
            yestext="??????"
            title="????????? ????????????"
            contents="???-???????????? ???????????? ?????? ????????? ??? ????????????. ????????? ????????? ?????????????????????????"
        ></ModalTwoOptions>
        <Modal
            animationType="fade"
            transparent={true}
            visible={radioVisible}
        >
            <ModalBackView></ModalBackView>
            <RadioView>
                <ChoiceText>????????? ???????????????</ChoiceText>
                    <RadioPressable 
                        onPress={()=>{
                            setMajor("??????????????????")
                            setRadioVisible(false)}}
                    >
                    {major=="??????????????????"?<Icon name="radio-button-on-outline" size={20}/>:<Icon name="radio-button-off-outline" size={20}/>}
                        <RadioContent>??????????????????</RadioContent>
                    </RadioPressable>
                    <RadioPressable 
                        onPress={()=>{
                            setMajor("???????????????")
                            setRadioVisible(false)}}
                    >
                    {major=="???????????????"?<Icon name="radio-button-on-outline" size={20}/>:<Icon name="radio-button-off-outline" size={20}/>}
                        <RadioContent>???????????????</RadioContent>
                    </RadioPressable>
                    <RadioPressable 
                        onPress={()=>{
                            setMajor("??????????????????")
                            setRadioVisible(false)}}
                    >
                    {major=="??????????????????"?<Icon name="radio-button-on-outline" size={20}/>:<Icon name="radio-button-off-outline" size={20}/>}
                        <RadioContent>??????????????????</RadioContent>
                    </RadioPressable>
                    <RadioPressable 
                        onPress={()=>{
                            setMajor("???????????????")
                            setRadioVisible(false)}}
                    >
                    {major=="???????????????"?<Icon name="radio-button-on-outline" size={20}/>:<Icon name="radio-button-off-outline" size={20}/>}
                        <RadioContent>???????????????</RadioContent>
                    </RadioPressable>
                    <RadioPressable 
                        onPress={()=>{
                            setMajor("?????????????????????")
                            setRadioVisible(false)}}
                    >
                    {major=="?????????????????????"?<Icon name="radio-button-on-outline" size={20}/>:<Icon name="radio-button-off-outline" size={20}/>}
                        <RadioContent>?????????????????????</RadioContent>
                    </RadioPressable>
                    <RadioPressable 
                        onPress={()=>{
                            setMajor("???????????????????????????")
                            setRadioVisible(false)}}
                    >
                    {major=="???????????????????????????"?<Icon name="radio-button-on-outline" size={20}/>:<Icon name="radio-button-off-outline" size={20}/>}
                        <RadioContent>???????????????????????????</RadioContent>
                    </RadioPressable>
                    <RadioPressable 
                        onPress={()=>{
                            setMajor("???????????????")
                            setRadioVisible(false)}}
                    >
                    {major=="???????????????"?<Icon name="radio-button-on-outline" size={20}/>:<Icon name="radio-button-off-outline" size={20}/>}
                        <RadioContent>???????????????</RadioContent>
                    </RadioPressable>
                    <RadioPressable 
                        onPress={()=>{
                            setMajor("??????????????????")
                            setRadioVisible(false)}}
                    >
                    {major=="??????????????????"?<Icon name="radio-button-on-outline" size={20}/>:<Icon name="radio-button-off-outline" size={20}/>}
                        <RadioContent>??????????????????</RadioContent>
                    </RadioPressable>
                    <RadioPressable 
                        onPress={()=>{
                            setMajor("?????????????????????")
                            setRadioVisible(false)}}
                    >
                    {major=="?????????????????????"?<Icon name="radio-button-on-outline" size={20}/>:<Icon name="radio-button-off-outline" size={20}/>}
                        <RadioContent>?????????????????????</RadioContent>
                    </RadioPressable>
                    <RadioPressable 
                        onPress={()=>{
                            setMajor("????????????????????????")
                            setRadioVisible(false)}}
                    >
                    {major=="????????????????????????"?<Icon name="radio-button-on-outline" size={20}/>:<Icon name="radio-button-off-outline" size={20}/>}
                        <RadioContent>????????????????????????</RadioContent>
                    </RadioPressable>
                    <RadioPressable 
                        onPress={()=>{
                            setMajor("?????????-?????? ?????????")
                            setRadioVisible(false)}}
                    >
                    {major=="?????????-?????? ?????????"?<Icon name="radio-button-on-outline" size={20}/>:<Icon name="radio-button-off-outline" size={20}/>}
                        <RadioContent>?????????-?????? ?????????</RadioContent>
                    </RadioPressable>
                    <RadioPressable 
                        onPress={()=>{
                            setMajor("????????????")
                            setRadioVisible(false)}}
                    >
                    {major=="????????????"?<Icon name="radio-button-on-outline" size={20}/>:<Icon name="radio-button-off-outline" size={20}/>}
                        <RadioContent>????????????</RadioContent>
                    </RadioPressable>
                    <RadioPressable 
                        onPress={()=>{
                            setMajor("??????????????????")
                            setRadioVisible(false)}}
                    >
                    {major=="??????????????????"?<Icon name="radio-button-on-outline" size={20}/>:<Icon name="radio-button-off-outline" size={20}/>}
                        <RadioContent>??????????????????</RadioContent>
                    </RadioPressable>         
            </RadioView>
            </Modal>
        <Container>
            <TopBar title="???????????? ???,?????? ????????????"></TopBar>
            <InputBox>
                <Input title="??????" mbottom={10} changeText={setName}></Input>
            </InputBox>
            <Box>
                <Text>??????</Text>
                <TextInput onPress={()=>setRadioVisible(true)}>
                    <InText>????????? ???????????????</InText>
                </TextInput>
            </Box>
            <InputBox>
                <Input title="????????????" mbottom={10} changeText={setDetailMajor}></Input>
            </InputBox>
            <InputBox>
                <Input title="????????? (????????? ???)" mbottom={10} changeText={setContact}></Input>
            </InputBox>
            <BlueBtn onPress={()=>{
                /* firestore().collection("users").doc(auth().currentUser.uid).collection("Seniors-Juniors").doc(name).set({
                    Name: name,
                    Major: major,
                    Detail_Major : DetailMajor,
                    Contact : Contact
                })
                navigation.goBack() */
                name?setRegistModal(true):setRegistModal(false);
                major?setRegistModal(true):setRegistModal(false);
                Contact?setRegistModal(true):setRegistModal(false);
            }}>
                <LinearGradient style={{
                    width:"100%",
                    height:"100%",
                    borderRadius: 10,
                    alignItems:"center",
                    justifyContent:"center"
                }}
                    colors={['#0062FF', '#0A7DFF', '#1398FF']}
                    start={{x:1,y:0}} end={{x:0,y:0}}>
                    <BlueBtnText>????????????</BlueBtnText>
                </LinearGradient>
            </BlueBtn>
        </Container>
    </>
    )}
export default Registration;