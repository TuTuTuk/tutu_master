import React from "react";
import { useState } from "react";
import { Modal,TextInput,Text } from "react-native";
import styled from "styled-components/native";
import Icon from 'react-native-vector-icons/Ionicons';
import LinearGradient from 'react-native-linear-gradient';

import ModalTwoOptions from "../../../components/Modal/ModalTwoOptions";
import ModalOneOptTwoTitle from "../../../components/Modal/ModalOneOptTwoTitle";
import TopBar from "../../../components/TopBar";
import Input from "../../../components/Input";

import auth from "@react-native-firebase/auth";
import firestore from '@react-native-firebase/firestore'

import { useNavigation } from '@react-navigation/native';

const Container = styled.ScrollView.attrs(()=>({
    contentContainerStyle:{
        showVerticalScrollIndicator:false,
    }
}))`
    flex:1;
    margin-top: 10px;
    margin-bottom: 10px;
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
    const KeyBox = styled.View`
        //border: 1px;
        width: 100%;
    `;
const TitleBox = styled.View`
    //border: 1px;
    width: 100%;
    height: auto;
    flex-direction: row;
    margin-bottom: 10px;
    margin-top: 20px;
`;  
    const Title = styled.Text`
        font-size: 14px;
        font-weight: 700;
    `;
    const ClearTextBox = styled.View`
        //border: 1px;
        justify-content: center;
    `;
        const ChoiceText = styled.Text`
        font-size: 12px;
        font-weight: 500;
        color: #FF3D00;;
        margin-left: 10px;
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

const ViewMoreIcon = styled.View`
    align-self: center;
`;
//--------------------------------------------
//----------------게시물 작성------------------
//--------------------------------------------
const WritingBox = styled.View`
    //border: 1px;
    width: 100%;
    margin-top: 20px;
    padding: 7%;
    padding-top: 20px;
`;
    const WritingTitleBox = styled.View`
        flex-direction: row;
        margin-bottom: 15px;
        justify-content: space-between;
        //border: 1px;
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
            const RemoveBtn = styled.View`
                //border: 1px; 
                background-color: #818181;
                justify-items: center;
                width: 20px;
                height: 20px;
                align-self: center;
            `;
    const WritingContentBox = styled.TextInput`
        //border: 1px;
        width: 100%;
        height: 350px;
        background-color: #E3E3E3;
        margin-bottom: 10px;
        border-radius: 10px;
        vertical-align: text-top;
        vertical-align: top;
    `;
    const IconBox = styled.View`
        //border: 1px;
        flex-direction: row;
    `;
        const Icon1 = styled.Image`
            //border: 1px;
            margin-right: 5px;
            width: 20px;
            height: 20px;
            background-color: #E3E3E3;
        `;
const OpenLinkInput = styled.TextInput`
    width: 100%;
    height: 40px;
    background-color: #E3E3E3;
    border-radius: 10px;
    //border: 1px;
`;
    const BtnBox = styled.View`
        margin-top: 10px;
        //border: 1px;
        justify-content: space-between;
        flex-direction: row;
    `;
        const Btn = styled.Pressable`
            width: 48.4%;
            height: 40px;
            background-color: #BBBBBB;
            border-radius: 10px;
            justify-content: center;
        `;
            const BtnText = styled.Text`
                font-family: 'Pretendard';
                font-style: normal;
                font-weight: 600;
                font-size: 16px;
                line-height: 19px;
                text-align: center;
                color: #FFFFFF;
            `;
const AddKeywordBox = styled.View`
    //border: 1px;
    width: 100%;
    padding: 7%;
    padding-top: 0px;
    align-self: center;
    justify-content: center;
`;
    const InputKeywordBox = styled.View`
        width: 100%;
        height: 40px;
        background-color: #E3E3E3;
        border-radius: 10px;
    `;
const CompleteBtn = styled.TouchableOpacity`
    //border: 1px;
    border-radius: 10px;
    margin-left: 20px;
    margin-right: 20px;
    margin-top: 40px;
    height: 40px;
`;
    const CompleteBtnText = styled.Text`
        font-weight: 600;
        font-size: 16px;
        color: white;
        align-self: center;
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

const CountPlus=()=>{
        firestore().collection("users").doc(auth().currentUser.uid).update({ //유저 정보 추가 저장
                    user_boards_count: firestore.FieldValue.increment(1)
        })
}

