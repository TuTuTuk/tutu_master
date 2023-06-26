import React from "react";
import { Text } from "react-native";
import styled from "styled-components/native";

const Container = styled.View`
    border:1px;
    border-radius:10px;
    background-color: #E3E3E3;
    width:310px;
    height:102px;
    margin-top: 10px;
`;

const Name = styled.Text`
    margin-top: 15px;
    margin-left:10px;
    font-size: 12px;
    line-height: 14px;
    color: #1D1D1D;
`;
const Content = styled.Text`
margin-top: 15px;
    margin-left:10px;
    font-size: 12px;
    line-height: 14px;
    color: #1D1D1D
`;

const CommentBox=({name,content})=>{
    return (
        <Container>
            <Name>
                {name}
            </Name>
            <Content>
                {content}
            </Content>
        </Container>
    )
}

export default CommentBox;