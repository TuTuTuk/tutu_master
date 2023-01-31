import React, { useState } from "react";
import { Text, TouchableOpacity, View,Modal } from "react-native";
import styled from "styled-components/native";
import Icon from "react-native-vector-icons/Ionicons";

const Container = styled.ScrollView.attrs(() => ({
    contentContainerStyle: {
        showVerticalScrollIndicator: false,
    }
}))`
    flex:1;
    margin-top: 10px;
    margin-bottom: 10px;
`;
const ModalBackView=styled.View`
    position:absolute;
    width:100%;
    height:100%;
`;
const ModalView = styled.View`
    background-color: #BBBBBB;
    width:95px;
    height:50px;
    border-radius: 5px;
    justify-content: space-between;
    align-items: flex-end;
    left:240px;
    padding-left:10px;
    padding-right:10px;
    padding-top:5px;
    bottom:763px;
    top:50px
`;
const ModalinquirePressable = styled.Pressable`
    height:50%;
`;
const ModalnewPressable = styled.Pressable`
    height:50%;
`;

const TitleBox = styled.View`
        border-radius:5px;
        background-color:#E3E3E3;
        right:5px
        width:87%;
        height:40px;
        padding-left:15px;
    `;
    const HeaderBox = styled.View`
    //border: 1px;
    flex:1;
    width: 89.7%;
    height: 5.4%;
    align-self: center;
    margin-bottom: 20px;
    margin-left: 7px;
    margin-right: 7px;

    flex-direction:row;
    justify-content: space-between;
    align-items: center;
`;
    const BackView = styled.View`
        border-color: orange;
        width:10%;
    `;
        const BackBtn = styled.TouchableOpacity`
            //border : 1px;
            width  : 100%;
            height : 40px;
            justify-content: center;
        `;
    const BoardTextBox = styled.View`
        border-color: black;
        border-radius: 3px;
        background-color: #E3E3E3;
        width : 76%;
        height: 100%;
        flex-direction: row;
        justify-content:space-between;
    `;
        const BoardText = styled.Text`
            margin-top: 10px;
            margin-left: 15px;
            font-size: 16px;
            color : black;
            font-weight: 600;
        `;
        const SearchBtn = styled.TouchableOpacity`
            //border : 1px;
            width:30px;
            height:30px;
            margin-right: 10px;
            margin-top: 5px;
        `;
    const PlusBtn = styled.TouchableOpacity`
        border-color: orange;
        width:5%;
        height: 100%;
        justify-content: center;
    `;

const TitleText = styled.Text`
            color:black;
            font-size:16px;
            margin:5px;
        `;
const MiddleText = styled.Text`
    color:black;
    font-size:14px;
`;

const BackText = styled.Text`
    font-size:14px;
    color:#545454;
`;

const ConfigureBtn = styled.Pressable`

        //width:25px;
        height:40px;
        padding-top:14px;
        padding-right:15px;
        align-items: center;
    `;

const EyeBox = styled.View`
    //margin:1px;
    //align-items: center;
    //padding-top:30px;
    padding-bottom:10px;
    padding-left:25.15px;
    padding-right:24.85px;
`;
const EyeTextBox = styled.View`
    align-items: center;
    padding-top:8px;
`;
const EyeText = styled.Text`
            color:white;
            font-size:16px;
            //margin:5px;
        `;

const EyeBtn = styled.Pressable`
        border-radius:10px;
        background-color:#0062FF;
        //align-items: center;
        //width:310px;
        height:40px;
    `;

const OneMatchBoardBox = styled.View`
    //align-items: center;
    padding-top:10px;
    padding-bottom:20px;
    padding-left:25.15px;
    padding-right:24.85px;
    //margin:1px;
`;

const MBox = styled.View`
    //width:176px;
    height:51px;
    justify-content:space-between;
    //margin:15px;
`;
const MBox1 = styled.View`
    //height:21px;
`;
const MText1 = styled.Text`
            color:#0062FF;
            font-family: 'Pretendard';
            font-style: normal;
            font-weight: 600;
            font-size: 18px;
        `;
