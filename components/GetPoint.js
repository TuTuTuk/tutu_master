import { Text, View} from "react-native";

// 포인트 얻을시 사용되는 컴포넌트
export default function GetPoint() {
    return(
    <>
        <View style={{ width:"100%", height:"7%", flexDirection:"row", alignItems:"center",}}>
            <View style={{width:10, height:10, backgroundColor:"#F5B909", borderRadius:5, marginLeft:15,marginRight:10}}/>
            <View style={{flexDirection:"row",  alignItems:"center", width:"85%", justifyContent:"space-between"}}>
                <Text style={{fontSize:14, fontWeight:"400"}}>[포인트] 댓글/덧글 작성으로 +30P</Text>
                <Text style={{fontSize:8, fontWeight:"400"}}>1,760 P</Text>
            </View>
        </View>
    </>
    )
}