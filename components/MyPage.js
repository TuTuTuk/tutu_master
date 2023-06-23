import { Text, View} from "react-native";

// 마이페이지 컴포넌트
export default function MyPage() {
    return(
    <>
        <View style={{ width:"100%", height:"7%", flexDirection:"row", alignItems:"center",}}>
            <View style={{width:10, height:10, backgroundColor:"#00E676", borderRadius:5, marginLeft:15,marginRight:10}}/>
            <View style={{flexDirection:"row",  alignItems:"center", width:"85%", justifyContent:"space-between"}}>
                <Text style={{fontSize:14, fontWeight:"400"}}>[마이페이지] OOO이 수정되었습니다</Text>
                <Text style={{fontSize:8, fontWeight:"400"}}>3,730 P</Text>
            </View>
        </View>
    </>
    )
}