const MBox2 = styled.View`
    width:90%
    //height2:0%;
`;
const MText2 = styled.Text`
            color:#1D1D1D;
            font-family: 'Pretendard';
            font-style: normal;
            font-weight: 400;
            font-size: 8px;
            line-height: 10px;
        `;
const IBox = styled.View`
    border:1px;
    border-color:white;
    border-radius:5px;
    //right:40px
    bottom:8px;
    width:60px;
    height:60px;
    //margin:10px;
`;
const TwoMatchBoardBox = styled.View`
    background-color:#EBEBEB;
    border-radius: 10px;
    padding-bottom:310px
    
`;

const TwoMatchBoardBox2 = styled.View`
    //border:1px;
    padding-top:10px;
    padding-bottom: 12.5px;
    padding-left:40px;
    padding-right:40px;
    //align-items: center;
    justify-content:space-between;
    flex-direction:row; 
`;
const TwoMatchBoardBox21 = styled.View`
    //border:1px;
    width:30%;
    height:102px;
    align-items: center;
    justify-content:space-between;

`;
const MajorBtn = styled.Pressable`
        border-radius:35px;
        background-color:#E3E3E3;
        width:80px;
        height:80px;
        justify-content:space-between;
        flex-direction:row; 
    `;
const MajorTextBox = styled.View`
    justify-content:space-between;
    flex-direction:row; 
`;
const MajorText = styled.Text`
            color:black;
            font-size:10px;
        `;
const MatchBox = styled.View`
    //border:1px;
    padding-top:14px;
    padding-left:13px;
    padding-right:50px;
    justify-content:space-between;
    flex-direction:row; 
    `;

const MatchBtn2 = styled.Pressable`
        border-radius:10px;
        background-color:#E3E3E3;
        //width:310px;
        height:80px;
        //justify-content:space-between;
        
    `;
    const HotBoardBox = styled.View`
    //border: 1px;
    border-radius: 15px;
    height:140px; 
    width: 86%;
    align-self: center;
`;
    const HotTextBox = styled.View`
        height:40px;
        flex-direction: row;
        padding-left: 5px;
    `;
        const HotIconBox = styled.View`
            height: 30px;
            width: 30px;
            margin: 5px;
        `;   
        const HotText = styled.Text`
            color : black;
            font-size: 15px;
            padding-top: 10px;
            font-weight: 500;
        `;
    const HotArticle = styled.TouchableOpacity`
        //border: 1px;
        border-radius: 15px;
        background-color: #E3E3E3;
        height: 100px;
        flex-direction: row;
        justify-content: space-between;
        padding: 15px;
    `;
        const AricleText = styled.View`
            //border:1px;
            width: 75%;
        `;
            const ArticleTitleBox = styled.View`
                //border: 1px;
                width: 100%;
                flex-direction: row;
            `;
                const ArticleTitle = styled.Text`
                    font-size: 15px;
                    font-weight: 500;
                    margin-right: 5px;
                `;
                const ArticleTimeBox = styled.View`
                    //border: 1px;
                    height : 20px;
                    justify-content: center;
                `;
                const ArticleTime = styled.Text`
                    font-weight: 400;
                    font-size: 8px;
                    color: #818181;
                `;
            const ArticleContents = styled.Text`
                margin-top: 3px;
                font-size : 13px;
                font-weight: 400;
                color: #1D1D1D;
            `;
        const ArticleImageBox = styled.View`
            //border : 1px;
            width : 65px;
            align-items: center;
            justify-content: space-between;
            padding-bottom: 15px;
        `;
            const HotImage = styled.Image`
                border-radius: 10px;
                background-color: #BBBBBB;
                width : 60px;
                height : 60px;
                margin-bottom: 3px;
            `;
            const ReactionBox = styled.View`
                //border : 1px;
                width: 60px;
                height: 15px;
                flex-direction: row;
            `;
                const CommentIcon = styled.View`
                    width: 25%;
                    height: 100%;
                    //border: 1px;
                `;
                const CommentText = styled.Text`
                    font-size: 11px;
                `;
                const GoodIcon = styled.View`
                    margin-left: 5px;
                    width: 25%;
                    height: 100%;
                    //border: 1px;
                    justify-content: center;
                `;
                const GoodText = styled.Text`
                    font-size: 11px;
                `;

