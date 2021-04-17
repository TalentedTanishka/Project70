import * as React from 'react';
import { StyleSheet, Text, View, TextInput,Image,TouchableOpacity} from 'react-native';


export default class WriteScreen  extends React.Component{
 render()
 {
   return(
   
      
     <View style={styles.container}>
        <TextInput style={[styles.inputbox ,{fontFamily:"Comic Sans MS",fontWeight:"bold",textAlign:"center"}]}placeholder="Title of the Story"/>
        <TextInput style={styles.inputbox}placeholder="Author"/>
        <TextInput style={[styles.inputbox ,{paddingBottom:300,fontFamily:"Comic SanD MS"}]}placeholder="Write your Story" multiline={true}/>
        <Image style={{width:950,height:600,marginLeft:640,marginTop:-500}} source={require('../assets/story.png')}></Image>
        <TouchableOpacity style={{backgroundColor:"pink",borderRadius:10,borderWidth:3,width:200,marginTop:-80,marginLeft:150,padding:20}}>
          <Text style={{fontFamily:"Comic SanD MS",fontSize:30,textAlign:"center"}}>
            Submit
          </Text>
        </TouchableOpacity>
         </View>
        
   )
 }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    
  },
  inputbox: {
    borderColor:"black",
    borderWidth:2,
    width: 540,
    height: 70,
    fontSize: 50,
    marginLeft:10,
   alignItems:"center",
    color:"black",
    marginTop:40,
    borderRadius:2,
  },
});