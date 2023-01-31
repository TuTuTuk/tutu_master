import React, { useState } from "react";
import { Text, TouchableOpacity, View, Modal } from "react-native";
import styled from "styled-components/native";
import Icon from "react-native-vector-icons/Ionicons";
import Input from "../../../components/Input";

const Container = styled.ScrollView.attrs(() => ({
    contentContainerStyle: {
        showVerticalScrollIndicator: false,
    }
}))`
    flex:1;
    margin-top: 20px;
    margin-bottom: 10px;
`;

const ModalBackView=styled.View`
    position:absolute;
    width:100%;
    height:100%;
    //align-items: center;
`;
const ModalBackView2=styled.View`
    position:absolute;
    background-color: black;
    opacity: 0.5;
    width:100%;
    height:100%;
`;
const ModalView = styled.View`
    background-color: #BBBBBB;
    width:95px;
    height:50px;
    border-radius: 5px;
    justify-content: space-between;
    align-items: flex-end;
    left:90%
    padding-left:10px;
    padding-right:10px;
    padding-top:5px;
    bottom:763px;
    top:50px
`;
const ModalView2 = styled.View`
    position:absolute;
    width:86.11%;
    top:7%;
    background-color: #FFFFFF;
    border-radius: 10px;
    align-items:center;
    left:7%;
`;
const ModalBox = styled.View`
    //border:1px;
    width:90%;
    height:3.6%
    top:2.4%
    align-items: center;
    
`;
const RadioBox = styled.View`
    //border:1px;
    width:90%;
    height:90%
    top:2.4%
    //align-items: flex-start;
    padding-top:4.5%;
    
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
const ModalText = styled.Text`
    color:black;
    font-size:16px;
    
`;
const ModalinquirePressable = styled.Pressable`
    height:50%;
`;
const ModalnewPressable = styled.Pressable`
    height:50%;
`;

const HeaderBox = styled.View`
    //border: 1px;
    flex:1;
    width: 89.7%;
    height: 5.4%;
    align-self: center;
    margin-bottom: 20px;
    margin-left: 7px;
    margin-right: 7px;

    flex-direction:row;
    justify-content: space-between;
    align-items: center;
`;
    const BackView = styled.View`
        border-color: orange;
        width:10%;
    `;
        const BackBtn = styled.TouchableOpacity`
            //border : 1px;
            width  : 100%;
            height : 40px;
            justify-content: center;
        `;
    const BoardTextBox = styled.View`
        //border-color: black;
        //border-radius: 3px;
        //background-color: #E3E3E3;
        width : 76%;
        height: 100%;
        //flex-direction: row;
        padding-left:21%;
        justify-content:center;
    `;

    const PlusBtn = styled.TouchableOpacity`
        border-color: orange;
        width:5%;
        height: 100%;
        justify-content: center;
    `;

const MiddleText = styled.Text`
    color:black;
    font-size:12px;
    
`;

const TitleText = styled.Text`
    color:black;
    font-size:16px;
`;

const NameBox1 = styled.View`
    //border:1px;
    margin:1%;
`;
const NameBox2 = styled.View`
    //border:1px;
    //margin:1%;
    
`;
const SmallText = styled.Text`
    color:black;
    font-size:14px;
`;
const NameText = styled.Text`
    font-size:16px;
    color:#818181;
`;
const NameBtn = styled.Pressable`
    border-radius:10px;
    background-color:#E3E3E3;
    padding-top:11px;
    padding-bottom:10px;
    padding-left:10px;
    padding-right:15px;
    justify-content:space-between;
    flex-direction:row; 
`;
const MajorBox = styled.View`
    border:1px;
`;
const MajorBox2 = styled.View`
    border:1px;
    padding-bottom:2%;
    padding-left:35px;
    padding-right:25px;
`;
const EyeBox = styled.View`
    //border:1px;
    //align-items: center;
    padding-top:30px;
    padding-bottom:10px;
    padding-left:38px;
    padding-right:24.85px;
`;
const EyeTextBox = styled.View`
    align-items: center;
    padding-top:8px;
