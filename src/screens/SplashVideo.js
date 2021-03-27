import React,{useEffect} from "react";
import {
  StyleSheet,
  Platform,
  SafeAreaView,
  Text,
  View,
  StatusBar,Image, TouchableOpacity
} from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import VideoLogo from '../components/VideoLogo'




export default function SplashVideo({navigation}) {
  useEffect(() => {
    const timer = setTimeout(() => {
      console.log("move to next screen");
      navigation.reset(
{
           index:0,
        routes:[{name:'Welcome'}]

}

      )
    }, 8500);
    return () => clearTimeout(timer);
  }, []);
  return (
    <SafeAreaView style={styles.container}>
      {/* <View style={styles.logoContainer}>
        <Text style={styles.humf}>HUMF</Text>

        <Text style={styles.pace}>PACE</Text>
      </View> */}

   <Image style={styles.image} source={require('../Images/logoc.jpeg')}/>

     <VideoLogo />

     <TouchableOpacity onPress={()=>navigation.reset({
       index:0,
       routes:[{name:'Welcome'}]

     })} style={{width:80,marginRight:20,marginTop:90,alignSelf:'flex-end',backgroundColor:'#137383',height:80,borderRadius:40,elevation:10,justifyContent:'center',alignItems:'center'}}>
      <Text style={{color:'#ffffff',fontSize:16,fontWeight:'bold',}}>Skip </Text>
     </TouchableOpacity>
    
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#137383",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },

  
  image:
  {
    alignSelf:'center',
    width:150,
    height:150,
    borderRadius:80,
   marginTop:60
  }
});