const Matching_Request = ({navigation:{navigate}})=>{
    const [modalVisible,setModalVisible] = useState(false)
    const [modalVisible2,setModalVisible2] = useState(false)
    const [modalVisible3,setModalVisible3] = useState(false)

    const [title, setTitle] = useState("");
    const [Content,setContent] = useState("");
    const [date, setDate] = useState("");
    const [time, setTime] = useState("");
    const [count, setCount] = useState("");

    const [openLink, setOpenLink] = useState("");

    const navigation = useNavigation();
    const today = new Date();
    //내가 쓴 글 firebase에 저장
    const BoardPlus=()=>{
        firestore().collection("users").doc(auth().currentUser.uid).collection("Board").doc(title).set({
            Title: title,
            Content: Content,
            Date : date,
            Time : time
        })}
    
    return(
    <Container>
        <ModalTwoOptions 
                visible={modalVisible} 
                setvisible={setModalVisible}
                title="뒤로가기"
                contents="지금 뒤로가면 입력하신 내용이 삭제됩니다."
                yestext="뒤로가기"
        />
        <ModalOneOptTwoTitle
            visible={modalVisible2} 
            setvisible={setModalVisible2}
            title="경고"
            contents="욕설/혐오 등의 표현은 사용하실 수 없습니다."
            yestext="확인"
            click={CountPlus}
            nextPj = "Designboard_min"
        />
        <Modal
            animationType="fade"
            transparent={true}
            visible={modalVisible3}>
            <ModalBackView></ModalBackView>
            <ModalView>
                <Modalinquire onPress={()=>setModalVisible3(false)}>
                    <MiddleText>문의하기</MiddleText>
                </Modalinquire>
                <Modalinquire onPress={()=>setModalVisible3(false)}>
                    <MiddleText>새로고침</MiddleText>
                </Modalinquire>
            </ModalView>
        </Modal>
        <TopBar title="게시판 글쓰기"/>
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
            <ViewMoreIcon><Icon name="caret-up" size={20} color = '#00E676'/></ViewMoreIcon>
        </HashTagBox>
        <WritingBox>
            <WritingTitleBox>
                <WritingTitleText 
                    placeholder={`제목을 입력하세요.`}
                    onChangeText={(textt)=>setTitle(textt)}
                >
                </WritingTitleText>
                <WritingTitlePlus>
                    <InformTextBox><InformText>정보글</InformText></InformTextBox>
                    <RemoveBtn><Icon name="remove-outline" size={20} color = 'white'/></RemoveBtn>
                </WritingTitlePlus>
            </WritingTitleBox>
            <WritingContentBox
                placeholder={`내용을 입력하고 원하는 해시태그를 사용해보세요!\nex)~을 알고싶습니다.`}
                multiline = {true}
                onChangeText={(text)=>setContent(text)}
                >
            </WritingContentBox>
            <IconBox>
                <Icon1 source={require('../../../images/Gallery.png')}></Icon1>
                <Icon1 source={require('../../../images/Camera.png')}></Icon1>
                <Icon1 source={require('../../../images/AddFile.png')}></Icon1>
            </IconBox>
        </WritingBox>
        <AddKeywordBox>
            <KeyBox>
                <TitleBox>
                    <Title>인기</Title>
                    <ClearTextBox>
                        <ChoiceText>*선택</ChoiceText>
                    </ClearTextBox>
                </TitleBox>
                <KeywordBox>
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
                </KeywordBox>
            </KeyBox>
            <TitleBox>
                <Title>키워드 추가</Title>
                <ClearTextBox><ChoiceText>*선택</ChoiceText></ClearTextBox>
            </TitleBox>
            <InputKeywordBox></InputKeywordBox>
            <TitleBox>
                <Title>오픈채팅방 링크 첨부</Title>
            </TitleBox>
            <OpenLinkInput></OpenLinkInput>
            <BtnBox>
                <Btn><BtnText>공개하기</BtnText></Btn>
                <Btn><BtnText>직접선택</BtnText></Btn>
            </BtnBox>
        </AddKeywordBox>
        <CompleteBtn
            onPress={()=> {
                BoardPlus();
                CountPlus();
                setDate(today.toLocaleDateString());
                setTime(today.toLocaleTimeString());
                navigation.navigate("ViewMyBoard",
                {GiveTitle: title, GiveContent:Content, GiveDate: date, GiveTime : time });
            }}>
            <LinearGradient style={{
                margin:0,
                height:40,
                borderRadius: 10,
                backgroundColor:'#0062FF',
                paddingTop:8
            }}
                colors={['#0062FF', '#0A7DFF', '#1398FF']}
                start={{x:1,y:0}} end={{x:0,y:0}}
            >
                <CompleteBtnText>작성 완료</CompleteBtnText>                   
            </LinearGradient>
        </CompleteBtn>
    </Container>
    );
};
export default Matching_Request;