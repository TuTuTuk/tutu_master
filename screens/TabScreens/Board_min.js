import React from "react";
import styled from "styled-components/native";

import TopBar_Search from "../../components/TopBar_Search";
import HotBoard from "../../components/BoardPart/HotBoard";
import BlueButton from "../../components/BlueButton";

import auth from "@react-native-firebase/auth"
import firestore from '@react-native-firebase/firestore';

const Container = styled.ScrollView.attrs(()=>({
    contentContainerStyle:{
        showVerticalScrollIndicator:false,
    }
}))`
     width:86.11%;
     align-self:center;
    flex:1;
    margin-top: 10px;
    margin-bottom: 10px;
`;

//----------------------------------------------------------------------------------------------
//------------------------------전공 통합 게시판-------------------------------------------------
//----------------------------------------------------------------------------------------------
 const AllBoardBox = styled.Pressable`
    width: 86%;
    margin-bottom: 30px;
    align-self: center;
    justify-content: center;
`; 
    const AllBoardText = styled.Text`
        color : white;
        font-size: 16px;
        align-self: center;
        font-weight: 600;
        margin-top: 8px;
    `;

const AllMajorBox = styled.View`
    height: auto;
    align-self: center;
    width:86.11%;
`; 
    const Major1 = styled.View`
        //border:1px;
        height: auto;
        width : 100%;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
    `;
        const Major11 = styled.Pressable`
            //border: 1px;
            width : 30%;
            height : 100%;
            margin-bottom:25px;
            align-items: center;
        `;
            const Image11 = styled.View`
                //border: 1px;
                border-radius: 40px;
                background-color: #E3E3E3;
                width: 80px;
                height: 80px;
                margin-bottom:10px;
                justify-content: center;
            `;
            const TextBox11 = styled.View`
                //border:1px;
                width : 60px;
                height: 13px;
                align-items: center;
            `;
                const Image11Text = styled.Text`
                    font-size : 10px;
                    font-weight: 300;
            `;
const MajorIcon = styled.Image`
        //border: 1px;
        width: 80%;
        height: 80%;
        align-self: center;
`;

const Board_min = ({navigation:{navigate}})=>{

     const Majors_1 = [["Design", require("../../images/Major_Icon/Major_Design.png"), "디자인"],
     ["Computer", require("../../images/Major_Icon/Major_Computer.png"), "컴퓨터"],
     ["Game", require("../../images/Major_Icon/Major_Game.png"), "게임"]]

     const Majors_2 = [["Ai", require("../../images/Major_Icon/Major_AI.png"), "인공지능"],
     ["Machine", require("../../images/Major_Icon/Major_Machine.png"), "기계"],
     ["MachineDesign",require("../../images/Major_Icon/Major_MachineDesign.png"), "기계설계"]]

     const Majors_3 = [["Mechatronics", require("../../images/Major_Icon/Major_Mechatronics.png"), "메카트로닉스"],
     ["Electron", require("../../images/Major_Icon/Major_Electron.png"), "전자"],
     ["NewMaterial", require("../../images/Major_Icon/Major_NewMaterial.png"), "신소재"]]

     const Majors_4 = [["Chemistry", require("../../images/Major_Icon/Major_LifeChemistry.png"), "생명화학"],
     ["Nano", require("../../images/Major_Icon/Major_Nano.png"), "나노반도체"],
     ["Energy", require("../../images/Major_Icon/Major_Energy.png"), "에너지-전기"]]

     const MajorContainer = ({title, address, name}) => {
          return(
               <Major11 onPress={()=>navigate("Stack",{screen:"Designboard_min",params:{title:title}})}>
                    <Image11>
                         <MajorIcon source={address}></MajorIcon>
                    </Image11>
                    <TextBox11>
                         <Image11Text>{name}</Image11Text>
                    </TextBox11>
               </Major11>
          )  
     }

     return(
          <Container>
               <TopBar_Search title="게시판"></TopBar_Search>
               <HotBoard></HotBoard>
               <BlueButton title="통합 게시판" click={null} mbottom={30} move="Integrated_Board_min"/>
               <AllMajorBox>
                    <Major1>
                         {Majors_1.map((Major, index)=>{
                              return(
                                   <MajorContainer key={`Majors_1_${index}`} title={Major[0]} address={Major[1]} name={Major[2]}/>          
                              )
                         })}
                    </Major1>
                    <Major1>
                         {Majors_2.map((Major, index)=>{
                              return(
                                   <MajorContainer key={`Majors_2_${index}`} title={Major[0]} address={Major[1]} name={Major[2]}/>          
                              )
                         })}
                    </Major1>
                    <Major1>
                         {Majors_3.map((Major, index)=>{
                              return(
                                   <MajorContainer key={`Majors_3_${index}`} title={Major[0]} address={Major[1]} name={Major[2]}/>          
                              )
                         })}
                    </Major1>
                    <Major1>
                         {Majors_4.map((Major, index)=>{
                              return(
                                   <MajorContainer key={`Majors_4_${index}`} title={Major[0]} address={Major[1]} name={Major[2]}/>          
                              )
                         })}
                    </Major1>
                    <Major1>
                         <MajorContainer title={"Management"} address={require("../../images/Major_Icon/Major_Management.png")} name={"경영"}/>
                    </Major1>
               </AllMajorBox>
          </Container>
     )
}}
export default Board_min;