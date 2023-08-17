import React, {useState, useEffect} from "react";
import { Text, View, Modal, FlatList} from "react-native";
import styled from "styled-components/native";

import TopBar from "../../../components/TopBar";
import ProfileModal from "../../../components/ProfileModal";
import ModalTwoOptions from "../../../components/Modal/ModalTwoOptions"

import auth from "@react-native-firebase/auth";
import firestore from '@react-native-firebase/firestore';
import storage from '@react-native-firebase/storage';

const Container = styled.View`
    margin-top: 10px;
    margin-left : 7%;
    margin-right : 7%;
`;

const InformText = styled.Text`
    font-size:15px;
    font-Weight : 500;
    //border: 1px;
    color: #0062FF;
`;
const NameBox = styled.View`
    //border: 1px;
    width: 70px;
    margin-bottom : 5px;
    margin-right : 15px;
`;
const ImageBox = styled.View`
    border: 1px;
    width:150px;
    height:150px;
    align-self: center;
    background-color: "#E3E3E3";
    border-radius : 500px;
`;
    const Image1 = styled.Image`
        width : 90%;
        height : 90%;
        align-self: center;
    `;
const BGBox = styled.View`
    //border: 1px;
    width:100%;
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
    margin-Right: 2.25%;
`;
const StyleView = styled.View`
    //border: 1px;
    height:65px;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 8.7%;
`;

const ProfileImageData = [ //프로필 이미지 데이터 변수
    {
        title : 'Image1',
        location : require('../../../images/profilePicture/profileDefault.png'),
    },
    {
        title : 'Image2',
        location : require('../../../images/profilePicture/profile2.png'),
    },
    {
        title : 'Image3',
        location : require('../../../images/profilePicture/profile3.png'),
    },
    {
        title : 'Image4',
        location : require('../../../images/profilePicture/profile4.png'),
    },
    {
        title : 'Image5',
        location : require('../../../images/profilePicture/profile5.png'),
    },
    {
        title : 'Image6',
        location : require('../../../images/profilePicture/profile6.png'),
    },
    {
        title : 'Image7',
        location : require('../../../images/profilePicture/profile7.png'),
    },
    {
        title : 'Image8',
        location : require('../../../images/profilePicture/profile8.png'),
    },
    {
        title : 'Image9',
        location : require('../../../images/profilePicture/profile9.png'),
    },
    {
        title : 'Image10',
        location : require('../../../images/profilePicture/profile10.png'),
    },
    {
        title : 'Image11',
        location : require('../../../images/profilePicture/profile11.png'),
    },
    {
        title : 'Image12',
        location : require('../../../images/profilePicture/profile12.png'),
    },
    {
        title : 'Image13',
        location : require('../../../images/profilePicture/profile13.png'),
    },
    {
        title : 'Image14',
        location : require('../../../images/profilePicture/profile14.png'),
    },
    {
        title : 'Image15',
        location : require('../../../images/profilePicture/profile15.png'),
    },
    {
        title : 'Image16',
        location : require('../../../images/profilePicture/profile16.png'),
    },
    {
        title : 'Image17',
        location : require('../../../images/profilePicture/profile17.png'),
    },
    {
        title : 'Image18',
        location : require('../../../images/profilePicture/profile18.png'),
    },
    {
        title : 'Image19',
        location : require('../../../images/profilePicture/profile19.png'),
    },
    {
        title : 'Image20',
        location : require('../../../images/profilePicture/profile20.png'),
    },
    {
        title : 'Image21',
        location : require('../../../images/profilePicture/profile21.png'),
    },
]

const My = ({navigation:{navigate}}) => {

    const [click,setClick] = useState(false);
    const [ProfileImage, setProfileImage] = useState();

    const [userName, setUserName] = useState("");
    const [userMajor, setUserMajor] = useState("");
    const [userID, setUserID] = useState("");
    const [userPoint, setUserPoint] = useState(0);
    const [userImage, setUserImage] = useState();

    const [modalVisible,setModalVisible] = useState(false);

    const Item = ({title,data}) => (
        <StyleView>
            <StyleButton onPress={()=>{
                setModalVisible(true);
                setProfileImage(data);
                console.log(data);
            }}>
                <Image1 source={data}/>
            </StyleButton>
            <Text>2000p</Text>
        </StyleView>
      );

    const GetData= async() => {
        const data = await firestore().collection("users").doc(auth().currentUser.uid).get(); 
        setUserName(data._data.user_name)
        setUserMajor(data._data.user_department)
        setUserID(data._data.user_class_number)
        setUserImage(data._data.user_profile)
    }

    useEffect(()=>{
        GetData()
    },[])

    const ChangeProfile = async() => {
        const tempData = await firestore().collection("users").doc(auth().currentUser.uid).get();
        firestore().collection("users").doc(auth().currentUser.uid).update({
            user_profile : ProfileImage
        })
        setUserImage(ProfileImage)

        firestore().collection("users").doc(auth().currentUser.uid).update({
            user_profile_history:[...tempData._data.user_profile_history,
                ProfileImage
            ]
        })
    }

    return(
    <Container>
         <ModalTwoOptions
            visible = {modalVisible}
            setvisible = {setModalVisible}
            title = "프로필 이미지 구매"
            contents = "2000p로 프로필 이미지를 구매하시겠습니까?"
            yestext = "구매하기"
            actOn={ChangeProfile}
        >
         </ModalTwoOptions>
        <TopBar title="프로필 설정"></TopBar>
        <View>
            <ImageBox>
                <Image1 source={userImage}></Image1>
            </ImageBox>
            <View style = {{marginTop : 25, marginBottom : 5, flexDirection : 'row'}}>
                <NameBox><InformText>아이디</InformText></NameBox>
                <Text>{userName}</Text>
            </View>
            <View style = {{marginBottom : 5, flexDirection : 'row'}}>
            <NameBox><InformText>학과/학번</InformText></NameBox>
                <Text>{userMajor}/{userID}</Text>
            </View>
            <View style = {{marginBottom : 20, marginBottom : 20, flexDirection : 'row'}}>
            <NameBox><InformText>포인트</InformText></NameBox>
                <Text>{userPoint}</Text>
            </View>
        </View>
        <BGBox>
            <BGText>프로필 이미지 구매</BGText>
            <FlatList
                data={ProfileImageData}
                renderItem={({item}) => <Item title={item.title} data={item.location} />}
                keyExtractor={(item) => item.title}
                numColumns={4}
            />
        </BGBox>
    </Container>
)
    }


export default My;