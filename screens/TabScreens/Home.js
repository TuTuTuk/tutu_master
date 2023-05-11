import React, { useState } from "react";
import { Text, TouchableOpacity, View,Modal, Image } from "react-native";
import styled from "styled-components/native";
import Icon from 'react-native-vector-icons/Ionicons'

import BoardBox from "../../components/BoardBox";
import ModalTwoOptions from "../../components/ModalTwoOptions";
import auth from "@react-native-firebase/auth";


//scrollView 
    //화면에 안보이는것도 한번에로딩후 화면출력
    //데이터가많으면 시간이 오래걸림
    //데이터가 적고
    //데이터끝을 알때

//flatlist
    //화면에보이는것만 그때그때 로딩하고 화면출력
    //데이터끝을 모르고
    //많을때

const Container = styled.ScrollView.attrs(()=>({
    contentContainerStyle:{
        showsVerticalScrollIndicator:false,
        alignItems:"center"
    }
}))`
    background-color: white;
    height:100%;
`;

const HeaderBox = styled.View`
    width:86.11%;
    height:50px;
    margin:2px;
    flex-direction:row;
    justify-content:space-between;
    align-items:center;
`;
    const LoginBtn = styled.Pressable`
        width:29%;
        height:30px;
        border-radius: 5px;
        background-color: #545454;
        justify-content: center;
        align-items: center;
    `;
        const LoginText = styled.Text`
            color:#FFFFFF;
            font-size:10px;
        `;

    const ConfigureAlarm = styled.View`
        width:19.3%;
        height:30px;
        flex-direction: row;
    `;

        const AlarmButton = styled.Pressable`
            width:50%;
            height:100%;
            justify-content: center;
            align-items: center;
        `;
            const AlarmImage = styled.Image`
                width:66%;
                height:66%;
            `;

        const ConfigureBtn = styled.TouchableOpacity`
            width:50%;
            height:100%;
            justify-content: center;
            align-items: center;
        `;
            const ConfigureImage = styled.Image`
                width:66%;
                height:66%;
            `;


const SignBoardBox = styled.Pressable`
    width:86.11%;
    height:120px;
    border-radius: 10px;
    background-color: #E3E3E3;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;
    const MainLogoBox = styled.Image`
        border-color:black;
        width:40%;
        height:50%;
    `;

    const MainTextBox = styled.Text`
        font-family: Pretendard;
        font-style: normal;
        font-weight: 400;
        font-size: 8px;

        text-align: center;
    `;

    const MainTextBox2 = styled.Text`
        font-family: Pretendard;
        font-style: normal;
        font-weight: 500;
        font-size: 14px;

        text-align: center;
    `;

const ImageBox = styled.View`
    width:86.11%;
    height:140px;
    flex-direction: row;
    justify-content: space-between;
    align-items:center;
`;
    const Image1Box = styled.View`
        height:140px;
        width:103px;
        flex-direction:column;
        justify-content: center;
        align-items: center;
    `;
        const Image1 = styled.Image`
            border:1px;
            border-color:black;
            border-radius:40px;
            width:80px;
            height:80px;
        `;
        const ImageTextBox = styled.Text`
            width:100%;
            height:14px;
            font-weight: 600;
            font-size: 12px;
            text-align: center;
        `;
const PopularBoardBox = styled.View`
    width:86.11%;
    height:100%;
    margin:2px;
