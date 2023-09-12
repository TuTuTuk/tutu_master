import { Dimensions, Image, Text, View } from "react-native";
import styled from "styled-components/native"

const Container = styled.View`
  margin:0;
  width:${props=>props.width}
  align-self:center;
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
`

const GradeSemester = styled.Text`
  font-size:18;
`

const ButtonWrap = styled.View`
  display:flex;
  flex-direction:row;
`

const WeekWrap = styled.Text`
  background-color:rgba(187, 187, 187, 1);
  display: flex;
  text-align:center;
  padding-vertical:5;
  flex: ${props => props.idx === 0 ? 0.5 : 1};
  font-size:10;
  border-top-left-radius: ${props => props.idx === 0? 10 : 0};
  border-top-right-radius: ${props => props.idx === 5? 10 : 0};
`

export default function MakeTimeTable() {
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
                    <Image source={require('../../../images/configure-grey.png')} alt="none"/>
                    <Image source={require('../../../images/addfriends.png')} alt="none"/>
                </ButtonWrap>
            </GradeSemesterWrap>
            <View style={{display:'flex', justifyContent:'space-around'}}>
                <View style={{display:'flex', flexDirection:'row'}}>
                    {week.slice(0,1).map((w)=> w.map((ww, idx)=><WeekWrap idx={idx}>{ww}</WeekWrap>))}
                </View>
                {week.slice(1).map((t)=>(
                <View style={{display:'flex', flexDirection:'row'}}>
                    <View style={{ alignItems:'center', flex:0.5, backgroundColor:'rgba(187, 187, 187, 1)', paddingVertical:8}}>
                        <Text style={{fontSize:10, textAlign:'center'}}>{t[0][0]}</Text>
                        <View>
                            <Text style={{fontSize:6}}>{t[0][1]}</Text>
                            <Text style={{fontSize:6}}>{t[0][2]}</Text>
                        </View>
                    </View>
                    {t.slice(1).map((tt)=><Text style={{flex:1, backgroundColor:'rgba(227, 227, 227, 1)'}}>{tt}</Text>)}
                </View>
                ))}
            </View>
        </Container>
    )
}