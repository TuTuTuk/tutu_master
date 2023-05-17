import { Text, View} from "react-native";

// 날짜 컴포넌트
export default function Date() {
    return(
    <>
        <View style={{ width:"100%", height:"7%", flexDirection:"row", alignItems:"center",}}>
            <View style={{width:10, height:10, backgroundColor:"#0062FF", borderRadius:5, marginLeft:15,marginRight:10}}/>
            <View style={{flexDirection:"row",  alignItems:"center", width:"85%", justifyContent:"space-between"}}>
                <Text style={{fontSize:14, fontWeight:"400", color:"#0062FF"}}>2023.5.11</Text>
            </View>
        </View>
    </>
    )
}