`;
const EyeText = styled.Text`
            color:white;
            font-size:16px;
        `;

const EyeBtn = styled.Pressable`
        border-radius:10px;
        background-color:#0062FF;
        //align-items: center;
        //width:310px;
        height:40px;
    `;


const Cancle = ({navigation:{navigate}})=>{
    const [click,setClick] = useState(false);
    const [modalVisible,setModalVisible] = useState(false)
    const [modalVisible2,setModalVisible2] = useState(false)
    const [chooseRadio,setChooseRadio] = useState("");
    
    function onPressRadioButton(radioButtonsArray) {
        setRadioButtons(radioButtonsArray);
        console.log(radioButtonsArray)
    }

    return(
        <Container>
        <View style={styled.container}></View>
        <Modal
            animationType="fade"
            transparent={true}
            visible={modalVisible}
        >
            <ModalBackView>
            </ModalBackView>
            <ModalView>
                <ModalinquirePressable>
                    <MiddleText>
                        문의하기
                    </MiddleText>
                </ModalinquirePressable>
                <ModalnewPressable onPress={()=>setModalVisible(false)}>
                    <MiddleText>
                        새로고침
                    </MiddleText>
                </ModalnewPressable>
            </ModalView>
        </Modal>
        <Modal
            animationType="fade"
            transparent={true}
            visible={modalVisible2}
        >
            <ModalBackView2>
            </ModalBackView2>
            <ModalView2>
                <ModalBox>
                    <ModalText>
                        학과를 선택하세요
                    </ModalText>
                </ModalBox>
                <RadioBox>
                        <RadioPressable 
                            onPress={()=>setChooseRadio("컴퓨터공학부")}
                            onPressIn={()=>setClick(true)}    
                            onLongPress={()=>console.log("onLongPress")}  
                            onPressOut={()=>setModalVisible2(false)} 
                        >
                        {chooseRadio=="컴퓨터공학부"?<Icon name="radio-button-on-outline" size={20}/>:<Icon name="radio-button-off-outline" size={20}/>}
                            <RadioContent>컴퓨터공학부</RadioContent>
                        </RadioPressable>
                        <RadioPressable 
                            onPress={()=>setChooseRadio("게임공학과")}
                            onPressIn={()=>setClick(true)}    
                            onLongPress={()=>console.log("onLongPress")}  
                            onPressOut={()=>setModalVisible2(false)}
                        >
                        {chooseRadio=="게임공학과"?<Icon name="radio-button-on-outline" size={20}/>:<Icon name="radio-button-off-outline" size={20}/>}
                            <RadioContent>게임공학과</RadioContent>
                        </RadioPressable>
                        <RadioPressable                                
                            onPress={()=>setChooseRadio("인공지능학과")}
                            onPressIn={()=>setClick(true)}    
                            onLongPress={()=>console.log("onLongPress")}  
                            onPressOut={()=>setModalVisible2(false)}
                        >
                        {chooseRadio=="인공지능학과"?<Icon name="radio-button-on-outline" size={20}/>:<Icon name="radio-button-off-outline" size={20}/>}
                            <RadioContent>인공지능학과</RadioContent>
                        </RadioPressable>
                        <RadioPressable                                
                            onPress={()=>setChooseRadio("기계공학과")}
                            onPressIn={()=>setClick(true)}    
                            onLongPress={()=>console.log("onLongPress")}  
                            onPressOut={()=>setModalVisible2(false)}
                        >
                        {chooseRadio=="기계공학과"?<Icon name="radio-button-on-outline" size={20}/>:<Icon name="radio-button-off-outline" size={20}/>}
                            <RadioContent>기계공학과</RadioContent>
                        </RadioPressable>
                        <RadioPressable                                
                        onPress={()=>setChooseRadio("기계설계공학과")}
                        onPressIn={()=>setClick(true)}    
                        onLongPress={()=>console.log("onLongPress")}  
                        onPressOut={()=>setModalVisible2(false)}
                        >
                        {chooseRadio=="기계설계공학과"?<Icon name="radio-button-on-outline" size={20}/>:<Icon name="radio-button-off-outline" size={20}/>}
                            <RadioContent>기계설계공학과</RadioContent>
                        </RadioPressable>
                        <RadioPressable                                
                        onPress={()=>setChooseRadio("메카트로닉스공학부")}
                        onPressIn={()=>setClick(true)}    
                        onLongPress={()=>console.log("onLongPress")}  
                        onPressOut={()=>setModalVisible2(false)}
                        >
                        {chooseRadio=="메카트로닉스공학부"?<Icon name="radio-button-on-outline" size={20}/>:<Icon name="radio-button-off-outline" size={20}/>}
                            <RadioContent>메카트로닉스공학부</RadioContent>
                        </RadioPressable>
                        <RadioPressable                                
                        onPress={()=>setChooseRadio("전자공학부")}
                        onPressIn={()=>setClick(true)}    
                        onLongPress={()=>console.log("onLongPress")}  
                        onPressOut={()=>setModalVisible2(false)}
                        >
                        {chooseRadio=="전자공학부"?<Icon name="radio-button-on-outline" size={20}/>:<Icon name="radio-button-off-outline" size={20}/>}
                            <RadioContent>전자공학부</RadioContent>
                        </RadioPressable>
                        <RadioPressable                                
                        onPress={()=>setChooseRadio("신소재공학과")}
                        onPressIn={()=>setClick(true)}    
                        onLongPress={()=>console.log("onLongPress")}  
                        onPressOut={()=>setModalVisible2(false)}
                        >
                        {chooseRadio=="신소재공학과"?<Icon name="radio-button-on-outline" size={20}/>:<Icon name="radio-button-off-outline" size={20}/>}
                            <RadioContent>신소재공학과</RadioContent>
                        </RadioPressable>
                        <RadioPressable                                
                        onPress={()=>setChooseRadio("생명화학공학과")}
                        onPressIn={()=>setClick(true)}    
                        onLongPress={()=>console.log("onLongPress")}  
                        onPressOut={()=>setModalVisible2(false)}
                        >
                        {chooseRadio=="생명화학공학과"?<Icon name="radio-button-on-outline" size={20}/>:<Icon name="radio-button-off-outline" size={20}/>}
                            <RadioContent>생명화학공학과</RadioContent>
                        </RadioPressable>
                        <RadioPressable                                
                        onPress={()=>setChooseRadio("나노반도체공학과")}
                        onPressIn={()=>setClick(true)}    
                        onLongPress={()=>console.log("onLongPress")}  
                        onPressOut={()=>setModalVisible2(false)}
                        >
                        {chooseRadio=="나노반도체공학과"?<Icon name="radio-button-on-outline" size={20}/>:<Icon name="radio-button-off-outline" size={20}/>}
                            <RadioContent>나노반도체공학과</RadioContent>
                        </RadioPressable>
                        <RadioPressable                                
                        onPress={()=>setChooseRadio("에너지-전기 공학과")}
                        onPressIn={()=>setClick(true)}    
                        onLongPress={()=>console.log("onLongPress")}  
                        onPressOut={()=>setModalVisible2(false)}
                        >
                        {chooseRadio=="에너지-전기 공학과"?<Icon name="radio-button-on-outline" size={20}/>:<Icon name="radio-button-off-outline" size={20}/>}
                            <RadioContent>에너지-전기 공학과</RadioContent>
                        </RadioPressable>
                        <RadioPressable                                
                        onPress={()=>setChooseRadio("경영학부")}
                        onPressIn={()=>setClick(true)}    
                        onLongPress={()=>console.log("onLongPress")}  
                        onPressOut={()=>setModalVisible2(false)}
                        >
                        {chooseRadio=="경영학부"?<Icon name="radio-button-on-outline" size={20}/>:<Icon name="radio-button-off-outline" size={20}/>}
                            <RadioContent>경영학부</RadioContent>
                        </RadioPressable>
                        <RadioPressable                                
                        onPress={()=>setChooseRadio("디자인공학부")}
                        onPressIn={()=>setClick(true)}    
                        onLongPress={()=>console.log("onLongPress")}  
                        onPressOut={()=>setModalVisible2(false)}
                        >
                        {chooseRadio=="디자인공학부"?<Icon name="radio-button-on-outline" size={20}/>:<Icon name="radio-button-off-outline" size={20}/>}
                            <RadioContent>디자인공학부</RadioContent>
                        </RadioPressable>
                        
                    </RadioBox>
            </ModalView2>
            
        </Modal>
        <HeaderBox>
        <BackView>
            <BackBtn 
                onPress={()=>navigate("Stack",{screen:"EyePage"})}
                onPressIn={()=>setClick(true)}    
                onLongPress={()=>console.log("onLongPress")}  
                onPressOut={()=>setClick(false)} >
                <Icon name="chevron-back-outline" size = {30} />
            </BackBtn>
        </BackView>
        <BoardTextBox>
            <TitleText>매칭 종료 사유서</TitleText> 
        </BoardTextBox>
        <PlusBtn> 
            <Icon name="ellipsis-vertical-outline" size = {25}/>
        </PlusBtn>
        </HeaderBox>
        <MajorBox2>
            <NameBox1>
                <SmallText>사유</SmallText>
            </NameBox1>
            <NameBox2>
                <NameBtn onPress={()=>setModalVisible2(true)}>
                    <NameText>사유를 입력하세요</NameText>
                    <NameText>▼</NameText>
                </NameBtn>
            </NameBox2>
        </MajorBox2>
        <MajorBox>

        </MajorBox>
        <EyeBox>
            <EyeBtn 
                onPress={()=>navigate("Stack",{screen:"Signup"})}
                onPressIn={()=>setClick(true)}    
                onLongPress={()=>console.log("onLongPress")}  
                onPressOut={()=>setClick(false)} >
                <EyeTextBox>
                    <EyeText>등록하기</EyeText>
                </EyeTextBox>
            </EyeBtn>
        </EyeBox>
    </Container>
)
}

export default Cancle;