`;

    const PopularText = styled.Text`
        width:100%;
        height:21px;
        margin-bottom:10px;
        margin-top:10px;
        font-size: 18px;
        font-weight: 600;
        color:#0062FF;
    `;
//pressable
//---------
//onPress : 눌렀다가 뗐을때(onLongPress 실행되기 전에 떼면 발동)
//onPressIn : 누르기 시작했을때
//onLongPress : 2초이상 누르고있을때
//onPressOut : 뗐을때
//console.log() 터미널에 ()안의 값 출력(잘 돌아가나 확인할때 사용)

const Home =({navigation:{navigate}})=>{
    const [click,setClick] = useState(false);
    const [modalVisible,setModalVisible] = useState(false)
    const [alarmVisible, setAlarmVisible] = useState(true)
    const oPress =  () => {
        setAlarmVisible(!alarmVisible)
    }
    return(
        <Container>
            <View style={{position:"absolute", display: alarmVisible ? "flex" : "none", width:"100%", height:"100%", backgroundColor:"rgba(1,1,1,0.5)", zIndex:10, alignItems:"center"}}>
                <View style={{alignItems:"center", backgroundColor:"white", width:"90%",height:"40%", position:"absolute", marginTop:"13%", zIndex:20, borderRadius:10 }}>
                    <Text style={{margin:16, fontSize:16, fontWeight:"700"}}>알림</Text>
                    <View style={{ width:"100%", height:40, flexDirection:"row", alignItems:"center",}}>
                        <View style={{width:10, height:10, backgroundColor:"#F5B909", borderRadius:5, marginLeft:15,marginRight:10}}></View>
                        <View style={{flexDirection:"row",  alignItems:"center", width:"85%", justifyContent:"space-between"}}>
                            <Text style={{fontSize:14, fontWeight:"400"}}>[포인트] 댓글/덧글 작성으로 +30P</Text>
                            <Text style={{fontSize:8, fontWeight:"400"}}>1,930 P</Text>
                        </View>
                    </View>
                </View>
            </View>
            <ModalTwoOptions 
                visible={modalVisible} 
                setvisible={setModalVisible}
                title="신고하기"
                contents="해당 게시물을 신고 하시겠습니까?"
                yestext="신고하기"
            />
            <HeaderBox>
                <LoginBtn 
                    onPress={()=>{auth().currentUser?navigate("Tabs",{screen:"My"}):navigate("Stack",{screen:"LoginPage"})}}
                    onPressIn={()=>null}    
                    onLongPress={()=>console.log(auth().currentUser)}  
                    onPressOut={()=>setClick(false)} 
                    tomato={click}
                >
                    {auth().currentUser ? <LoginText>마이페이지</LoginText> : <LoginText>로그인/회원가입</LoginText>}
                </LoginBtn>
                <ConfigureAlarm>
                    {auth().currentUser ? 
                        <AlarmButton onPress={()=>oPress()}>
                            <AlarmImage
                                resizeMode="stretch"
                                source={require('../../images/alarm.png')}
                            />
                        </AlarmButton> 
                            : 
                        <AlarmButton>
                        </AlarmButton> 
                    }
                    <ConfigureBtn onPress={()=>setModalVisible(true)}>
                        <ConfigureImage
                            resizeMode="stretch"
                            source={require('../../images/configure.png')}
                        />
                    </ConfigureBtn>
                </ConfigureAlarm>
            </HeaderBox>
            <SignBoardBox onPress={()=>navigate("Stack",{screen:"Contributor"})}>
                <MainLogoBox
                    resizeMode="stretch"
                    source={require('../../images/tutu-logo.png')}
                />
                <MainTextBox>Communication Space for TUKorea Students</MainTextBox>
                <MainTextBox2>한국공대 학생들을 위한 소통공간</MainTextBox2>
            </SignBoardBox>
            <ImageBox>
                <Image1Box>
                    <Image1
                        resizeMode="stretch"
                        source={require('../../images/tutu-logo.png')}
                    />
                    <ImageTextBox>마이페이지</ImageTextBox>
                </Image1Box>
                <Image1Box>
                    <Image1
                        resizeMode="stretch"
                        source={require('../../images/tutu-logo.png')}
                    />
                    <ImageTextBox>게시판</ImageTextBox>
                </Image1Box>
                <Image1Box>
                    <Image1
                        resizeMode="stretch"
                        source={require('../../images/tutu-logo.png')}
                    />
                    <ImageTextBox>선후배 매칭</ImageTextBox>
                </Image1Box>
            </ImageBox>
            <PopularBoardBox>
                <TouchableOpacity onPress={()=>navigate("Stack",{screen:"PopularBoard"})}>
                    <PopularText>인기글</PopularText>
                </TouchableOpacity>
                <BoardBox/>
                <BoardBox/>
                <BoardBox/>
                <BoardBox/>
                <BoardBox/>
                <BoardBox/>
                <BoardBox/>
                <BoardBox/>
                <BoardBox/>
                <BoardBox/>
            </PopularBoardBox>
        </Container>
    )
}

export default Home;