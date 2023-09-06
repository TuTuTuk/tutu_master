import react from "react";
import { useState } from "react";
import { useEffect } from "react";
import { FlatList } from "react-native";
import styled from "styled-components/native";

const Container= styled.View`
    border-radius:10px;
    width:95px;
    background-color: #aeaeae;
    position:absolute;
    top:44px; 
    right:6.1%;
`;

const PressBtn = styled.Pressable`
    border:1px;
`;
    const PressTxt = styled.Text`
        font-size:15px;
    `;

const ViewMoreBox=({data})=>{
    return(
        <Container>
            <FlatList
                data={data}
                renderItem={({item})=>{
                    return(
                    <PressBtn>
                        <PressTxt>{item}</PressTxt>
                    </PressBtn>
                    )
                }
                }
            />
        </Container>
    )
}

export default ViewMoreBox;