import React, { useState } from "react";
import { Text, TouchableOpacity, View,Modal,ActivityIndicator } from "react-native";
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
    //align-items: center;
`;

const ModalView = styled.View`
    background-color: #BBBBBB;
    width:20%;
    height:50px;
    border-radius: 5px;
    justify-content: space-between;
    align-items: flex-end;
    left:73%
    padding-left:10px;
    padding-right:10px;
    padding-top:5px;
    bottom:763px;
    top:6%;
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

const ModalinquirePressable = styled.Pressable`
    height:50%;
`;
const ModalnewPressable = styled.Pressable`
    height:50%;
`;

const MiddleText = styled.Text`
    color:black;
    font-size:12px;
    
`;

const TitleText = styled.Text`
    color:black;
    font-size:17px;
`;

const LogoBox = styled.View`
    //border:1px;
    height:150px;
    width:100%;
    //padding-top:2%;
    //padding-bottom:2%;
    align-items: center;
`;

const LogoImage = styled.Image`
    padding:3px;
    width:60px;
    height:60px;
    border-radius: 50px;
`;
const LogoText = styled.Text`
    font-size:12px;
    color:#1D1D1D;
`;
const MessageBox = styled.View`
    //border:1px;
    height:215px;
    width:100%;
    align-items: center;
    //padding-top:20px;
    //padding-botton:10px;
`;
const ClickBox = styled.View`
    //border:1px;
    height:190px;
    width:90%;
    padding-top:15px;
    padding-botton:10px;
    align-items: center;
    background-color:#E3E3E3;
    border-radius: 10px;
`;
const ClickBox1 = styled.View`
    //border:1px;
    height:110px;
    //padding-botton:20px;
    flex-direction:row; 
`;
const ClickBox11 = styled.View`
    //border:1px;
    height:110px;
    align-items: center;
    width:35%;
`;
const ImageBox = styled.View`
    //border:1px;
    height:100px;
    width:100px;
    align-items: center;
    padding-top:40px;
    background-color:#FFFFFF;
    border-radius: 50px;
`;
const ClickBox12 = styled.View`
    //border:1px;
    height:110px;
    width:45%;
`;
const ClickBox121 = styled.View`
    //border:1px;
    height:20%;
    width:100%;
    flex-direction:row;
    padding-top:3%;
`;
const ClickBox122 = styled.View`
    //border:1px;
    height:35px;
    width:100%;
    padding-top:5%;
    padding-botton:10px;
`;
const ClickBox123 = styled.View`
    //border:1px;
    height:35px;
    width:100%;
`;
const ClickBox1231 = styled.View`
    //border:1px;
    height:15px;
    width:100%;
    flex-direction:row; 
    justify-content: space-between;
    padding-botton:2.5px;
`;
const ClickBox1232 = styled.View`
    //border:1px;
    height:15px;
    width:100%;
    flex-direction:row; 
    justify-content: space-between;
    padding-top:2.5px;
`;

const ClickBox13 = styled.Pressable`
    //border:1px;
    height:110px;
    //padding-left:10%;
`;
const ClickBox2 = styled.View`
    //border:1px;
    height:50px;
    width:100%
    padding-top:3%;
    align-items: center;
`;
const ClickText = styled.Text`
    font-size:12px;
    color:#1D1D1D;
`;
const ClickText2 = styled.Text`
    font-size:12px;
    color:#0062FF;
`;

const KeyBox = styled.View`
    border-radius:5px;
    background-color:#1398FF;
    width:50px;
    height:15px;
    margin:0.5px;
    align-items: center;
`;
const KeyBox2 = styled.View`
    border-radius:5px;
    background-color:#FFAB40;
    width:50px;
    height:15px;
    margin:0.5px;
    align-items: center;
`;
const KeyBox3 = styled.View`
    border-radius:5px;
    background-color:#AACD06;
    width:50px;
    height:15px;
    margin:0.5px;
    align-items: center;
`;
const KeyText = styled.Text`
        color:white;
        font-size:8px;
        `;
