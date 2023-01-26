import React, {useState} from "react";
import { Text, View} from "react-native";
import styled from "styled-components/native";
import Icon from 'react-native-vector-icons/Ionicons';



const Container = styled.ScrollView.attrs(() => ({
    contentContainerStyle: {
        showVerticalScrollIndicator: false,
    }
}))`
    flex:1;
`;

const HeaderBox = styled.View`
    //border: 1px;
    width: 86%;
    margin:10px;
    justify-content: space-between;
    align-self: center;
    flex-direction:row;
`;
    const BackView = styled.View`
        //border: 1px;
        border-color: orange;
        width:8.8%;
        height:40px;
    `;
        const BackBtn = styled.TouchableOpacity`
            //border : 1px;
            height : 40px;
            justify-content: center;
        `;
    const BoardTextBox = styled.View`
        //border: 1px;
        border-radius: 7px;
        width : 79%;
        justify-content: center;
    `;
        const BoardText = styled.Text`
            font-family: 'Pretendard';
            font-style: normal;
            font-weight: 600;
            font-size: 16px;
            align-self: center;
        `;
    const PlusBtn = styled.TouchableOpacity`
        //border: 1px;
        border-color: orange;
        height: 40px;
        justify-content: center;
    `;

const InformBtn = styled.Pressable`
    width:86%;
    background: #E3E3E3;
    border-radius: 10px;
    flex-direction:row;
    align-items: center;
    align-self: center;
    margin-top: 2.7%;
    padding-top: 20px;
    padding-bottom: 20px;
    padding-left: 15px;
`;
    const ImageBox = styled.View`
        height: 75px;
        //border : 1px;
        justify-content: center;
    `;
        const ProfileImage = styled.Image`
            width: 75px;
            height: 75px;
            border-radius: 37.5px;
            background: #BBBBBB;
            align-self: center;
        `;
    const InformBox = styled.View`
        //border: 1px;
        margin-left: 4.17%;
        height: 75px;
        justify-content: space-between;
    `;
        const IDtext = styled.Text`
            font-family: 'Pretendard';
            font-style: normal;
            font-weight: 500;
            font-size: 16px;
            line-height: 19px;
        `;
        const MajorText = styled.Text`
            font-family: 'Pretendard';
            font-style: normal;
            font-weight: 400;
            font-size: 16px;
            line-height: 19px;
        `;
        const PointText = styled.Text`
            font-family: 'Pretendard';
            font-style: normal;
            font-weight: 400;
            font-size: 16px;
            line-height: 19px;
        `;

const BGBox = styled.View`
        width:86%;
        align-self: center;
        background-color: #E3E3E3;
        border-Radius: 10px;
        margin-top: 2%;
        padding-top: 20px;
        padding-bottom: 20px;
        padding-left: 15px;
        padding-right: 15px;
        justify-content: space-between;
    `;
    const BGText = styled.Text`
            font-family: 'Pretendard';
            font-style: normal;
            font-weight: 600;
            font-size: 20px;
            line-height: 24px;
        `;
    const PopualrBox = styled.Pressable`
        //border:1px;
        flex-direction: row;
        justify-content: space-between;
        margin-top: 6%;
    `;
        const PickText = styled.Text`
            font-family: 'Pretendard';
            font-style: normal;
            font-weight: 500;
            font-size: 16px;
            line-height: 19px;
            align-self: center;
        `;
        const GoIcon = styled.Pressable`
        `;

const NotionBtn = styled.TouchableOpacity`
    //border:1px;
    width:30px;
    height:30px;
`;
const NotionText = styled.Text`
color:black;
font-size:10px;
`;

const ServiceBtn = styled.TouchableOpacity`
        border:1px;
        width:30px;
        height:30px;
    `;
const ServiceText = styled.Text`
        color:black;
        font-size:10px;
    `;

