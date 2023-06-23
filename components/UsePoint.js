import { Text, View} from "react-native";

// 포인트 사용시 사용되는 컴포넌트
export default function UsePoint() {
    return(
    <>
        <View style={{ width:"100%", height:"7%", flexDirection:"row", alignItems:"center",}}>
            <View style={{width:10, height:10, backgroundColor:"#FFAB40", borderRadius:5, marginLeft:15,marginRight:10}}/>
            <View style={{flexDirection:"row",  alignItems:"center", width:"85%", justifyContent:"space-between"}}>
                <Text style={{fontSize:14, fontWeight:"400"}}>[포인트] 프로필 구매로 -2000P</Text>
                <Text style={{fontSize:8, fontWeight:"400"}}>1,730 P</Text>
            </View>
        </View>
    </>
    )
}