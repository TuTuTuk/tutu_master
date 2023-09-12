import { useState } from "react"
import TopBar_List from "../../../components/TopBar_List"
import { Image, View, Text, Pressable, ScrollView,Dimensions, TextInput } from "react-native"
import LinearGradient from "react-native-linear-gradient"
import styled from "styled-components/native"
import MakeTimeTable from "./MakeTimeTable"

const MakeTimeTableWrap = styled.View`
  display:flex;
  align-items:center;
  margin-top:50;
  margin-bottom:20;
`

const MakeTimeTableTitle = styled.Text`
  font-size:13;
  font-weight:600;
  margin-vertical:24;
`

const ContentsWrap = styled.View`
  // height : 55%;
  height:${props => props.height}
  width : 100%;
  padding-vertical : 20;
  padding-horizontal : 25;
  display : flex;
  justify-content : space-between;
  background-color : rgba(227, 227, 227, 0.3);
  border-radius : 10;
`

const GradeCalculateWrap = styled.View`
  width : 100%;
  height : 24%;
  border-radius : 10;
  background-color : rgba(227, 227, 227, 1);
  justify-content : space-between;
  padding-horizontal : 15;
  padding-vertical : 15;
`

const FriendsWrap = styled.View`
  width : 100%;
  height : 72%;
  border-radius : 10;
  background-color : rgba(227, 227, 227, 1);
  padding-horizontal : 15;
  padding-vertical : 15;
`

const ContentTitle = styled.View`
  display : flex;
  flex-direction : row;
  justify-content : space-between;
  align-items : center;
`

const Content = styled.Text`
  color : rgba(0, 98, 255, 1);
`

const GradeContainer = styled.View`
  display : flex;
  flex-direction : row;
  padding-horizontal : 30;
`

const GradeWrap = styled.Text`
  margin-right : 19;
  font-weight : 500;
`

const CurrentGrade = styled.Text`
  font-weight : 700;
`

const TotalGrade = styled.Text`
  font-size : 12;
  color : rgba(129, 129, 129, 1);
`

const Friend = styled.Text`
  padding-horizontal : 30;
  margin-top : 10;
`

export default function TimeTableMain() {
  const [isMaking, setIsMaking] = useState(false)
  const [isEditing, setIsEditing] = useState(false)
  const [newFriend, setNewFriend] = useState('')
  const [friends,setFriends] = useState([
      '조준서',
      '김민정',
      '박준범',
      '임광수',
      '이한공',
      '박공학'
  ])
  const windowHeight = Dimensions.get('window').height;
  const addFriend = () => {
    if(newFriend.length === 0) {
      setIsEditing(false)
      return;
    }
    
    const oldFriends = [...friends]
    setNewFriend('')
    setFriends([...oldFriends, newFriend])
    console.log(friends)
    setIsEditing(false)
  }
    return(
        <ScrollView>
            <TopBar_List title={"시간표"}/>
            {!isMaking ? 
            <MakeTimeTableWrap>
              <Image source={require('../../../images/tutu-logo.png')} alt="none"/>
              <MakeTimeTableTitle>이번 학기 시간표를 만들어주세요</MakeTimeTableTitle>
              <Pressable onPress={()=>setIsMaking(true)}>
                <LinearGradient style={{
                        borderRadius: 10,
                        backgroundColor:'#0062FF',
                        alignItems:"center",
                        justifyContent:"center",
                        opacity: 1
                    }}
                    colors={['#0062FF', '#0A7DFF', '#1398FF']}
                    start={{x:1,y:0}} end={{x:0,y:0}}
                    >
                    <Text style={{color:"#FFFFFF",fontWeight:"600", paddingHorizontal:72, paddingVertical:10}}>이번학기 시간표 만들기</Text>                        
                </LinearGradient>
              </Pressable>
            </MakeTimeTableWrap> : 
            <MakeTimeTable setIsMaking={setIsMaking}/>
            } 
            <ContentsWrap height={windowHeight / 1.8}>
                <GradeCalculateWrap>
                    <ContentTitle>
                        <Content>학점 계산기</Content>
                        <Image source={require('../../../images/gradecalculate.png')} alt="none"/>
                    </ContentTitle>
                    <GradeContainer>
                        <GradeWrap>평균학점 <CurrentGrade>4.00 </CurrentGrade><TotalGrade>/ 4.5</TotalGrade></GradeWrap>
                        <GradeWrap>취득학점 <CurrentGrade>100 </CurrentGrade><TotalGrade>/ 140</TotalGrade></GradeWrap>
                    </GradeContainer>
                </GradeCalculateWrap>
                <FriendsWrap>
                    <ContentTitle>
                        <Content>친구 시간표</Content>
                        <View style={{flexDirection:'row', alignItems:'center'}}>
                          {isEditing ? 
                          <>
                            <TextInput placeholder="1글자 이상 입력해주세요." value={newFriend} onChangeText={(e)=>setNewFriend(e)} style={{backgroundColor:'white',width:180, height:"auto", marginRight:10}}/>
                            <Pressable onPress={addFriend}>
                              <Image source={require('../../../images/checked.png')} alt="none"/>
                            </Pressable>
                          </> : 
                          <Pressable onPress={()=>setIsEditing(true)}>
                            <Image source={require('../../../images/addfriends.png')} alt="none"/>
                          </Pressable>
                          }
                        </View>
                    </ContentTitle>
                    <ScrollView style={{borderWidth:1}}>
                      {friends.map((friend, idx)=> <Friend key={`friend${idx}`}>{friend}</Friend>)}
                    </ScrollView>
                </FriendsWrap>
            </ContentsWrap>
        </ScrollView>
    )
}