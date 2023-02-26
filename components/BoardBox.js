import react from "react";
import styled from "styled-components/native";
import { useNavigation } from '@react-navigation/native';
import LinearGradient from 'react-native-linear-gradient';
import { Dimensions } from "react-native";

const PopularBox = styled.View`
    width:100%;
    height:${({hei})=>hei*0.125}px;
    border-radius:${({hei})=>hei*0.0125}px;
    margin-bottom:${({hei})=>hei*0.0125}px;
    padding-left:4.8%;
    padding-right:4.8%;
    padding-top:${({hei})=>hei*0.0187}px;
    padding-bottom:${({hei})=>hei*0.0187}px;
    flex-direction:row;
    background-color: #E3E3E3;
`;

const PopularBoxLeft = styled.View`
    width:83.9%;
    height:100%;
    justify-content: center;
`;
    const PopularBoxTitle = styled.Text`
        font-weight: 500;
        font-size: 14px;
        line-height: 17px;
        margin-bottom:4.19px;
        color: #1D1D1D;
    `;
    const PopularBoxContent = styled.Text`
        font-weight: 400;
        font-size: 12px;
        line-height: 14px;
        margin-bottom:7.18px;
        color: #1D1D1D;
    `;
    const PopularBoxKeywordBox = styled.View`
        width:100%;
        height:15px;
        flex-direction: row;
    `;
        const PopularBoxKeyword = styled.Text`
            font-weight: 600;
            font-size: 8px;
            color:#FFFFFF;
            text-align:center;
        `;
const PopularBoxRight = styled.View`    
    width:16.1%;
    height:100%;
    align-items: center;
    justify-content: center;
`;
    const PopularBoxImage = styled.Image`
        border-radius:5px;
        width:${({hei})=>hei*0.0625}px;
        height:${({hei})=>hei*0.0625}px;
        background: #BBBBBB;
    `;
    const PopularBoxComment = styled.View`
        width:100%;
        flex-direction: row;
        justify-content: space-between;
    `;
        const CommentImage = styled.Image``;
        const GoodImage = styled.Image``;


const BoardBox = ({title,contents}) => {
    const navigation = useNavigation();
    const HEIGHT = Dimensions.get('window').height;
    console.log(HEIGHT);
    return(
        <PopularBox hei={HEIGHT}>
                    <PopularBoxLeft>
                        <PopularBoxTitle>{title}</PopularBoxTitle>
                        <PopularBoxContent>{contents}</PopularBoxContent>
                        <PopularBoxKeywordBox>
                            <LinearGradient style={{
                                width:40,
                                height:15,
                                marginRight:5,
                                borderRadius: 5,
                                backgroundColor:'#0062FF'
                            }}
                                colors={['#0062FF', '#0A7DFF', '#1398FF']}
                                start={{x:1,y:0}} end={{x:0,y:0}}
                            >
                                <PopularBoxKeyword>#키워드</PopularBoxKeyword>                        
                            </LinearGradient>
                            <LinearGradient style={{
                                width:40,
                                height:15,
                                marginRight:5,
                                borderRadius: 5,
                                backgroundColor:'#0062FF'
                            }}
                                colors={['#0062FF', '#0A7DFF', '#1398FF']}
                                start={{x:1,y:0}} end={{x:0,y:0}}
                            >
                                <PopularBoxKeyword>#키워드</PopularBoxKeyword>                        
                            </LinearGradient>
                            <LinearGradient style={{
                                width:40,
                                height:15,
                                marginRight:5,
                                borderRadius: 5,
                                backgroundColor:'#0062FF'
                            }}
                                colors={['#0062FF', '#0A7DFF', '#1398FF']}
                                start={{x:1,y:0}} end={{x:0,y:0}}
                            >
                                <PopularBoxKeyword>#키워드</PopularBoxKeyword>                        
                            </LinearGradient>
                        </PopularBoxKeywordBox>
                    </PopularBoxLeft>
                    <PopularBoxRight>
                        <PopularBoxImage
                            hei={HEIGHT}
                        />
                        <PopularBoxComment>
                            <CommentImage
                                resizeMode="stretch"
                                source={require('../images/comment.png')}
                            />
                             <CommentImage
                                resizeMode="stretch"
                                source={require('../images/good.png')}
                            />
                        </PopularBoxComment>
                    </PopularBoxRight>
                </PopularBox>
    )
}

export default BoardBox;