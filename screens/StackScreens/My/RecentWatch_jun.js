import React from "react"
import TopBar from "../../../components/TopBar"
import {FlatList } from "react-native"
import styled from "styled-components/native"
import { useState } from "react"


const Container = styled.View`

`

const RecentWatch = ()=>{

    const [list,setList] = useState([]);

    return(
        <Container>
            <TopBar title="최근에 본 글"/>
            <FlatList
                showsVerticalScrollIndicator={false} //scroll바 가리기
                keyExtractor={(item)=>`${item.title}`}//고유 키값 부여
                data={list}
                renderItem={({item})=>{
                    <View></View>
                }}
            />
        </Container>
    )
}

export default RecentWatch;