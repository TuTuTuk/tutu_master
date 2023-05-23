import React from "react";
import { useState } from "react";
import { Modal } from "react-native";
import styled from "styled-components/native";
import Icon from 'react-native-vector-icons/Ionicons';
import moment from "moment"

import { useNavigation } from '@react-navigation/native';

import auth from "@react-native-firebase/auth";
import firestore from '@react-native-firebase/firestore';
import storage from '@react-native-firebase/storage';

import TopBar from "../../../components/TopBar";
import BlueButton from "../../../components/BlueButton";

import {v4 as uuid} from "uuid";


const Container = styled.ScrollView.attrs(()=>({
    contentContainerStyle:{
        showVerticalScrollIndicator:false,
    }
}))`
    flex:1;
    margin-top: 10px;
    margin-bottom: 10px;
`;

const AllBox = styled.View`
    border: 1px;
    border-color: #1398FF;
    border-radius: 10px;
    width: 91.7%;
    align-self: center;
    padding: 2.7%;
    padding-bottom: 5px;
`;
    const KeyBox = styled.View`
        //border: 1px;
        width: 100%;
        margin-bottom: 20px;
    `;
        const TitleBox = styled.View`
            //border: 1px;
            width: 100%;
            height: auto;
            flex-direction: row;
            margin-bottom: 10px;
            justify-content: space-between;
        `;  
            const Title = styled.Text`
                font-size: 14px;
                font-weight: 700;
                //border: 1px;
            `;
            const ClearTextBox = styled.View`
                //border: 1px;
                justify-content: center;
            `;
            const ClearText = styled.Text`
                color: #818181;
                font-size: 12px;
                font-weight: 500;
                text-decoration: underline;
            `;
            const ChoiceText = styled.Text`
                //border: 1px;
                font-size: 12px;
                font-weight: 500;
                color: #FF3D00;
            `;
        const KeywordBox = styled.View`
            //border: 1px;
            height: auto;
        `;
            const Row = styled.View`
                //border: 1px;
                height: 22px;
                margin-bottom: 5px;
                flex-direction: row;
            `;
    const MajorKeyword = styled.View`
        border: 1px;
        border-radius: 5px;
        border-color: #0062FF;
        padding-left: 2%;
        padding-right: 2%;
        margin-right: 5px;
    `;
        const MajorKeywordText = styled.Text`
            color: #0062FF;
            text-align: center;
        `;
    const FieldKeyword = styled.View`
        //border: 1px;
        border-radius: 5px;
        background-color: #FFAB40;
        padding-left: 2%;
        padding-right: 2%;
        margin-right: 5px;
    `;
        const FieldKeywordText = styled.Text`
            color: white;
            text-align: center;
        `;
    const HotKeyword = styled.View`
        //border: 1px;
        border-radius: 5px;
        background-color: #AACD06;
        padding-left: 2%;
        padding-right: 2%;
        margin-right: 5px;
    `;
        const HotKeywordText = styled.Text`
            color: white;
            text-align: center;
        `;
    //HashTagBox
const HashTagBox = styled.View`
    border: 1px;
    border-color: #1398FF;
    border-radius: 10px;
    width: 86%;
    align-self: center;
    padding: 4.17%;
    padding-bottom: 5px;
`;
    const Hashtag = styled.View`
        border: 1px;
        border-radius: 5px;
        border-color: #0062FF;
        padding-left: 2%;
        padding-right: 2%;
        margin-right: 5px;
    `;
        const HashtagText = styled.Text`
            color: #0062FF;
            text-align: center;
        `;
const ViewMoreIcon = styled.Pressable`
    align-self: center;
`;

