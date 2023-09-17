import react from "react";
import { useState } from "react";
import { useEffect } from "react";
import { FlatList } from "react-native";
import styled from "styled-components/native";

const Container= styled.View`
    border-radius:5px;
    width:95px;
    padding-top:3px;
    padding-bottom:3px;
    background-color: #aeaeae;
    position:absolute;
    top:44px; 
    right:6%;
`;

const PressBtn = styled.Pressable`
    //border:1px;
`;
    const PressTxt = styled.Text`
        font-size:12px;
        right:3px;
        align-self:flex-end;
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