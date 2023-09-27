import React, { useState, useEffect } from 'react';
import { View, TouchableOpacity, Text } from 'react-native';

const MajorTag = ({name,addTag,delTag,passive}) => {
  const [isPressed, setIsPressed] = useState(false);

  useEffect(() => {
    if (passive === "on") {
      setIsPressed(true);
    } else if (passive === "off") {
      console.log("dd");
    }
  }, [passive]);  

  const onClick = () => {
    setIsPressed(!isPressed);
  };

  return (
      <TouchableOpacity
        onPress={()=>{
            onClick();
            addTag? isPressed ? delTag(name) : addTag(name)
            :null
        }}
        style={{
            borderWidth: 1,
            borderRadius: 5,
            borderColor: '#0062FF',
            backgroundColor: isPressed ? null : '#0062FF',
            marginRight: 5,
            paddingLeft: 8,
            paddingRight: 8
        }}
      >
        <Text style={{ 
            color: isPressed ? '#0062FF' : 'white',
        }}>{name}
        </Text>
      </TouchableOpacity>
  );
};

export default MajorTag;