const EyeBox = styled.View`
    //border:1px;
    height:40px;
    width:87%;
`;
const EyeTextBox = styled.View`
    align-items: center;
    padding-top:8px;
`;
const EyeText = styled.Text`
        color:white;
        font-size:16px;
        //margin:5px;
        `;

const EyeBtn = styled.Pressable`
        border-radius:10px;
        background-color:#818181;
        //align-items: center;
        width:100%;
        height:40px;
    `;

const MatchBox = styled.View`
    //border:1px;
    height:15%;
    width:100%;
    //padding-top:10px;
    align-items: center;
`;
const MatchwaitBox = styled.View`
    border:1px;
    height:80px;
    width:87%;
    border-radius:10px;
    align-items: center;
    padding-top:28px;
`;

const MatchBox2 = styled.View`
    //border:1px;
    height:90px;
    width:100%;
    //padding-top:10px;
    align-items: center;
`;
const Matching_111 = ({navigation:{navigate}})=>{
    const [click,setClick] = useState(false);
    const [modalVisible,setModalVisible] = useState(false)
    const [modalVisible2,setModalVisible2] = useState(false)

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
                <TitleText>선후배 1:1:1 매칭</TitleText> 
            </BoardTextBox>
            <PlusBtn> 
                <Icon name="ellipsis-vertical-outline" size = {25}/>
            </PlusBtn>
            </HeaderBox>
            <LogoBox>
                <LogoImage
                    resizeMode="stretch"
                    source={require('../../../images/tutu-logo.png')}
                />
                <LogoText>선후배 1:1:1 매칭은</LogoText>
                <LogoText>한국공학대 학생 1명이 선배 1명, 후배 1명과</LogoText>
                <LogoText>연결되는 매칭 시스템 입니다.</LogoText>
            </LogoBox>
            <MessageBox>
                <ClickBox>
                    <ClickBox1>
                        <ClickBox11>
                            <ImageBox>
                                <ClickText>이미지</ClickText>
                            </ImageBox>
                        </ClickBox11>
                        <ClickBox12>
                            <ClickBox121>
                                <ClickText>[후배] </ClickText>
                                <ClickText2> D+6</ClickText2>
                            </ClickBox121>
                            <ClickBox122>
                                <ClickText>산학디자인공학과 (20학번)</ClickText>
                            </ClickBox122>
                            <ClickBox123>
                                <ClickBox1231>
                                    <KeyBox>
                                        <KeyText>#키워드</KeyText>
                                    </KeyBox>
                                    <KeyBox>
                                    <KeyText>#키워드</KeyText>
                                    </KeyBox>
                                    <KeyBox2>
                                        <KeyText>#키워드</KeyText>
                                    </KeyBox2>
                                </ClickBox1231>
                                <ClickBox1232>
                                    <KeyBox2>
                                        <KeyText>#키워드</KeyText>
                                    </KeyBox2>
                                    <KeyBox3>
                                        <KeyText>#키워드</KeyText>
                                    </KeyBox3>
                                    <KeyBox3>
                                        <KeyText>#키워드</KeyText>
                                    </KeyBox3>
                                </ClickBox1232>
                            </ClickBox123>
                        </ClickBox12>
                        <ClickBox13
                            onPress={()=>navigate("Stack",{screen:"Cancle"})}
                            >
                            <Icon name="close-outline" size = {25} ></Icon>
                        </ClickBox13>
                    </ClickBox1>
                    <ClickBox2>
                        <EyeBox>
                            <EyeBtn>
                                <EyeTextBox>
                                    <EyeText>쪽지 보내기</EyeText>
                                </EyeTextBox>
                            </EyeBtn>
                        </EyeBox>
                    </ClickBox2>
                </ClickBox>
            </MessageBox>
            <MatchBox>
                <MatchwaitBox>
                    <ClickText2>매칭 대기중</ClickText2>
                </MatchwaitBox>
            </MatchBox>
            <MatchBox2>
                <MatchwaitBox></MatchwaitBox>
            </MatchBox2>
        </Container>
    )
}

export default Matching_111;