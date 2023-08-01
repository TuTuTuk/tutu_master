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
    width:86%;
    background-color: #FFFFFF;
    border-radius: 10px;
    padding-top:15px;
    padding-bottom:15px;
    top:39.72%;
    left:10%;
    align-items: center;
    justify-content: space-between;
`;
    const ModalTitle = styled.Text`
        font-family: Pretendard;
        font-style: normal;
        font-weight: 600;
        font-size: 18px;
        line-height: 22px;
        margin-bottom:13px;
        color:#1D1D1D;
    `;
    const ModalContents = styled.Text`
        font-family: Pretendard;
        font-style: normal;
        font-weight: 400;
        font-size: 14px;
        line-height: 17px;
        margin-bottom:14px;
        color:#1D1D1D;
        padding-left: 22px;
        padding-right: 22px;
        align-self: center;
    `;

    const ModalPressableBox = styled.View`
        flex-direction: row;
        width:100%;
        justify-content: space-between;
        padding-left: 15px;
        padding-right: 15px;
    `;
        const ModalNoPressable = styled.Pressable`
            border-radius: 5px;
            background-color: #E3E3E3;
            width:96px;
            height:39px;
            justify-content: center;
            align-items: center;

        `;
            const ModalNoText = styled.Text`
                font-family: Pretendard;
                font-style: normal;
                font-weight: 600;
                font-size: 16px;
                line-height: 19px;
                color: #1D1D1D;
            `;

        const ModalYesPressable = styled.Pressable`
            border-radius: 5px;
            background-color: #BBBBBB;
            width:184px;
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


const ModalTwoOptions = ({visible,setvisible,actOn,title,contents,yestext,visibleyes, setvisibleyes}) => {

    if(visibleyes != null){
    return(
        <Modal
            animationType="fade"
            transparent={true}
            visible={visible}
            visibleyes = {visibleyes}
        >
                <ModalBackView>
                </ModalBackView>
                <ModalView>
                    <ModalTitle>{title}</ModalTitle>
                    <ModalContents>{contents}</ModalContents>
                    <ModalPressableBox>
                        <ModalNoPressable 
                            onPress={()=>setvisible(false)}
                        >
                            <ModalNoText>
                                취소
                            </ModalNoText>
                        </ModalNoPressable>
                        <ModalYesPressable 
                            onPress={()=> {
                                console.log("!!!!actON")
                                actOn();
                                setvisible(false);
                                setvisibleyes(true);
                            }
                            }
                            >
                            <LinearGradient style={{
                                width:"100%",
                                height:"100%",
                                borderRadius: 10,
                                alignItems:"center",
                                justifyContent:"center"
                            }}
                                colors={['#0062FF', '#0A7DFF', '#1398FF']}
                                start={{x:1,y:0}} end={{x:0,y:0}}>
                                <ModalYesText>
                                    {yestext}
                                </ModalYesText>
                            </LinearGradient>
                        </ModalYesPressable>
                    </ModalPressableBox>
                </ModalView>
            </Modal>
    )}
    else{
        return(
            <Modal
                animationType="fade"
                transparent={true}
                visible={visible}
            >
                    <ModalBackView>
                    </ModalBackView>
                    <ModalView>
                        <ModalTitle>{title}</ModalTitle>
                        <ModalContents>{contents}</ModalContents>
                        <ModalPressableBox>
                            <ModalNoPressable onPress={()=>setvisible(false)}>
                                <ModalNoText>
                                    취소
                                </ModalNoText>
                            </ModalNoPressable>
                            <ModalYesPressable 
                                onPress={()=> {
                                    console.log("!!!!actON")
                                    actOn();
                                    setvisible(false);
                                }}
                            >
                                <LinearGradient style={{
                                    width:"100%",
                                    height:"100%",
                                    borderRadius: 10,
                                    alignItems:"center",
                                    justifyContent:"center"
                                }}
                                    colors={['#0062FF', '#0A7DFF', '#1398FF']}
                                    start={{x:1,y:0}} end={{x:0,y:0}}>
                                    <ModalYesText>
                                        {yestext}
                                    </ModalYesText>
                                </LinearGradient>
                            </ModalYesPressable>
                        </ModalPressableBox>
                    </ModalView>
                </Modal>
        )
    }
}

export default ModalTwoOptions;