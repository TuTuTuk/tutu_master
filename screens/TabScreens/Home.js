import React, { useState, useEffect } from "react";
import { Text, TouchableOpacity, View,Modal, Image, Pressable } from "react-native";
import styled from "styled-components/native";
import Icon from 'react-native-vector-icons/Ionicons'

import firestore from '@react-native-firebase/firestore';
import storage from '@react-native-firebase/storage';

import BoardBox from "../../components/BoardPart/BoardBox";
import ModalTwoOptions from "../../components/Modal/ModalTwoOptions";
import auth from "@react-native-firebase/auth";

// components 폴더에 있음
import GetPoint from "../../components/Notification/GetPoint";
import UsePoint from "../../components/Notification/UsePoint";
import Notice from "../../components/Notification/Notice";
import MyPage from "../../components/Notification/MyPage";
import Message from "../../components/Notification/Message";
import Date from "../../components/Notification/Date";


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

const Menus = ({name}) => {
    return(
        <Image1Box>
            <Image1
            resizeMode="stretch"
            source={require('../../images/tutu-logo.png')}
            />
            <ImageTextBox>{name}</ImageTextBox>
        </Image1Box>
    )
}

const Home =({navigation:{navigate}})=>{
    
    const [click,setClick] = useState(false);
    const [modalVisible,setModalVisible] = useState(false)
    const [alarmVisible, setAlarmVisible] = useState(false)

    const [temps, setTemps] = useState([]);
    const [date,setDate] = useState([]);
    const [getpoint, setGetPoint] = useState([]);
    const [message, setMessage] = useState([]);
    const [usePoint, setUsePoint] = useState([]);
    const [mypage, setMypage] = useState([]);
    const [notice, setNotice] = useState([]);

    const [infor,setInfor] = useState([]);

    const [title, setTitle] = useState([]);
    const [content, setContent] = useState([]);

    const GetInfo = async () => {

        setDate([]);
        setGetPoint([]);
        setMypage([]);
        setTitle([]);
        setContent([]);

        try {
            const temp = await firestore().collection('Notification').doc('AllNotices').get();
            const fetchedData = temp.data(); // 데이터를 가져올 때 data() 메서드를 사용합니다.

            // console.log(fetchedData)

            if (fetchedData) {
                Object.entries(fetchedData).forEach(([key,value]) => {
                    if(key == 'user_id'){
                        Object.entries(value).forEach(([key,value]) => {
                            setDate(x => [...x,key])
                            Object.entries(value).forEach(([key,value]) => {
                                if(key == 'point'){setGetPoint(p=>[...p,value])} 
                                else if(key == 'my'){ setMypage(m=>[...m,value])}
                                else if(key == 'AllNotices'){ setNotice(a=>[...a,value])}
                            });
                        });
                    }
                });
            console.log('Date: ',date);
            // console.log('point: ',getpoint)
            getpoint.forEach(element => {
                Object.entries(element).forEach(([key,value])=>{
                    setTitle(t=>[...t,key]);
                    setContent(c=>[...c,value]);
                })
            });

            console.log('point key: ',title, 'value: ',content);
            console.log('my: ', mypage);
            

            } else {
                console.log('No data found');
            }
        } catch (error) {
          console.error('Error fetching data: ', error);
        }
      };

    useEffect(()=>{
        GetInfo()
    },[])

    const nameList = date.map(<Date comment = {date}/>)

    return(
        <Container scrollEnabled={!alarmVisible}>
            <Pressable className="modal" style={{position:"absolute", display: alarmVisible ? "flex" : "none", width:"100%", height:"100%", backgroundColor:"rgba(1,1,1,0.5)", zIndex:10, alignItems:"center"}}>
                <View style={{alignItems:"center", backgroundColor:"white", width:"90%",height:"40%", position:"absolute", marginTop:"13%", zIndex:11, borderRadius:10 }}>
                    <Pressable>
                        <Text style={{margin:16, fontSize:16, fontWeight:"700"}}>알림</Text>
                        <Text style={{position:"absolute", margin:16, right:-150, fontSize: 16, fontWeight:"700"}}  onPress={()=>setAlarmVisible(!alarmVisible)}>X</Text>
                    </Pressable>
                    {nameList}
                    {
                    /*
                    <Date comment = {date}/>
                    <GetPoint comment = {getpoint}/>
                    <UsePoint comment = {usePoint}/>
                    <Notice comment = {notice}/>
                    <MyPage comment = {mypage}/>
                    <Message comment = {message}/>
                    */
                    }
                </View>
            </Pressable>
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
                        <AlarmButton onPress={()=>setAlarmVisible(!alarmVisible)}>
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
                <Menus name={"마이페이지"}/>
                <Menus name={"게시판"}/>
                <Menus name={"선후배 매칭"}/>
                {/* <Image1Box>
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
                </Image1Box> */}
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