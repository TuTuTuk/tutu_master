import React, { useState } from "react";
import { Text, TouchableOpacity, View,Modal } from "react-native";
import styled from "styled-components/native";
import LinearGradient from 'react-native-linear-gradient';

const ModalBackView=styled.View`
    position:absolute;
    background-color: black;
    opacity: 0.5;
    width:100%;
    height:100%;
`;
const ModalView = styled.View`
    width:88.9%;
    background-color: #FFFFFF;
    border-radius: 10px;
    padding-top:15px;
    padding-bottom:15px;
    top:39.72%;
    align-items: center;
    align-self: center;
`;
    const ModalTitle = styled.Text`
        font-family: Pretendard;
        font-style: normal;
        font-weight: 600;
        font-size: 18px;
        line-height: 22px;
        color:#1D1D1D;
        margin-bottom: 20px;
    `;
    const ModalYesPressable = styled.Pressable`
        border-radius: 5px;
        background-color: #BBBBBB;
        width:90.6%;
        height:39px;
        justify-content: center;
        align-items: center;

    `;
        const ModalYesText = styled.Text`
            font-family: Pretendard;
            font-style: normal;
            font-weight: 600;
            font-size: 16px;
            line-height: 19px;
            color: #FFFFFF;
        `;

const ModalOneOptions = ({visible,setvisible,title,yestext}) => {
    return(
        <Modal
            animationType="fade"
            transparent={true}
            visible={visible}
        >
                <ModalBackView></ModalBackView>
                <ModalView>
                    <ModalTitle>{title}</ModalTitle>
                    <ModalYesPressable onPress={()=>{setvisible(false)}}>
                    <LinearGradient style={{
                        width:"100%",
                        height:"100%",
                        borderRadius: 10,
                        alignItems:"center",
                        justifyContent:"center"
                    }}
                        colors={['#0062FF', '#0A7DFF', '#1398FF']}
                        start={{x:1,y:0}} end={{x:0,y:0}}>
                    <ModalYesText>{yestext}</ModalYesText>
                    </LinearGradient>
                    </ModalYesPressable>
                </ModalView>
        </Modal>
    )
}

export default ModalOneOptions;