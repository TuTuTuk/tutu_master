import React, {useState} from "react";
import { Text, View} from "react-native";
import styled from "styled-components/native";
import TopBar from "../../../components/TopBar";


const Container = styled.ScrollView.attrs(() => ({
    contentContainerStyle: {
        showVerticalScrollIndicator: false,
    }
}))`
    flex:1;
    margin-top: 10px;
    margin-bottom: 10px;
`;

const InformText = styled.Text`
    font-size:15px;
    margin : 5px;
    //border: 1px;
    color: #0062FF;
    width: 25%;
`;
const NameBox = styled.View`
    //border: 1px;
    width: 86%;
    align-self: center;
    margin-top: 3%;
    margin-bottom: 4.1%;
`;
const ImageBox = styled.View`
    width:150px;
    height:150px;
    align-self: center;
    background-color: "#E3E3E3";
    border-radius:500px;
    //border: 1px;
`;
    const Image1 = styled.Image`
        width : 90%;
        height : 90%;
        align-self: center;
    `;
const BGBox = styled.View`
    width:86%;
    height:45%;
    background-color: #E3E3E3;
    border-radius: 10px;
    align-self: center;
    padding : 15px;
`;
const BGText = styled.Text`
    width:100%;
    font-size:15px;
    font-weight : bold;
    margin-bottom: 15px;
`;
const StyleButton = styled.Pressable`
    //border: 1px;
    height: 65px;
    border-radius:5px;
    width: 65px;
    background-color : #BBBBBB;
    padding-top: 4px;
`;
const StyleView = styled.View`
    //border: 1px;
    height:65px;
    flex-direction:row;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 31px;
`;
const My = ({navigation:{navigate}}) => {
    const [click,setClick] = useState(false);
    return(
    <Container>
        <TopBar title="프로필 설정"></TopBar>
        <View>
        <ImageBox>
            <Image1 source={require('../../../images/profilePicture/profileDefault.png')}></Image1>
        </ ImageBox>
        <NameBox>
                <InformText>아이디</InformText>
                <InformText>학과/학번</InformText>
                <InformText>포인트</InformText>
        </NameBox>
        </View>
        <BGBox>
            <BGText>프로필 이미지 구매</BGText>
            <StyleView>
            <StyleButton><Image1 source={require('../../../images/profilePicture/profileDefault.png')}></Image1></StyleButton>
            <StyleButton><Image1 source={require('../../../images/profilePicture/profile2.png')}></Image1></StyleButton>
            <StyleButton><Image1 source={require('../../../images/profilePicture/profile3.png')}></Image1></StyleButton>
            <StyleButton><Image1 source={require('../../../images/profilePicture/profile4.png')}></Image1></StyleButton>
            </StyleView>
            <StyleView>
            <StyleButton><Image1 source={require('../../../images/profilePicture/profile5.png')}></Image1></StyleButton>
            <StyleButton><Image1 source={require('../../../images/profilePicture/profile6.png')}></Image1></StyleButton>
            <StyleButton><Image1 source={require('../../../images/profilePicture/profile7.png')}></Image1></StyleButton>
            <StyleButton><Image1 source={require('../../../images/profilePicture/profile8.png')}></Image1></StyleButton>
            </StyleView>
            <StyleView>
            <StyleButton><Image1 source={require('../../../images/profilePicture/profile9.png')}></Image1></StyleButton>
            <StyleButton><Image1 source={require('../../../images/profilePicture/profile10.png')}></Image1></StyleButton>
            <StyleButton><Image1 source={require('../../../images/profilePicture/profile11.png')}></Image1></StyleButton>
            <StyleButton><Image1 source={require('../../../images/profilePicture/profile12.png')}></Image1></StyleButton>
            </StyleView>
        </BGBox>
        </Container>
)
    }


export default My;