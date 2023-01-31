import React, { useState } from "react";
import { Text, TouchableOpacity, View, Modal } from "react-native";
import styled from "styled-components/native";
import Icon from "react-native-vector-icons/Ionicons";

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
    
`;
const ModalView = styled.View`
    background-color: #BBBBBB;
    width:95px;
    height:50px;
    border-radius: 5px;
    justify-content: space-between;
    align-items: flex-end;
    left:240px;
    padding-left:10px;
    padding-right:10px;
    padding-top:5px;
    bottom:763px;
    top:50px
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
        padding-left:17%;
        justify-content:center;
    `;

    const PlusBtn = styled.TouchableOpacity`
        border-color: orange;
        width:5%;
        height: 100%;
        justify-content: center;
    `;

const TitleBox2 = styled.View`
    //border:1px;
    justify-content:space-between;
    flex-direction:row;
    //padding-top:4px;
    width:68%;
    //align-items: center;
`;
const TitleBox21 = styled.View`
    //border:1px;
    //justify-content:space-between;
    //flex-direction:row;
    //width:60%;
    //align-items: center;
    
`;
const TitleBox3 = styled.View`
        //border:1px;
        padding-top:1.5%;
        padding-left:10%;
        //width:27px;

    `;
const MiddleText = styled.Text`
    color:black;
    font-size:12px;
    
`;

const TitleText = styled.Text`
    color:black;
    font-size:16px;
`;
const ConfigureBtn = styled.Pressable`
        //width:25px;
        height:40px;
        padding-top:14px;
        padding-right:15px;
        align-items: center;
    `;
const EyeBox = styled.View`
    //border:1px;
    //margin:1px;
    //align-items: center;
    //padding-top:20px;
    padding-bottom:10px;
    padding-left:25.15px;
    padding-right:24.85px;
`;
const EyeTextBox = styled.View`
    //border:1px;
    //margin:1px;
    align-items: center;
    padding-top:9px;
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
const OneMatchBoardBox = styled.View`
    //border:1px;
    //align-items: center;
    padding-top:12px;
    padding-left:22.5px;
    padding-right:27.5px;
`;
const MajorBtn1 = styled.Pressable`
    border-radius:10px;
    background-color:#E3E3E3;
    padding-top:5px;
    padding-left:5px;
    //width:310px;
    height:30px;
    margin:5px
`;
const BackText = styled.Text`
    font-size:14px;
    color:#545454;
`;
const EyePage = ({navigation:{navigate}})=>{
    const [click,setClick] = useState(false);
    const [modalVisible,setModalVisible] = useState(false)
    return(
        <Container>
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
            <HeaderBox>
            <BackView>
                <BackBtn 
                     onPress={()=>navigate("Tabs",{screen:"Matching"})}
                     onPressIn={()=>setClick(true)}    
                     onLongPress={()=>console.log("onLongPress")}  
                     onPressOut={()=>setClick(false)} >
                    <Icon name="chevron-back-outline" size = {30} />
                </BackBtn>
            </BackView>
            <BoardTextBox>
                    <TitleBox2>
                        <TitleBox21>
                            <TitleText>선후배 한눈에 보기</TitleText>
                        </TitleBox21>
                        <TitleBox3>
                        <MiddleText>16명</MiddleText>
                        </TitleBox3>
                    </TitleBox2>
            </BoardTextBox>
            <PlusBtn> 
                <Icon name="ellipsis-vertical-outline" size = {25}/>
            </PlusBtn>
            </HeaderBox>
            <EyeBox>
                <EyeBtn 
                    onPress={()=>navigate("Stack",{screen:"Signup"})}
                    onPressIn={()=>setClick(true)}    
                    onLongPress={()=>console.log("onLongPress")}  
                    onPressOut={()=>setClick(false)} 
                    >
                    <EyeTextBox>
                        <EyeText>한국공대 선,후배 등록하기</EyeText>
                    </EyeTextBox>
                </EyeBtn>
            </EyeBox>
            <OneMatchBoardBox>
                <MajorBtn1>
                    <MiddleText>인공지능학과 (0명)</MiddleText>
                </MajorBtn1>
                <MajorBtn1>
                    <MiddleText>산업디자인공학부 (4명)</MiddleText>
                </MajorBtn1>
                <MajorBtn1>
                    <MiddleText>경영학부 (2명)</MiddleText>
                </MajorBtn1>
                <MajorBtn1>
                    <MiddleText>에너지,전기공학과 (2명)</MiddleText>
                </MajorBtn1>
                <MajorBtn1>
                    <MiddleText>나노반도체공학과 (2명)</MiddleText>
                </MajorBtn1>
                <MajorBtn1>
                    <MiddleText>생명화학공학과 (2명)</MiddleText>
                </MajorBtn1>
                <MajorBtn1>
                    <MiddleText>신소재공학과 (2명)</MiddleText>
                </MajorBtn1>
                <MajorBtn1>
                    <MiddleText>게임공학부 (2명)</MiddleText>
                </MajorBtn1>
                <MajorBtn1>
                    <MiddleText>컴퓨터공학부 (2명)</MiddleText>
                </MajorBtn1>
                <MajorBtn1>
                    <MiddleText>전자공학부 (2명)</MiddleText>
                </MajorBtn1>
                <MajorBtn1>
                    <MiddleText>메카트로닉스공학과 (2명)</MiddleText>
                </MajorBtn1>
                <MajorBtn1>
                    <MiddleText>기계설계공학과 (2명)</MiddleText>
                </MajorBtn1>
                <MajorBtn1>
                    <MiddleText>기계공학과 (2명)</MiddleText>
                </MajorBtn1>
            </OneMatchBoardBox>
        </Container>
    )
}

export default EyePage;