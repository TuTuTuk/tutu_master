import React, { useState,useEffect } from "react";
import { FlatList } from "react-native";
import styled from "styled-components/native";
import Icon from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';
import auth from "@react-native-firebase/auth";
import firestore from '@react-native-firebase/firestore';
import storage from '@react-native-firebase/storage';

import BoardBox from "../../../components/BoardBox";
import TopBar_Search from "../../../components/TopBar_Search";
import ModalTwoOptions from "../../../components/ModalTwoOptions";
import SearchHistory from "../../../components/SearchHistory";

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
//-------------------------------------------------------------------
//----------------------------검색 기록-------------------------------
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
    background-color: #E3E3E3 ;
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
//-------------------------------------------------------------------
//--------------------------기록 전체 삭제----------------------------
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
//-------------------------인기 키워드-------------------------
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
        width : 80%
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

const Board_research_min = ({navigation:{navigate}})=>{
    
    const [click,setClick] = useState(false);
    const [modalVisible,setModalVisible] = useState(false);

    const navigation = useNavigation();

    const [recent, setRecent] = useState("#E3E3E3");
    const [hot, setHot] = useState("#E3E3E3");
    const [filter, setFilter] = useState("#E3E3E3");

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

    const GetValue = async() =>{

        const Ref = firestore().collection('Search')
        const data = await Ref.orderBy("searchCnt","asc").get();
        data.forEach(document=>{
            const rweetObject = {
                ...document.data(), 
                id: document.id,
            }
            setHotKwd(prev => [rweetObject, ...prev]); 
        })
    }
    const UpdateData=async()=>{
        const tempSave = await firestore().collection("users").doc(auth().currentUser.uid).collection("recent_searches").doc("arr").get();
        setRecentSave(tempSave._data);
    }
    const onRemove=() => {
        firestore().collection("users").doc(auth().currentUser.uid).collection("recent_searches").doc("arr").delete();
    }
    //-------------------------------------------------------------------
    //----------------------------검색 완료 시-----------------------------
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
        firestore().collection("users").doc(auth().currentUser.uid).collection("recent_searches").doc("arr").update({
                    arr:[...tempSave._data.arr,{
                        keyword : searchText,
                    }]
        })
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

    const [recentVisible, setRecentVisible] = useState(false);
    const [hotVisible, setHotVisible] = useState(false);
    const [filterVisible, setFilterVisible] = useState(false);
    const [searchText,setSearchText] = useState("");
    
    return(
        <>
        <ModalTwoOptions
                transparent={true}
                visible={modalVisible}
                setvisible={setModalVisible}
                title = "전체 삭제"
                contents="최근 검색 기록을 전체 삭제 하시겠습니까?"
                yestext="삭제하기"
                actOn={onRemove}
        />
        <Container>
            <HeaderBox>
                <BackView>
                    <BackBtn 
                        onPressOut={()=>navigation.goBack()}>
                        <BackIcon source={require('../../../images/Back.png')}></BackIcon>
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
                        <SearchImage source={require('../../../images/Search.png')}></SearchImage>
                    </SearchBtn>
                </BoardTextBox>
                <PlusBtn onPress={()=> setModal(true)}> 
                    <PlusImage source={require('../../../images/ViewMore.png')}></PlusImage>
                </PlusBtn>
            </HeaderBox>
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
                    recentSave != null?
                    <BigView>
                        <FlatList
                            showsVerticalScrollIndicator={false} //scroll바 가리기
                            keyExtractor={(item)=>`${item.keyword}`}//고유 키값 부여
                            data={recentSave.arr}
                            renderItem= {({item})=>
                                <SeachHistoryBox>
                                    <SearchHistoryTextBox>
                                        <SearchHistoryText>{item.keyword}</SearchHistoryText>
                                    </SearchHistoryTextBox>
                                    <DelectHistoryBox>
                                        <DelectHistoryIcon source={require('../../../images/X.png')}></DelectHistoryIcon>
                                    </DelectHistoryBox>
                                </SeachHistoryBox>
                            }
                        />
                        <AllDelect onPress={()=>setModalVisible(true)}>
                            <AllDelectText>검색기록 전체삭제</AllDelectText>
                        </AllDelect>
                    </BigView>
                    :
                    <BigView>
                        <AllDelect onPress={()=>setModalVisible(true)}>
                            <AllDelectText>검색기록 전체삭제</AllDelectText>
                        </AllDelect>
                    </BigView>
                :
                hotVisible == true?
                <AllBox>
                    <HotKeywordBox>
                        <HotNumberBox><NumberTopText>1</NumberTopText></HotNumberBox>
                        {
                            HotKwd[0] == null?
                            <KeywordTextBox><KeywordText></KeywordText></KeywordTextBox>
                            :<KeywordTextBox><KeywordText>{HotKwd[0].id}</KeywordText></KeywordTextBox>
                        }
                        <UpDownBox><UpDownIcon source={require('../../../images/UpArrow.png')}></UpDownIcon></UpDownBox>
                    </HotKeywordBox>
                    <HotKeywordBox>
                        <HotNumberBox><NumberTopText>2</NumberTopText></HotNumberBox>
                        {
                            HotKwd[1] == null?
                            <KeywordTextBox><KeywordText></KeywordText></KeywordTextBox>
                            :<KeywordTextBox><KeywordText>{HotKwd[1].id}</KeywordText></KeywordTextBox>
                        }
                        <UpDownBox><UpDownIcon source={require('../../../images/UpArrow.png')}></UpDownIcon></UpDownBox>
                    </HotKeywordBox>
                    <HotKeywordBox>
                        <HotNumberBox><NumberTopText>3</NumberTopText></HotNumberBox>
                        {
                            HotKwd[2] == null?
                            <KeywordTextBox><KeywordText></KeywordText></KeywordTextBox>
                            :<KeywordTextBox><KeywordText>{HotKwd[2].id}</KeywordText></KeywordTextBox>
                        }
                        <UpDownBox><UpDownIcon source={require('../../../images/UpArrow.png')}></UpDownIcon></UpDownBox>
                    </HotKeywordBox>
                    <HotKeywordBox>
                        <HotNumberBox><NumberText>4</NumberText></HotNumberBox>
                        {
                            HotKwd[3] == null?
                            <KeywordTextBox><KeywordText></KeywordText></KeywordTextBox>
                            :<KeywordTextBox><KeywordText>{HotKwd[3].id}</KeywordText></KeywordTextBox>
                        }
                        <UpDownBox><UpDownIcon source={require('../../../images/UpArrow.png')}></UpDownIcon></UpDownBox>
                    </HotKeywordBox>
                    <HotKeywordBox>
                        <HotNumberBox><NumberText>5</NumberText></HotNumberBox>
                        {
                            HotKwd[4] == null?
                            <KeywordTextBox><KeywordText></KeywordText></KeywordTextBox>
                            :<KeywordTextBox><KeywordText>{HotKwd[4].id}</KeywordText></KeywordTextBox>
                        }
                        <UpDownBox><UpDownIcon source={require('../../../images/UpArrow.png')}></UpDownIcon></UpDownBox>
                    </HotKeywordBox>
                    <HotKeywordBox>
                        <HotNumberBox><NumberText>6</NumberText></HotNumberBox>
                        {
                            HotKwd[5] == null?
                            <KeywordTextBox><KeywordText></KeywordText></KeywordTextBox>
                            :<KeywordTextBox><KeywordText>{HotKwd[5].id}</KeywordText></KeywordTextBox>
                        }
                        <UpDownBox><UpDownIcon source={require('../../../images/UpArrow.png')}></UpDownIcon></UpDownBox>
                    </HotKeywordBox>
                    <HotKeywordBox>
                        <HotNumberBox><NumberText>7</NumberText></HotNumberBox>
                        {
                            HotKwd[6] == null?
                            <KeywordTextBox><KeywordText></KeywordText></KeywordTextBox>
                            :<KeywordTextBox><KeywordText>{HotKwd[6].id}</KeywordText></KeywordTextBox>
                        }
                        <UpDownBox><UpDownIcon source={require('../../../images/UpArrow.png')}></UpDownIcon></UpDownBox>
                    </HotKeywordBox>
                    <HotKeywordBox>
                        <HotNumberBox><NumberText>8</NumberText></HotNumberBox>
                        {
                            HotKwd[7] == null?
                            <KeywordTextBox><KeywordText></KeywordText></KeywordTextBox>
                            :<KeywordTextBox><KeywordText>{HotKwd[7].id}</KeywordText></KeywordTextBox>
                        }
                        <UpDownBox><UpDownIcon source={require('../../../images/UpArrow.png')}></UpDownIcon></UpDownBox>
                    </HotKeywordBox>
                    <HotKeywordBox>
                        <HotNumberBox><NumberText>9</NumberText></HotNumberBox>
                        {
                            HotKwd[8] == null?
                            <KeywordTextBox><KeywordText></KeywordText></KeywordTextBox>
                            :<KeywordTextBox><KeywordText>{HotKwd[8].id}</KeywordText></KeywordTextBox>
                        }
                        <UpDownBox><UpDownIcon source={require('../../../images/UpArrow.png')}></UpDownIcon></UpDownBox>
                    </HotKeywordBox>
                    <HotKeywordBox>
                        <HotNumberBox><NumberText>10</NumberText></HotNumberBox>
                        {
                            HotKwd[9] == null?
                            <KeywordTextBox><KeywordText></KeywordText></KeywordTextBox>
                            :<KeywordTextBox><KeywordText>{HotKwd[9].id}</KeywordText></KeywordTextBox>
                        }
                        <UpDownBox><UpDownIcon source={require('../../../images/UpArrow.png')}></UpDownIcon></UpDownBox>
                    </HotKeywordBox>
                </AllBox>
                :null
            }
        </Container>
    </>
)}
export default Board_research_min;