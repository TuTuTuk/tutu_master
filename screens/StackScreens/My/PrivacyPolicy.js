import React, {useState} from "react";
import { Text } from "react-native";
import styled from "styled-components/native";
import firestore from '@react-native-firebase/firestore';

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

const Boxx = styled.View`
    width: 86%;
    //border: 1px;
    align-self: center;
`;
    const Textt = styled.Text`
        font-size: 12px;
        font-weight: 400;
    `;




const PrivacyPolicy = ({navigation:{navigate}}) => {

    return(
    <Container>
        <TopBar title="개인정보 처리방침"/>
        <Boxx>
            <Textt>① 개인정보처리자는 다음 각 호의 사항이 포함된 개인정보의 처리 방침(이하 “개인정보 처리방침”이라 한다)을 정하여야 한다. 이 경우 공공기관은 제32조에 따라 등록대상이 되는 개인정보파일에 대하여 개인정보 처리방침을 정한다. 
            {'\n '}1. 개인정보의 처리 목적 
            {'\n '}2. 개인정보의 처리 및 보유 기간 
            {'\n '}3. 개인정보의 제3자 제공에 관한 사항(해당되는 경우에만 정한다) 
            {'\n '}3-2. 개인정보의 파기절차 및 파기방법(제21조제1항 단서에 따라 개인정보를 보존하여야 하는 경우에는 그 보존근거와 보존하는 개인정보 항목을 포함한다) 
            {'\n '}4. 개인정보 처리의 위탁에 관한 사항(해당되는 경우에만 정한다) 
            {'\n '}5. 정보주체와 법정대리인의 권리·의무 및 그 행사방법에 관한 사항 
            {'\n '}6. 제31조에 따른 개인정보 보호책임자의 성명 또는 개인정보 보호업무 및 관련 고충사항을 처리하는 부서의 명칭과 전화번호 등 연락처 
            {'\n '}7. 인터넷 접속정보파일 등 개인정보를 자동으로 수집하는 장치의 설치·운영 및 그 거부에 관한 사항(해당하는 경우에만 정한다) 
            {'\n '}8. 그 밖에 개인정보의 처리에 관하여 대통령령으로 정한 사항 
            {'\n'}② 개인정보처리자가 개인정보 처리방침을 수립하거나 변경하는 경우에는 정보주체가 쉽게 확인할 수 있도록 대통령령으로 정하는 방법에 따라 공개하여야 한다. 
            {'\n'}③ 개인정보 처리방침의 내용과 개인정보처리자와 정보주체 간에 체결한 계약의 내용이 다른 경우에는 정보주체에게 유리한 것을 적용한다. ④ 보호위원회는 개인정보 처리방침의 작성지침을 정하여 개인정보처리자에 게 그 준수를 권장할 수 있다.
            </Textt>
        </Boxx>
    </Container>
    )
}


export default PrivacyPolicy;