const HotPlusBar = styled.View`
     //border:1px;
     margin-top: 10px;
     margin-left: 10px;
     margin-right: 10px;
     margin-bottom : 30px; 
     align-content: center;
     justify-content: center;
     flex-direction : row;
`;  
    const PlusBarCircle = styled.View`
        background-color: #C4BFBF;
        width: 5px;
        height: 5px;
        border-radius: 5px;
        margin-right: 5px;
    `;
    const PlusBarBar = styled.View`
        background-color: #C4BFBF;
        border-radius: 5px;
        height: 5px;
        width: 60px;
        margin-right: 5px;
    `;
    
const Mathcing = ({navigation:{navigate}}) => {
    const [click,setClick] = useState(false);
    const [modalVisible,setModalVisible] = useState(false);
    return(
        <Container>
             <Modal
                animationType="fade"
                transparent={true}
                visible={modalVisible}
            >
                <ModalBackView>
                </ModalBackView>
                <ModalView>
                    <ModalinquirePressable>
                        <MiddleText>
                            문의하기
                        </MiddleText>
                    </ModalinquirePressable>
                    <ModalnewPressable onPress={()=>setModalVisible(false)}>
                        <MiddleText>
                            새로고침
                        </MiddleText>
                    </ModalnewPressable>
                </ModalView>
            </Modal>
            <HeaderBox>
            <BackView>
                <BackBtn 
                    onPress={()=>navigate("Tabs",{screen:"Home"})}>
                    <Icon name="chevron-back-outline" size = {30} />
                </BackBtn>
            </BackView>
            <BoardTextBox>
                <BoardText>게시판</BoardText>   
                <SearchBtn
                    onPress={()=>navigate("Stack",{screen:"Board_research_min"})}>
                    <Icon name="search-outline" size = {25}/>
                </SearchBtn>
            </BoardTextBox>
            <PlusBtn> 
                <Icon name="ellipsis-vertical-outline" size = {25}/>
            </PlusBtn>
        </HeaderBox>
            <HotBoardBox>
            <HotTextBox>
                <HotIconBox>
                    <Icon name="flame" size = {30} color = "#FF0000"/>
                    </HotIconBox>
                <HotText>HOT</HotText>
            </HotTextBox>
            <HotArticle
                onPress={()=>navigate("Stack",{screen:"HotBoard_min"})}>
                <AricleText>
                    <ArticleTitleBox>
                        <ArticleTitle>제목을 입력하세요</ArticleTitle>
                        <ArticleTimeBox>
                            <ArticleTime>00분 전</ArticleTime>
                        </ArticleTimeBox>
                    </ArticleTitleBox>
                    
                    <ArticleContents>내용을 입력하세요</ArticleContents>
                </AricleText>
                <ArticleImageBox>
                    <HotImage></HotImage>
                    <ReactionBox>
                        <CommentIcon>
                            <Icon name="chatbox-ellipses" size = {12} color = "#1655E9"/>
                        </CommentIcon>
                        <CommentText>18</CommentText>
                        <GoodIcon>
                            <Icon name="thumbs-up" size = {12} color = "#FF0000"/>
                        </GoodIcon>
                        <GoodText>18</GoodText>
                    </ReactionBox>
                </ArticleImageBox>
            </HotArticle>
        </HotBoardBox>
        <HotPlusBar>
            <PlusBarCircle></PlusBarCircle>
            <PlusBarCircle></PlusBarCircle>
            <PlusBarBar></PlusBarBar>
            <PlusBarCircle></PlusBarCircle>
            <PlusBarCircle></PlusBarCircle>
        </HotPlusBar>
            <EyeBox>
                <EyeBtn 
                    onPress={()=>navigate("Stack",{screen:"EyePage"})}
                    onPressIn={()=>setClick(true)}    
                    onLongPress={()=>console.log("onLongPress")}  
                    onPressOut={()=>setClick(false)} >
                    <EyeTextBox>
                        <EyeText>한국공대 선후배 한눈에 보기</EyeText>
                    </EyeTextBox>
                </EyeBtn>
            </EyeBox>
            <OneMatchBoardBox>
                <MatchBtn2
                    onPress={()=>navigate("Stack",{screen:"Matching_111"})}
                    onPressIn={()=>setClick(true)}    
                    onLongPress={()=>console.log("onLongPress")}  
                    onPressOut={()=>setClick(false)} 
                >
                    <MatchBox>
                        <MBox>
                            <MBox1>
                                <MText1>선후배 1:1:1 매칭 </MText1>
                            </MBox1>
                            <MBox2>
                                <MText2>1:1:1 매칭은 한국공학대 학생 한명이 선배1명 , 후배1명과 연결되는 매칭 시스템 입니다.</MText2>
                            </MBox2>
                        </MBox>
                        <IBox>
                        </IBox>
                    </MatchBox>
                </MatchBtn2>
            </OneMatchBoardBox>
            <TwoMatchBoardBox>
                    <OneMatchBoardBox>
                        <MatchBtn2>
                            <MatchBox>
                                <MBox>
                                <MBox1>
                                    <MText1>키워드 그룹매칭</MText1>
                                </MBox1>
                                <MBox2>
                                    <MText2>키워드 그룹매칭은 한국공학대 학생들이 키워드를 통해 자신과 유사한 관심사를 갖고 있는 학우를 찾고 소모임을 구성할 수 있는 매칭 시스템입니다.</MText2>
                                </MBox2>
                                </MBox>
                                <IBox></IBox>
                            </MatchBox>
                        </MatchBtn2>
                    </OneMatchBoardBox>
                    <TwoMatchBoardBox2>
                        <TwoMatchBoardBox21>
                            <MajorBtn></MajorBtn>
                            <MajorTextBox>
                                <MajorText>전공/교양</MajorText>
                            </MajorTextBox>
                        </TwoMatchBoardBox21>
                        <TwoMatchBoardBox21>
                            <MajorBtn></MajorBtn>
                            <MajorTextBox>
                                <MajorText>비교과</MajorText>
                            </MajorTextBox>
                        </TwoMatchBoardBox21>
                        <TwoMatchBoardBox21>
                            <MajorBtn></MajorBtn>
                            <MajorTextBox>
                                <MajorText>대외활동</MajorText>
                            </MajorTextBox>
                        </TwoMatchBoardBox21>
                    </TwoMatchBoardBox2>
                    <TwoMatchBoardBox2>
                        <TwoMatchBoardBox21>
                            <MajorBtn></MajorBtn>
                            <MajorTextBox>
                                <MajorText>핫플</MajorText>
                            </MajorTextBox>
                        </TwoMatchBoardBox21>
                        <TwoMatchBoardBox21>
                            <MajorBtn></MajorBtn>
                            <MajorTextBox>
                                <MajorText>취업진로</MajorText>
                            </MajorTextBox>
                        </TwoMatchBoardBox21>
                        <TwoMatchBoardBox21>
                            <MajorBtn></MajorBtn>
                            <MajorTextBox>
                                <MajorText>기타 프로젝트</MajorText>
                            </MajorTextBox>
                        </TwoMatchBoardBox21>
                    </TwoMatchBoardBox2>
            </TwoMatchBoardBox>
            </Container>
    )
}
export default Mathcing;