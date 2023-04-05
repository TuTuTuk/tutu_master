import react from "react";
import styled from "styled-components/native";

const Box = styled.View`
    width:100%;
    margin-bottom: ${(props)=>props.mbottom}px;
`;
    const Text = styled.Text`
        font-weight: 400;
        font-size: 14px;
        line-height: 17px;
        margin-bottom: 5px;
        margin-left: 6px;
    `;
    const TextInput = styled.TextInput`
        width:100%;
        height:40px;
        padding-left:10px;
        border-radius: 10px;
        background-color: #E3E3E3;
        font-weight: 400;
        font-size: 16px;
    `;


const Input = ({title,content,changeText,mbottom})=>{

    if(content == null){
        return(
        <Box mbottom={mbottom}>
            <Text>{title}</Text>
            <TextInput 
                placeholder={`${title}을 입력하세요`}
                onChangeText={(text)=>changeText(text)}
            />
        </Box>
        )
    }else{
        return(
            <Box mbottom={mbottom}>
            <Text>{title}</Text>
            <TextInput 
                placeholder={`${content}을 입력하세요`}
                onChangeText={(text)=>changeText(text)}
            />
        </Box>
        )
    }
}

export default Input;