import React, { useEffect, useState } from "react"
import { Pressable, ScrollView, Text,View } from "react-native";
import TopBar from "../../components/TopBar";
import TopBar_Close from "../../components/TopBar_Close";
import LinearGradient from 'react-native-linear-gradient';
import styled from "styled-components/native";

const PopularBoxKeyword = styled.Text`
font-weight: 600;
font-size: 10px;
color:#FFFFFF;
`;

const Timetable =()=>{
    const [more, setMore] = useState(false)
    const onPress = () => {
        setMore(!more)
    }
    return(
    <View style={{backgroundColor:"#FFFFFF", height:"100%", display:"flex", alignItems:"center"}}>
        <TopBar_Close/>
        <Text style={{lineHeight:14, fontSize:12, color:"#545454"}}>선-후배 매칭_ 학교생활 조언해줄 후배 선택하기</Text>
        <View style={{flexDirection:"row", marginTop:36}}>
            <View style={{width:5, height:5, backgroundColor:"#E3E3E3", marginHorizontal:2.5, borderRadius:2.5}}></View>
            <View style={{width:5, height:5, backgroundColor:"#E3E3E3", marginHorizontal:2.5, borderRadius:2.5}}></View>
            <View style={{width:58, height:5, backgroundColor:"#BBBBBB", marginHorizontal:2.5, borderRadius:3.5}}></View>
            <View style={{width:5, height:5, backgroundColor:"#E3E3E3", marginHorizontal:2.5, borderRadius:2.5}}></View>
            <View style={{width:5, height:5, backgroundColor:"#E3E3E3", marginHorizontal:2.5, borderRadius:2.5}}></View>
        </View>
        <View style={{height: "50%" ,width: "70%", marginTop:20, borderRadius: 10, backgroundColor: "#F7F7F7"}}>
            <View style={{height:"50%", flexDirection:"row"}}>
                <View style={{width:"40%", alignItems:"center"}}>
                    <View style={{backgroundColor:"#FFFFFF", width:80, height: 80, marginHorizontal:20,marginTop:20, marginBottom:10, borderRadius:40}}/>
                    <Text style={{fontSize:12, fontWeight:"600"}}>이*빈</Text>
                    <Text style={{fontSize:12}}>학과 (학번)</Text>
                </View>
                <View style={{width:"60%"}}>
                    <View style={{height:30, width:30, position:"absolute", backgroundColor:"#00E676", borderRadius:15, left:"38%", top:"10%", alignItems:"center", justifyContent:"center"}}><Text style={{color:"#FFFFFF"}}>그림</Text></View>
                    <View style={{height:25, width:25, position:"absolute", backgroundColor:"#0062FF", borderRadius:12.5, left:"70%", top:"25%", alignItems:"center", justifyContent:"center"}}><Text style={{color:"#FFFFFF"}}>앱</Text></View>
                    <View style={{height:35, width:35, position:"absolute", backgroundColor:"#0062FF", borderRadius:17.5, left:"10%", top:"22%", alignItems:"center", justifyContent:"center"}}><Text style={{color:"#FFFFFF"}}>학점</Text></View>
                    <View style={{height:70, width:70, position:"absolute", backgroundColor:"#0062FF", borderRadius:35, left:"30%", top:"30%", alignItems:"center", justifyContent:"center"}}><Text style={{color:"#FFFFFF"}}>밝은 성격</Text></View>
                    <View style={{height:35, width:35, position:"absolute", backgroundColor:"#FFAB40", borderRadius:17.5, left:"11%", top:"60%", alignItems:"center", justifyContent:"center"}}><Text style={{color:"#FFFFFF"}}>mbti</Text></View>
                    <View style={{height:35, width:35, position:"absolute", backgroundColor:"#FF3D00", borderRadius:17.5,left:"70%", top:"60%", alignItems:"center", justifyContent:"center"}}><Text style={{color:"#FFFFFF"}}>운동</Text></View>
                </View>
            </View>
            <View style={{height:"50%", justifyContent:"center", alignItems:"center"}}>
                <View style={{width:"90%", height:"60%", backgroundColor:"#FFFFFF", borderRadius:10, alignItems:"center"}}>
                    <Text style={{fontSize:16, marginTop:10}}>키워드로 적어본 원하는 선배님</Text>
                    <View style={{flexDirection:"row", marginTop:10}}>
                        <LinearGradient style={{
                            width:"17%",
                            height:"53%",
                            marginRight:5,
                            borderRadius: 5,
                            backgroundColor:'#0062FF',
                            alignItems:"center",
                            justifyContent:"center"
                        }}
                            colors={['#0062FF', '#0A7DFF', '#1398FF']}
                            start={{x:1,y:0}} end={{x:0,y:0}}
                        >
                            <PopularBoxKeyword>#키워드</PopularBoxKeyword>                        
                        </LinearGradient>
                        <LinearGradient style={{
                            width:"17%",
                            height:"53%",
                            marginRight:5,
                            borderRadius: 5,
                            backgroundColor:'#0062FF',
                            alignItems:"center",
                            justifyContent:"center"
                        }}
                            colors={['#0062FF', '#0A7DFF', '#1398FF']}
                            start={{x:1,y:0}} end={{x:0,y:0}}
                        >
                            <PopularBoxKeyword>#키워드</PopularBoxKeyword>                        
                        </LinearGradient><LinearGradient style={{
                            width:"17%",
                            height:"53%",
                            marginRight:5,
                            borderRadius: 5,
                            backgroundColor:'#0062FF',
                            alignItems:"center",
                            justifyContent:"center"
                        }}
                            colors={['#0062FF', '#0A7DFF', '#1398FF']}
                            start={{x:1,y:0}} end={{x:0,y:0}}
                        >
                            <PopularBoxKeyword>#키워드</PopularBoxKeyword>                        
                        </LinearGradient><LinearGradient style={{
                            width:"17%",
                            height:"53%",
                            marginRight:5,
                            borderRadius: 5,
                            backgroundColor:'#0062FF',
                            alignItems:"center",
                            justifyContent:"center"
                        }}
                            colors={['#0062FF', '#0A7DFF', '#1398FF']}
                            start={{x:1,y:0}} end={{x:0,y:0}}
                        >
                            <PopularBoxKeyword>#키워드</PopularBoxKeyword>                        
                        </LinearGradient><LinearGradient style={{
                            width:"17%",
                            height:"53%",
                            marginRight:5,
                            borderRadius: 5,
                            backgroundColor:'#0062FF',
                            alignItems:"center",
                            justifyContent:"center"
                        }}
                            colors={['#0062FF', '#0A7DFF', '#1398FF']}
                            start={{x:1,y:0}} end={{x:0,y:0}}
                        >
                            <PopularBoxKeyword>#키워드</PopularBoxKeyword>                        
                        </LinearGradient>
                    </View>
                    <Pressable onPress={()=>onPress()} style={{borderLeftWidth: 7,borderRightWidth: 7, borderLeftColor: "transparent",borderRightColor: "transparent",borderRadius:2, borderTopWidth : more ? 0 : 14, borderTopColor: "#FFAB40",borderBottomWidth : more ? 14 : 0, borderBottomColor: "#FFAB40" }}></Pressable>
                </View>
            </View>
        </View>
        {more ? <ScrollView style={{width:"70%", backgroundColor:"#E3E3E3", bottom:20, borderRadius:10}}>
            <View style={{alignItems:"center", width:"90%", marginLeft:"5%"}}>
                <Text style={{fontSize:16, fontWeight:"600", marginVertical:5}}>제목입니다</Text>
                <Text style={{marginBottom:5 }}>저는 산업디자인공학과 닉네임 입니다. 저는 밝은 성격을 가지고 있고 학점에 관심이 많아 수업을 열심히 들었던 선배님들께 도움을 받고 싶습니다.저는 산업디자인공학과 닉네임 입니다. 저는 밝은 성격을 가지고 있고 학점에 관심이 많아 수업을 열심히 들었던 선배님들께 도움을 받고 싶습니다.저는 산업디자인공학과 닉네임 입니다. 저는 밝은 성격을 가지고 있고 학점에 관심이 많아 수업을 열심히 </Text>
            </View>
        </ScrollView> : <View style={{width:"70%", backgroundColor:"#E3E3E3", bottom:20, borderRadius:10,height:70, overflow:"hidden"}}>
            <View style={{alignItems:"center", width:"90%", marginLeft:"5%"}}>
                <Text style={{fontSize:16, fontWeight:"600", marginVertical:5}}>제목입니다</Text>
                <Text style={{marginBottom:5 }}>저는 산업디자인공학과 닉네임 입니다. 저는 밝은 성격을 가지고 있고 학점에 관심이 많아 수업을 열심히 들었던 선배님들께 도움을 받고 싶습니다.저는 산업디자인공학과 닉네임 입니다. 저는 밝은 성격을 가지고 있고 학점에 관심이 많아 수업을 열심히 들었던 선배님들께 도움을 받고 싶습니다.저는 산업디자인공학과 닉네임 입니다. 저는 밝은 성격을 가지고 있고 학점에 관심이 많아 수업을 열심히 </Text>
            </View>
        </View>}
        
        <LinearGradient style={{
            width:"80%",
            height:"5%",
            borderRadius: 10,
            backgroundColor:'#0062FF',
            alignItems:"center",
            justifyContent:"center",
            marginVertical:30
        }}
            colors={['#0062FF', '#0A7DFF', '#1398FF']}
            start={{x:1,y:0}} end={{x:0,y:0}}
            >
            <Text style={{color:"#FFFFFF",fontWeight:"600"}}>선택하기</Text>                        
        </LinearGradient>
    </View>
    )
}
export default Timetable;