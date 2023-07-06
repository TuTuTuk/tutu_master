import { Text, View} from "react-native";
import React, { useState, useEffect }from "react";

import auth from "@react-native-firebase/auth";
import firestore from '@react-native-firebase/firestore';
import storage from '@react-native-firebase/storage';

// 포인트 얻을시 사용되는 컴포넌트
export default function GetPoint({comment}) {
        
    return(
    <>
        <View style={{ width:"100%", height:"7%", flexDirection:"row", alignItems:"center",}}>
            <View style={{width:10, height:10, backgroundColor:"#F5B909", borderRadius:5, marginLeft:15,marginRight:10}}/>
            <View style={{flexDirection:"row",  alignItems:"center", width:"85%", justifyContent:"space-between"}}>
                <Text style={{fontSize:14, fontWeight:"400"}}>{comment}</Text>
                <Text style={{fontSize:8, fontWeight:"400"}}>1,760 P</Text>
            </View>
        </View>
    </>
    )
}