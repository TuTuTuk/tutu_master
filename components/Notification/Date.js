import { Text, View} from "react-native";

import auth from "@react-native-firebase/auth";
import firestore from '@react-native-firebase/firestore';
import storage from '@react-native-firebase/storage';

// 날짜 컴포넌트
export default function Date({comment}) {
    return(
    <>
        <View style={{ width:"100%", height:"7%", flexDirection:"row", alignItems:"center",}}>
            <View style={{width:10, height:10, backgroundColor:"#0062FF", borderRadius:5, marginLeft:15,marginRight:10}}/>
            <View style={{flexDirection:"row",  alignItems:"center", width:"85%", justifyContent:"space-between"}}>
                <Text style={{fontSize:14, fontWeight:"400", color:"#0062FF"}}>{comment}</Text>
            </View>
        </View>
    </>
    )
}