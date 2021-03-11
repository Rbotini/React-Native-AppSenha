import React,{useState} from 'react';
import {StyleSheet, View,Text,Image,TouchableOpacity,} from 'react-native';
import Slider from '@react-native-community/slider';

let charset ='abcdefghijklmnopkrstuvxzABCDEFGHIJKLMNOPQRSTUVXZ123456789'

function App(){

 

  const [password, setPassword] = useState('');
  const[size, setSize] = useState();

  function gerarSenha(){
   let pass = '';
   for( let i = 0, n = charset.length; i < size ; i++){
     pass += charset.charAt(Math.floor(Math.random()* n ))

   }
   setPassword(pass);
  }
  return(
    <View style={styles.container}>
      <Image
      source={require('./assets/logo.png')}
      style={styles.logo}
      />
     <Text style={styles.textSenha}>{size} Caracteres</Text>
      <View style={styles.area}>
      <Slider
      style={{height:50}}
      minimumValue={5}
      maximumValue={15}
      maximumTrackTintColor ='blue'
      minimumTrackTintColor='#d93621'
      value={size}
      onValueChange={(valor)=>setSize(valor.toFixed(0))}
       />
      </View>
      <TouchableOpacity style={styles.btnSenha} onPress={gerarSenha}>
        
        <Text style={styles.textbtn}>Gerar Senha</Text>
      </TouchableOpacity>
      <View style={styles.area}>
       <Text style={styles.password}>{password}</Text>
      </View>
       
    </View>

  )
}

export default App;


const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:'#f3f3ff'
  },
  logo:{
    width:150,
    height:150,
     marginBottom:20
  },
  textSenha:{
    fontSize:25,
    marginTop:5,
   marginBottom:5
  },
  area:{
   backgroundColor:'#fff',
   width:'90%',
   borderRadius:7,
   marginTop:15,
   marginBottom:15
  },
  btnSenha:{
    backgroundColor:'#d93621',
    width:'80%',
    justifyContent:'center',
    alignItems:'center',
    borderRadius:7
  },
  textbtn:{
    color:'#fff',
    fontSize:20,
    padding:10,
    fontWeight:'bold' 
  },
  password:{
    padding:15,
    textAlign:'center',
    fontSize:20,
    fontWeight:'bold',
    color:'#061f8f'

  }
  


})