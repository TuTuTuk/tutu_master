import { Text, View, Image} from "react-native";

// 쪽지 컴포넌트
export default function Message() {
    return(
    <>
        <View style={{ width:"100%", height:"7%", flexDirection:"row", alignItems:"center",}}>
            <Image style={{ marginLeft:10,marginRight:5}} source={require('../images/message.png')}/>
            <View style={{flexDirection:"row",  alignItems:"center", width:"85%", justifyContent:"space-between"}}>
                <Text style={{fontSize:14, fontWeight:"400"}}>[쪽지] 이*빈 산업디자인공학과(19학번)</Text>
            </View>
        </View>
    </>
    )
}