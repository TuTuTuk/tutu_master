import React from "react"
import TopBar from "../../../components/TopBar"
import {FlatList, Pressable, Text, View } from "react-native"
import styled from "styled-components/native"
import { useState } from "react"
import Blackbutton from "../../../components/BlackButton"
import BoardBox from "../../../components/BoardBox"
import { useEffect } from "react"
import ModalTwoOptions from "../../../components/ModalTwoOptions"

import auth from "@react-native-firebase/auth"
import firestore from '@react-native-firebase/firestore';


const Container = styled.View`
    align-self:center;
    width: 86.11%;
    height:100%;
`
const TestView = styled.View`
    border:1px;
    width:100%;
    height:20px;
`;

const RecentWatch = ()=>{

    const [list,setList] = useState(null);
    const [modalVisible,setModalVisible] = useState(false)

    const UpdateData=async()=>{
        const tempUserSave = await firestore().collection("users").doc(auth().currentUser.uid).get(); //const는 읽기 전용
        let BoardSave = await firestore().collection("boards").doc("Integrated").get(); //let = 읽기,쓰기 다됨

        //유저가 방문한 board uid와 통합게시판의 board uid를 모두 비교해 겹치는 부분을 BoardSave 변수에 다시 저장
        BoardSave = BoardSave._data.arr.filter((item)=> tempUserSave._data.user_watch_board_uid.includes(item.boards_uid))
        setList(BoardSave)
        //console.log(list)

    }

    const DeleteData=async()=>{
        await firestore().collection("users").doc(auth().currentUser.uid).update({
            user_watch_board_uid:[]
        });
    }

    useEffect(()=>{
        UpdateData() //함수 실행
    },[]) //처음 화면 로딩시

    return(
        <Container>
            <ModalTwoOptions 
                visible={modalVisible} 
                setvisible={setModalVisible}
                actOn={()=>DeleteData()}
                title="전체 삭제"
                contents="최근에 본 글을 전체 삭제 하시겠습니까?"
                yestext="삭제하기"
            />
            <TopBar title="최근에 본 글"/>
            <Blackbutton title="검색기록 전체삭제" mbottom={20} click={()=>setModalVisible(!modalVisible)} move={null}/>
            {list==null?
                null
            :
                <FlatList
                    showsVerticalScrollIndicator={false} //scroll바 가리기
                    keyExtractor={(item)=>`${item.title}`}//고유 키값 부여
                    data={list}
                    renderItem={({item})=>
                            <BoardBox title={item.title} contents={item.contents}/>
                    }
                />
            }
        </Container>
    )
}

export default RecentWatch;