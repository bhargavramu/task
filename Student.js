import React from 'react';
import {View,Text} from 'react-native';

function Student(props)
{

   return (
        <View style={{flex:1,backgroundColor:"white",alignItems:"center",}}>
  
      <Text>
        {props.value.name}
        </Text>    
        </View>
    );
}
    
    
export default Student;
