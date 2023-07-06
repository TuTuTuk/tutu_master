import react from "react";
import { useState } from "react";
import { Modal } from "react-native";
import styled from "styled-components/native";
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/Ionicons';


//댓글 Box

const CommentBox = styled.View`
    border-radius: 10px;
    background-color: #E3E3E3;
    //border: 1px;
    width: 86.1%;
    height: 102px;
    align-self: center;
    margin-bottom: 10px;
    padding: 10px;
`;
    const CommentProfileBox = styled.View`
        //border: 1px;
        width: 96%;
        height: 25px;
        align-self: center;
        flex-direction: row;
        justify-content: space-between;
        margin-bottom: 10px;
    `;  
        const ProfileNameBox = styled.View`
            //border: 1px;
            flex-direction: row;
        `;
        const ProfileImage = styled.Image`
            width: 25px;
            height: 25px;
            //border: 1px;
            background-color: #BBBBBB;
            border-radius: 5px;
            margin-right : 10px;
        `;
        const CommentName = styled.Text`
            //border: 1px;
            font-size: 12px;
            font-weight: 500;
            align-self: center;
        `;
    const CommentMenuBox = styled.View`
            //border: 1px;
            width: 60px;
            height: 20px;
            justify-self: center;
            flex-direction: row;
            align-self: center;
        `;
        const CocommentIcon = styled.TouchableOpacity`
                //border : 1px;
                width: 20px;
                height: 20px;
                margin-right: 5px;
            `;
        const CommentGoodIcon = styled.TouchableOpacity`
                //border : 1px;
                width: 20px;
                height: 20px;
                margin-right: 5px;
            `;
        const CommentPlusIcon = styled.TouchableOpacity`
                //border : 1px;
                width: 15px;
                height: 20px;
                margin-right: 5px;
                justify-content: center;
            `;
    const CommentContent = styled.Text`
        height: 28px;
        //border: 1px;
        margin-bottom: 10px;
        font-size: 12px;
        font-weight: 400;
        align-self: center;
        width: 93.5%;
        text-align: left;
    `;
    const DataAndGoodBox = styled.View`
        //border: 1px;
        margin-left: 10px;
        flex-direction: row;
        margin-bottom: 8px;
    `;
        const CommentDate = styled.Text`
            font-size: 8px;
            font-weight: 400;
            margin-right: 5px;
            align-self: center;
        `;
        const CommentGood = styled.Image`
            width: 10px;
            height: 10px;
            margin-right: 2px;
            align-self: center;
        `;
        const CommetGoodCnt = styled.Text`
            font-size: 10px;
            color : red;
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
    height:70px;
    border-radius: 5px;
    justify-content: space-between;
    align-items: flex-end;
    margin-right: 7%;
    align-self: flex-end;
    top:56%;
    padding-left:10px;
    padding-right:10px;
    padding-top:5px;
`;
    const Modalinquire = styled.Pressable`
        height:33.3%;
    `;
        const MiddleText = styled.Text`
            font-size:12px;
        `;
const CommentBox_min = ({content, name}) => {
    const [modalVisible,setModalVisible] = useState(false)

    return(
        <CommentBox>
            <Modal
                animationType="fade"
                transparent={true}
                visible={modalVisible}
            >
                <ModalBackView>
                </ModalBackView>
                <ModalView>
                    <Modalinquire onPress={()=>setModalVisible(false)}><MiddleText>댓글달기</MiddleText></Modalinquire>
                    <Modalinquire onPress={()=>setModalVisible(true)}><MiddleText>신고하기</MiddleText>
                    </Modalinquire><Modalinquire onPress={()=>setModalVisible(false)}><MiddleText>쪽지 보내기</MiddleText></Modalinquire>
                </ModalView>
            </Modal>
                <CommentProfileBox>
                    <ProfileNameBox><ProfileImage></ProfileImage><CommentName>{name}</CommentName></ProfileNameBox>
                    <CommentMenuBox>
                        <CocommentIcon><Icon name="chatbox-ellipses-sharp" size = {20} color = '#808080'/></CocommentIcon>
                        <CommentGoodIcon><Icon name="thumbs-up-sharp" size = {18} color = '#808080'/></CommentGoodIcon>
                        <CommentPlusIcon onPress={()=>setModalVisible(true)}><Icon name="ellipsis-vertical-outline" size = {15} color = '#808080'/></CommentPlusIcon>
                    </CommentMenuBox>
                </CommentProfileBox>
                <CommentContent>{content}</CommentContent>
                <DataAndGoodBox>
                    <CommentDate>2023/06/28</CommentDate>
                    <CommentGood source={require('../../images/good.png')}></CommentGood>
                    <CommetGoodCnt>18</CommetGoodCnt>
                </DataAndGoodBox>
            </CommentBox>
    )
}

export default CommentBox_min;