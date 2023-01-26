import React, { useState } from "react";
import TopBar from "../../../components/TopBar";
import styled from "styled-components/native";
import CheckBox from '@react-native-community/checkbox';
import BlackButton from "../../../components/BlackButton";

const Container = styled.View`
    width:100%;
    height:100%;
    align-items: center;
`;

const PassText = styled.Text`
    border:1px;
    width:86.11%;
    height:5%;
    margin-top: 24.5px;
    font-size:30px;
`;

const CommentText = styled.Text`
    border:1px;
    width:86.11%;
    height:5%;
    margin-top: 24.5px;
    font-size:15px;
`;

const AgencyBox = styled.View`
    width:86.11%;
    height:30%;
    margin-top:25px;
    flex-direction: column;
`;
    const FirstLine = styled.View`
        width:100%;
        height:50%;
        flex-direction: row;
    `;
        const SKImage = styled.Image`
            border:1px;
            width:50%;
            height:100%;
        `;
        const KTImage = styled.Image`
            border:1px;
            width:50%;
            height:100%;
        `;

    const SecondLine = styled.View`
        width:100%;
        height:50%;
        flex-direction: row;
    `;
        const LGImage = styled.Image`
            border:1px;
            width:50%;
            height:100%;`;
        const AlttleImage = styled.Image`
            border:1px;
            width:50%;
            height:100%;
        `;

const AgreeBox = styled.View`
    border:1px;
    width:86.11%;
    height:20%;
`;
    const TotalAgreeView = styled.View`
        border:1px;
        flex-direction: row;
    `;
        const TotalAgreeText = styled.Text`
            font-size:12px;
        `;
    const AgreeView = styled.View`
        border:1px;
        flex-direction: row;
    `;
        const AgreeText = styled.Text`
            font-size:9px;
        `;

const StartButton = styled.Pressable`
    border:1px;
    border-radius: 10px;
    background-color: aqua;
    width:86.11%;
    height:10%;

`;
    



const IdentificationPage=()=>{
    const [totalCheck,setTotalCheck] = useState(false);
    const [one,setOne] = useState(false);
    const [two,setTwo] = useState(false);
    const [three,setThree] = useState(false);
    const [four,setFour] = useState(false);
    return(
        <Container>
            <TopBar title="본인인증"/>
            <PassText>PASS</PassText>
            <CommentText>이용 중이신 통신사를 선택하세요</CommentText>
            <AgencyBox>
                <FirstLine>
                    <SKImage/>
                    <KTImage/>
                </FirstLine>
                <SecondLine>
                    <LGImage/>
                    <AlttleImage/>
                </SecondLine>
            </AgencyBox>
            <AgreeBox>
                <TotalAgreeView>
                    <CheckBox 
                        disabled={false}
                        value={totalCheck}
                        onValueChange={()=>setTotalCheck(!totalCheck)}
                    />
                    <TotalAgreeText>본인확인을 하기 위한 필수사항에 전체동의합니다.</TotalAgreeText>
                </TotalAgreeView>
                <AgreeView>
                    <CheckBox 
                        disabled={false}
                        value={totalCheck}
                        onValueChange={()=>setTotalCheck(!totalCheck)}
                    />
                    <AgreeText>개인정보이용</AgreeText>
                    <CheckBox 
                        disabled={false}
                        value={totalCheck}
                        onValueChange={()=>setTotalCheck(!totalCheck)}
                    />
                    <AgreeText>고유식별정보처리</AgreeText>
                    <CheckBox 
                        disabled={false}
                        value={totalCheck}
                        onValueChange={()=>setTotalCheck(!totalCheck)}
                    />
                    <AgreeText>서비스이용약관</AgreeText>
                    <CheckBox 
                        disabled={false}
                        value={totalCheck}
                        onValueChange={()=>setTotalCheck(!totalCheck)}
                    />
                    <AgreeText>통신사이용약관</AgreeText>
                </AgreeView>
            </AgreeBox>
            <StartButton></StartButton>
            <BlackButton title="SMS로 인증하기" mbottom="60" click={null} move="IdentifySMSPage"/>
        </Container>
    )
}

export default IdentificationPage;