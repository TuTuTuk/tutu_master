import React from "react";
import { useState } from "react";
import { Modal } from "react-native";
import styled from "styled-components/native";
import Icon from 'react-native-vector-icons/Ionicons';

import auth from "@react-native-firebase/auth";
import firestore from '@react-native-firebase/firestore';
import storage from '@react-native-firebase/storage';

import TopBar from "../../../components/TopBar";
import BlueButton from "../../../components/BlueButton";


const Container = styled.ScrollView.attrs(()=>({
    contentContainerStyle:{
        showVerticalScrollIndicator:false,
    }
}))`
    flex:1;
    margin-top: 10px;
    margin-bottom: 10px;
`;

const HeaderBox = styled.View`
    //border: 1px;
    flex:1;
    width: 89.7%;
    height: 5.4%;
    align-self: center;
    margin-bottom: 35px;
    margin-left: 7px;
    margin-right: 7px;

    flex-direction:row;
    justify-content: space-between;
    align-items: center;
`;
    const BackView = styled.View`
        width:10%;
    `;
        const BackBtn = styled.TouchableOpacity`
            //border : 1px;
            width  : 100%;
            height : 40px;
            justify-content: center;
        `;
    const BoardTextBox = styled.View`
        //border : 1px;
        border-color: black;
        border-radius: 3px;
        width : 76%;
        height: 100%;
        justify-content: center;
    `;
        const BoardText = styled.Text`
            font-size: 16px;
            font-weight: 600;
            text-align: center;
            margin-right: 5%;
        `;
    const PlusBtn = styled.TouchableOpacity`
        border-color: orange;
        width:5%;
        height: 100%;
        justify-content: center;
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
const ViewMoreIcon = styled.View`
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

