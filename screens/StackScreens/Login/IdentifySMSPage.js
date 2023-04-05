import React, { useState } from "react";
import { StyleSheet, Text, View ,ScrollView} from "react-native";
import TopBar from "../../../components/TopBar";
import styled from "styled-components";
import Input from "../../../components/Input";
import BlackButton from "../../../components/BlackButton";
import BlueButton from "../../../components/BlueButton";
import { Dimensions } from "react-native";

const PhoneNumView = styled.View`
  width:100%;
  flex-direction: column;
  margin-bottom:10px;
`;
        const PhoneNumText = styled.Text`
          font-weight: 400;
          font-size: 14px;
          line-height: 17px;
          margin-bottom: 5px;
          margin-left: 6px;
        `;
            const PhoneNumTextInput = styled.TextInput`
                width:100%;
                height:40px;
                padding-left:10px;
                background: #E3E3E3;
                font-weight: 400;
                font-size: 16px;
                border-radius: 10px;        
            `;
            const OverlapPressable = styled.Pressable`
                width: 24.1%;
                height: 35px;
                position:absolute;
                border-radius: 10px;
                right:2px;
                top:2.5px;
                bottom:2px;
                background-color: #545454;
                justify-content: center;
            `;
                const OverlapText = styled.Text`
                  font-weight: 500;
                  font-size: 13px;
                  color: #FFFFFF;
                  text-align: center;
                `;
             
const Container = styled.ScrollView.attrs(()=>({
    contentContainerStyle:{
        showsVerticalScrollIndicator:false,
        alignItems:"center"
    }
}))`
    background-color: white;
    width:100%;
`;

const InfoBox = styled.View`
  width: 86.11%;
  height: 80%;
`;

const SelectInfo = styled.View`
  width: 100%;
  height: 15%;
  flex-direction: row;
  justify-content: space-between;
`;

const ForeignGenderView = styled.View`
  width: 45.2%;
  height: 100%;
`;
const ForeignGenderText = styled.Text`
  font-weight: 400;
  font-size: 14px;
  line-height: 17px;
  margin-bottom: 8px;
`;
const LeftRightChooseBox = styled.View`
  width: 100%;
  height: 35px;
  flex-direction: row;
`;

const SelectLeft = styled.Pressable`
  border: 0px;
  border-right-width: 0;
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;
  width: 50%;
  height: 100%;
  align-items: center;
  justify-content: center;
  background-color: ${(props) => (props.divide ? (props.choose ? "#E3E3E3" : "#545454") : props.choose ? "#545454" : "#E3E3E3")};
`;

const SelectRight = styled.Pressable`
  border: 0px;
  border-top-right-radius: 10px;
  border-bottom-right-radius: 10px;
  width: 50%;
  height: 100%;
  background-color: ${(props) => (props.divide ? (props.choose ? "#545454" : "#E3E3E3") : props.choose ? "#E3E3E3" : "#545454")};
`;
const CompleteBox = styled.View`
  width: 86.11%;
`;

const RedText = styled.Text`
  font-weight: 400;
  font-size: 14px;
  line-height: 17px;
  color: #ff3d00;
  margin-bottom: 8px;
`;

const ForeignText = styled.Text`
  color: ${(props) => (props.isForeign ? "black" : "white")};
`;

const GenderText = styled.Text`
  color: ${(props) => (props.isMale ? "black" : "white")};
`;

const IdentifySMSPage = () => {
  const width = Dimensions.get('window').width
  const [nameText, setNameText] = useState("");
  const [birthText, setBirthText] = useState("");
  const [phoneNumText, setPhoneNumText] = useState("");
  const [identNumText, setIdentNumText] = useState("");

  const [clickDone, setClickDone] = useState(false);

  const [areForeign, setAreForeign] = useState(false);
  const [areMale, setAreMale] = useState(false);

  const checkBlank = () => {
    setClickDone(true);
  };

  // 인증번호 받기 함수
  const sendMessage = () => {
    console.log("인증번호 받기 눌림")
    console.log(width)
  }
  return (
    <Container>
    
        <TopBar title="SMS로 인증하기" />
        <InfoBox>
            <Input title="이름" changeText={setNameText} mbottom="10" />
            {clickDone ? nameText == "" ? <RedText>이름을 입력해 주세요.</RedText> : null : null}
            <SelectInfo>
            <ForeignGenderView>
                <ForeignGenderText>내-외국인</ForeignGenderText>
                <LeftRightChooseBox>
                    <SelectLeft onPress={() => setAreForeign(false)} choose={areForeign} divide={true}>
                        <ForeignText isForeign={areForeign}>내국인</ForeignText>
                    </SelectLeft>
                    <SelectRight onPress={() => setAreForeign(true)} choose={areForeign} divide={true}>
                        <ForeignText isForeign={!areForeign}>외국인</ForeignText>
                    </SelectRight>
                </LeftRightChooseBox>
            </ForeignGenderView>
            <ForeignGenderView>
                <ForeignGenderText>성별</ForeignGenderText>
                <LeftRightChooseBox>
                    <SelectLeft onPress={() => setAreMale(true)} choose={areMale} divide={false} style={styles.textAlign}>
                        <GenderText isMale={!areMale}>남자</GenderText>
                    </SelectLeft>
                    <SelectRight onPress={() => setAreMale(false)} choose={areMale} divide={false} style={styles.textAlign}>
                        <GenderText isMale={areMale}>여자</GenderText>
                    </SelectRight>
                </LeftRightChooseBox>
            </ForeignGenderView>
            </SelectInfo>
            <Input title="생년월일" changeText={setNameText} mbottom="10" />
            {clickDone ? birthText == "" ? <RedText>생년월일을 다시 입력해 주세요.</RedText> : null : null}

            <PhoneNumView>
            <PhoneNumText>휴대폰 번호</PhoneNumText>
                <View>
                    <PhoneNumTextInput placeholder="휴대폰 번호를 입력하세요"/>
                    <OverlapPressable onPress={()=>sendMessage()} >
                        <OverlapText>인증번호 받기</OverlapText>
                    </OverlapPressable>
                </View>
            </PhoneNumView>
            {/* <Input title="휴대폰 번호" changeText={setNameText} mbottom="10" /> */}

            {clickDone ? phoneNumText == "" ? <RedText>정보가 올바르지 않습니다.</RedText> : null : null}
            <Input title="인증번호" changeText={setNameText} mbottom="15" />
            {clickDone ? identNumText == "" ? <RedText>인증번호가 일치하지 않습니다.</RedText> : null : null}
            <BlackButton title="인증번호 확인하기" mbottom="60" click={null} move="" />
        </InfoBox>
        <CompleteBox>
            <BlueButton title="본인인증 완료" click={checkBlank} mbottom="10" />
        </CompleteBox>
    </Container>
  );
};

const styles = StyleSheet.create({
  textAlign: {
    alignItems: "center",
    justifyContent: "center",
  },
});

export default IdentifySMSPage;