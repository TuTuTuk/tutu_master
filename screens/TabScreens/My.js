import React, {useState, useEffect} from "react";
import { Text, View, TouchableOpacity} from "react-native";
import styled from "styled-components/native";
import Icon from 'react-native-vector-icons/Ionicons';

import auth from "@react-native-firebase/auth";
import firestore from '@react-native-firebase/firestore';

import TopBar from "../../components/TopBar";

const Container = styled.ScrollView.attrs(() => ({
    contentContainerStyle: {
        showVerticalScrollIndicator: false,
    }
}))`
    flex:1;
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

const My = ({navigation:{navigate}}) => {
    const [click,setClick] = useState(false);
    const [id, setID] = useState("")
    const [tempID,setTempID] =useState("");
    const [tempDepart,setTempDepart] = useState("");

    useEffect(() => {
        GetInfo(); //GetID ?????? ??? ?????? ???????????????
      },[]);

    const GetInfo= async () => { //????????? ?????? ????????????
        const save= await firestore().collection("users").doc(auth().currentUser.uid).get();
        setTempID(save._data.user_name);
        setTempDepart(save._data.user_department);
        console.log(tempID);
        console.log(tempDepart);
    }

    return(
    <Container>
        <TopBar title="??? ??????"></TopBar>
        <InformBtn onPress={()=>navigate("Stack",{screen:"ProfilePage"})}
                    onPressIn={()=>setClick(true)}    
                    onLongPress={()=>console.log("onLongPress")}  
                    onPressOut={()=>setClick(false)} >
        <ImageBox>
            <ProfileImage></ProfileImage>
        </ ImageBox>
        <InformBox>
            <IDtext>{tempID}</IDtext>
            <MajorText>{tempDepart}/18</MajorText>
            <PointText>1,930p</PointText>
        </InformBox>
        </InformBtn>
        <BGBox>
            <BGText>??????</BGText>
            <PopualrBox>
                <PickText>?????? ??????</PickText>
                <GoIcon onPress={()=>navigate("Stack",{screen:"NoteHistory_min"})}>
                <Icon name="chevron-forward-outline" size={25}/>
                </GoIcon>
            </PopualrBox>
            <PopualrBox
                onPress={()=>navigate("Stack",{screen:"RecentWatch"})}
            >
                <PickText>????????? ??? ???</PickText>
                <GoIcon>
                <Icon name="chevron-forward-outline" size={25}/>
                </GoIcon>
            </PopualrBox>
            <PopualrBox>
                <PickText>?????? ??? ??????</PickText>
                <GoIcon>
                <Icon name="chevron-forward-outline" size={25}/>
                </GoIcon>
            </PopualrBox>
            <PopualrBox>
                <PickText>?????? ??? ?????????</PickText>
                <GoIcon>
                <Icon name="chevron-forward-outline" size={25}/>
                </GoIcon>
            </PopualrBox>
            <PopualrBox>
                <PickText>??? ??????</PickText>
                <GoIcon>
                <Icon name="chevron-forward-outline" size={25}/>
                </GoIcon>
            </PopualrBox>
            <PopualrBox>
                <PickText>?????????</PickText>
                <GoIcon>
                <Icon name="chevron-forward-outline" size={25}/>
                </GoIcon>
            </PopualrBox>
        </BGBox>
        <BGBox>
            <BGText>??????</BGText>
            <PopualrBox>
                <PickText>?????? ??????</PickText>
                <GoIcon onPress={()=>navigate("Stack",{screen:"Certification"})}>
                <Icon name="chevron-forward-outline" size={25}/>
                </GoIcon>
            </PopualrBox>
            <PopualrBox>
                <PickText>???????????? ??????</PickText>
                <GoIcon>
                <Icon name="chevron-forward-outline" size={25}/>
                </GoIcon>
            </PopualrBox>
            <PopualrBox>
                <PickText>????????? ??????</PickText>
                <GoIcon>
                <Icon name="chevron-forward-outline" size={25}/>
                </GoIcon>
            </PopualrBox>
        </BGBox>
        <BGBox>
            <BGText>?????????</BGText>
            <PopualrBox>
                <PickText>????????????</PickText>
                <GoIcon onPress={()=>navigate("Stack",{screen:"Inquiry"})}>
                <Icon name="chevron-forward-outline" size={25}/>
                </GoIcon>
            </PopualrBox>
            <PopualrBox>
                <PickText>????????????</PickText>
                <GoIcon onPress={()=>navigate("Stack",{screen:"Announcement"})}>
                <Icon name="chevron-forward-outline" size={25}/>
                </GoIcon>
            </PopualrBox>
            <PopualrBox>
                <PickText>????????? ????????????</PickText>
                <GoIcon>
                <Icon name="chevron-forward-outline" size={25}/>
                </GoIcon>
            </PopualrBox>
            <PopualrBox>
                <PickText>???????????? ?????? ??????</PickText>
                <GoIcon onPress={()=>navigate("Stack",{screen:"PrivacyPolicy"})}>
                <Icon name="chevron-forward-outline" size={25}/>
                </GoIcon>
            </PopualrBox>
            <PopualrBox>
                <PickText>???????????? ????????????</PickText>
                <GoIcon>
                <Icon name="chevron-forward-outline" size={25}/>
                </GoIcon>
            </PopualrBox>
        </BGBox>
        <BGBox>
            <BGText>??????</BGText>
            <PopualrBox
                onPress={()=>auth().signOut()
                    .then(()=>{
                        navigate("Tabs",{screen:"Home"})
                    })
                }
            >
                <PickText>????????????</PickText>
                <GoIcon>
                <Icon name="chevron-forward-outline" size={25}/>
                </GoIcon>
            </PopualrBox>
            <PopualrBox>
                <PickText>?????? ??????</PickText>
                <GoIcon onPress={()=>navigate("Stack",{screen:"Withdrawal"})}>
                <Icon name="chevron-forward-outline" size={25}/>
                </GoIcon>
            </PopualrBox>
        </BGBox>
        </Container>
)
    }


export default My;