const WritingBox = styled.View`
    //border: 1px;
    width: 100%;
    padding: 20px;
    margin-top: 20px;
`;
    const WritingTitleBox = styled.View`
        flex-direction: row;
        margin-bottom: 15px;
        justify-content: space-between;
    `;
        const WritingTitleText = styled.TextInput`
            font-size: 16px;
            font-weight: 600;
            color: #1D1D1D;
        `;
        const WritingTitlePlus = styled.View`
            //border: 1px;
            justify-content: center;
            flex-direction: row;
            height: 24px;
        `;
            const InformTextBox = styled.View`
                //border: 1px;
                justify-content: center;
            `;
            const InformText = styled.Text`
                font-size: 8px;
                font-weight: 400;
                color: #0062FF;
                margin-right: 4px;
            `;
            const RemoveBtn = styled.Pressable`
                //border: 1px; 
                margin-top: 2px;
                width: 20px;
                height: 20px;
            `;
                const IconImage = styled.Image`
                    width: 100%;
                    height: 100%;
                `;    
    const WritingContentBox = styled.TextInput`
        //border: 1px;
        width: 100%;
        height: 350px;
        background-color: #E3E3E3;
        margin-bottom: 10px;
    `;

    const IconBox = styled.View`
        //border: 1px;
        flex-direction: row;
    `;
        const Icon1 = styled.View`
            //border: 1px;
            margin-right: 5px;
            width: 20px;
            height: 20px;
            background-color: #E3E3E3;
        `;

const AddKeywordBox = styled.View`
    //border: 1px;
    width: 100%;
    padding: 20px;
    margin-top: 10px;
    align-self: center;
    justify-content: center;
`;
    const InputKeywordBox = styled.View`
        width: 100%;
        height: 40px;
        background-color: #E3E3E3;
        border-radius: 10px;
    `;

//-------------Modal-----------------
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
    margin-right: 6.5%;
    align-self: flex-end;
    top:15%;
    padding-left:10px;
    padding-right:10px;
    padding-top:5px;
