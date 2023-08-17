import React, { useState,useEffect } from "react";
import { FlatList,ScrollView,Text } from "react-native";
import styled from "styled-components/native";
import { useNavigation } from '@react-navigation/native';
import auth from "@react-native-firebase/auth";
import firestore from '@react-native-firebase/firestore';
import LinearGradient from 'react-native-linear-gradient';

import ModalTwoOptions from "../../components/Modal/ModalTwoOptions";
import RecentKwd from "./Research/RecentKwd";
import HotResearch from "./Research/HotResearch";

const Container = styled.View`
    //border:1px;
    width:86%;
    height:100%;
    margin-left: 7%;
    margin-right: 7%;
    margin-top: 10px;
`;
//------------------------------------------------------
//---------------------헤더부분--------------------------
const HeaderBox = styled.View`
    //border: 1px;
    width: 100%;
    height: 45px;
    align-self: center;
    flex-direction:row;
    justify-content: space-between;
    align-items: center;
`;
    const BackView = styled.View`
        border-color: orange;
        width:30px;
        height : 40px;
        //border: 1px;
    `;
        const BackBtn = styled.TouchableOpacity`
            //border : 1px;
            width  : 100%;
            height: 100%;
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
        width : 79.03%;
        height: 100%;
        flex-direction: row;
        justify-content:space-between;
    `;
        const InputText = styled.TextInput`
            //border: 1px;
            //width:100%;
            height:100%;
            font-weight: 400;
            font-size: 16px;
            padding-left: 5px;
            padding-right: 5px;
        `;
        const SearchBtn = styled.TouchableOpacity`
            //border : 1px;
            width:25px;
            height:25px;
            margin-right: 10px;
            margin-top: 8px;
        `;
            const SearchImage = styled.Image`
                width: 100%;
                height: 100%;
            `;
    const PlusBtn = styled.TouchableOpacity`
        border-color: orange;
        width:15px;
        height: 100%;
        justify-content: center;
    `;
        const PlusImage = styled.Image`
            width: 100%;
            height: 100%;
        `;
//----------------------------------------------------------------
//---------------------------선택 버튼-----------------------------
//----------------------------------------------------------------
const SelectBox = styled.View`
    margin-top: 5.5%;
    //border : 1px;
    height: 45px;
    width: 100%;
    margin-bottom: 15px;
    flex-direction:row;
    justify-content: space-between;
    align-self: center;
`;

    const SearchText = styled.Text`
        color : white;
        font-family: 'Pretendard';
        font-style: normal;
        font-weight: 600;
        font-size: 16px;
        line-height: 19px;
        text-align: center;
    `;
<<<<<<< HEAD
//--------------------------검색필터---------------------------
=======

//--------------------------검색필터---------------------------
//-------------------------------------------------------------------
//--------------------------최근 검색어-------------------------------
//-------------------------------------------------------------------
const BigView = styled.View`
`;
const SeachHistoryBox = styled.View`
    //border  : 1px;
    margin-top: 1.37%;
    width : 100%;
    height : 30px;
    flex-direction: row;
    justify-content: space-between;
    border-radius: 10px;
    padding-left: 8px;
    background-color: #E3E3E3;
    align-self: center;
`; 
    const SearchHistoryTextBox = styled.Pressable`
        //border : 1px;
        width : 90%;
        height: 100%;
        align-items: flex-start;
        justify-content: center;
    `;
        const SearchHistoryText = styled.Text`
            font-family: 'Pretendard';
            font-style: normal;
            font-weight: 400;
            font-size: 12px;
            line-height: 14px;
            display: flex;
            align-items: center;
        `;
    const DelectHistoryBox = styled.Pressable`
        //border : 1px;
        border-color: red;
        justify-content: center;
        height: 100%;
        width : 30px;
    `;
        const DelectHistoryIcon = styled.Image`
            width: 100%;
            height: 100%;
        `;

const AllDelect = styled.TouchableOpacity`
    margin-top: 40px;
    width: 100%;
    height : 30px;
    justify-content: center;
    border-radius: 10px;
    background-color: #545454;
    align-self: center;
`;
    const AllDelectText = styled.Text`
        font-family: 'Pretendard';
        font-style: normal;
        font-weight: 600;
        font-size: 16px;
        line-height: 19px;
        align-self: center;
        color: white;
    `;

//---------------------------------------------------------------
//-------------------------인기 키워드----------------------------
//---------------------------------------------------------------
const AllBox = styled.View`
    //border: 1px;
`;
const HotKeywordBox = styled.View`
    //border  : 1px;
    margin-top: 1.37%;
    width : 100%;
    height : 30px;
    flex-direction: row;
    border-radius: 10px;
    background-color: #E3E3E3 ;
    align-self: center;
`; 
    const HotNumberBox = styled.View`
        justify-content: center;
        width: 24px;
        height: 24px;
        //border: 1px;
        margin-top: 3px;
        margin-right: 10px;
    `;
        const NumberTopText = styled.Text`
            font-family: 'Pretendard';
            font-style: normal;
            font-weight: 500;
            font-size: 16px;
            line-height: 19px;
            align-self: center;
            color: #0062FF;
        `;
        const NumberText = styled.Text`
            font-family: 'Pretendard';
            font-style: normal;
            font-weight: 500;
            font-size: 16px;
            line-height: 19px;
            align-self: center;
            color: #818181;
        `;
    const KeywordTextBox = styled.View`
        height: 30px;
        //border: 1px;
        justify-content: center;
        width : 80%;
    `;
        const KeywordText = styled.Text`
            font-family: 'Pretendard';
            font-style: normal;
            font-weight: 500;
            font-size: 12px;
            line-height: 14px;
            display: flex;
            align-items: center;
        `;
    const UpDownBox = styled.View`
        //border: 1px;
        width: 30px;
        height: 30px;
    `;    
    const UpDownIcon = styled.Image`
        width: 100%;
        height: 100%;
    `;

