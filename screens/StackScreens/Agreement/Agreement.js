import React, { useEffect, useState } from "react";
import { View, Text,Image, Pressable } from "react-native";
import TopBar_Close from "../../../components/TopBar_Close";
import styled from "styled-components";
import LinearGradient from "react-native-linear-gradient";

const Container = styled.View`
  align-items: center;
`

const AgreementContainer = styled.Pressable`
  padding-vertical:11;
  display:flex;
  flex-direction: row;
  align-items:center;
`

const AgreeAll = ({content, argAll, select, isSelected}) => {
    return (
        <AgreementContainer onPress={()=>argAll(isSelected)} style={{borderTopWidth:1, borderBottomWidth:1, marginBottom:10}}>
            <Image source={select} style={{marginRight:13}}/>
            <Text style={{fontSize:16}}>
                {content}
            </Text>
        </AgreementContainer>
    )
}

const RequiredAgreement = ({content, select, reqAgr, index}) => {
    return (
        <AgreementContainer onPress={()=>reqAgr(index)}>
            <Image source={select} style={{marginRight:13}}/>
            <Text style={{fontSize:16}}>
                {content}
            </Text>
        </AgreementContainer>
    )
}

const NonRequiredAgreement = ({content, select, nonReqAgr, index}) => {
    return (
        <AgreementContainer onPress={()=>nonReqAgr(index)} >
            <Image source={select} style={{marginRight:13}}/>
            <Text style={{fontSize:16, color:"#FF3D00"}}>
                {content}
            </Text>
        </AgreementContainer>
    )
}

export default function Agreement() {
    const [agreeAll, setAgreeAll] = useState(false)
    const [actBtn, setActBtn] = useState(false)

    const [requiredAgreements,setRequiredAgreements] = useState([["(필수) @@@@이용약관 동의", false],
    ["(필수) 개인정보수집및이용 동의", false],
    ["(필수) 개인정보수집및이용 동의", false]
    ])

    const [nonRequiredAgreements,setNonRequiredAgreements] = useState([["(선택) 광고성정보수신 동의", false],
    ["(선택) 광고성정보수신 동의", false],
    ["(선택) 광고성정보수신 동의", false]])

    const allSelect = require('../../../images/C_checked.png')
    const allCancle = require('../../../images/C_nonchecked.png')

    const selected = require('../../../images/checked.png')
    const nonSelected = require('../../../images/nonchecked.png')

    const argAll = (isSelected) => {
        const oldReq = requiredAgreements.map((req)=>[
            req[0],
            isSelected ? false : true
        ]);
        const oldNonReq =  nonRequiredAgreements.map((req)=>[
            req[0],
            isSelected ? false : true
        ]);
        setAgreeAll(!isSelected)
        setRequiredAgreements(oldReq)
        setNonRequiredAgreements(oldNonReq)
    }

    const reqAgr = (index) => {
        const olds = requiredAgreements.map((req, idx)=>[
            req[0],
            idx === index ? !req[1] : req[1]
        ]);
        setRequiredAgreements(olds);
    }

    const nonReqAgr = (index) => {
        const olds = nonRequiredAgreements.map((req, idx)=>[
            req[0],
            idx === index ? !req[1] : req[1]
        ]);
        setNonRequiredAgreements(olds);
    }

    useEffect(()=>{
        let cnt = 0;
        requiredAgreements.map((agr)=>{
            if(agr[1])
                cnt++
        })
        if(cnt === 3)
            setActBtn(true)
        else
            setActBtn(false)
    }, [requiredAgreements])

    return(
        <View style={{backgroundColor:"#FFFFFF", height:"100%", width:"100%", justifyContent:"space-between"}}>
            <TopBar_Close title={"약관 동의"}/>
            <Container>
                <View style={{width:"75%", justifyContent:"center"}}>
                    <AgreeAll content={"약관에 전체 동의(선택사항 포함)"} select={agreeAll ? allSelect : allCancle} argAll={argAll} isSelected={agreeAll}/>
                    {requiredAgreements.map((agr, index) => {
                        return <RequiredAgreement key={`requiredAgr${index}`} content={agr[0]} select={agr[1] ? selected : nonSelected} reqAgr={reqAgr} index={index}/>
                    })}
                    {nonRequiredAgreements.map((agr, index) => {
                        return <NonRequiredAgreement key={`nonRequiredAgr${index}`} content={agr[0]} select={agr[1] ? selected : nonSelected} nonReqAgr={nonReqAgr} index={index}/>
                    })}
                    
                    
                </View>
            </Container>
            <View style={{backgroundColor:"#E3E3E3", borderRadius:10, paddingVertical:12, width:"75%",alignSelf:"center"}}>
                <Text style={{ textAlign:"center", fontSize:12, color:"#818181"}}>
                {"사용자님께서는 이용약관 동의를 거부할 수 있습니다.\n단, 필수항목 동의 거부 시에는 회원가입이 제한됩니다."}
                </Text>
            </View>
            <View style={{alignItems:"center", justifyContent:"center"}}>
                <LinearGradient style={{
                    width:"75%",
                    height:"25%",
                    borderRadius: 10,
                    backgroundColor:'#0062FF',
                    alignItems:"center",
                    justifyContent:"center",
                    opacity: actBtn ? 1 : 0.5,                        
                }}
                    colors={['#0062FF', '#0A7DFF', '#1398FF']}
                    start={{x:1,y:0}} end={{x:0,y:0}}
                    >
                    <Text style={{color:"#FFFFFF",fontWeight:"600"}}>다음</Text>                        
                </LinearGradient>
            </View>
        </View>
    )
}