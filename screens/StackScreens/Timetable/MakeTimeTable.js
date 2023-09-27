import { useState } from "react";
import { Dimensions, Image, Pressable, Text, View, TextInput } from "react-native";
import styled from "styled-components/native"

const Container = styled.View`
  margin:0;
  width:${props=>props.width};
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

const CommonWrap = styled.View`
  display:flex;
  flex-direction:row;
`

const WeekWrap = styled.View`
  display:flex;
  align-items : center;
  justify-content : center;
  background-color:rgba(187, 187, 187, 1);
  width : ${props => props.idx === 0 ? props.classCol : props.tableCol};
  height : ${props => props.weekRow};
  border-top-left-radius: ${props => props.idx === 0? 10 : 0};
  border-top-right-radius: ${props => props.idx === 5? 10 : 0};
  border-left-width: ${props => props.idx === 0 ? 0 : 1};
  border-bottom-width: 1;
  border-color : rgba(255, 255, 255, 1);
`

const Week = styled.Text`
  font-size:10;
  color: rgba(255, 255, 255, 1);
`

const ClassesWrap = styled.View`
  align-items:center;
  justify-content : center;
  width : ${props => props.classCol}
  height : ${props => props.classRow}
  background-color:rgba(187, 187, 187, 1);
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
  width : ${props => props.tableCol}
  height : ${props => props.classRow}
  background-color:rgba(227, 227, 227, 1);
  borderbottom-right-radius:${props=>props.innerIdx === 4 && props.idx === 11 ? 10 : 0};
  border-width:1;
  border-right-width:0;
  border-bottom-width: ${props=>props.idx === 11 ? 0 : 1};
  border-color:rgba(255,255,255,1);
`

export default function MakeTimeTable({setIsMaking}) {
  const windowWidth = Math.floor(Dimensions.get('window').width * 0.9);
  const windowHeight = Math.floor(Dimensions.get('window').height);
  const classCol = Math.floor(windowWidth * 3 / 32)
  const tableCol = Math.floor((windowWidth * 29 / 32) / 5)
  const weekRow = Math.floor(windowHeight / 25)
  const classRow = Math.floor(windowHeight / 13)
  const [start, setStart] = useState('')
  const [end, setEnd] = useState('')
  const [weekName, setWeekName] = useState('')
  const [timeTableDatas,setTimeTableDatas] = useState([])

  const week = [['', '월', '화', '수', '목', '금'],
    [['1', '09:30-', '10:20'], '', '', '', '', ''],
    [['2', '10:30-','11:20'], '', '', '', '', ''],
    [['3', '11:30-','12:20'], '', '', '', '', ''],
    [['4', '12:30-','13:20'], '', '', '', '', ''],
    [['5', '13:30-','14:20'], '', '', '', '', ''],
    [['6', '14:30-','15:20'], '', '', '', '', ''],
    [['7', '15:30-','16:20'], '', '', '', '', ''],
    [['8', '16:30-','17:20'], '', '', '', '', ''],
    [['9', '17:30-','18:15'], '', '', '', '', ''],
    [['10', '18:15-','19:05'], '', '', '', '', ''],
    [['11', '19:15-','20:05'], '', '', '', '', ''],
    [['12', '20:15-','21:05'], '', '', '', '', '']]

  const [timeTableExist, setTimeTableExist] = useState([{week : '월', idx : 0, isExist : [false,false,false,false,false,false,false,false,false,false,false,false]},
    {week : '화', idx : 1, isExist : [false,false,false,false,false,false,false,false,false,false,false,false]},
    {week : '수', idx : 2, isExist : [false,false,false,false,false,false,false,false,false,false,false,false]},
    {week : '목', idx : 3, isExist : [false,false,false,false,false,false,false,false,false,false,false,false]},
    {week : '금', idx : 4, isExist : [false,false,false,false,false,false,false,false,false,false,false,false]}])

  const addTimeTableDatas = () => {
    if(!start || !end || !weekName) {
      alert('요일과 시간을 선택해주세요.')
      return;
    }
    const existLoc = timeTableExist.filter((td)=> td.week === weekName)[0].idx // 요일 찾는 로직
    const isExist = timeTableExist[existLoc].isExist.slice(Number(start) - 1, Number(end)).some((data)=> data === true) // 시작 시간과 종료 시간 사이에 수업 있나 확인하는 로직
    if(isExist) {
      alert('해당 시간에 시간표가 존재합니다.')
      return;
    }
    // 시작 시간과 종료 시간 사이를 true로 변환
    for(let i = Number(start) - 1;i<=Number(end) - 1;i++) {
      timeTableExist[existLoc].isExist[i] = true;
    }
    const oldTimeTableDatas = [...timeTableDatas]
    const oldTimeTableExist = [...timeTableExist]
    setTimeTableExist([...oldTimeTableExist])
    setTimeTableDatas([...oldTimeTableDatas, {week : existLoc, length : Number(end) - Number(start) + 1, start : start - 1}])
    setStart('')
    setEnd('')
    setWeekName('')
  }
    return(
        <Container width={windowWidth}>
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
              {week.slice(0,1).map((w)=> w.map((ww, idx)=><WeekWrap weekRow={weekRow} classCol={classCol} tableCol={tableCol} idx={idx}><Week>{ww}</Week></WeekWrap>))}
            </CommonWrap>
            <View>
            {week.slice(1).map((t, idx)=>(
              <CommonWrap>
                <ClassesWrap classRow={classRow} classCol={classCol} idx={idx}>
                  <Classes>{t[0][0]}</Classes>
                  <View>
                    <ClassesTime>{t[0][1]}</ClassesTime>
                    <ClassesTime>{t[0][2]}</ClassesTime>
                  </View>
                </ClassesWrap>
                {t.slice(1).map((tt, innerIdx)=><TimeTableContent classRow={classRow} tableCol={tableCol} idx={idx} innerIdx={innerIdx}>{tt}</TimeTableContent>)}
              </CommonWrap>
            ))} 
            <Pressable>
              <View>
                <Text onPress={addTimeTableDatas}>
                  시간표 추가하기
                </Text>
              </View>
            </Pressable>
            <TextInput value={weekName} onChangeText={(e)=>setWeekName(e)} style={{borderWidth:1}}/>
            <TextInput value={start} onChangeText={(e)=>setStart(e)} style={{borderWidth:1}}/>
            <TextInput value={end} onChangeText={(e)=>setEnd(e)} style={{borderWidth:1}}/>
            {timeTableDatas.length === 0 ? '' : timeTableDatas.map((timeTableData, idx)=>{
              return(
                <View style={{position:'absolute', zIndex:100}}>
                  <View style={{backgroundColor: 'orange', borderWidth:1, borderColor:'rgba(0,0,0,0)', borderRadius:10, width:tableCol,height:classRow * timeTableData.length, left: classCol + tableCol * timeTableData.week, top : classRow * timeTableData.start }}></View>
                </View>
                )
            })}
            </View>
        </Container>
    )
}