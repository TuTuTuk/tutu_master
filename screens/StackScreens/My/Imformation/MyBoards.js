import React, {useState, useEffect} from "react";
import { FlatList } from "react-native";
import styled from "styled-components/native";

import TopBar from "../../../../components/TopBar";
import CommentBox_min from "../../../../components/BoardPart/CommentBox_min";
import BoardBox from "../../../../components/BoardPart/BoardBox";

import auth from "@react-native-firebase/auth";
import firestore from '@react-native-firebase/firestore';


const Container = styled.View`
    flex:1;
    margin-top: 10px;
    margin-bottom: 10px;
    margin-left: 7%;
    margin-right: 7%;
`;


const MyBoards = ({navigation:{navigate}})=>{

    const [commentSave,setCommentSave] = useState([]);

    const UpdateData=async()=>{
        setCommentSave([])
        const tempSave = await firestore().collection("users").doc(auth().currentUser.uid).collection('Boards').orderBy("create_time","desc").get();
        if(tempSave.empty){
            console.log('empty');
            return;
        }
        tempSave.forEach(document => {
            const recentSave = {
                id: document.id,
                ...document.data()
            }
            setCommentSave(prev => [recentSave, ...prev])
        })
    }

    useEffect(()=>{
        UpdateData()
    },[])

    return(
        <>
        <Container>
            <TopBar title="내가 쓴 게시물"/>
            {
                <FlatList
                ListHeaderComponent={Container}
                    showsVerticalScrollIndicator={false} //scroll바 가리기
                    keyExtractor={(item)=>`${item.create_time}`}//고유 키값 부여
                    data={commentSave}
                    renderItem={({item})=>
                        <BoardBox title={item.title} contents={item.contents} time={item.time}/>
                    }
                />
            }
        </Container>
    </>
    )
}
export default MyBoards;