`;
    const Modalinquire = styled.Pressable`
        height:50%;
    `;
        const MiddleText = styled.Text`
            font-size:12px;
        `;

const BoardWriting_min = ({navigation:{navigate},route})=>{
    const navigation = useNavigation();
    const [modalVisible,setModalVisible] = useState(false)

    const [boardSave,setBoardSave] = useState("")
    const [titleText,setTitleText] = useState("")
    const [contentText,setContentText] = useState("") 
    
    const [hide, setHide] = useState(false)
    const [check, setCheck] = useState(false)

    const DoneWrite=async()=>{
        const tempSave = await firestore().collection("boards").doc(route.params.title).get();
        const timeNow = new Date();

        const timeDate = timeNow.getDate()
        const timeMonth = timeNow.getMonth()+1
        const timeYear = timeNow.getFullYear()

        if(tempSave._data){
                firestore().collection("boards").doc(route.params.title).update({
                    arr:[...tempSave._data.arr,{ //기존 정보에 이어 붙혀서 저장
                        title:titleText,
                        contents:contentText,
                        user_uid:auth().currentUser.uid,
                        user_name:auth().currentUser.displayName,
                        create_time:timeYear+'/'+timeMonth+'/'+timeDate,
                        hits_count:0,
                        boards_uid:auth().currentUser.displayName+"@"+route.params.title+"@"+timeNow,
                    }]
                })
                .then(async()=>{
                    const tempIntegratedSave = await firestore().collection("boards").doc("Integrated").get();
                    await firestore().collection("boards").doc("Integrated").update({ //통합 게시판에도 저장
                        arr:[...tempIntegratedSave._data.arr,{
                            title:titleText,
                            contents:contentText,
                            user_uid:auth().currentUser.uid,
                            user_name:auth().currentUser.displayName,
                            create_time:timeNow,
                            hits_count:0,
                            boards_uid:auth().currentUser.displayName+"@"+route.params.title+"@"+timeNow,
                        }]
                    })
                    .then(async()=>{
                        const save1= await firestore().collection("boards").doc(auth().currentUser.uid).get();
                        setBoardSave(save1._data);
                        const userTempSave= await firestore().collection("users").doc(auth().currentUser.uid).get();
                        firestore().collection("users").doc(auth().currentUser.uid).update({
                            user_boards_count: userTempSave._data.user_boards_count+1
                        });
                        await navigation.reset({routes:[{name:"Designboard_min",params:{title:route.params.title}}]}) //새로고침
                        navigation.navigate("Stack",{screen:"Designboard_min",params:{title:route.params.title}}) //화면 뒤로 이동
                    })
                    .catch((error)=>{
                        console.log(error)
                    })
                })
                .catch((error)=>{
                    console.log(error)
                })
        }

        //내가 쓴 게시물에 저장
        firestore().collection("users").doc(auth().currentUser.uid).collection("Boards").doc(titleText).set({
            title : titleText,
            contents:contentText,
            create_time:timeNow, 
            user_name:auth().currentUser.displayName,
            good_cound : 0,

        }).catch((error)=>{
            console.log(error)
        })

    }

    return(
    <Container>
        <Modal
            animationType="fade"
            transparent={true}
            visible={modalVisible}>
            <ModalBackView>
            </ModalBackView>
            <ModalView>
                <Modalinquire onPress={()=>setModalVisible(false)}>
                    <MiddleText>
                        문의하기
                    </MiddleText>
                </Modalinquire>
                <Modalinquire onPress={()=>setModalVisible(false)}>
                    <MiddleText>
                        새로고침
                    </MiddleText>
                </Modalinquire>
            </ModalView>
        </Modal>
        <TopBar title="게시판 글쓰기"></TopBar>
        {
            hide==false?
            <AllBox>
            <KeyBox>
                <TitleBox>
                    <Title>학과</Title>
                    <ClearTextBox><ClearText>선택해제</ClearText></ClearTextBox>
                </TitleBox>
                <KeywordBox>
                    <Row>
                        <MajorKeyword>
                            <MajorKeywordText>전체학과</MajorKeywordText>
                        </MajorKeyword>
                    </Row>
                    <Row>
                        <MajorKeyword><MajorKeywordText>컴퓨터공학부</MajorKeywordText></MajorKeyword>
                        <MajorKeyword><MajorKeywordText>게임공학과</MajorKeywordText></MajorKeyword>
                    </Row>
                    <Row>
                        <MajorKeyword><MajorKeywordText>기계설계공학과</MajorKeywordText></MajorKeyword>
                        <MajorKeyword><MajorKeywordText>메카트로닉스공학부</MajorKeywordText></MajorKeyword>
                        <MajorKeyword><MajorKeywordText>전자공학부</MajorKeywordText></MajorKeyword>
                    </Row>
                    <Row>
                        <MajorKeyword><MajorKeywordText>신소재공학과</MajorKeywordText></MajorKeyword>
                        <MajorKeyword><MajorKeywordText>생명화학공학과</MajorKeywordText></MajorKeyword>
                        <MajorKeyword><MajorKeywordText>나노반도체공학과</MajorKeywordText></MajorKeyword>
                    </Row>
                    <Row>
                        <MajorKeyword><MajorKeywordText>에너지,전기공학과</MajorKeywordText></MajorKeyword>
                        <MajorKeyword><MajorKeywordText>경영학부</MajorKeywordText></MajorKeyword>
                        <MajorKeyword><MajorKeywordText>디자인공학부</MajorKeywordText></MajorKeyword>
                    </Row>
                </KeywordBox>
            </KeyBox>
            <KeyBox>
                <TitleBox>
                    <Title>분야</Title>
                    <ClearTextBox><ClearText>선택해제</ClearText></ClearTextBox>
                </TitleBox>
                <KeywordBox>
                    <Row>
                        <FieldKeyword><FieldKeywordText>기타</FieldKeywordText></FieldKeyword>
                    </Row>
                    <Row>
                        <FieldKeyword><FieldKeywordText>전공</FieldKeywordText></FieldKeyword>
                        <FieldKeyword><FieldKeywordText>교양</FieldKeywordText></FieldKeyword>
                        <FieldKeyword><FieldKeywordText>비교과</FieldKeywordText></FieldKeyword>
                        <FieldKeyword><FieldKeywordText>대외활동</FieldKeywordText></FieldKeyword>
                    </Row>
                    <Row>
                        <FieldKeyword><FieldKeywordText>장학금</FieldKeywordText></FieldKeyword>
                        <FieldKeyword><FieldKeywordText>핫플</FieldKeywordText></FieldKeyword>
                        <FieldKeyword><FieldKeywordText>취업진로</FieldKeywordText></FieldKeyword>
                    </Row>
                </KeywordBox>
            </KeyBox>
            <ViewMoreIcon onPress={()=>setHide(true)}>
                <Icon name="caret-down-outline" size={20} color = '#FF3D00'/>
            </ViewMoreIcon>
            </AllBox>
            :
            <HashTagBox>
                <KeyBox>
                    <KeywordBox>
                        <Row>
                            <Hashtag><HashtagText>전체학과</HashtagText></Hashtag>
                            <Hashtag><HashtagText>교양</HashtagText></Hashtag>
                            <Hashtag><HashtagText>직접작성</HashtagText></Hashtag>
                        </Row>
                    </KeywordBox>
                </KeyBox>
                <ViewMoreIcon onPress={()=>setHide(false)}><Icon name="caret-up" size={20} color = '#00E676'/></ViewMoreIcon>
            </HashTagBox>
        }
        <WritingBox>
            <WritingTitleBox>
                <WritingTitleText
                    placeholder="제목을 입력하세요"
                    onChangeText={(text)=>setTitleText(text)}
                />
                <WritingTitlePlus>
                    <InformTextBox><InformText>정보글</InformText></InformTextBox>
                    {
                        check == false?
                        <RemoveBtn onPress={()=>setCheck(true)}>
                            <IconImage source={require('../../../images/체크X.png')}></IconImage>
                        </RemoveBtn>
                        :
                        <RemoveBtn onPress={()=>setCheck(false)}>
                            <IconImage source={require('../../../images/체크.png')}></IconImage>
                        </RemoveBtn>
                    }
                </WritingTitlePlus>
            </WritingTitleBox>
            <WritingContentBox
                placeholder="내용을 입력하고 원하는 해시태그를 사용해보세요!"
                onChangeText={(text)=>setContentText(text)}
            />
            <IconBox>
                <Icon1><Icon name="image" size={20} color = '#545454'/></Icon1>
                <Icon1><Icon name="camera" size={20} color = '#545454'/></Icon1>
                <Icon1><Icon name="attach" size={20} color = '#545454'/></Icon1>
            </IconBox>
        </WritingBox>
        <AddKeywordBox>
            <KeyBox>
                <TitleBox>
                    <Title>인기</Title>
                    <ClearTextBox><ChoiceText>*선택</ChoiceText></ClearTextBox>
                </TitleBox>
                <KeywordBox>
                    <Row>
                        <HotKeyword>
                            <HotKeywordText>#인기키워드</HotKeywordText>
                        </HotKeyword>
                        <HotKeyword>
                            <HotKeywordText>#인기키워드</HotKeywordText>
                        </HotKeyword>
                        <HotKeyword>
                            <HotKeywordText>#인기키워드</HotKeywordText>
                        </HotKeyword>
                    </Row>
                    <Row>
                        <HotKeyword>
                            <HotKeywordText>#인기키워드</HotKeywordText>
                        </HotKeyword>
                        <HotKeyword>
                            <HotKeywordText>#인기키워드</HotKeywordText>
                        </HotKeyword>
                        <HotKeyword>
                            <HotKeywordText>#인기키워드</HotKeywordText>
                        </HotKeyword>
                    </Row>
                    <Row>
                        <HotKeyword>
                            <HotKeywordText>#인기키워드</HotKeywordText>
                        </HotKeyword>
                        <HotKeyword>
                            <HotKeywordText>#인기키워드</HotKeywordText>
                        </HotKeyword>
                        <HotKeyword>
                            <HotKeywordText>#인기키워드</HotKeywordText>
                        </HotKeyword>
                    </Row>
                    <Row>
                        <HotKeyword>
                            <HotKeywordText>#인기키워드</HotKeywordText>
                        </HotKeyword>
                    </Row>
                </KeywordBox>
            </KeyBox>
            <TitleBox>
                <Title>키워드 추가</Title>
                <ClearTextBox>
                    <ChoiceText>*선택</ChoiceText>
                </ClearTextBox>
            </TitleBox>
            <InputKeywordBox></InputKeywordBox>
        </AddKeywordBox>
        <BlueButton title="작성완료" click={DoneWrite} mbottom="35"/>
    </Container>
    );
        };
export default BoardWriting_min;