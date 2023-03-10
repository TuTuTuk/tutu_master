import react from "react"
import { Text, View } from "react-native";
import Icon from 'react-native-vector-icons/Ionicons'
import styled from "styled-components/native";
import BlueButton from "../../components/BlueButton";


const Container = styled.View`
    width:100%;
    height:100%;
    align-items: center;
`;

const EntireView = styled.ScrollView.attrs(props=>({
    contentContainerStyle:{
        showsVerticalScrollIndicator:false,
        showHorizontalScrollIndicator:false,
        alignItems:"center",
    }
}))`
    width:86.11%;  
`;

const HeaderBar = styled.View`
    width:100%;
    flex-direction:row;
    align-items: center;
    justify-content: space-between;
    margin-top:10px;
    margin-bottom:10px;
`;
    const TitleText = styled.Text`
        font-weight: 600;
        font-size: 20px;
        line-height: 24px;
        text-align: center;
    `;

const CenterBox = styled.View`
    width:100%;
    flex-direction:column;
`;
    const ImageView = styled.View`
        border-radius: 10px;
        background-color: #E3E3E3;
        width:100%;
        height:150px;
        align-items: center;
        justify-content: center;
        margin-bottom:12.13px;
    `;
        const ImageLogo = styled.Image`
            border:1px;
            width:105px;
            height:65px;
        `;
        const ImageText = styled.Text`
            font-weight: 400;
            font-size: 10px;
            line-height: 12px;
            text-align: center;
        `;

const BottomBox = styled.View`
    width:100%;
    flex-direction:column;
`;
    const ProfileLine = styled.View`
        width:100%;
        flex-direction: row;
        align-items:center;
        justify-content: space-between;
    `;
        const ProfileBox = styled.View`
            width:90px;
            flex-direction:column;
            align-items: center;
        `;
            const ProfileImage = styled.Image`
                width:80px;
                height:80px;
                border-radius:40px;
                background-color: #E3E3E3;
                margin-bottom: 10px;
            `;  
            const ProfileName = styled.Text`
                font-weight: 600;
                font-size: 10px;
                line-height: 12px;
            `;
            const ProfileDescript = styled.Text`
                text-align:center;
                font-weight: 400;
                font-size: 10px;
                line-height: 12px;

                margin-bottom: 40px;
            `;

const Contributor= ()=>{
    return(
        <Container>
            <EntireView>
                <HeaderBar>
                    <Icon name="chevron-back-outline" size={25} color="black"/>
                    <TitleText>?????? ?????????</TitleText>
                    <Text>         </Text>
                </HeaderBar>
                <CenterBox>
                    <ImageView>
                        <ImageLogo />
                        <ImageText>TUTU??? ??????????????? ??? ?????? ????????? ????????????????????? ???????????? 2021~2023?????? ?????? ??????????????? ???????????? ?????? ????????? ??????????????? ???????????? ?????????????????? ?????????.</ImageText>
                    </ImageView>
                    <BlueButton title="???????????? ????????????" click={null} mbottom="27.87"/>
                </CenterBox>
                <BottomBox>
                    <ProfileLine>
                        <ProfileBox>
                            <ProfileImage/>
                            <ProfileName>?????????</ProfileName>
                            <ProfileDescript>??????/???????????? ??????{"\n"}?????????(19)</ProfileDescript>
                        </ProfileBox>
                        <ProfileBox>
                            <ProfileImage/>
                            <ProfileName>?????????</ProfileName>
                            <ProfileDescript>????????? ??????{"\n"}??????(17)</ProfileDescript>
                        </ProfileBox>
                        <ProfileBox>
                            <ProfileImage/>
                            <ProfileName>?????????</ProfileName>
                            <ProfileDescript>????????? ??????{"\n"}??????(20)</ProfileDescript>
                        </ProfileBox>
                    </ProfileLine>
                    <ProfileLine>
                    <ProfileBox>
                            <ProfileImage/>
                            <ProfileName>?????????</ProfileName>
                            <ProfileDescript>????????? ??????{"\n"}??????(20)</ProfileDescript>
                        </ProfileBox>
                        <ProfileBox>
                            <ProfileImage/>
                            <ProfileName>?????????</ProfileName>
                            <ProfileDescript>???????????? ??????{"\n"}?????????(18)</ProfileDescript>
                        </ProfileBox>
                        <ProfileBox>
                            <ProfileImage/>
                            <ProfileName>?????????</ProfileName>
                            <ProfileDescript>????????? ??????{"\n"}??????(19)</ProfileDescript>
                        </ProfileBox>
                    </ProfileLine>
                    <ProfileLine>
                    <ProfileBox>
                            <ProfileImage/>
                            <ProfileName>?????????</ProfileName>
                            <ProfileDescript>???????????? ??????{"\n"}?????????(22)</ProfileDescript>
                        </ProfileBox>
                        <ProfileBox>
                            <ProfileImage/>
                            <ProfileName>?????????</ProfileName>
                            <ProfileDescript>????????? ??????{"\n"}??????(19)</ProfileDescript>
                        </ProfileBox>
                        <ProfileBox>
                            <ProfileImage/>
                            <ProfileName>??? ???</ProfileName>
                            <ProfileDescript>???????????? ??????{"\n"}?????????(22)</ProfileDescript>
                        </ProfileBox>
                    </ProfileLine>
                    <ProfileLine>
                    <ProfileBox>
                            <ProfileImage/>
                            <ProfileName>?????????</ProfileName>
                            <ProfileDescript>????????????/????????? ??????{"\n"}?????????(17)</ProfileDescript>
                        </ProfileBox>
                    </ProfileLine>
                </BottomBox>
            </EntireView>
        </Container>
    )
}

export default Contributor;