import React from "react";
import { useState } from "react";
import { Modal, View, Text, Pressable, ScrollView} from "react-native";
import styled from "styled-components/native";
import Icon from 'react-native-vector-icons/Ionicons';
import moment from "moment"

import { useNavigation } from '@react-navigation/native';

import auth from "@react-native-firebase/auth";
import firestore from '@react-native-firebase/firestore';
import storage from '@react-native-firebase/storage';

import TopBar from "../../../components/TopBar";
import BlueButton from "../../../components/BlueButton";
import MajorTag from '../../../components/MajorTag'
import FieldTag from '../../../components/FieldTag'

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

// 해시태그 선택 box
const AllBox = styled.View`
    border: 1px;
    border-color: #1398FF;
    border-radius: 10px;
    width: 91.7%;
    align-self: center;
    padding: 2.7%;
    padding-bottom: 5px;
`;
    const TitleBox = styled.View`
        width: 100%;
        flex-direction: row;
        margin-bottom: 10px;
        justify-content: space-between;
    `;  
        // 선택해제 버튼
        const ClearTextBox = styled.Pressable`
            justify-content: center;
        `;
        const ClearText = styled.Text`
            color: #818181;
            font-size: 12px;
            font-weight: 500;
            text-decoration: underline;
        `;
        // 선택 버튼
        const ChoiceText = styled.Text`
            font-size: 12px;
            font-weight: 500;
            color: #FF3D00;
        `;

    // 키워드 선택 줄
    const Row = styled.View`
        // border: 1px;
        height: 22px;
        margin-bottom: 5px;
        flex-direction: row;
        align-items: flex-start;
    `;

    const FieldKeyword = styled.Pressable`
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

const BoardWriting_min = ({navigation:{navigate},route})=>{

    const navigation = useNavigation();
    const [modalVisible,setModalVisible] = useState(false)

    const [boardSave,setBoardSave] = useState("")
    const [titleText,setTitleText] = useState("")
    const [contentText,setContentText] = useState("") 
    
    const [hide, setHide] = useState(false)
    const [check, setCheck] = useState(false)

    const DoneWrite2=async()=>{
        const timeNow = new Date();

        const timeMili = timeNow.getMilliseconds()
        const timeSec = timeNow.getSeconds()
        const timeMin = timeNow.getMinutes()
        const timeHour = (timeNow.getHours()+9)%24
        const timeDate = timeNow.getDate()
        const timeMonth = timeNow.getMonth()+1
        const timeYear = timeNow.getFullYear()

        const timeStr = timeYear+"-"+timeMonth+"-"+timeDate+"-"+timeHour+":"+timeMin+":"+timeSec+"."+timeMili
        const boardsUid = auth().currentUser.displayName+"@"+route.params.kind+"@"+timeStr

        firestore().collection("boards").doc(route.params.kind).collection("boardsUid").doc(boardsUid).set({
            title:titleText,
            contents:contentText,
            user_uid:auth().currentUser.uid,
            user_name:auth().currentUser.displayName,
            create_time: timeStr,
            hits_count:0,
            comment_count:0,
            good_count:0,
            boards_uid:boardsUid
        })
        .then(async()=>{
            await firestore().collection("boards").doc("Integrated").collection("boardsUid").doc(boardsUid).set({ //통합 게시판에도 저장
                title:titleText,
                contents:contentText,
                user_uid:auth().currentUser.uid,
                user_name:auth().currentUser.displayName,
                create_time:timeYear+'/'+timeMonth+'/'+timeDate,
                hits_count:0,
                comment_count:0,
                good_count:0,
                boards_uid:boardsUid
            })
            .then(async()=>{
                //댓글 저장소 생성
                await firestore().collection("Comments").doc(boardsUid).set({
                    arr:[]
                });
                
                //유저 정보 업데이트
                const userTempSave= await firestore().collection("users").doc(auth().currentUser.uid).get();
                firestore().collection("users").doc(auth().currentUser.uid).update({
                    user_boards_count: userTempSave._data.user_boards_count+1
                });

                await navigation.reset({routes:[{name:"Designboard_min",params:{title:route.params.kind}}]}) //새로고침
                navigation.navigate("Stack",{screen:"Designboard_min",params:{title:route.params.kind}}) //화면 뒤로 이동
            })
            .catch((error)=>{
                console.log(error)
            })
        })
        .catch((error)=>{
            console.log(error)
        })

        //내가 쓴 게시물에 저장
        firestore().collection("users").doc(auth().currentUser.uid).collection("Boards").doc(titleText).set({
            title : titleText,
            contents:contentText,
            create_time:timeNow, 
            user_name:auth().currentUser.displayName,
            good_count : 0,

        }).catch((error)=>{
            console.log(error)
        })

    }

    const [saveTag, setSaveTag] = useState([])

    const delTag=(tag)=>{
        const tags = [...saveTag];
        let filtered = tags.filter((element) => element != tag);
        setSaveTag(filtered)
        console.log(saveTag)
    }
    const AlldelTag=(tag)=>{
        let tags = [...saveTag];
        data1.map((value,index)=>(
            tags = tags.filter((element) => element != value)
        ))
        setSaveTag(tags)
    }
    const AllFielddelTag=(tag)=>{
        let tags = [...saveTag];
        data2.map((value,index)=>(
            tags = tags.filter((element) => element != value)
        ))
        setSaveTag(tags)
    }

    const addTag=(tag)=>{
        const tags = [...saveTag];
        tags.push(tag);
        setSaveTag(tags)
        console.log(saveTag)
    }
    const AlladdTag=(tag)=>{
        setSaveTag([]);
        const tags = [...saveTag];
        data1.map((value,index)=>(
            tags.push(value)
        ))
        setSaveTag(tags)
    }

    const data1 = ["게임공학과", "컴퓨터공학부", "기계설계공학과", "메카트로닉스공학부", "전자공학부", "신소재공학과", "생명화학공학과", "나노반도체공학과"
                    ,"에너지,전기공학과", "경영학부", "디자인공학부"]
    const data2 = ["기타", "전공", "교양", "비교과", "대외활동", "장학금", "핫플", "취업진로"]

    return(
    <Container>
        <TopBar title="게시판 글쓰기"></TopBar>
        <AllBox>
        {
            saveTag[0]? (
            <View style={{marginBottom:20}}>
                <ScrollView horizontal={true}>
                <Row>
                { saveTag.map((keyword, index)=> {
                    return ( 
                        keyword == "전공"||keyword == "교양"||keyword == "비교과"||keyword == "대외활동"||
                        keyword == "장학금"||keyword == "핫플"||keyword == "취업진로"? 
                        <FieldTag name={keyword} key ={index} addTag={addTag} delTag={delTag}></FieldTag>
                        : 
                        keyword == "컴퓨터공학부"||keyword == "게임공학과"||keyword == "인공지능학과"||keyword == "기계설계공학과"||
                        keyword == "메카트로닉스공학부"||keyword == "전자공학부"||keyword == "신소재공학과"||keyword == "생명화학공학과"||
                        keyword == "나노반도체공학과"||keyword == "에너지,전기공학과"||keyword == "경영학부"||keyword == "디자인공학부"? 
                        <MajorTag name={keyword} key ={index} addTag={addTag} delTag={delTag}></MajorTag>
                        :null:null
                    )
                })}
                </Row>
                </ScrollView>
            </View>) : null
        }
        { hide == false?
        <>
            <View style={{marginBottom: 20}}>
                <TitleBox>
                    <Text style={{fontSize: 14, fontWeight: "700"}}>학과</Text>
                    <ClearTextBox onPress={()=> {
                        AlldelTag()
                        return(
                            data1.map((value,index)=>(<MajorTag name={value} key ={index} passive= "off"></MajorTag>))
                        )}
                    }><ClearText>선택해제</ClearText></ClearTextBox>
                </TitleBox>
                <View>
                    <Row><MajorTag name="전체학과" addTag={AlladdTag} delTag={AlldelTag} Passive={"true"}></MajorTag></Row>
                    <Row>
                        <MajorTag name="컴퓨터공학부" addTag={addTag} delTag={delTag}></MajorTag>
                        <MajorTag name="게임공학과" addTag={addTag} delTag={delTag}></MajorTag>
                    </Row>
                    <Row>
                        <MajorTag name="기계설계공학과" addTag={addTag} delTag={delTag}></MajorTag>
                        <MajorTag name="메카트로닉스공학부" addTag={addTag} delTag={delTag}></MajorTag>
                        <MajorTag name="전자공학부" addTag={addTag} delTag={delTag}></MajorTag>
                    </Row>
                    <Row>
                        <MajorTag name="신소재공학과" addTag={addTag} delTag={delTag}></MajorTag>
                        <MajorTag name="생명화학공학과" addTag={addTag} delTag={delTag}></MajorTag>
                        <MajorTag name="나노반도체공학과" addTag={addTag} delTag={delTag}></MajorTag>
                    </Row>
                    <Row>
                        <MajorTag name="에너지,전기공학과" addTag={addTag} delTag={delTag}></MajorTag>
                        <MajorTag name="경영학부" addTag={addTag} delTag={delTag}></MajorTag>
                        <MajorTag name="디자인공학부" addTag={addTag} delTag={delTag}></MajorTag>
                    </Row>
                </View>
            </View>
            <View style={{marginBottom: 20}}>
                <TitleBox>
                    <Text style={{fontSize: 14, fontWeight: "700"}}>분야</Text>
                    <ClearTextBox onPress={()=> AllFielddelTag()}><ClearText>선택해제</ClearText></ClearTextBox>
                </TitleBox>
                <View>
                    <Row><FieldTag name="기타" addTag={addTag} delTag={delTag}></FieldTag></Row>
                    <Row>
                        <FieldTag name="전공" addTag={addTag} delTag={delTag}></FieldTag>
                        <FieldTag name="교양" addTag={addTag} delTag={delTag}></FieldTag>
                        <FieldTag name="비교과" addTag={addTag} delTag={delTag}></FieldTag>
                        <FieldTag name="대외활동" addTag={addTag} delTag={delTag}></FieldTag>
                    </Row>
                    <Row>
                        <FieldTag name="장학금" addTag={addTag} delTag={delTag}></FieldTag>
                        <FieldTag name="핫플" addTag={addTag} delTag={delTag}></FieldTag>
                        <FieldTag name="취업진로" addTag={addTag} delTag={delTag}></FieldTag>
                    </Row>
                </View>
            </View> 
            </> : null
        }
            <Pressable style={{alignSelf: "center"}} onPress={()=>setHide(!hide)}>
                <Icon name="caret-down-outline" size={20} color = '#FF3D00'/>
            </Pressable>
            </AllBox>
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
                <RemoveBtn onPress={()=>setCheck(true)}><IconImage source={require('../../../images/체크X.png')}></IconImage></RemoveBtn>
                :
                <RemoveBtn onPress={()=>setCheck(false)}><IconImage source={require('../../../images/체크.png')}></IconImage></RemoveBtn>
            }
                </WritingTitlePlus>
            </WritingTitleBox>
            <WritingContentBox
                placeholder="내용을 입력하고 원하는 해시태그를 사용해보세요!"
                onChangeText={(text)=>setContentText(text)}
            />
            <View style={{flexDirection: "row"}}>
                <Icon1><Icon name="image" size={20} color = '#545454'/></Icon1>
                <Icon1><Icon name="camera" size={20} color = '#545454'/></Icon1>
                <Icon1><Icon name="attach" size={20} color = '#545454'/></Icon1>
            </View>
        </WritingBox>

        <AddKeywordBox>
            <View style={{marginBottom: 20}}>
                <TitleBox>
                    <Text style={{fontSize: 14, fontWeight: "700"}}>인기</Text>
                    <ClearTextBox><ChoiceText>*선택</ChoiceText></ClearTextBox>
                </TitleBox>
                <View>
                    <Row>
                        <HotKeyword><HotKeywordText>#인기키워드</HotKeywordText></HotKeyword>
                        <HotKeyword><HotKeywordText>#인기키워드</HotKeywordText></HotKeyword>
                        <HotKeyword><HotKeywordText>#인기키워드</HotKeywordText></HotKeyword>
                    </Row>
                    <Row>
                        <HotKeyword><HotKeywordText>#인기키워드</HotKeywordText></HotKeyword>
                        <HotKeyword><HotKeywordText>#인기키워드</HotKeywordText></HotKeyword>
                        <HotKeyword><HotKeywordText>#인기키워드</HotKeywordText></HotKeyword>
                    </Row>
                    <Row>
                        <HotKeyword><HotKeywordText>#인기키워드</HotKeywordText></HotKeyword>
                        <HotKeyword><HotKeywordText>#인기키워드</HotKeywordText></HotKeyword>
                        <HotKeyword><HotKeywordText>#인기키워드</HotKeywordText></HotKeyword>
                    </Row>
                    <Row>
                        <HotKeyword><HotKeywordText>#인기키워드</HotKeywordText></HotKeyword>
                    </Row>
                </View>
            </View>
            <TitleBox>
                <Text style={{fontSize: 14, fontWeight: "700"}}>키워드 추가</Text>
                <ClearTextBox><ChoiceText>*선택</ChoiceText></ClearTextBox>
            </TitleBox>
            <InputKeywordBox></InputKeywordBox>
        </AddKeywordBox>
        <BlueButton title="작성완료" click={DoneWrite2} mbottom="35"/>
    </Container>
    );
}; export default BoardWriting_min;