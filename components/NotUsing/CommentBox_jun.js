import React from "react";
import { useState } from "react";
import { Text } from "react-native";
import styled from "styled-components/native";
import ViewMoreBox from "../BoardPart/ViewMoreBox";

const Container = styled.View`
    //border:1px;
    border-radius:10px;
    background-color: #E3E3E3;
    width:86.11%;
    height:102px;
    align-self:center;
    margin-bottom:10px;
`;

const TopView = styled.View`
    //border:1px;
    flex-direction:row;
    justify-content: space-between;
`;
    const LeftView = styled.View`
        flex-direction:row;
    `;

        const ProfileImage = styled.Image`
            //border:1px;
            border-radius:5px;
            width:30px;
            height:30px;
            margin-left:5px;
            margin-top:5px;
        `;
        const Name = styled.Text`
             //border:1px;
            margin-top: 5px;
            margin-left:5px; 
            font-size: 12px;
            line-height: 14px;
            color: #1D1D1D;
        `;
    const RightView = styled.View`
        //border:1px;    
        flex-direction:row;
    `;
        const FunctionBtn = styled.Pressable`
            //border:1px;
        `;
        const FunctionImage = styled.Image`
            //border:1px;
            margin-top: 5px;
            border-radius:5px;
            width:20px;
            height:20px;
        `;
const Content = styled.Text`
    margin-top: 5px;
    margin-left:5px;
    font-size: 12px;
    line-height: 14px;
    color: #1D1D1D
`;
const CommentBox=({info})=>{

    const [viewMoreToggle,setViewMoreToggle] = useState(false);

    return (
        <Container>
            <TopView>
                <LeftView>
                    <ProfileImage source={{uri:info.user_profile}}/>
                    <Name>
                        {info.user_name}
                    </Name>
                </LeftView>
                <RightView>
                    <FunctionBtn>
                        <FunctionImage 
                            resizeMode="stretch"
                            source={require('../../images/comment.png')}
                        />
                    </FunctionBtn>
                    <FunctionBtn>
                        <FunctionImage 
                            resizeMode="stretch"
                            source={require('../../images/good.png')}
                        />
                    </FunctionBtn>
                    <FunctionBtn
                        onPressOut={()=>setViewMoreToggle(!viewMoreToggle)}
                    >
                        <FunctionImage 
                            resizeMode="stretch"
                            source={require('../../images/ViewMore.png')}
                        />
                    </FunctionBtn>
                </RightView>
            </TopView>
            {viewMoreToggle==false?null:<ViewMoreBox data={["댓글달기","신고하기","쪽지 보내기"]}/>}
            <Content>
                {info.comment}
            </Content>
        </Container>
    )
}

export default CommentBox;