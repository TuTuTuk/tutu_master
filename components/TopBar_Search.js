import React from "react";
import styled from "styled-components/native";
import Icon from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';

const Container = styled.ScrollView.attrs(()=>({
    contentContainerStyle:{
        showVerticalScrollIndicator:false,
    }
}))`
    flex:1;
    margin-top: 10px;
    margin-bottom: 10px;
`;

const HeaderBox = styled.View`
    //border: 1px;
    flex:1;
    width: 86%;
    height: 5.4%;
    align-self: center;
    margin-left: 7px;
    margin-right: 7px;

    flex-direction:row;
    justify-content: space-between;
    align-items: center;
`;
    const BackView = styled.View`
        border-color: orange;
        width:10%;
    `;
        const BackBtn = styled.TouchableOpacity`
            //border : 1px;
            width  : 100%;
            height : 40px;
            justify-content: center;
        `;
            const BackIcon = styled.Image`
                width: 100%;
                height: 100%;
            `;
    const BoardTextBox = styled.View`
        border-color: black;
        border-radius: 3px;
        background-color: #E3E3E3;
        width : 76%;
        height: 100%;
        flex-direction: row;
        justify-content:space-between;
    `;
        const BoardText = styled.Text`
            margin-top: 10px;
            margin-left: 15px;
            font-size: 16px;
            color : black;
            font-weight: 600;
        `;
        const SearchBtn = styled.TouchableOpacity`
            //border : 1px;
            width:30px;
            height:30px;
            margin-right: 10px;
            margin-top: 5px;
        `;
            const SearchImage = styled.Image`
                width: 100%;
                height: 100%;
            `;
    const PlusBtn = styled.TouchableOpacity`
        border-color: orange;
        width:5%;
        height: 100%;
        justify-content: center;
    `;
        const PlusImage = styled.Image`
            width: 100%;
            height: 100%;
        `;

const TopBar_Search=({title})=>{
    const navigation = useNavigation();
    return(
        <Container>
            <HeaderBox>
            <BackView>
                <BackBtn 
                    onPressOut={()=>navigation.goBack()}>
                    <BackIcon source={require('../images/Back.png')}></BackIcon>
                </BackBtn>
            </BackView>
            <BoardTextBox>
                <BoardText>{title}</BoardText>   
                <SearchBtn
                    onPress={()=>navigation.navigate("Stack",{screen:"Board_research_min"})}>
                    <SearchImage source={require('../images/Search.png')}></SearchImage>
                </SearchBtn>
            </BoardTextBox>
            <PlusBtn> 
                <PlusImage source={require('../images/ViewMore.png')}></PlusImage>
            </PlusBtn>
        </HeaderBox>
        </Container>
    )
}

export default TopBar_Search;