import React from "react";
import styled from "styled-components/native";
import TopBar_Search from "../../components/TopBar_Search";
import HotBoard from "../../components/HotBoard";
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

     return(
          <Container>
               <TopBar_Search title="게시판"></TopBar_Search>
               <HotBoard></HotBoard>
               <BlueButton title="통합 게시판" click={null} mbottom={30} move="Integrated_Board_min"/>
               <AllMajorBox>
                    <Major1>
                         <Major11
                              onPress={()=>navigate("Stack",{screen:"Designboard_min",params:{kind:"Design"}})}
                         >
                              <Image11><MajorIcon source={require('../../images/Major_Icon/Major_Design.png')}></MajorIcon></Image11>
                              <TextBox11><Image11Text>디자인</Image11Text></TextBox11>
                         </Major11>
                         <Major11
                              onPress={()=>navigate("Stack",{screen:"Designboard_min",params:{kind:"Computer"}})}
                         >    
                              <Image11><MajorIcon source={require('../../images/Major_Icon/Major_Computer.png')}></MajorIcon></Image11>
                              <TextBox11><Image11Text>컴퓨터</Image11Text></TextBox11>
                         </Major11>
                         <Major11
                              onPress={()=>navigate("Stack",{screen:"Designboard_min",params:{kind:"Game"}})}
                         >
                              <Image11><MajorIcon source={require('../../images/Major_Icon/Major_Game.png')}></MajorIcon></Image11>
                              <TextBox11><Image11Text>게임</Image11Text></TextBox11>
                         </Major11>
                    </Major1>
                    <Major1>
                         <Major11
                              onPress={()=>navigate("Stack",{screen:"Designboard_min",params:{kind:"Ai"}})}
                         >
                              <Image11><MajorIcon source={require('../../images/Major_Icon/Major_AI.png')}></MajorIcon></Image11>
                              <TextBox11><Image11Text>인공지능</Image11Text></TextBox11>
                         </Major11>
                         <Major11
                              onPress={()=>navigate("Stack",{screen:"Designboard_min",params:{kind:"Machine"}})}
                         >
                              <Image11><MajorIcon source={require('../../images/Major_Icon/Major_Machine.png')}></MajorIcon></Image11>
                              <TextBox11><Image11Text>기계</Image11Text></TextBox11>
                         </Major11>
                         <Major11
                              onPress={()=>navigate("Stack",{screen:"Designboard_min",params:{kind:"MachineDesign"}})}
                         >
                              <Image11><MajorIcon source={require('../../images/Major_Icon/Major_MechineDesing.png')}></MajorIcon></Image11>
                              <TextBox11><Image11Text>기계설계</Image11Text></TextBox11>
                         </Major11>
                    </Major1>
                    <Major1>
                         <Major11
                              onPress={()=>navigate("Stack",{screen:"Designboard_min",params:{kind:"Mechatronics"}})}
                         >
                              <Image11><MajorIcon source={require('../../images/Major_Icon/Major_Mecha.png')}></MajorIcon></Image11>
                              <TextBox11><Image11Text>메카트로닉스</Image11Text></TextBox11>
                         </Major11>
                         <Major11
                              onPress={()=>navigate("Stack",{screen:"Designboard_min",params:{kind:"Electron"}})}
                         >
                              <Image11><MajorIcon source={require('../../images/Major_Icon/Major_Electon.png')}></MajorIcon></Image11>
                              <TextBox11><Image11Text>전자</Image11Text></TextBox11>
                         </Major11>
                         <Major11
                              onPress={()=>navigate("Stack",{screen:"Designboard_min",params:{kind:"NewMaterial"}})}
                         >
                              <Image11><MajorIcon source={require('../../images/Major_Icon/Major_NewMaterial.png')}></MajorIcon></Image11>
                              <TextBox11><Image11Text>신소재</Image11Text></TextBox11>
                         </Major11>
                    </Major1>
                    <Major1>
                         <Major11
                              onPress={()=>navigate("Stack",{screen:"Designboard_min",params:{kind:"Chemistry"}})}
                         >
                              <Image11><MajorIcon source={require('../../images/Major_Icon/Major_LifeChemistry.png')}></MajorIcon></Image11>
                              <TextBox11><Image11Text>생명화학</Image11Text></TextBox11>
                         </Major11>
                         <Major11
                              onPress={()=>navigate("Stack",{screen:"Designboard_min",params:{kind:"Nano"}})}
                         >
                              <Image11><MajorIcon source={require('../../images/Major_Icon/Major_Nano.png')}></MajorIcon></Image11>
                              <TextBox11><Image11Text>나노반도체</Image11Text></TextBox11>
                         </Major11>
                         <Major11
                              onPress={()=>navigate("Stack",{screen:"Designboard_min",params:{kind:"Energy"}})}
                         >
                              <Image11><MajorIcon source={require('../../images/Major_Icon/Major_Energy.png')}></MajorIcon></Image11>
                              <TextBox11><Image11Text>에너지-전기</Image11Text></TextBox11>
                         </Major11>
                    </Major1>
                    <Major1>
                         <Major11
                              onPress={()=>navigate("Stack",{screen:"Designboard_min",params:{kind:"Management"}})}
                         >
                              <Image11><MajorIcon source={require('../../images/Major_Icon/Major_NewMaterial.png')}></MajorIcon></Image11>
                              <TextBox11><Image11Text>경영</Image11Text></TextBox11>
                         </Major11>
                    </Major1>
               </AllMajorBox>
          </Container>
     )
}
export default Board_min;