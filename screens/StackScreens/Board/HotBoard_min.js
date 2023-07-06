import React, { useState , useEffect } from "react";
import { Modal , FlatList } from "react-native";
import styled from "styled-components/native";
import Icon from 'react-native-vector-icons/Ionicons';
import moment from "moment"

import AllBoardBox_min from "../../../components/BoardPart/AllBoardBox_min";
import CommentBox_min from "../../../components/BoardPart/CommentBox_min";
import TopBar from "../../../components/TopBar";
import InputComment from "../../../components/BoardPart/InputComment";

import auth from "@react-native-firebase/auth";
import firestore from '@react-native-firebase/firestore';

const Container = styled.View`
    flex:1;
    margin-top: 10px;
    margin-left: 7%;
    margin-right: 7%;
`;

const HotBoard_min = ({navigation:{navigate}})=>{

    const [modalVisible,setModalVisible] = useState(false)
    const [content, setContent] = useState("")
    const [commentSave,setCommentSave] = useState([]);

    return(
        <>
        <Container>
                <TopBar/>
                <AllBoardBox_min title="hot-title" content="hot-content" time="2023/05/22 10:26" goodCount="20" CommentCountt="5" ></AllBoardBox_min>
                <FlatList style={{marginBottom : 50}}
                    nestedScrollEnabled = {true}
                    ListHeaderComponent={Container}
                    showsVerticalScrollIndicator={true} //scroll바 가리기
                    keyExtractor={(item)=>`${item.create_time}`}//고유 키값 부여
                    data={commentSave}
                    renderItem={({item})=>
                        <CommentBox_min title={item.title} content={item.contents} id={item.user_name}/>
                    }
                />
        </Container>
        <InputComment/>
        </>
    )
}
export default HotBoard_min;