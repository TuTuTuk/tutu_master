import react from "react"
import { Text,Pressable } from "react-native";
import auth from "@react-native-firebase/auth";
import styled from "styled-components/native";
import TopBar from "../../../components/TopBar";

const Container= styled.View`

`;

const LogoutPage = ({navigation:{navigate,reset}})=>{

    const clickLogout=()=>{
        reset({routes:[{name:"Home"}]})
        navigate("Tabs",{screen:"Home"})
    }

    return(
        <Container>
            <TopBar title="로그아웃"/>
            <Pressable
                style={{border:1,width:100,height:30}}
                onPress={()=>auth().signOut()
                    .then(()=>clickLogout())
                }
            >
                <Text>LogoutPage</Text>
            </Pressable>
        </Container>
    )
}

export default LogoutPage;