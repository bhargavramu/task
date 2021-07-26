import React from 'react';
import {Text,View} from 'react-native';
import Student from './Student';
function App() {
  const employee = [
                {
                  id:1,  name:"bhargav", address:"hyd"
                },
               {
                 id:3,  name:"krishna",   address:"kphb"
                },
  ];
return (
    <View style={{flex:1,backgroundColor:"white",alignItems:"center",}}>
      {employee.map((person,i )=> (
              <Student key={i} value={person} />
         ))}
    </View>
  );
}
export default App;