const BoardWriting_min = ({navigation:{navigate}})=>{

    const [modalVisible,setModalVisible] = useState(false)

    const [boardSave,setBoardSave] = useState("")
    const [titleText,setTitleText] = useState("")
    const [contentText,setContentText] = useState("")    

    const DoneWrite=async()=>{
        const tempSave = await firestore().collection("boards").doc("Design").get();

        if(tempSave._data){
            if(tempSave._data.arr[0] != ""){ //????????? ????????? ????????? ?????????
                firestore().collection("boards").doc("Design").update({
                    arr:[...tempSave._data.arr,{
                        title:titleText,
                        contents:contentText,
                        user_uid:auth().currentUser.uid,
                        user_name:auth().currentUser.displayName,
                        create_time:new Date(),
                        hits_count:0
                    }]
                })
                .then(async()=>{
                    const save1= await firestore().collection("boards").doc(auth().currentUser.uid).get();
                    setBoardSave(save1._data);
                    const userTempSave= await firestore().collection("users").doc(auth().currentUser.uid).get();
                    firestore().collection("users").doc(auth().currentUser.uid).update({
                        user_boards_count: userTempSave._data.user_boards_count+1
                    });
                })
                .catch(()=>{
                    console.log("catch!!")
                })
            }
            else{ //????????? ????????????
                firestore().collection("boards").doc("Design").set({
                    arr:[{
                        title:titleText,
                        contents:contentText,
                        user_uid:auth().currentUser.uid,
                        user_name:auth().currentUser.displayName,
                        create_time:new Date(),
                        hits_count:0
                    }]
                })
                .then(async()=>{
                    const save2= await firestore().collection("boards").doc(auth().currentUser.uid).get();
                    setBoardSave(save2._data);
                })
                .catch(()=>{
                    console.log("catch!!!")
                })
            }
        }
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
                            ????????????
                        </MiddleText>
                    </Modalinquire>
                    <Modalinquire onPress={()=>setModalVisible(false)}>
                        <MiddleText>
                            ????????????
                        </MiddleText>
                    </Modalinquire>
                </ModalView>
            </Modal>
        <TopBar title="????????? ?????????"></TopBar>
        <AllBox>
            <KeyBox>
                <TitleBox>
                    <Title>??????</Title>
                    <ClearTextBox><ClearText>????????????</ClearText></ClearTextBox>
                </TitleBox>
                <KeywordBox>
                    <Row>
                        <MajorKeyword>
                            <MajorKeywordText>????????????</MajorKeywordText>
                        </MajorKeyword>
                    </Row>
                    <Row>
                        <MajorKeyword><MajorKeywordText>??????????????????</MajorKeywordText></MajorKeyword>
                        <MajorKeyword><MajorKeywordText>???????????????</MajorKeywordText></MajorKeyword>
                    </Row>
                    <Row>
                        <MajorKeyword><MajorKeywordText>?????????????????????</MajorKeywordText></MajorKeyword>
                        <MajorKeyword><MajorKeywordText>???????????????????????????</MajorKeywordText></MajorKeyword>
                        <MajorKeyword><MajorKeywordText>???????????????</MajorKeywordText></MajorKeyword>
                    </Row>
                    <Row>
                        <MajorKeyword><MajorKeywordText>??????????????????</MajorKeywordText></MajorKeyword>
                        <MajorKeyword><MajorKeywordText>?????????????????????</MajorKeywordText></MajorKeyword>
                        <MajorKeyword><MajorKeywordText>????????????????????????</MajorKeywordText></MajorKeyword>
                    </Row>
                    <Row>
                        <MajorKeyword><MajorKeywordText>?????????,???????????????</MajorKeywordText></MajorKeyword>
                        <MajorKeyword><MajorKeywordText>????????????</MajorKeywordText></MajorKeyword>
                        <MajorKeyword><MajorKeywordText>??????????????????</MajorKeywordText></MajorKeyword>
                    </Row>
                </KeywordBox>
            </KeyBox>
            <KeyBox>
                <TitleBox>
                    <Title>??????</Title>
                    <ClearTextBox><ClearText>????????????</ClearText></ClearTextBox>
                </TitleBox>
                <KeywordBox>
                    <Row>
                        <FieldKeyword><FieldKeywordText>??????</FieldKeywordText></FieldKeyword>
                    </Row>
                    <Row>
                        <FieldKeyword><FieldKeywordText>??????</FieldKeywordText></FieldKeyword>
                        <FieldKeyword><FieldKeywordText>??????</FieldKeywordText></FieldKeyword>
                        <FieldKeyword><FieldKeywordText>?????????</FieldKeywordText></FieldKeyword>
                        <FieldKeyword><FieldKeywordText>????????????</FieldKeywordText></FieldKeyword>
                    </Row>
                    <Row>
                        <FieldKeyword><FieldKeywordText>?????????</FieldKeywordText></FieldKeyword>
                        <FieldKeyword><FieldKeywordText>??????</FieldKeywordText></FieldKeyword>
                        <FieldKeyword><FieldKeywordText>????????????</FieldKeywordText></FieldKeyword>
                    </Row>
                </KeywordBox>
            </KeyBox>
            <ViewMoreIcon>
                <Icon name="caret-down-outline" size={20} color = '#FF3D00'/>
            </ViewMoreIcon>
        </AllBox>
        <WritingBox>
            <WritingTitleBox>
                <WritingTitleText
                    placeholder="????????? ???????????????"
                    onChangeText={(text)=>setTitleText(text)}
                />
                <WritingTitlePlus>
                    <InformTextBox><InformText>?????????</InformText></InformTextBox>
                    <RemoveBtn><Icon name="remove-outline" size={20} color = 'white'/></RemoveBtn>
                </WritingTitlePlus>
            </WritingTitleBox>
            <WritingContentBox
                placeholder="????????? ???????????? ????????? ??????????????? ??????????????????!"
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
                    <Title>??????</Title>
                    <ClearTextBox><ChoiceText>*??????</ChoiceText></ClearTextBox>
                </TitleBox>
                <KeywordBox>
                    <Row>
                        <HotKeyword>
                            <HotKeywordText>#???????????????</HotKeywordText>
                        </HotKeyword>
                        <HotKeyword>
                            <HotKeywordText>#???????????????</HotKeywordText>
                        </HotKeyword>
                        <HotKeyword>
                            <HotKeywordText>#???????????????</HotKeywordText>
                        </HotKeyword>
                    </Row>
                    <Row>
                        <HotKeyword>
                            <HotKeywordText>#???????????????</HotKeywordText>
                        </HotKeyword>
                        <HotKeyword>
                            <HotKeywordText>#???????????????</HotKeywordText>
                        </HotKeyword>
                        <HotKeyword>
                            <HotKeywordText>#???????????????</HotKeywordText>
                        </HotKeyword>
                    </Row>
                    <Row>
                        <HotKeyword>
                            <HotKeywordText>#???????????????</HotKeywordText>
                        </HotKeyword>
                        <HotKeyword>
                            <HotKeywordText>#???????????????</HotKeywordText>
                        </HotKeyword>
                        <HotKeyword>
                            <HotKeywordText>#???????????????</HotKeywordText>
                        </HotKeyword>
                    </Row>
                    <Row>
                        <HotKeyword>
                            <HotKeywordText>#???????????????</HotKeywordText>
                        </HotKeyword>
                    </Row>
                </KeywordBox>
            </KeyBox>
            <TitleBox>
                <Title>????????? ??????</Title>
                <ClearTextBox>
                    <ChoiceText>*??????</ChoiceText>
                </ClearTextBox>
            </TitleBox>
            <InputKeywordBox></InputKeywordBox>
        </AddKeywordBox>
        <BlueButton title="????????????" click={DoneWrite} mbottom="35"/>
    </Container>
    );
        };
export default BoardWriting_min;