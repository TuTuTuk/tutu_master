import { Text, View} from "react-native";

// 공지사항 컴포넌트
export default function Notice({comment}) {
    return(
    <>
        <View style={{ width:"100%", height:"7%", flexDirection:"row", alignItems:"center",}}>
            <View style={{width:10, height:10, backgroundColor:"#FF3D00", borderRadius:5, marginLeft:15,marginRight:10}}/>
            <View style={{flexDirection:"row",  alignItems:"center", width:"85%", justifyContent:"space-between"}}>
                <Text style={{fontSize:14, fontWeight:"400"}}>[공지사항] {comment}</Text>
            </View>
        </View>
    </>
    )
}