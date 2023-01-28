import React, { useEffect, useState } from "react"

import auth from "@react-native-firebase/auth";
import firestore from '@react-native-firebase/firestore';
import storage from '@react-native-firebase/storage';

import { launchImageLibrary } from "react-native-image-picker";
import { Image, Pressable, Text, TextInput } from "react-native";


const Timetable =()=>{
    const [refresh,setRefresh] = useState(false);
    const [tempSave,setTempSave] =useState("");
    const [image,setImage] = useState("");

    const [boardTitle,setBoardTitle] = useState("");
    const [boardContents,setBoardContents] = useState("");


    const addStore=async()=>{
        const save= await firestore().collection("users").doc(auth().currentUser.uid).get();
        setTempSave(save._data);
        console.log(save);
    }

    const addImage=async()=>{//이미지 불러오기
        launchImageLibrary({maxWidht:400,maxHeight:400},response=>{
            if(response.didCancel){
                console.log("뒤로가기")
            }
            else{
                console.log(response);
                setImage({fileName:response.assets[0].fileName,uri:response.assets[0].uri})
            }
        })
    }

    const imageSave=async()=>{
        await storage().ref(`ProfileImage/${image.fileName}`)
            .putFile(`${image.uri}`)
            .then(()=>console.log("save"))
            .catch(()=>console.log("fail"))
        await auth().currentUser.updateProfile({
            photoURL: await storage().ref(`ProfileImage/${image.fileName}`).getDownloadURL()
        })
        await firestore().collection("users").doc(auth().currentUser.uid).update({
            user_profilename:image.fileName
        })
    }

    const deleteImage=async()=>{
        await storage().ref(`ProfileImage/${image.fileName}`).delete()
        .then(()=>{
            setImage(null);
            firestore().collection("users").doc(auth().currentUser.uid).update({
                user_profilename:""
            })
            auth().currentUser.updateProfile({photoURL:"false"})
            console.log("삭제완료");
        })
        .catch(()=>console.log("삭제실패"))
    }

    const addBoard=async()=>{
        const tempSave = await firestore().collection("boards").doc(auth().currentUser.displayName).get();
        
        if(tempSave.arr){
            firestore().collection("boards").doc(auth().currentUser.displayName).update({
                arr:[{
                    title:boardTitle,
                    contents:boardContents
                }]
            })
        }
        else{
            firestore().collection("boards").doc(auth().currentUser.displayName).set({
                arr:[{
                    title:boardTitle,
                    contents:boardContents
                }]
            })
        }
    }

    useEffect(()=>{
        {
            image?
            imageSave()
                :
            null
        }
    },[image])

    useEffect(()=>{
        addStore();
    },[refresh])

    return(
    <> 
        <Pressable
            style={{backgroundColor:"red"}}
            onPress={()=>setRefresh(!refresh)}
        >
            <Text>새로고침</Text>
        </Pressable>
        <Text>기본 유저 정보=====================</Text>
            <Text>{auth().currentUser.displayName}</Text>
            <Text>{auth().currentUser.uid}</Text>
        <Text>==================firestore에 추가된 유저 정보=====================</Text>
            <Text>{tempSave.user_department}</Text>
            <Text>{tempSave.user}</Text>
        <Pressable
            style={{backgroundColor:"teal"}}
            onPress={()=>addImage()}
        >
            <Text>Image 불러오기</Text>
        </Pressable>
        <Pressable
            style={{backgroundColor:"tomato"}}
            onPress={()=>deleteImage()}
        >
            <Text>Image 삭제</Text>
        </Pressable>
        {
            auth().currentUser.photoURL=="false" ? 
                <Image
                    style={{width:50,height:50}}
                    source={require(`../../images/personImage.jpg`)}
                />
            : 
                <Image
                    style={{width:50,height:50}}
                    source={{uri:auth().currentUser.photoURL}}
                />
        }
        <Text>게시판 글쓰기</Text>
        <TextInput placeholder="제목" onChangeText={(e)=>setBoardTitle(e)}/>
        <TextInput placeholder="내용" onChangeText={(e)=>setBoardContents(e)}/>
        <Pressable
            style={{backgroundColor:"brown"}}
            onPress={()=>addBoard()}
        >
            <Text>저장</Text>
        </Pressable>
     </>
    )
}

export default Timetable;