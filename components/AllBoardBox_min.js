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
    height: 231px;
`;
    const WriterProfileBox = styled.View` 
        width: 100%;
        //border: 1px;
        height: 40px;
        flex-direction: row;
        margin-bottom: 10px;
    `;
        const WriterPicture = styled.View`
            margin-left: 20px;
            border-radius: 10px;
            background-color: #BBBBBB;
            width : 40px;
            height: 40px;
        `;
        const PostinforBox = styled.View`
            margin-right: 5px;
            //border : 1px;
            width : 60%;
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
        const ShareIcon = styled.TouchableOpacity`
            background-color: #CECECE;
            border-radius: 5px;
            height: 20px;
            width: 20px;
            margin-right: 5px;
            //border: 1px;
            justify-content: center;
            align-self: center;
        `;
        const Icons = styled.Image`
            width: 100%;
            height: 100%;
        `;
        const SaveIcon = styled.TouchableOpacity`
            background-color: #CECECE;
            border-radius: 5px;
            height: 20px;
            width: 20px;
            margin-right: 5px;
            //border: 1px;
            justify-content: center;
            align-self: center;
        `;
        const SendIcon = styled.TouchableOpacity`
            background-color: #CECECE;
            border-radius: 5px;
            height: 20px;
            width: 20px;
            //border: 1px;
            justify-content: center;
            align-self: center;
        `;

    const WriterPost = styled.View`
        //border: 1px;
        width: 100%;
        background-color: #E3E3E3;
        height: 172px;
        border-radius: 10px;
        padding-top: 15px;
        padding-bottom: 10px;
        align-items: center;
    `;
        const PostTitle = styled.View`
            //border: 1px;
            width: 86%;
            margin-bottom: 10px;
        `;
            const PostTitleText = styled.Text`
                font-size : 16px;
                font-weight: 500;
            `;
        const PostContent = styled.View`
            //border: 1px;
            width: 86%;
            height: 88px;
            margin-bottom: 10px;
    `;
            const PostContentText = styled.Text`
                font-size : 12px;
                font-weight: 400;
            `;
        const OtherBox = styled.View`
            //border: 1px;
            flex-direction: row;
            width: 86%;
            margin-bottom: 2.0%;
        `;
            const KeywordBox = styled.View`
                //border: 1px;
                width: 76%;
                flex-direction: row;
            `;
                const KeywordBox1 = styled.View`
                        height: 15px;
                        margin-right: 5px;
                        //border: 1px;
                        align-self: center;
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
                        align-self: center;
                    `;
                        const Keyword2 = styled.View`
                            background-color: orange;
                            border-radius: 5px;
                            padding-left: 7px;
                            padding-right: 7px;
                            align-self: center;
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
                    width: 35px;
                    height: 20px;
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
                    width: 35px;
                    height: 20px;
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
                        margin-right: 3px;
                    `;
                    const GoodText = styled.Text`
                        font-size: 10px;
                        padding-top: 1px;
                        align-self: center;
                    `;

const AllBoardBox_min = ({title, content, date, time}) => {
    const [modalVisible,setModalVisible] = useState(false)
    
    return(
        <BoardBox>
            <ModalTwoOptions 
                visible={modalVisible} 
                setvisible={setModalVisible}
                title="해당 게시물을 스크랩 하시겠습니까?"
                yestext="스크랩하기"
            />
                <WriterProfileBox><WriterPicture></WriterPicture>
                    <PostinforBox>
                        <WriterName>익명</WriterName>
                        <PostDate>{date} {time}</PostDate>
                    </PostinforBox>
                    <ShareIcon><Icons source={require('../images/share.png')}/></ShareIcon>
                    <SaveIcon ConfigureBtn onPress={()=>setModalVisible(true)}>
                        <Icons source={require('../images/scrap.png')}/>
                    </SaveIcon>
                    <SendIcon><Icons source={require('../images/Note.png')}/></SendIcon>
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

export default AllBoardBox_min;