//---------------------------------------------------------------
//-------------------------검색 필터------------------------------
//---------------------------------------------------------------
>>>>>>> fe4a0daaaaf45e77362b387d6ce80ea9b31ac8c5
const ViewFilterBox  = styled.ScrollView`
    //border: 1px;
    margin-top: 2.45%;
`;
const FilterPartBox = styled.View`
    //border:1px;
`;
    const FilterMainTitleBox = styled.View`
        //border: 1px;
        flex-direction: row;
        justify-content: space-between;
        margin-bottom: 10px;
    `;
        const FilterTitleBox = styled.View`
        `;
            const FilterTitleText = styled.Text`
                font-family: 'Pretendard';
                font-style: normal;
                font-weight: 700;
                font-size: 14px;
                line-height: 22px;
            `;
        const DeselectBox = styled.Pressable`
            //border:1px;
        `;
            const DeselctText = styled.Text`
                font-family: 'Pretendard';
                font-style: normal;
                font-weight: 500;
                font-size: 12px;
                line-height: 22px;
                letter-spacing: -0.408px;
                text-decoration-line: underline;
                color: #818181;
            `;
    const FilterRowColBox = styled.View`
        //border: 1px;
        margin-bottom: 2.04%;
    `;
        const FilterRowBox = styled.View`
            //border: 1px;
            flex-direction: row;
            margin-bottom: 5px;
        `;
            const FilterPressable = styled.Pressable`
                border:1px;
                border-radius: 5px;
                height: 22px;
                margin-right: 5px;
                border-color: #1398FF;
            `;
            const PressMajorFilter = styled.Pressable`
                border:1px;
                border-radius: 5px;
                height: 22px;
                margin-right: 5px;
                border-color: #1398FF;
                flex-direction: row;
            `;
                const FilterDetailText = styled.Text`
                    font-family: 'Pretendard';
                    font-style: normal;
                    font-weight: 400;
                    font-size: 14px;
                    line-height: 22px;
                    letter-spacing: -0.408px;
                    color: #FFFFFF;
                    margin-left: 5px;
                    margin-right: 5px;
                `;
                const PressMajorText = styled.Text`
                    font-family: 'Pretendard';
                    font-style: normal;
                    font-weight: 400;
                    font-size: 14px;
                    line-height: 22px;
                    letter-spacing: -0.408px;
                    color: #1398FF;
                    margin-left: 5px;
                    margin-right: 5px;
                `;
    const PressFieldFilter = styled.Pressable`
        border:0.7px;
        border-radius: 5px;
        height: 22px;
        margin-right: 5px;
        border-color: #FFAB40;
        flex-direction: row;
    `;
        const PressFieldText = styled.Text`
            font-family: 'Pretendard';
            font-style: normal;
            font-weight: 400;
            font-size: 14px;
            line-height: 22px;
            letter-spacing: -0.408px;
            color: #FFAB40;
            margin-left: 5px;
            margin-right: 5px;
        `;
    const NotPressFieldFilter = styled.Pressable`
        //border:1px;
        border-radius: 5px;
        height: 22px;
        margin-right: 5px;
        background-color: #FFAB40;
    `;
    const NotPressHotFilter = styled.Pressable`
        //border:1px;
        border-radius: 5px;
        height: 22px;
        background-color: #AACD06;
        margin-right: 5px;
    `;
    const PressHotFilter = styled.Pressable`
        border:0.7px;
        border-radius: 5px;
        height: 22px;
        border-color: #AACD06;
        margin-right: 5px;
        flex-direction: row;
    `;
        const PressHotText = styled.Text`
            font-family: 'Pretendard';
            font-style: normal;
            font-weight: 400;
            font-size: 14px;
            line-height: 22px;
            letter-spacing: -0.408px;
            color: #AACD06;
            margin-left: 5px;
            margin-right: 5px;
        `;
    const AddKeywordBox = styled.View`
        height: 40px;
        justify-content: center;

    `;
        const AddKwdInputBox = styled.TextInput`
            border-radius: 10px;
            background: #E3E3E3;
            height: 40px;
            justify-content: center;
            padding-left: 10px;
            padding-right: 10px;
        `;
        const AddFilterPressable = styled.Pressable`
            //border:1px;
            border-radius: 5px;
            width: 87px;
            height: 22px;
            padding-right: 5px;
            background-color: #1398FF;
            padding-left: 5px;
            margin-right: 5px;
            flex-direction: row;
            justify-content: space-between;
            margin-right: 5px;
        `;
        const AddFilterDelete = styled.Pressable`
            width: 10px;
            height: 10px;
            //border: 1px;
            margin-top: 6px;
        `;
            const DeleteIcon = styled.Image`
                width: 100%;
                height: 100%;
            `;

