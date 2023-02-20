import React from "react";
import { Text, View, TouchableOpacity} from "react-native";
import styled from "styled-components/native";
import { useNavigation } from "@react-navigation/native";

const MoveTextBox = styled.View`
    width: 86%;
    height: 40px;
    //border: 1px;
    background: #E3E3E3;
    border-radius: 10px;
    align-self: center;
    padding-left: 15px;
    padding-right: 5px;
    flex-direction: row;
    justify-content: space-between;
    margin-bottom: 10px;
`;
    const MoveText = styled.Text`
        font-family: 'Pretendard';
        font-style: normal;
        font-weight: 500;
        font-size: 16px;
        line-height: 19px;
        margin-top: 10.5px;
    `;
    const Move = styled.Pressable`
        width: 30px;
        height: 30px;
        margin-top: 5px;
        //border: 1px;
    `;
    const MoveIcon = styled.Image`
        width: 100%;
        height: 100%;
    `;


const MoveBox=({title,move}) => {
    const navigation = useNavigation();
    return(
        <MoveTextBox>
            <MoveText>{title}</MoveText>
            <Move onPress={()=>navigation.navigate("Stack",{screen:`${move}`})}>
                <MoveIcon source={require('../images/Next.png')}></MoveIcon>
            </Move>
        </MoveTextBox>
    )
}
export default MoveBox;