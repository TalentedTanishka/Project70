import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class ReadScreen extends React.Component{
 render()
 {
   return(
    <div style={{  backgroundImage: `url("https://previews.123rf.com/images/tigatelu/tigatelu1509/tigatelu150900277/45091843-cartoon-little-kid-reading-book-funny.jpg")`,paddingBottom:10000}}>
     <View>
       <Text style={{fontSize:90,textAlign:"center",marginLeft:800}}>

         Read Story

       </Text>
    
       </View>
       </div>
   )
 }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});