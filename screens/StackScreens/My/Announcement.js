import React, {useState} from "react";
import styled from "styled-components/native";
import firestore from '@react-native-firebase/firestore';

import TopBar from "../../../components/TopBar";
import { useEffect } from "react";


const Container = styled.ScrollView.attrs(() => ({
    contentContainerStyle: {
        showVerticalScrollIndicator: false,
    }
}))`
    flex:1;
    margin-top: 10px;
    margin-bottom: 10px;
`;

const AnnouncementBox = styled.Pressable`
    width: 86%;
    align-self: center;
    height: 40px;
    background: #E3E3E3;
    border-radius: 10px;
    justify-content: space-between;
    flex-direction: row;
    padding-left: 15px;
    padding-right: 15px;
`;
    const TitleText = styled.Text`
        width: 85%;
        font-family: 'Pretendard';
        font-style: normal;
        font-weight: 500;
        font-size: 16px;
        line-height: 19px;
        margin-top: 10.5px;
    `;
    const IconImage = styled.Image`
        width: 30px;
        margin-top: 5px;
        //border: 1px;
    `;



const Announcement = ({navigation:{navigate}}) => {

    const [modalVisible, setModalVisible] = useState("");
    const [content, setContent] = useState("");

    useEffect(()=>{
        GetInfo();
    },[]);

    const GetInfo = async()=>{
        const value = await (await firestore().collection('Announcement').doc('자동신고시스템 업데이트 안내').get())._data.content;
        setContent(value);
        console.log(content)
    }

    return(
    <Container>
        <TopBar title="공지사항"/>
        <AnnouncementBox>
            <TitleText>자동신고시스템 업데이트 안내</TitleText>
            <IconImage source={require('../../../images/Next.png')}></IconImage>
        </AnnouncementBox>
        
    </Container>
    )
}


export default Announcement;