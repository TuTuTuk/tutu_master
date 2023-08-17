import React, {useState} from "react";
import styled from "styled-components/native";
import { FlatList, Text, View} from "react-native"
import firestore from '@react-native-firebase/firestore';

import TopBar from "../../../components/TopBar";
import { useEffect } from "react";


const Container = styled.View`
    flex:1;
    margin-top: 10px;
    margin-bottom: 10px;
    margin-Right: 7%;
    margin-left: 7%;
`;

const AnnouncementBox = styled.Pressable`
    width: 100%;
    align-self: center;
    height: 40px;
    background: #E3E3E3;
    border-radius: 10px;
    justify-content: space-between;
    flex-direction: row;
    padding-left: 15px;
    padding-right: 15px;
    margin-bottom: 15px;
    
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
        width: 100%;
        height: 100%;
    `;
    const MoveBtn = styled.Pressable`
        width: 100%;
        height: 100%;
        width: 30px;
    `;

const Announcement = ({navigation:{navigate}}) => {

    const [modalVisible, setModalVisible] = useState("");
    const [content, setContent] = useState([]);

    useEffect(()=>{
        GetInfo();
    },[]);

    const GetInfo = async () => {
        const value = await firestore().collection('Notification')
          .doc('AllNotices').collection('AllNotices')
          .get();

        if (value.empty) {
          console.log("문서를 찾을 수 없습니다.");
          return;
        }
        
        setContent(value.docs.map(doc => ({ 
            id: doc.id,
            data: doc.data()
        })));
        console.log(content)
      }

      
      const renderItem = ({item}) =>{
        return (
        <>
        <AnnouncementBox>
            <TitleText>{item.id}</TitleText>
                <MoveBtn onPress={() => navigate("Stack", { screen: "Announce_Detail", params: { title: item.id , content: item.data.comment} })}>
                    <IconImage source={require('../../../images/Next.png')}></IconImage>
                </MoveBtn>
        </AnnouncementBox>
        </>
        );
    }

    return(
        <Container>
            <TopBar title = "공지사항"/>
            <FlatList
                data= {content}
                renderItem = {renderItem}
                keyExtractor ={item => item.data.number}
            />
        </Container>
    )
}


export default Announcement;