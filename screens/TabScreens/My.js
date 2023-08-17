import React, {useState,useEffect} from "react";
import { Text, View} from "react-native";
import styled from "styled-components/native";
import Icon from 'react-native-vector-icons/Ionicons';

import TopBar from "../../components/TopBar";

import auth from "@react-native-firebase/auth";
import firestore from '@react-native-firebase/firestore';
import storage from '@react-native-firebase/storage';



const Container = styled.ScrollView.attrs(() => ({
    contentContainerStyle: {
        showVerticalScrollIndicator: false,
    }
}))`
    flex:1;
    margin-Left : 7%;
    margin-Right : 7%;
`;

const InformBtn = styled.Pressable`
    width:100%;
    background: #E3E3E3;
    border-radius: 10px;
    flex-direction:row;
    align-items: center;
    align-self: center;
    margin-top: 2.7%;
    padding-top: 20px;
    padding-bottom: 20px;
    padding-left: 15px;
`;
    const ImageBox = styled.View`
        height: 75px;
        //border : 1px;
        justify-content: center;
    `;
        const ProfileImage = styled.Image`
            width: 75px;
            height: 75px;
            border-radius: 37.5px;
            background: #BBBBBB;
            align-self: center;
        `;
    const InformBox = styled.View`
        //border: 1px;
        margin-left: 4.17%;
        height: 75px;
        justify-content: space-between;
    `;
        const IDtext = styled.Text`
            font-family: 'Pretendard';
            font-style: normal;
            font-weight: 500;
            font-size: 16px;
            line-height: 19px;
        `;
        const MajorText = styled.Text`
            font-family: 'Pretendard';
            font-style: normal;
            font-weight: 400;
            font-size: 16px;
            line-height: 19px;
        `;
        const PointText = styled.Text`
            font-family: 'Pretendard';
            font-style: normal;
            font-weight: 400;
            font-size: 16px;
            line-height: 19px;
        `;

const BGBox = styled.View`
        width:100%;
        align-self: center;
        background-color: #E3E3E3;
        border-Radius: 10px;
        margin-top: 2%;
        padding-top: 20px;
        padding-bottom: 20px;
        padding-left: 15px;
        padding-right: 15px;
        justify-content: space-between;
    `;
    const BGText = styled.Text`
            font-family: 'Pretendard';
            font-style: normal;
            font-weight: 600;
            font-size: 20px;
            line-height: 24px;
        `;
    const PopualrBox = styled.Pressable`
        //border:1px;
        flex-direction: row;
        justify-content: space-between;
        margin-top: 6%;
    `;
        const PickText = styled.Text`
            font-family: 'Pretendard';
            font-style: normal;
            font-weight: 500;
            font-size: 16px;
            line-height: 19px;
            align-self: center;
        `;
        const GoIcon = styled.Pressable`
        `;

const NotionBtn = styled.TouchableOpacity`
    //border:1px;
    width:30px;
    height:30px;
`;
const NotionText = styled.Text`
    color : black;
    font-size : 10px;
`;

const ServiceBtn = styled.TouchableOpacity`
        border:1px;
        width:30px;
        height:30px;
    `;
const ServiceText = styled.Text`
        color:black;
        font-size:10px;
    `;
    
const My = ({navigation:{navigate}}) => {

    const [userName, setUserName] = useState("");
    const [userMajor, setUserMajor] = useState("");
    const [userID, setUserID] = useState("");
    const [userPoint, setUserPoint] = useState(0);
    const [userImage, setUserImage] = useState();
    
    const GetData= async() => {
        const data = await firestore().collection("users").doc(auth().currentUser.uid).get(); 
        setUserName(data._data.user_name)
        setUserMajor(data._data.user_department)
        setUserID(data._data.user_class_number)
        setUserImage(data._data.user_profile)
    }

    useEffect(()=>{
        GetData()
    },[])

    const Menus = ({contents, nav}) => {
        return(
            <PopualrBox>
                <PickText>{contents}</PickText>
                <GoIcon onPress={()=>!!nav ? navigate("Stack",{screen:`${nav}`}) : alert("이동할 페이지 없음")}>
                <Icon name="chevron-forward-outline" size={25}/>
                </GoIcon>
            </PopualrBox>
        )
    }

    return(
    <Container>
        <TopBar title="내 정보"></TopBar>
        <InformBtn onPress={()=>navigate("Stack",{screen:"ProfilePage"})}>
        <ImageBox>
            <ProfileImage source={userImage}></ProfileImage>
        </ImageBox>
        <InformBox>
            <IDtext>{userName}</IDtext>
            <MajorText>{userMajor}/{userID}</MajorText>
            <PointText>1,930p</PointText>
        </InformBox>
        </InformBtn>
        <BGBox>
            <BGText>정보</BGText>
            <Menus contents={"쪽지 내역"} nav={"NoteHistory_min"}/>
            <Menus contents={"최근에 본 댓글"} nav={""}/>
            <Menus contents={"내가 쓴 댓글"} nav={"MyComments"}/>
            <Menus contents={"내가 쓴 게시물"} nav={"MyBoards"}/>
            <Menus contents={"내 질문"} nav={""}/>
            <Menus contents={"스크랩"} nav={"MyScrap"}/>
        </BGBox>
        <BGBox>
            <BGText>계정</BGText>
            <Menus contents={"학교 인증"} nav={"Certification"}/>
            <Menus contents={"비밀번호 변경"} nav={""}/>
            <Menus contents={"이메일 변경"} nav={""}/>
        </BGBox>
        <BGBox>
            <BGText>앱설정</BGText>
            <Menus contents={"문의하기"} nav={"Question_min"}/>
            <Menus contents={"공지사항"} nav={"Announcement"}/>
            <Menus contents={"서비스 이용약관"} nav={""}/>
            <Menus contents={"개인정보 처리 방침"} nav={""}/>
            <Menus contents={"오픈소스 라이선스"} nav={""}/>
        </BGBox>
        <BGBox>
            <BGText>기타</BGText>
            <PopualrBox
                onPress={()=>auth().signOut()
                    .then(()=>{
                        navigate("Tabs",{screen:"Home"})
            })}>
                <PickText>로그아웃</PickText>
                <GoIcon>
                <Icon name="chevron-forward-outline" size={25}/>
                </GoIcon>
            </PopualrBox>
            <Menus contents={"회원 탈퇴"} nav={"Withdrawal"}/>
        </BGBox>
        </Container>
)
    }


export default My;