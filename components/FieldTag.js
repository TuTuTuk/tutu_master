import React, { useState } from 'react';
import { View, TouchableOpacity, Text } from 'react-native';

const FieldTag = ({name,addTag,delTag,passive}) => {
  const [isPressed, setIsPressed] = useState(false);
  const [btnText, setBtnText] = useState('');

  passive=="on"? setIsPressed(true) : null
  passive==="off"? console.log("dd") : null

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
            borderColor: '#FFAB40',
            backgroundColor: isPressed ? null : '#FFAB40',
            marginRight: 5,
            paddingLeft: 8,
            paddingRight: 8
        }}
      >
        <Text style={{ 
            color: isPressed ? '#FFAB40' : 'white',
        }}>{name}
        </Text>
      </TouchableOpacity>
  );
};

export default FieldTag;