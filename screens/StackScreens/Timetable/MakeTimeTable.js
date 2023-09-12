import { Dimensions, Image, Pressable, Text, View } from "react-native";
import styled from "styled-components/native"

const Container = styled.View`
  margin:0;
  width:${props=>props.width}
  align-self:center;
  margin-bottom : 60;
`

const CurrentSemester = styled.Text`
  color:rgba(0, 98, 255, 1);
  font-size:10;
`

const GradeSemesterWrap = styled.View`
  display:flex;
  flex-direction:row;
  justify-content:space-between;
  align-items:center;
  margin-bottom : 15;
`

const GradeSemester = styled.Text`
  font-size:18;
`

const ButtonWrap = styled.View`
  display:flex;
  flex-direction:row;
`

const Week = styled.Text`
  background-color:rgba(187, 187, 187, 1);
  display: flex;
  text-align:center;
  padding-vertical:5;
  flex: ${props => props.idx === 0 ? 0.5 : 1};
  font-size:10;
  color: rgba(255, 255, 255, 1);
  border-top-left-radius: ${props => props.idx === 0? 10 : 0};
  border-top-right-radius: ${props => props.idx === 5? 10 : 0};
  border-left-width: ${props => props.idx === 0 ? 0 : 1};
  border-bottom-width: 1;
  border-color : rgba(255, 255, 255, 1);
`

const CommonWrap = styled.View`
  display:flex;
  flex-direction:row;
`

const ClassesWrap = styled.View`
  align-items:center;
  flex:0.49;
  background-color:rgba(187, 187, 187, 1);
  padding-vertical:8;
  border-bottom-left-radius: ${props => props.idx === 11 ? 10 : 0}
  border-width:1
  border-left-width:0;
  border-bottom-width: ${props=>props.idx === 11 ? 0 : 1};
  border-color:rgba(255, 255, 255, 1);
`

const Classes = styled.Text`
  font-size:10;
  text-align:center;
  color:rgba(255, 255, 255, 1);
`

const ClassesTime = styled.Text`
  font-size:6;
  color:rgba(227, 227, 227, 1);
`

const TimeTableContent = styled.Text`
  flex:1;
  background-color:rgba(227, 227, 227, 1);
  borderbottom-right-radius:${props=>props.innerIdx === 4 && props.idx === 11 ? 10 : 0};
  border-width:1;
  border-right-width:0;
  border-bottom-width: ${props=>props.idx === 11 ? 0 : 1};
  border-color:rgba(255,255,255,1);
`

export default function MakeTimeTable({setIsMaking}) {
    const week = [['', 'MON', 'TUE', 'WEN', 'THU', 'FRI'],
        [['1', '09:30-', '10:20'], '', '', '', '', '', ],
        [['2', '10:30-','11:20'], '', '', '', '', '', ],
        [['3', '11:30-','12:20'], '', '', '', '', '', ],
        [['4', '12:30-','13:20'], '', '', '', '', '', ],
        [['5', '13:30-','14:20'], '', '', '', '', '', ],
        [['6', '14:30-','15:20'], '', '', '', '', '', ],
        [['7', '15:30-','16:20'], '', '', '', '', '', ],
        [['8', '16:30-','17:20'], '', '', '', '', '', ],
        [['9', '17:30-','18:15'], '', '', '', '', '', ],
        [['10', '18:15-','19:05'], '', '', '', '', '', ],
        [['11', '19:15-','20:05'], '', '', '', '', '', ],
        [['12', '20:15-','21:05'], '', '', '', '', '', ]]
    const windowWidth = Dimensions.get('window').height;
    return(
        <Container width={Math.floor(windowWidth / 2.25)}>
            <CurrentSemester>2023학년 2학기</CurrentSemester>
            <GradeSemesterWrap>
                <GradeSemester>3학년 2학기</GradeSemester>
                <ButtonWrap>
                  <Pressable onPress={()=>setIsMaking(false)}>
                    <Image source={require('../../../images/configure-grey.png')} alt="none"/>
                  </Pressable>
                  <Pressable>
                    <Image source={require('../../../images/addfriends.png')} alt="none"/>
                  </Pressable>
                </ButtonWrap>
            </GradeSemesterWrap>
            <CommonWrap>
              {week.slice(0,1).map((w)=> w.map((ww, idx)=><Week idx={idx}>{ww}</Week>))}
            </CommonWrap>
            {week.slice(1).map((t, idx)=>(
              <CommonWrap>
                <ClassesWrap idx={idx}>
                  <Classes>{t[0][0]}</Classes>
                  <View>
                    <ClassesTime>{t[0][1]}</ClassesTime>
                    <ClassesTime>{t[0][2]}</ClassesTime>
                  </View>
                </ClassesWrap>
                {t.slice(1).map((tt, innerIdx)=><TimeTableContent idx={idx} innerIdx={innerIdx}>{tt}</TimeTableContent>)}
              </CommonWrap>
            ))}    
        </Container>
    )
}