const My = ({navigation:{navigate}}) => {
    const [click,setClick] = useState(false);

    return(
    <Container>
        <HeaderBox>
                <BackView>
                    <BackBtn 
                        onPress={()=>navigate("Tabs",{screen:"Home"})}>
                        <Icon name="chevron-back-outline" size = {30} />
                    </BackBtn>
                </BackView>
                <BoardTextBox>
                    <BoardText>내 정보</BoardText>   
                </BoardTextBox>
                <PlusBtn
                    onPress={()=>setModalVisible(true)}>
                    <Icon name="ellipsis-vertical-outline" size = {25}/>
                </PlusBtn>
            </HeaderBox>
        <InformBtn onPress={()=>navigate("Stack",{screen:"ProfilePage"})}
                    onPressIn={()=>setClick(true)}    
                    onLongPress={()=>console.log("onLongPress")}  
                    onPressOut={()=>setClick(false)} >
        <ImageBox>
            <ProfileImage></ProfileImage>
        </ ImageBox>
        <InformBox>
            <IDtext>tukorea123</IDtext>
            <MajorText>산업디자인공학/18</MajorText>
            <PointText>1,930p</PointText>
        </InformBox>
        </InformBtn>
        <BGBox>
            <BGText>정보</BGText>
            <PopualrBox>
                <PickText>쪽지 내역</PickText>
                <GoIcon onPress={()=>navigate("Stack",{screen:"NoteHistory_min"})}>
                <Icon name="chevron-forward-outline" size={25}/>
                </GoIcon>
            </PopualrBox>
            <PopualrBox>
                <PickText>최근에 본 댓글</PickText>
                <GoIcon>
                <Icon name="chevron-forward-outline" size={25}/>
                </GoIcon>
            </PopualrBox>
            <PopualrBox>
                <PickText>내가 쓴 댓글</PickText>
                <GoIcon>
                <Icon name="chevron-forward-outline" size={25}/>
                </GoIcon>
            </PopualrBox>
            <PopualrBox>
                <PickText>내가 쓴 게시물</PickText>
                <GoIcon>
                <Icon name="chevron-forward-outline" size={25}/>
                </GoIcon>
            </PopualrBox>
            <PopualrBox>
                <PickText>내 질문</PickText>
                <GoIcon>
                <Icon name="chevron-forward-outline" size={25}/>
                </GoIcon>
            </PopualrBox>
            <PopualrBox>
                <PickText>스크랩</PickText>
                <GoIcon>
                <Icon name="chevron-forward-outline" size={25}/>
                </GoIcon>
            </PopualrBox>
        </BGBox>
        <BGBox>
            <BGText>계정</BGText>
            <PopualrBox>
                <PickText>학교 인증</PickText>
                <GoIcon>
                <Icon name="chevron-forward-outline" size={25}/>
                </GoIcon>
            </PopualrBox>
            <PopualrBox>
                <PickText>비밀번호 변경</PickText>
                <GoIcon>
                <Icon name="chevron-forward-outline" size={25}/>
                </GoIcon>
            </PopualrBox>
            <PopualrBox>
                <PickText>이메일 변경</PickText>
                <GoIcon>
                <Icon name="chevron-forward-outline" size={25}/>
                </GoIcon>
            </PopualrBox>
        </BGBox>
        <BGBox>
            <BGText>앱설정</BGText>
            <PopualrBox>
                <PickText>문의하기</PickText>
                <GoIcon onPress={()=>navigate("Stack",{screen:"Question_min"})}>
                <Icon name="chevron-forward-outline" size={25}/>
                </GoIcon>
            </PopualrBox>
            <PopualrBox>
                <PickText>공지사항</PickText>
                <GoIcon>
                <Icon name="chevron-forward-outline" size={25}/>
                </GoIcon>
            </PopualrBox>
            <PopualrBox>
                <PickText>서비스 이용약관</PickText>
                <GoIcon>
                <Icon name="chevron-forward-outline" size={25}/>
                </GoIcon>
            </PopualrBox>
            <PopualrBox>
                <PickText>개인정보 처리 방침</PickText>
                <GoIcon>
                <Icon name="chevron-forward-outline" size={25}/>
                </GoIcon>
            </PopualrBox>
            <PopualrBox>
                <PickText>오픈소스 라이선스</PickText>
                <GoIcon>
                <Icon name="chevron-forward-outline" size={25}/>
                </GoIcon>
            </PopualrBox>
        </BGBox>
        <BGBox>
            <BGText>기타</BGText>
            <PopualrBox>
                <PickText>로그아웃</PickText>
                <GoIcon>
                <Icon name="chevron-forward-outline" size={25}/>
                </GoIcon>
            </PopualrBox>
            <PopualrBox>
                <PickText>회원 탈퇴</PickText>
                <GoIcon>
                <Icon name="chevron-forward-outline" size={25}/>
                </GoIcon>
            </PopualrBox>
        </BGBox>
        </Container>
)
    }


export default My;