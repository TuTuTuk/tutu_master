import TopBar_List from "../../../components/TopBar_List"
import { Image, View, Text } from "react-native"
import LinearGradient from "react-native-linear-gradient"

const friends = [
    '조준서',
    '김민정',
    '박준범',
    '임광수',
    '이한공',
    '박공학',
    '김한국'
]

export default function TimeTableMain() {
    return(
        <View style={{backgroundColor:"#FFFFFF", height:"100%", width:"100%", display:"flex", alignItems:"center", justifyContent:'space-between', flexDirection:'column'}}>
            <TopBar_List title={"시간표"}/> 
            <Image source={require('../../../images/tutu-logo.png')} alt="none"/>
            <Text style={{fontSize:13, fontWeight:'600'}}>이번 학기 시간표를 만들어주세요</Text>
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
            <View style={{height:"55%",width:"100%", paddingVertical:20, paddingHorizontal:25, display:"flex", justifyContent:"space-between", backgroundColor:"rgba(227, 227, 227, 0.3)",borderRadius:10}}>
                <View style={{width:"100%", height:"24%", borderRadius:10, backgroundColor:'rgba(227, 227, 227, 1)', padding:15, justifyContent:'space-between'}}>
                    <View style={{display:'flex', flexDirection:'row', justifyContent:'space-between', alignItems:'center'}}>
                        <Text style={{color:'rgba(0, 98, 255, 1)', fontSize:14}}>학점 계산기</Text>
                        <Image source={require('../../../images/gradecalculate.png')} alt="none"/>
                    </View>
                    <View style={{display:'flex', flexDirection:'row', paddingHorizontal:30}}>
                        <Text style={{marginRight:19, fontWeight:'500'}}>평균학점 <Text style={{fontWeight:'700'}}>4.00</Text> <Text style={{fontSize:12, color:'rgba(129, 129, 129, 1)'}}>/ 4.5</Text></Text>
                        <Text style={{marginRight:19, fontWeight:'500'}}>취득학점 <Text style={{fontWeight:'700'}}>100</Text> <Text style={{fontSize:12, color:'rgba(129, 129, 129, 1)'}}>/ 140</Text></Text>
                    </View>
                </View>
                <View style={{width:"100%", height:"72%", borderRadius:10, backgroundColor:'rgba(227, 227, 227, 1)', padding:15}}>
                    <View style={{display:'flex', flexDirection:'row', justifyContent:'space-between', alignItems:'center'}}>
                        <Text style={{color:'rgba(0, 98, 255, 1)', fontSize:14}}>친구 시간표</Text>
                        <Image source={require('../../../images/addfriends.png')} alt="none"/>
                    </View>
                    <View>
                        {friends.map((friend, idx)=> <Text key={`friend${idx}`} style={{paddingHorizontal:30, marginTop:10}}>{friend}</Text>)}
                    </View>
                </View>
            </View>
        </View>
    )
}