import React, { useState } from "react";
import styled from "styled-components/native";
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/Ionicons';
import ModalTwoOptions from "./ModalTwoOptions";

//게시글 누르면 전체 글이 나오는 Box

const BoardBox = styled.View`
    //border: 1px;
    border-radius: 10px;
    width: 100%;
    margin-bottom: 2.8%;
    height: 230px;
`;
    const WriterProfileBox = styled.View` 
        width: 100%;
        //border: 1px;
        height: 25%;
        flex-direction: row;
        justify-content: space-between;
        padding-top: 2.0%;
        padding-bottom: 2.0%;
    `;
        const WriterProfileLeft = styled.View`
            //border: 1px;
            flex-direction: row;
            margin-left: 6.9%;
        `;
        const WriterPicture = styled.View`
            border-radius: 10px;
            background-color: #BBBBBB;
            width : 40px;
            height: 40px;
        `;
        const PostinforBox = styled.View`
            margin-right: 5px;
            //border : 1px;
            height: 40px;
            justify-content: center;
            padding-left: 5px;
        `;
            const WriterName = styled.Text`
                font-size: 12px;
                font-weight: 500;
                color: #0062FF;
            `;
            const PostDate = styled.Text`
                font-size: 8px;
                font-weight: 300;
            `;
        const DelectBox = styled.View`
            margin-top: 24px;
            margin-right: 7%;
            background-color: #E3E3E3;
            border-radius: 3px;
            padding-left: 5px;
            //border: 1px;
            flex-direction: row;
        `;
            const DelectText = styled.Text`
                font-size: 12px;
                font-weight: 400;
                margin-right: 3px;
                line-height: 14px;
                align-self: center;
            `;
            const DelectIcon = styled.Pressable`
                align-self: center;
            `;

    const WriterPost = styled.View`
        width: 100%;
        background-color: #E3E3E3;
        height: 75%;
        border-radius: 10px;
        padding-top: 15px;
    `;
        const PostTitle = styled.View`
            //border: 1px;
            margin-bottom: 10px;
            width: 86%;
            align-self: center;
        `;
            const PostTitleText = styled.Text`
                font-size : 16px;
                font-weight: 500;
            `;
        const PostContent = styled.View`
            //border: 1px;
            height: 51%;
            width: 86%;
            align-self: center;
            margin-bottom: 4%;
    `;
            const PostContentText = styled.Text`
                font-size : 12px;
                font-weight: 400;
            `;
        const OtherBox = styled.View`
            height: 20px;
            //border: 1px;
            flex-direction: row;
            width: 86%;
            align-self: center;
        `;
            const KeywordBox = styled.View`
                //border: 1px;
                width: 76%;
                flex-direction: row;
                align-self: center;
            `;
                const KeywordBox1 = styled.View`
                        height: 15px;
                        margin-right: 5px;
                        //border: 1px;
                    `;
                        const Keyword1 = styled.View`
                            background-color: blue;
                            border-radius: 5px;
                            padding-left: 7px;
                            padding-right: 7px;
                        `;
                            const KeywordText1 = styled.Text`
                                color : white;
                                margin: 2px;
                                font-size: 8px;
                                font-weight: 600;
                            `;
                const KeywordBox2 = styled.View`
                        height: 15px;
                        margin-right: 5px;
                        //border: 1px;
                    `;
                        const Keyword2 = styled.View`
                            background-color: orange;
                            border-radius: 5px;
                            padding-left: 7px;
                            padding-right: 7px;
                        `;
                            const KeywordText2 = styled.Text`
                                color : white;
                                margin: 2px;
                                font-size: 8px;
                                font-weight: 600;
                            `;
            const WriterCommentBox = styled.View`
                //border : 1px;
                width: 24%;
                height: 100%;
                flex-direction: row;
                justify-content: space-between;
            `;
                const CommentCount = styled.View`   
                    //border: 1px;
                    width: 47%;
                    height: 100%;
                    background-color: white;
                    border-radius: 3px;
                    flex-direction: row;
                    justify-content: center;
                    padding: 2px;
                `;
                    const CommentIcon = styled.Image`
                        width: 15px;
                        height: 15px;
                        align-self: center;
                        margin-right: 3px;
                    `;
                    const CommentText = styled.Text`
                        font-size: 10px;
                        padding-top: 1px;
                        align-self: center;
                    `;
                const GoodCount = styled.View`   
                    //border: 1px;
                    width: 47%;
                    height: 100%;
                    background-color: white;
                    border-radius: 3px;
                    flex-direction: row;
                    justify-content: center;
                    padding: 2px;
                `;
                    const GoodIcon = styled.Image`
                        width: 15px;
                        height: 15px;
                        align-self: center;
                    `;
                    const GoodText = styled.Text`
                        font-size: 10px;
                        padding-top: 1px;
                        align-self: center;
                    `;

const BoardBoxSelf_min = ({title, content, date, time}) => {
    const [modalVisible,setModalVisible] = useState(false)
    return(
        <BoardBox>
            <ModalTwoOptions 
                visible={modalVisible} 
                setvisible={setModalVisible}
                title="게시글 삭제"
                contents="해당 게시물을 삭제 하시겠습니까?"
                yestext="삭제하기"
            />
                <WriterProfileBox>
                    <WriterProfileLeft>
                        <WriterPicture></WriterPicture>
                        <PostinforBox>
                        <WriterName>나</WriterName>
                        <PostDate>{date} {time}</PostDate>
                    </PostinforBox>

                    </WriterProfileLeft>
                    <DelectBox>
                        <DelectText>내가 쓴 글 삭제하기</DelectText>
                        <DelectIcon
                            ConfigureBtn onPress={()=>setModalVisible(true)}>
                            <Icon name="close" size = {16} color = "#FF3D00"/>
                        </DelectIcon>
                    </DelectBox>
                </WriterProfileBox>
                <WriterPost>
                    <PostTitle>
                        <PostTitleText>{title}</PostTitleText>
                    </PostTitle>
                    <PostContent>
                        <PostContentText>{content}</PostContentText>
                    </PostContent>
                    <OtherBox>
                        <KeywordBox>
                            <KeywordBox1>
                                <Keyword1>
                                    <KeywordText1># 키워드</KeywordText1>
                                </Keyword1>
                            </KeywordBox1>
                            <KeywordBox2>
                                <Keyword2>
                                    <KeywordText2># 키워드</KeywordText2>
                                </Keyword2>
                            </KeywordBox2>
                        </KeywordBox>
                        <WriterCommentBox>
                            <CommentCount>
                                <CommentIcon source={require('../images/comment.png')}>
                                </CommentIcon>
                                <CommentText>18</CommentText>
                            </CommentCount>
                            <GoodCount>
                                <GoodIcon source={require('../images/good.png')}>
                                </GoodIcon>
                                <GoodText>18</GoodText>
                            </GoodCount>
                        </WriterCommentBox>
                    </OtherBox>
                    
                </WriterPost>
            </BoardBox>
    )
}

export default BoardBoxSelf_min;