const Research = ({navigation:{navigate}})=>{
    const navigation = useNavigation();
    
    const [click,setClick] = useState(false);
    const [recent, setRecent] = useState("#E3E3E3");
    const [hot, setHot] = useState("#E3E3E3");
    const [filter, setFilter] = useState("#E3E3E3");

    //최근검색어,인기키워드,검색필터 누르면 색깔 변화
    const ClickRecent=()=>{
        recent === "#E3E3E3" ? setRecent("#1398FF"):setRecent("#1398FF");
        hot === "#1398FF" ? setHot("#E3E3E3"):setHot("#E3E3E3");
        filter === "#1398FF" ? setFilter("#E3E3E3"):setFilter("#E3E3E3");
    }
    const ClickHot=()=>{
        recent === "#1398FF" ? setRecent("#E3E3E3"):setRecent("#E3E3E3");
        hot === "#E3E3E3" ? setHot("#1398FF"):setHot("#1398FF");
        filter === "#1398FF" ? setFilter("#E3E3E3"):setFilter("#E3E3E3");
    }
    const ClickFilter=()=>{
        recent === "#1398FF" ? setRecent("#E3E3E3"):setRecent("#E3E3E3");
        hot === "#1398FF" ? setHot("#E3E3E3"):setHot("#E3E3E3");
        filter === "#E3E3E3" ? setFilter("#1398FF"):setFilter("#1398FF");
    }
    //---------------------------인기검색어 부분------------------------
    const [HotKwd,setHotKwd] = useState([])
    const [saveCnt, setSaveCnt] = useState([])
    //---------------------------최근검색어 부분------------------------
    const [recentSave,setRecentSave] = useState([]);

    useEffect(()=>{
        GetValue();
        UpdateData();
    },[])

    //
    const GetValue = async() =>{
        const Ref = firestore().collection('Search')
        const data = await Ref.orderBy("searchCnt","asc").get();
        data.forEach(document=>{
            const rweetObject = {
                ...document.data(), 
                id: document.id,
            }
            setHotKwd(prev => [rweetObject, ...prev]); 
        })}

    const UpdateData=async()=>{
        const tempSave = await firestore().collection("users").doc(auth().currentUser.uid).collection("recent_searches").doc("arr").get();
        setRecentSave(tempSave._data);
        console.log(recentSave)
    }

    //---------------------------------------------------------------------
    //-----------------------------검색 누르면------------------------------
    const DoneSearch = async()=>{
        
        const save1= await firestore().collection("Search").doc(searchText).get();
        const snapshot = await firestore().collection("Search").where('keyword', '==', searchText).get();

        //검색어 횟수
        if(snapshot.empty){
            firestore().collection("Search").doc(searchText).set({
                keyword : searchText,
                searchCnt : 0
            })
        }else{
            firestore().collection("Search").doc(searchText).set({
                    keyword : searchText,
                    searchCnt : save1._data.searchCnt + 1
            })
        }
        //최근 검색어에 넣기
        const tempSave = await firestore().collection("users").doc(auth().currentUser.uid).collection("recent_searches").doc("arr").get()
        firestore().collection("users").doc(auth().currentUser.uid).collection("recent_searches").doc("arr").set({
            arr:[...tempSave._data.arr,{
                keyword : searchText,
        }]})
        UpdateData();
        navigation.navigate("Research");
    }

    const RecentBox = styled.TouchableOpacity`
        border-radius: 10px;
        height : 45px;
        width: 32.25%;
        justify-content: center;
        background-color: ${recent};
    `;
    const HotBox = styled.TouchableOpacity`
        border-radius: 10px;
        height : 45px;
        width: 32.25%;
        justify-content: center;
        background-color: ${hot};
    `;
    const FilterBox = styled.TouchableOpacity`
        border-radius: 10px;
        height : 45px;
        width: 32.25%;
        justify-content: center;
        background-color: ${filter};
    `;

    //키워드 누르기
    const [Keywords, setKeywords] = useState([])
    const [pressMajor, setPressMajor] = useState([false,false,false,false,false,false,false,false,false,false,false,false])
    const [fieldFilter, setFieldFilter] = useState([false,false,false,false,false,false,false])
    const [hotFilter, setHotFilter] = useState([false,false,false,false,false,false,false,false,false,false,])
    const [viewFilter, setViewFilter] = useState(false)

    //키워드 값 삭제하기
    const DelKwd=(KWD)=>{
        const keywordd = [...Keywords];
        let filtered = keywordd.filter((element) => element != KWD);
        setKeywords(filtered)
        console.log(Keywords)
    }

    //키워드 값 배열에 넣기
    const AddKwd=(KWD)=>{
        const keywordd = [...Keywords];
        keywordd.push(KWD);
        setKeywords(keywordd)
        console.log(Keywords)
    }

    //특정 키워드 색깔 돌려놓기 (전공)
    const ResetMajor=(major)=>{
        const save = [...pressMajor];
        switch (major){
            case "컴퓨터공학부" : 
                return save[0] = false, setPressMajor(save);
            case "게임공학과" : 
                return save[1] = false, setPressMajor(save);
            case "인공지능학과" : 
                return save[2] = false, setPressMajor(save);
            case "기계설계공학과" : 
                return save[3] = false, setPressMajor(save);
            case "메카트로닉스공학부" : 
                return save[4] = false, setPressMajor(save);
            case "전자공학부" : 
                return save[5] = false, setPressMajor(save);
            case "신소재공학과" : 
                return save[6] = false, setPressMajor(save);
            case "생명화학공학과" : 
                return save[7] = false, setPressMajor(save);
            case "나노반도체공학과" : 
                return save[8] = false, setPressMajor(save);
            case "에너지,전기공학과" : 
                return save[9] = false, setPressMajor(save);
            case "경영학부" : 
                return save[10] = false, setPressMajor(save);
            case "디자인공학부" : 
                return save[11] = false, setPressMajor(save);
        }
    }
    //특정 키워드 색깔 돌려놓기 (분야)
    const ResetField=(field)=>{
        const save1 = [...fieldFilter];
        switch (field){
            case "전공" : 
                return save1[0] = false, setFieldFilter(save1);
            case "교양" : 
                return save1[1] = false, setFieldFilter(save1);
            case "비교과" : 
                return save1[2] = false, setFieldFilter(save1);
            case "대외활동" : 
                return save1[3] = false, setFieldFilter(save1);
            case "장학금" : 
                return save1[4] = false, setFieldFilter(save1);
            case "핫플" : 
                return save1[5] = false, setFieldFilter(save1);
            case "취업진로" : 
                return save1[6] = false, setFieldFilter(save1);
        }
    }
    //특정 키워드 색깔 돌려놓기 (인기)
    const ResetHot=(hot)=>{
        const save2 = [...hotFilter];
        
        switch (hot){
            case HotKwd[0].id : 
                return save2[0] = false, setHotFilter(save2);
            case HotKwd[1].id : 
                return save2[1] = false, setHotFilter(save2);
            case HotKwd[2].id : 
                return save2[2] = false, setHotFilter(save2);
            case HotKwd[3].id : 
                return save2[3] = false, setHotFilter(save2);
            case HotKwd[4].id : 
                return save2[4] = false, setHotFilter(save2);
            case HotKwd[5].id : 
                return save2[5] = false, setHotFilter(save2);
            case HotKwd[6].id : 
                return save2[6] = false, setHotFilter(save2);
            case HotKwd[7].id : 
                return save2[7] = false, setHotFilter(save2);
            case HotKwd[8].id : 
                return save2[8] = false, setHotFilter(save2);
            case HotKwd[9].id : 
                return save2[9] = false, setHotFilter(save2);
            default: null
        }
    }   
    const filtering=()=>{
        const keywordd = [...Keywords];
        let filtered1 = keywordd.filter((element) => element != "컴퓨터공학부");
        let filtered2 = filtered1.filter((element) => element != "게임공학과");
        let filtered3 = filtered2.filter((element) => element != "인공지능학과");
        let filtered4 = filtered3.filter((element) => element != "기계설계공학과");
        let filtered5 = filtered4.filter((element) => element != "생명화학공학과");
        let filtered6 = filtered5.filter((element) => element != "나노반도체공학과");
        let filtered7 = filtered6.filter((element) => element != "에너지,전기공학과");
        let filtered8 = filtered7.filter((element) => element != "경영학부");
        let filtered9 = filtered8.filter((element) => element != "디자인공학부");
        let filtered10 = filtered9.filter((element) => element != "전자공학부");
        let filtered11 = filtered10.filter((element) => element != "메카트로닉스공학부");
        let filtered12 = filtered11.filter((element) => element != "신소재공학과");
        setKeywords(filtered12)        
    }

    const [keywordsView , setKeywordsView] = useState(false);
    const [addKeyword, setAddKeyword] = useState("");

    const [recentVisible, setRecentVisible] = useState(false);
    const [hotVisible, setHotVisible] = useState(false);
    const [filterVisible, setFilterVisible] = useState(false);
    const [searchText,setSearchText] = useState("");
    
    return(
        <>
        <Container>
            <HeaderBox>
                <BackView>
                    <BackBtn 
                        onPressOut={()=>navigation.goBack()}>
                        <BackIcon source={require('../../images/Back.png')}></BackIcon>
                    </BackBtn>
                </BackView>
                <BoardTextBox>
                    <InputText
                        placeholder={`검색`}
                        onChangeText={(text)=>{
                            setSearchText(text)
                        }}
                    ></InputText>
                    <SearchBtn
                        onPress={()=>{
                            navigation.navigate("Stack",{screen:"Board_research_min"})
                            DoneSearch();
                        }}>
                        <SearchImage source={require('../../images/Search.png')}></SearchImage>
                    </SearchBtn>
                </BoardTextBox>
                <PlusBtn onPress={()=> setModal(true)}> 
                    <PlusImage source={require('../../images/ViewMore.png')}></PlusImage>
                </PlusBtn>
            </HeaderBox>

            {
                Keywords[0] != null?
                <ViewFilterBox
                    horizontal={true}
                >
                {
                    Keywords.map((keyword)=>{
                    //console.log(majorKeyword)
                    return(
                        keyword == "전공"||keyword == "교양"||keyword == "비교과"||keyword == "대외활동"||
                        keyword == "장학금"||keyword == "핫플"||keyword == "취업진로"?
                    <PressFieldFilter>
                        <PressFieldText>{keyword}</PressFieldText>
                        <AddFilterDelete onPress={()=>{
                            DelKwd(keyword)
                            ResetField(keyword)
                        }}>
                            <DeleteIcon source={require('../../images/X.png')}></DeleteIcon>
                        </AddFilterDelete>
                    </PressFieldFilter>
                    :   
                    keyword == "컴퓨터공학부"||keyword == "게임공학과"||keyword == "인공지능학과"||keyword == "기계설계공학과"||
                    keyword == "메카트로닉스공학부"||keyword == "전자공학부"||keyword == "신소재공학부"||keyword == "생명화학공학과"||
                    keyword == "나노반도체공학과"||keyword == "에너지,전기공학과"||keyword == "경영학부"||keyword == "디자인공학부"?
                    <PressMajorFilter>
                        <PressMajorText>{keyword}</PressMajorText>
                        <AddFilterDelete onPress={()=>{
                            DelKwd(keyword)
                            ResetMajor(keyword);
                        }}>
                            <DeleteIcon source={require('../../images/X.png')}></DeleteIcon>
                        </AddFilterDelete>
                    </PressMajorFilter>
                    :
                    <PressHotFilter>
                        <PressHotText>{keyword}</PressHotText>
                        <AddFilterDelete onPress={()=>{
                            DelKwd(keyword)
                            ResetHot(keyword)
                        }}>
                            <DeleteIcon source={require('../../images/X.png')}></DeleteIcon>
                        </AddFilterDelete>
                    </PressHotFilter>
                    )})}
                </ViewFilterBox>
                :
                null
            }
            <SelectBox>
                <RecentBox onPress = {()=> {
                    ClickRecent();
                    setRecentVisible(true);
                    setHotVisible(false);
                    setFilterVisible(false);
                }}>
                    <SearchText>최근 검색어</SearchText>
                </RecentBox>
                <HotBox onPress = {()=> {
                    ClickHot();
                    setRecentVisible(false);
                    setHotVisible(true);
                    setFilterVisible(false);
                }}>
                    <SearchText>인기 키워드</SearchText>
                </HotBox>
                <FilterBox onPress = {()=> {
                    ClickFilter()
                    setRecentVisible(false);
                    setHotVisible(false);
                    setFilterVisible(true);
                }}>
                    <SearchText>검색 필터</SearchText>
                </FilterBox>
            </SelectBox>
            {
                recentVisible == true?
                <RecentKwd 
                    recentSave = {recentSave}
                    setRecentSave = {setRecentSave} 
                /> 
                :
                hotVisible == true?
                <HotResearch HotKwd = {HotKwd}/>
                //===========================================
                //검색필터 구현
                :
                filterVisible == true?
                <>
                <FilterPartBox>
                    <FilterMainTitleBox>
                        <FilterTitleBox><FilterTitleText>학과</FilterTitleText></FilterTitleBox>
                        <DeselectBox 
                            onPress={()=>{
                                setPressMajor([false,false,false,false,false,false,false,false,false,false,false,false])
                                filtering()
                            }}><DeselctText>선택해제</DeselctText>
                        </DeselectBox>
                    </FilterMainTitleBox>
                    <FilterRowColBox>
                        <FilterRowBox>
                        {
                        pressMajor[0] == true?
                        <FilterPressable onPress={()=>{
                            ResetMajor("컴퓨터공학부")
                            DelKwd("컴퓨터공학부")
                        }}>
                                    <PressMajorText>컴퓨터공학부</PressMajorText>
                                </FilterPressable>
                                :
                                <FilterPressable onPress={()=>{{
                                    const save = [...pressMajor]
                                    save[0] = true
                                    setPressMajor(save);
                                    AddKwd("컴퓨터공학부")
                                }}}>
                                    <LinearGradient style={{
                                        width:"100%",
                                        height:"100%",
                                        borderRadius: 3,
                                        alignItems:"center",
                                        justifyContent:"center",
                                    }}
                                        colors={['#0062FF', '#0A7DFF', '#1398FF']}
                                        start={{x:1,y:0}} end={{x:0,y:0}}>
                                        <FilterDetailText>컴퓨터공학부</FilterDetailText>
                                    </LinearGradient>
                                </FilterPressable>
                            }
                            {
                                pressMajor[1] == true?
                                <FilterPressable onPress={()=>{
                                    const save = [...pressMajor]
                                    save[1] = false
                                    setPressMajor(save)
                                    DelKwd("게임공학과")
                                }}>
                                    <PressMajorText>게임공학과</PressMajorText>
                                </FilterPressable>
                                :
                                <FilterPressable  onPress={()=>{
                                    const save = [...pressMajor]
                                    save[1] = true
                                    setPressMajor(save);
                                    AddKwd("게임공학과")
                                }}>
                                    <LinearGradient style={{
                                        width:"100%",
                                        height:"100%",
                                        borderRadius: 3,
                                        alignItems:"center",
                                        justifyContent:"center",
                                    }}
                                        colors={['#0062FF', '#0A7DFF', '#1398FF']}
                                        start={{x:1,y:0}} end={{x:0,y:0}}>
                                        <FilterDetailText>게임공학과</FilterDetailText>
                                    </LinearGradient>
                                </FilterPressable>
                            }
                            {
                                pressMajor[2] == true?
                                <FilterPressable onPress={()=>{
                                    const save = [...pressMajor]
                                    save[2] = false
                                    setPressMajor(save)
                                    DelKwd("인공지능학과")
                                }}>
                                    <PressMajorText>인공지능학과</PressMajorText>
                                </FilterPressable>
                                :
                                <FilterPressable  onPress={()=>{
                                    const save = [...pressMajor]
                                    save[2] = true
                                    setPressMajor(save)
                                    AddKwd("인공지능학과")
                                }}>
                                    <LinearGradient style={{
                                        width:"100%",
                                        height:"100%",
                                        borderRadius: 3,
                                        alignItems:"center",
                                        justifyContent:"center",
                                    }}
                                        colors={['#0062FF', '#0A7DFF', '#1398FF']}
                                        start={{x:1,y:0}} end={{x:0,y:0}}>
                                        <FilterDetailText>인공지능학과</FilterDetailText>
                                    </LinearGradient>
                                </FilterPressable>
                            }
                            </FilterRowBox>
                            <FilterRowBox>
                            {
                                pressMajor[3] == true?
                                <FilterPressable onPress={()=>{
                                    const save = [...pressMajor]
                                    save[3] = false
                                    setPressMajor(save)
                                    DelKwd("기계설계공학과")
                                }}>
                                    <PressMajorText>기계설계공학과</PressMajorText>
                                </FilterPressable>
                                :
                                <FilterPressable  onPress={()=>{
                                    const save = [...pressMajor]
                                    save[3] = true
                                    setPressMajor(save)
                                    AddKwd("기계설계공학과")
                                }}>
                                    <LinearGradient style={{
                                        width:"100%",
                                        height:"100%",
                                        borderRadius: 3,
                                        alignItems:"center",
                                        justifyContent:"center",
                                    }}
                                        colors={['#0062FF', '#0A7DFF', '#1398FF']}
                                        start={{x:1,y:0}} end={{x:0,y:0}}>
                                        <FilterDetailText>기계설계공학과</FilterDetailText>
                                    </LinearGradient>
                                </FilterPressable>
                            }
                            {
                                pressMajor[4] == true?
                                <FilterPressable onPress={()=>{
                                    const save = [...pressMajor]
                                    save[4] = false
                                    setPressMajor(save)
                                    DelKwd("메카트로닉스공학부")
                                }}>
                                    <PressMajorText>메카트로닉스공학부</PressMajorText>
                                </FilterPressable>
                                :
                                <FilterPressable  onPress={()=>{
                                    const save = [...pressMajor]
                                    save[4] = true
                                    setPressMajor(save)
                                    AddKwd("메카트로닉스공학부")
                                }}>
                                    <LinearGradient style={{
                                        width:"100%",
                                        height:"100%",
                                        borderRadius: 3,
                                        alignItems:"center",
                                        justifyContent:"center",
                                    }}
                                        colors={['#0062FF', '#0A7DFF', '#1398FF']}
                                        start={{x:1,y:0}} end={{x:0,y:0}}>
                                        <FilterDetailText>메카트로닉스공학부</FilterDetailText>
                                    </LinearGradient>
                                </FilterPressable>
                            }
                            {
                                pressMajor[5] == true?
                                <FilterPressable onPress={()=>{
                                    const save = [...pressMajor]
                                    save[5] = false
                                    setPressMajor(save)
                                    DelKwd("전자공학부")
                                }}>
                                    <PressMajorText>전자공학부</PressMajorText>
                                </FilterPressable>
                                :
                                <FilterPressable  onPress={()=>{
                                    const save = [...pressMajor]
                                    save[5] = true
                                    setPressMajor(save)
                                    AddKwd("전자공학부")
                                }}>
                                    <LinearGradient style={{
                                        width:"100%",
                                        height:"100%",
                                        borderRadius: 3,
                                        alignItems:"center",
                                        justifyContent:"center",
                                    }}
                                        colors={['#0062FF', '#0A7DFF', '#1398FF']}
                                        start={{x:1,y:0}} end={{x:0,y:0}}>
                                        <FilterDetailText>전자공학부</FilterDetailText>
                                    </LinearGradient>
                                </FilterPressable>
                            }
                            </FilterRowBox>
                            <FilterRowBox>
                            {
                                pressMajor[6] == true?
                                <FilterPressable onPress={()=>{
                                    const save = [...pressMajor]
                                    save[6] = false
                                    setPressMajor(save)
                                    DelKwd("신소재공학과")
                                }}>
                                    <PressMajorText>신소재공학과</PressMajorText>
                                </FilterPressable>
                                :
                                <FilterPressable  onPress={()=>{
                                    const save = [...pressMajor]
                                    save[6] = true
                                    setPressMajor(save)
                                    AddKwd("신소재공학과")
                                }}>
                                    <LinearGradient style={{
                                        width:"100%",
                                        height:"100%",
                                        borderRadius: 3,
                                        alignItems:"center",
                                        justifyContent:"center",
                                    }}
                                        colors={['#0062FF', '#0A7DFF', '#1398FF']}
                                        start={{x:1,y:0}} end={{x:0,y:0}}>
                                        <FilterDetailText>신소재공학과</FilterDetailText>
                                    </LinearGradient>
                                </FilterPressable>
                            }
                            {
                                pressMajor[7] == true?
                                <FilterPressable onPress={()=>{
                                    const save = [...pressMajor]
                                    save[7] = false
                                    setPressMajor(save)
                                    DelKwd("생명화학공학과")
                                }}>
                                    <PressMajorText>생명화학공학과</PressMajorText>
                                </FilterPressable>
                                :
                                <FilterPressable  onPress={()=>{
                                    const save = [...pressMajor]
                                    save[7] = true
                                    setPressMajor(save)
                                    AddKwd("생명화학공학과")
                                }}>
                                    <LinearGradient style={{
                                        width:"100%",
                                        height:"100%",
                                        borderRadius: 3,
                                        alignItems:"center",
                                        justifyContent:"center",
                                    }}
                                        colors={['#0062FF', '#0A7DFF', '#1398FF']}
                                        start={{x:1,y:0}} end={{x:0,y:0}}>
                                        <FilterDetailText>생명화학공학과</FilterDetailText>
                                    </LinearGradient>
                                </FilterPressable>
                            }
                            {
                                pressMajor[8] == true?
                                <FilterPressable onPress={()=>{
                                    const save = [...pressMajor]
                                    save[8] = false
                                    setPressMajor(save)
                                    DelKwd("나노반도체공학과")
                                }}>
                                    <PressMajorText>나노반도체공학과</PressMajorText>
                                </FilterPressable>
                                :
                                <FilterPressable  onPress={()=>{
                                    const save = [...pressMajor]
                                    save[8] = true
                                    setPressMajor(save)
                                    AddKwd("나노반도체공학과")
                                }}>
                                    <LinearGradient style={{
                                        width:"100%",
                                        height:"100%",
                                        borderRadius: 3,
                                        alignItems:"center",
                                        justifyContent:"center",
                                    }}
                                        colors={['#0062FF', '#0A7DFF', '#1398FF']}
                                        start={{x:1,y:0}} end={{x:0,y:0}}>
                                        <FilterDetailText>나노반도체공학과</FilterDetailText>
                                    </LinearGradient>
                                </FilterPressable>
                            }
                            </FilterRowBox>
                            <FilterRowBox>
                            {
                                pressMajor[9] == true?
                                <FilterPressable onPress={()=>{
                                    const save = [...pressMajor]
                                    save[9] = false
                                    setPressMajor(save)
                                    DelKwd("에너지,전기공학과")
                                }}>
                                    <PressMajorText>에너지,전기공학과</PressMajorText>
                                </FilterPressable>
                                :
                                <FilterPressable  onPress={()=>{
                                    const save = [...pressMajor]
                                    save[9] = true
                                    setPressMajor(save)
                                    AddKwd("에너지,전기공학과")
                                }}>
                                    <LinearGradient style={{
                                        width:"100%",
                                        height:"100%",
                                        borderRadius: 3,
                                        alignItems:"center",
                                        justifyContent:"center",
                                    }}
                                        colors={['#0062FF', '#0A7DFF', '#1398FF']}
                                        start={{x:1,y:0}} end={{x:0,y:0}}>
                                        <FilterDetailText>에너지,전기공학과</FilterDetailText>
                                    </LinearGradient>
                                </FilterPressable>
                            }
                            {
                                pressMajor[10] == true?
                                <FilterPressable onPress={()=>{
                                    const save = [...pressMajor]
                                    save[10] = false
                                    setPressMajor(save)
                                    DelKwd("경영학부")
                                }}>
                                    <PressMajorText>경영학부</PressMajorText>
                                </FilterPressable>
                                :
                                <FilterPressable  onPress={()=>{
                                    const save = [...pressMajor]
                                    save[10] = true
                                    setPressMajor(save)
                                    AddKwd("경영학부")
                                }}>
                                    <LinearGradient style={{
                                        width:"100%",
                                        height:"100%",
                                        borderRadius: 3,
                                        alignItems:"center",
                                        justifyContent:"center",
                                    }}
                                        colors={['#0062FF', '#0A7DFF', '#1398FF']}
                                        start={{x:1,y:0}} end={{x:0,y:0}}>
                                        <FilterDetailText>경영학부</FilterDetailText>
                                    </LinearGradient>
                                </FilterPressable>
                            }
                            {
                                pressMajor[11] == true?
                                <FilterPressable onPress={()=>{
                                    const save = [...pressMajor]
                                    save[11] = false
                                    setPressMajor(save)
                                    DelKwd("디자인공학부")
                                }}>
                                    <PressMajorText>디자인공학부</PressMajorText>
                                </FilterPressable>
                                :
                                <FilterPressable  onPress={()=>{
                                    const save = [...pressMajor]
                                    save[11] = true
                                    setPressMajor(save)
                                    AddKwd("디자인공학부")
                                }}>
                                    <LinearGradient style={{
                                        width:"100%",
                                        height:"100%",
                                        borderRadius: 3,
                                        alignItems:"center",
                                        justifyContent:"center",
                                    }}
                                        colors={['#0062FF', '#0A7DFF', '#1398FF']}
                                        start={{x:1,y:0}} end={{x:0,y:0}}>
                                        <FilterDetailText>디자인공학부</FilterDetailText>
                                    </LinearGradient>
                                </FilterPressable>
                            }
                            </FilterRowBox>
                        </FilterRowColBox>
                </FilterPartBox>
                <FilterPartBox>
                        <FilterMainTitleBox>
                            <FilterTitleBox>
                                <FilterTitleText>분야</FilterTitleText>
                            </FilterTitleBox>
                            <DeselectBox onPress={()=>{
                                setFieldFilter([false,false,false,false,false,false,false])
                                const keywordd = [...Keywords];
                                let filtered1 = keywordd.filter((element) => element != "전공");
                                let filtered2 = filtered1.filter((element) => element != "교양");
                                let filtered3 = filtered2.filter((element) => element != "비교과");
                                let filtered4 = filtered3.filter((element) => element != "대외활동");
                                let filtered5 = filtered4.filter((element) => element != "장학금");
                                let filtered6 = filtered5.filter((element) => element != "핫플");
                                let filtered7 = filtered6.filter((element) => element != "취업진로");

                                setKeywords(filtered7)
                            }}>
                                <DeselctText>선택해제</DeselctText>
                            </DeselectBox>
                        </FilterMainTitleBox>
                        <FilterRowColBox>
                            <FilterRowBox>
                            {
                                fieldFilter[0] == true?
                                <PressFieldFilter onPress={()=>{
                                    const save1 = [...fieldFilter]
                                    save1[0] = false
                                    setFieldFilter(save1)
                                    DelKwd("전공")
                                }}>
                                    <PressFieldText>전공</PressFieldText>
                                </PressFieldFilter>
                                :
                                <NotPressFieldFilter onPress={()=>{
                                    const save1 = [...fieldFilter]
                                    save1[0] = true
                                    setFieldFilter(save1)
                                    AddKwd("전공")
                                }}>
                                    <FilterDetailText>전공</FilterDetailText>
                                </NotPressFieldFilter>
                            }
                            {
                                fieldFilter[1] == true?
                                <PressFieldFilter onPress={()=>{
                                    const save1 = [...fieldFilter]
                                    save1[1] = false;
                                    setFieldFilter(save1);
                                    DelKwd("교양");
                                }}>
                                    <PressFieldText>교양</PressFieldText>
                                </PressFieldFilter>
                                :
                                <NotPressFieldFilter onPress={()=>{
                                    const save1 = [...fieldFilter]
                                    save1[1] = true;
                                    setFieldFilter(save1);
                                    AddKwd("교양");
                                }}>
                                    <FilterDetailText>교양</FilterDetailText>
                                </NotPressFieldFilter>
                            }
                            {
                                fieldFilter[2] == true?
                                <PressFieldFilter onPress={()=>{
                                    const save1 = [...fieldFilter]
                                    save1[2] = false
                                    setFieldFilter(save1)
                                    DelKwd("비교과");
                                }}>
                                    <PressFieldText>비교과</PressFieldText>
                                </PressFieldFilter>
                                :
                                <NotPressFieldFilter onPress={()=>{
                                    const save1 = [...fieldFilter]
                                    save1[2] = true
                                    setFieldFilter(save1)
                                    AddKwd("비교과")
                                }}>
                                    <FilterDetailText>비교과</FilterDetailText>
                                </NotPressFieldFilter>
                            }
                            {
                                fieldFilter[3] == true?
                                <PressFieldFilter onPress={()=>{
                                    const save1 = [...fieldFilter]
                                    save1[3] = false
                                    setFieldFilter(save1)
                                    DelKwd("대외활동")
                                }}>
                                    <PressFieldText>대외활동</PressFieldText>
                                </PressFieldFilter>
                                :
                                <NotPressFieldFilter onPress={()=>{
                                    const save1 = [...fieldFilter]
                                    save1[3] = true
                                    setFieldFilter(save1)
                                    AddKwd("대외활동")
                                }}>
                                    <FilterDetailText>대외활동</FilterDetailText>
                                </NotPressFieldFilter>
                            }
                            </FilterRowBox>
                            <FilterRowBox>
                            {
                                fieldFilter[4] == true?
                                <PressFieldFilter onPress={()=>{
                                    const save1 = [...fieldFilter]
                                    save1[4] = false
                                    setFieldFilter(save1)
                                    DelKwd("장학금")
                                }}>
                                    <PressFieldText>장학금</PressFieldText>
                                </PressFieldFilter>
                                :
                                <NotPressFieldFilter onPress={()=>{
                                    const save1 = [...fieldFilter]
                                    save1[4] = true
                                    setFieldFilter(save1)
                                    AddKwd("장학금")
                                }}>
                                    <FilterDetailText>장학금</FilterDetailText>
                                </NotPressFieldFilter>
                            }
                            {
                                fieldFilter[5] == true?
                                <PressFieldFilter onPress={()=>{
                                    const save1 = [...fieldFilter]
                                    save1[5] = false
                                    setFieldFilter(save1)
                                    DelKwd("핫플")
                                }}>
                                    <PressFieldText>핫플</PressFieldText>
                                </PressFieldFilter>
                                :
                                <NotPressFieldFilter onPress={()=>{
                                    const save1 = [...fieldFilter]
                                    save1[5] = true
                                    setFieldFilter(save1)
                                    AddKwd("핫플")
                                }}>
                                    <FilterDetailText>핫플</FilterDetailText>
                                </NotPressFieldFilter>
                            }
                            {
                                fieldFilter[6] == true?
                                <PressFieldFilter onPress={()=>{
                                    const save1 = [...fieldFilter]
                                    save1[6] = false
                                    setFieldFilter(save1)
                                    DelKwd("취업진로")
                                }}>
                                    <PressFieldText>취업진로</PressFieldText>
                                </PressFieldFilter>
                                :
                                <NotPressFieldFilter onPress={()=>{
                                    const save1 = [...fieldFilter]
                                    save1[6] = true
                                    setFieldFilter(save1)
                                    AddKwd("취업진로")
                                }}>
                                    <FilterDetailText>취업진로</FilterDetailText>
                                </NotPressFieldFilter>
                            }
                            </FilterRowBox>
                        </FilterRowColBox>
                </FilterPartBox>
                <FilterPartBox>
                        <FilterMainTitleBox>
                            <FilterTitleBox>
                                <FilterTitleText>인기</FilterTitleText>
                            </FilterTitleBox>
                            <DeselectBox onPress={()=>{
                                setHotFilter([false,false,false,false,false,false,false,false,false,false,false,false])
                                const hotkeyword = [...Keywords];
                                let filtered1 = hotkeyword.filter((element) => element != HotKwd[0].id);
                                let filtered2 = filtered1.filter((element) => element != HotKwd[1].id);
                                let filtered3 = filtered2.filter((element) => element != HotKwd[2].id);
                                let filtered4 = filtered3.filter((element) => element != HotKwd[3].id);
                                let filtered5 = filtered4.filter((element) => element != HotKwd[4].id);
                                let filtered6 = filtered5.filter((element) => element != HotKwd[5].id);
                                let filtered7 = filtered6.filter((element) => element != HotKwd[6].id);
                                let filtered8 = filtered7.filter((element) => element != HotKwd[7].id);
                                let filtered9 = filtered8.filter((element) => element != HotKwd[8].id);
                                let filtered10 = filtered9.filter((element) => element != HotKwd[9].id);
                                setKeywords(filtered10)
                            }}>
                                <DeselctText>선택해제</DeselctText>
                            </DeselectBox>
                        </FilterMainTitleBox>
                        <FilterRowColBox>
                            <FilterRowBox>
                            {
                                HotKwd[0] == null? //키워드 값을 얻기 전 null값일 때
                                <NotPressHotFilter><FilterDetailText></FilterDetailText></NotPressHotFilter>
                                : // 인기 키워드 값 가져옴
                                hotFilter[0] == true? //특정 키워드 값을 눌렀을 때
                                    <PressHotFilter onPress={()=>{
                                        const save = [...hotFilter]
                                        save[0] = false
                                        setHotFilter(save)
                                        DelKwd(HotKwd[0].id)
                                        setHotFilter
                                    }}>
                                        <PressHotText>{HotKwd[0].id}</PressHotText>
                                    </PressHotFilter>
                                    : // 누른 키워드 값을 다시 눌렀을 때
                                    <NotPressHotFilter onPress={()=>{
                                        const save = [...hotFilter]
                                        save[0] = true
                                        setHotFilter(save)
                                        AddKwd(HotKwd[0].id)
                                    }}>
                                        <FilterDetailText>{HotKwd[0].id}</FilterDetailText>
                                    </NotPressHotFilter>
                            }
                            {
                                HotKwd[1] == null? //키워드 값을 얻기 전 null값일 때
                                <NotPressHotFilter><FilterDetailText></FilterDetailText></NotPressHotFilter>
                                : // 인기 키워드 값 가져옴
                                hotFilter[1] == true? //특정 키워드 값을 눌렀을 때
                                    <PressHotFilter onPress={()=>{
                                        const save = [...hotFilter]
                                        save[1] = false
                                        setHotFilter(save)
                                        DelKwd(HotKwd[1].id)
                                    }}>
                                        <PressHotText>{HotKwd[1].id}</PressHotText>
                                    </PressHotFilter>
                                    : // 누른 키워드 값을 다시 눌렀을 때
                                    <NotPressHotFilter onPress={()=>{
                                        const save = [...hotFilter]
                                        save[1] = true
                                        setHotFilter(save)
                                        AddKwd(HotKwd[1].id)
                                    }}>
                                        <FilterDetailText>{HotKwd[1].id}</FilterDetailText>
                                    </NotPressHotFilter>
                            }
                            {
                                HotKwd[2] == null? //키워드 값을 얻기 전 null값일 때
                                <NotPressHotFilter><FilterDetailText></FilterDetailText></NotPressHotFilter>
                                : // 인기 키워드 값 가져옴
                                hotFilter[2] == true? //특정 키워드 값을 눌렀을 때
                                    <PressHotFilter onPress={()=>{
                                        const save = [...hotFilter]
                                        save[2] = false
                                        setHotFilter(save)
                                        DelKwd(HotKwd[2].id)
                                        setHotFilter
                                    }}>
                                        <PressHotText>{HotKwd[1].id}</PressHotText>
                                    </PressHotFilter>
                                    : // 누른 키워드 값을 다시 눌렀을 때
                                    <NotPressHotFilter onPress={()=>{
                                        const save = [...hotFilter]
                                        save[2] = true
                                        setHotFilter(save)
                                        AddKwd(HotKwd[2].id)
                                    }}>
                                        <FilterDetailText>{HotKwd[2].id}</FilterDetailText>
                                    </NotPressHotFilter>
                            }
                            </FilterRowBox>
                            <FilterRowBox>
                            {
                                HotKwd[3] == null? //키워드 값을 얻기 전 null값일 때
                                <NotPressHotFilter><FilterDetailText></FilterDetailText></NotPressHotFilter>
                                : // 인기 키워드 값 가져옴
                                hotFilter[3] == true? //특정 키워드 값을 눌렀을 때
                                    <PressHotFilter onPress={()=>{
                                        const save = [...hotFilter]
                                        save[3] = false
                                        setHotFilter(save)
                                        DelKwd(HotKwd[3].id)
                                        setHotFilter
                                    }}>
                                        <PressHotText>{HotKwd[3].id}</PressHotText>
                                    </PressHotFilter>
                                    : // 누른 키워드 값을 다시 눌렀을 때
                                    <NotPressHotFilter onPress={()=>{
                                        const save = [...hotFilter]
                                        save[3] = true
                                        setHotFilter(save)
                                        AddKwd(HotKwd[3].id)
                                    }}>
                                        <FilterDetailText>{HotKwd[3].id}</FilterDetailText>
                                    </NotPressHotFilter>
                            }
                            {
                                HotKwd[4] == null? //키워드 값을 얻기 전 null값일 때
                                <NotPressHotFilter><FilterDetailText></FilterDetailText></NotPressHotFilter>
                                : // 인기 키워드 값 가져옴
                                hotFilter[4] == true? //특정 키워드 값을 눌렀을 때
                                    <PressHotFilter onPress={()=>{
                                        const save = [...hotFilter]
                                        save[4] = false
                                        setHotFilter(save)
                                        DelKwd(HotKwd[4].id)
                                        setHotFilter
                                    }}>
                                        <PressHotText>{HotKwd[4].id}</PressHotText>
                                    </PressHotFilter>
                                    : // 누른 키워드 값을 다시 눌렀을 때
                                    <NotPressHotFilter onPress={()=>{
                                        const save = [...hotFilter]
                                        save[4] = true
                                        setHotFilter(save)
                                        AddKwd(HotKwd[4].id)
                                    }}>
                                        <FilterDetailText>{HotKwd[4].id}</FilterDetailText>
                                    </NotPressHotFilter>
                            }
                            {
                                HotKwd[5] == null? //키워드 값을 얻기 전 null값일 때
                                <NotPressHotFilter><FilterDetailText></FilterDetailText></NotPressHotFilter>
                                : // 인기 키워드 값 가져옴
                                hotFilter[5] == true? //특정 키워드 값을 눌렀을 때
                                    <PressHotFilter onPress={()=>{
                                        const save = [...hotFilter]
                                        save[5] = false
                                        setHotFilter(save)
                                        DelKwd(HotKwd[5].id)
                                        setHotFilter
                                    }}>
                                        <PressHotText>{HotKwd[5].id}</PressHotText>
                                    </PressHotFilter>
                                    : // 누른 키워드 값을 다시 눌렀을 때
                                    <NotPressHotFilter onPress={()=>{
                                        const save = [...hotFilter]
                                        save[5] = true
                                        setHotFilter(save)
                                        AddKwd(HotKwd[5].id)
                                    }}>
                                        <FilterDetailText>{HotKwd[5].id}</FilterDetailText>
                                    </NotPressHotFilter>
                            }
                            </FilterRowBox>
                            <FilterRowBox>
                            {
                                HotKwd[6] == null? //키워드 값을 얻기 전 null값일 때
                                <NotPressHotFilter><FilterDetailText></FilterDetailText></NotPressHotFilter>
                                : // 인기 키워드 값 가져옴
                                hotFilter[6] == true? //특정 키워드 값을 눌렀을 때
                                    <PressHotFilter onPress={()=>{
                                        const save = [...hotFilter]
                                        save[6] = false
                                        setHotFilter(save)
                                        DelKwd(HotKwd[6].id)
                                        setHotFilter
                                    }}>
                                        <PressHotText>{HotKwd[6].id}</PressHotText>
                                    </PressHotFilter>
                                    : // 누른 키워드 값을 다시 눌렀을 때
                                    <NotPressHotFilter onPress={()=>{
                                        const save = [...hotFilter]
                                        save[6] = true
                                        setHotFilter(save)
                                        AddKwd(HotKwd[6].id)
                                    }}>
                                        <FilterDetailText>{HotKwd[6].id}</FilterDetailText>
                                    </NotPressHotFilter>
                            }
                            {
                                HotKwd[7] == null? //키워드 값을 얻기 전 null값일 때
                                <NotPressHotFilter><FilterDetailText></FilterDetailText></NotPressHotFilter>
                                : // 인기 키워드 값 가져옴
                                hotFilter[7] == true? //특정 키워드 값을 눌렀을 때
                                    <PressHotFilter onPress={()=>{
                                        const save = [...hotFilter]
                                        save[7] = false
                                        setHotFilter(save)
                                        DelKwd(HotKwd[7].id)
                                        setHotFilter
                                    }}>
                                        <PressHotText>{HotKwd[7].id}</PressHotText>
                                    </PressHotFilter>
                                    : // 누른 키워드 값을 다시 눌렀을 때
                                    <NotPressHotFilter onPress={()=>{
                                        const save = [...hotFilter]
                                        save[7] = true
                                        setHotFilter(save)
                                        AddKwd(HotKwd[7].id)
                                    }}>
                                        <FilterDetailText>{HotKwd[7].id}</FilterDetailText>
                                    </NotPressHotFilter>
                            }
                            {
                                HotKwd[8] == null? //키워드 값을 얻기 전 null값일 때
                                <NotPressHotFilter><FilterDetailText></FilterDetailText></NotPressHotFilter>
                                : // 인기 키워드 값 가져옴
                                hotFilter[8] == true? //특정 키워드 값을 눌렀을 때
                                    <PressHotFilter onPress={()=>{
                                        const save = [...hotFilter]
                                        save[8] = false
                                        setHotFilter(save)
                                        DelKwd(HotKwd[8].id)
                                        setHotFilter
                                    }}>
                                        <PressHotText>{HotKwd[8].id}</PressHotText>
                                    </PressHotFilter>
                                    : // 누른 키워드 값을 다시 눌렀을 때
                                    <NotPressHotFilter onPress={()=>{
                                        const save = [...hotFilter]
                                        save[8] = true
                                        setHotFilter(save)
                                        AddKwd(HotKwd[8].id)
                                    }}>
                                        <FilterDetailText>{HotKwd[8].id}</FilterDetailText>
                                    </NotPressHotFilter>
                            }
                            </FilterRowBox>
                            <FilterRowBox>
                            {
                                HotKwd[9] == null? //키워드 값을 얻기 전 null값일 때
                                <NotPressHotFilter><FilterDetailText></FilterDetailText></NotPressHotFilter>
                                : // 인기 키워드 값 가져옴
                                hotFilter[9] == true? //특정 키워드 값을 눌렀을 때
                                    <PressHotFilter onPress={()=>{
                                        const save = [...hotFilter]
                                        save[9] = false
                                        setHotFilter(save)
                                        DelKwd(HotKwd[9].id)
                                    }}>
                                        <PressHotText>{HotKwd[9].id}</PressHotText>
                                    </PressHotFilter>
                                    : // 누른 키워드 값을 다시 눌렀을 때
                                    <NotPressHotFilter onPress={()=>{
                                        const save = [...hotFilter]
                                        save[9] = true
                                        setHotFilter(save)
                                        AddKwd(HotKwd[9].id)
                                    }}>
                                        <FilterDetailText>{HotKwd[9].id}</FilterDetailText>
                                    </NotPressHotFilter>
                            }
                            </FilterRowBox>
                        </FilterRowColBox>
                </FilterPartBox>
                <FilterPartBox>
                    <FilterMainTitleBox>
                        <FilterTitleBox>
                            <FilterTitleText>키워드 추가</FilterTitleText>
                        </FilterTitleBox>
                    </FilterMainTitleBox>
                    <FilterRowColBox>
                        <AddKeywordBox>
                            {
                                keywordsView == false?
                                <AddKwdInputBox
                                    placeholder={"이곳을 눌러 키워드를 입력하세요."}
                                    onChangeText={(text)=>{
                                        setAddKeyword(text)
                                    }}
                                ></AddKwdInputBox>
                                :
                                <AddKwdInputBox>
                                    <NotPressHotFilter>
                                        {
                                            addKeyword == null?
                                            <FilterDetailText>없음</FilterDetailText>
                                            :
                                            <FilterDetailText>{addKeyword}</FilterDetailText>    
                                        }
                                    </NotPressHotFilter>

                                </AddKwdInputBox>

                            }
                        </AddKeywordBox>
                    </FilterRowColBox>
                </FilterPartBox>
                </>
                :
                null
            }
        </Container>
    </>
)}
export default Research;