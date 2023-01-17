import React, { useState } from "react";
import { Text, TouchableOpacity, View,Modal } from "react-native";
import styled from "styled-components/native";

const ModalBackView=styled.View`
    position:absolute;
    background-color: black;
    opacity: 0.5;
    width:100%;
    height:100%;
`;
const ModalView = styled.View`
    width:320px;
    height:134px;
    background-color: #FFFFFF;
    border-radius: 10px;
    padding-top:15px;
    padding-bottom:15px;
    top:39.72%;
    left:10%;
    align-items: center;
    justify-content: space-between;
`;
    const ModalContents = styled.Text`
        font-family: Pretendard;
        font-style: normal;
        font-weight: 500;
        font-size: 16px;
        line-height: 19px;
        text-align: center;
        color:#1D1D1D;
    `;
    const ModalYesPressable = styled.Pressable`
        width:300px;
        height:40px;
        border-radius: 10px;
        background-color: #BBBBBB;
        justify-content: center;
        align-items: center;
    `;
        const ModalYesText = styled.Text`
            font-family: Pretendard;
            font-style: normal;
            font-weight: 600;
            font-size: 16px;
            line-height: 19px;
            color: #1D1D1D;
        `;


const ModalOneOptions = ({visible,setvisible,contents,yestext}) => {

    return(
        <Modal
            animationType="fade"
            transparent={true}
            visible={visible}
        >
                <ModalBackView>
                </ModalBackView>
                <ModalView>
                    <ModalContents>{contents}</ModalContents>
                    <ModalYesPressable onPress={()=>setvisible(false)}>
                        <ModalYesText>
                            {yestext}
                        </ModalYesText>
                    </ModalYesPressable>
                </ModalView>
            </Modal>
    )
}
