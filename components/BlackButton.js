import react from "react";
import styled from "styled-components/native";
import { useNavigation } from '@react-navigation/native';

const Pressable = styled.Pressable`
    width:100%;
    height:40px;
    border-radius: 10px;
    background-color:#545454;
    align-items: center;
    justify-content: center;
    margin-bottom:${(props)=>props.mbottom}px;
`;

const Text = styled.Text`
    font-weight: 600;
    font-size: 16px;
    line-height: 19px;
    color: #FFFFFF;
`;


const BlackButton = ({title,mbottom,click,move,actOn}) => {
    const navigation = useNavigation();
    return(
        <Pressable
            onPressOut={()=>click==null?null:click()}  
            mbottom={mbottom} 
            onPress={()=>{
                navigation.navigate("Stack",{screen:`${move}`})
                actOn==null?null:actOn();
            }}
        >
            <Text>{title}</Text>
        </Pressable>
    )
}

export default BlackButton;