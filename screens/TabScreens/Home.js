import React, { useState } from "react";
import { Text, TouchableOpacity, View,Modal } from "react-native";
import { NavigationHelpersContext } from "@react-navigation/native";
import styled from "styled-components/native";


//scrollView 
    //화면에 안보이는것도 한번에로딩후 화면출력
    //데이터가많으면 시간이 오래걸림
    //데이터가 적고
    //데이터끝을 알때

//flatlist
    //화면에보이는것만 그때그때 로딩하고 화면출력
    //데이터끝을 모르고
    //많을때

const Container = styled.ScrollView.attrs(()=>({
    contentContainerStyle:{
        showsVerticalScrollIndicator:false,
    }
}))`
    flex:1;
    border:1px;
    border-color:teal;
    margin:2px;
`;

const HeaderBox = styled.View`
    height:100px;
    border:1px;
    border-color:black;
    margin:2px;
    flex-direction:row;
    justify-content:space-between;
    align-items:center;
`;
    const LoginBtn = styled.Pressable`
        border: 1px;
        width:30px;
        height:30px;
        background-color: ${(props)=>props.tomato ? "blue":"pink"};
    `;
        const LoginText = styled.Text`
            color:red;
            font-size:10px;
        `;

    const ConfigureBtn = styled.TouchableOpacity`
        border: 1px;
        width:30px;
        height:30px;
    `;
        const ConfigureText = styled.Text`
            color:red;
            font-size:10px;
        `;

const SignBoardBox = styled.View`
    height:100px;
    border:1px;
    border-color:teal;
    margin:2px;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;
    const MainLogoBox = styled.View`
        border: 2px;
        border-radius: 20px;
        border-color:black;
        width:40%;
        height:50%;
    `;

    const MainTextBox = styled.View`
        border: 1px;
        border-color:black;
        margin-top:3px;
        width:50%;
        height:30px;
    `;

const ImageBox = styled.View`
    height:140px;
    border:1px;
    border-color:red;
    margin:2px;
    flex-direction: row;
    justify-content: space-between;
    align-items:center;
`;
    const Image1Box = styled.View`
        border:1px;
        border-color:black;
        margin:1px;
        width:30%;
        height:90%;
        flex-direction:column;
        justify-content: center;
        align-items: center;
    `;
        const Image = styled.Image`
            border:1px;
            border-color:black;
            border-radius:35px;
            width:70px;
            height:70px;
        `;
        const ImageTextBox = styled.View`
            border:1px;
            border-color:black;
            margin-top:3px;
            width:100px;
            height:30px;
        `;
    const Image2Box = styled.View`
        border:1px;
        border-color:black;
        margin:1px;
        width:30%;
        height:90%;
    `;
    const Image3Box = styled.View`
        border:1px;
        border-color:black;
        margin:1px;
        width:30%;
        height:90%;
    `;

const PopularBoardBox = styled.View`
    border:1px;
    border-color:red;
    height:100%;
    margin:2px;
    align-items: center;
`;

    const PopularText = styled.Text`

        border:1px;
        border-color:orange;
        width:100%;
        height:20px;
        font-size: 10px;
    `;
    const PopularBox = styled.View`
        border:1px;
        border-color:black;
        margin:5px;
        width:90%;
        height:20px;
    `;

const ModalBackView=styled.View`
    position:absolute;
    background-color: black;
    opacity: 0.5;
    width:100%;
    height:100%;
`;
const ModalView = styled.View`
    background-color: white;
    width:60%;
    height:120px;
    border-radius: 20px;
    opacity: 1;
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-end;
    padding:10px;
    left:12%;
    top:50%;
`;
    const ModalYesPressable = styled.Pressable`
        border:1px;
        border-radius: 10px;
        background-color: aqua;
        width:40%;
        height:30px;
        justify-content: center;
        align-items: center;
    `;
    const ModalNoPressable = styled.Pressable`
       border:1px;
        border-radius: 10px;
        background-color: aqua;
        width:40%;
        height:30px;
        justify-content: center;
        align-items: center;
    `;

//pressable
//---------
//onPress : 눌렀다가 뗐을때(onLongPress 실행되기 전에 떼면 발동)
//onPressIn : 누르기 시작했을때
//onLongPress : 2초이상 누르고있을때
//onPressOut : 뗐을때
//console.log() 터미널에 ()안의 값 출력(잘 돌아가나 확인할때 사용)

const Home =({navigation:{navigate}})=>{
    const [click,setClick] = useState(false);
    const [modalVisible,setModalVisible] = useState(false)

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
                    <ModalYesPressable>
                        <Text>
                            Yes
                        </Text>
                    </ModalYesPressable>
                    <ModalNoPressable onPress={()=>setModalVisible(false)}>
                        <Text>
                            No
                        </Text>
                    </ModalNoPressable>
                </ModalView>
            </Modal>
            <HeaderBox>
                <LoginBtn 
                    onPress={()=>navigate("Stack",{screen:"LoginPage"})}
                    onPressIn={()=>setClick(true)}    
                    onLongPress={()=>console.log("onLongPress")}  
                    onPressOut={()=>setClick(false)} 
                     
                    tomato={click}
                >
                    <LoginText>
                        Login
                    </LoginText>
                </LoginBtn>
                <ConfigureBtn onPress={()=>setModalVisible(true)}>
                    <ConfigureText>
                        Configure
                    </ConfigureText>
                </ConfigureBtn>
            </HeaderBox>
            <SignBoardBox>
                <MainLogoBox></MainLogoBox>
                <MainTextBox></MainTextBox>
            </SignBoardBox>
            <ImageBox>
                <Image1Box>
                    <Image></Image>
                    <ImageTextBox></ImageTextBox>
                </Image1Box>
                <Image2Box></Image2Box>
                <Image3Box></Image3Box>
            </ImageBox>
            <PopularBoardBox>
                <TouchableOpacity onPress={()=>navigate("Stack",{screen:"PopularBoard"})}>
                    <PopularText>인기글</PopularText>
                </TouchableOpacity>
                <PopularBox></PopularBox>
                <PopularBox></PopularBox>
                <PopularBox></PopularBox>
                <PopularBox></PopularBox>
                <PopularBox></PopularBox>
                <PopularBox></PopularBox>
                <PopularBox></PopularBox>
                <PopularBox></PopularBox>
                <PopularBox></PopularBox>
                <PopularBox></PopularBox>
                <PopularBox></PopularBox>
                <PopularBox></PopularBox>
                <PopularBox></PopularBox>
            </PopularBoardBox>
        </Container>
    )
}

export default Home;