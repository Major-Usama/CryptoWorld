import React from "react";
import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  Platform,
  SafeAreaView,
  TextInput,
  TouchableWithoutFeedback,
  Image
} from "react-native";
import { MaterialIcons,Feather,SimpleLineIcons ,MaterialCommunityIcons} from "@expo/vector-icons";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import WalletFlat from "../components/WalletFlat";


export default function BankDepositScreen() {
    return (
        <View style={styles.container}>
          <View style={styles.headerContainer}>
        <TouchableWithoutFeedback onPress={()=>navigation.navigate('CurrencyExchange')}>

        <View style={styles.leftIcon}>
          <MaterialIcons name="timeline" size={24} color="white" />
        </View>
        
         </TouchableWithoutFeedback>
         <View style={{flexDirection:'row',alignItems:'center',width:85,justifyContent:'space-between'}}>
         <SimpleLineIcons name="wallet" size={15} color="#ffffff" />
        <Text
          style={{
            color: "#ffffff",
            fontSize: 24,
            fontStyle: "italic",
            fontWeight: "bold",
          }}
        >
        Wallet
        </Text>
        </View>

        <View style={styles.rightIcon}>
        <MaterialCommunityIcons name="timer-sand-empty" size={24} color="white" />
          
        </View>
      </View>

      <View style={styles.footer}>
        

        <View style={{flexDirection:'row',paddingTop:35,paddingHorizontal:20,alignItems:'center',justifyContent:'space-between',}}>
        
        <Image style={{width:50,height:50}} source={require('../Images/cashback.png')}/>

          <View style={{marginLeft:wp('10%')}}>
              <Text style={{fontSize:34,fontWeight:'bold',color:'gray',opacity:0.7}}>USD</Text>

              <View style={{flexDirection:'row',alignItems:'center',}}>
             <Image style={{width:20,height:20,marginRight:5}} source={require('../Images/united-states.png')}/>
               <Text style={{fontSize:12,color:'gray',opacity:0.7}}>Balance : United States Dollar </Text>
              </View>

          </View>
        
        
         <Text style={{fontSize:30,right:wp('25%'),fontStyle:'italic',marginBottom:25}}>1,332.000.00</Text>
         
    

        </View>
        <Text style={{color:'gray',bottom:10,opacity:0.2,fontSize:60,alignSelf:'flex-end',marginRight:40}}>$</Text>
           
        <View style={{flexDirection:'row',alignItems:'center',justifyContent:'space-evenly'}}>
         
         <View style={{width:170,justifyContent:'center',alignItems:'center',borderRadius:5,height:170,elevation:5,backgroundColor:'#ffffff'}}>

        <Image  source={require('../Images/cashbag.png')}/>

        <Text style={{fontSize:20,color:'gray',opacity:0.7,fontWeight:'bold',marginTop:10}}>DEPOSIT</Text>
        <Text style={{fontSize:14,color:'gray',opacity:0.7,fontWeight:'bold',marginTop:2}}>Funds</Text>

         </View>

         <View style={{width:170,borderRadius:5,justifyContent:'center',alignItems:'center',height:170,elevation:5,backgroundColor:'#137383'}}>
        

         <View style={{width:50,height:50,justifyContent:'center',alignItems:'center',borderRadius:35,borderWidth:2,borderColor:'#82ECF9'}}>
         <MaterialCommunityIcons name="cash-refund" size={30} color="#ffffff" />
         </View>

        <Text style={{fontSize:20,color:'#ffffff',fontWeight:'bold',marginTop:10}}>WITHDRAW</Text>
        <Text style={{fontSize:14,color:'#ffffff',fontWeight:'bold',marginTop:2}}>Funds</Text>  
         

         </View>
        

        </View>

         <View style={{flexDirection:'row',paddingTop:hp('5%'),paddingHorizontal:15,alignItems:'center',justifyContent:'space-between'}}>
            
      
         <View style={{width:wp('50%'),flexDirection:'row',alignItems:'center',height:35,borderRadius:15,borderWidth:2,borderColor:'#137383'}}>
        
         <View style={{width:35,height:32,right:2,justifyContent:'center',alignItems:'center',borderRadius:20,backgroundColor:'#137383'}}>
         <Feather name="dollar-sign" size={20} color="#ffffff" />
         </View>
             
         <Text style={{fontWeight:'bold',marginLeft:10}}>Recent <Text style={{fontWeight:'normal'}}>Transactions</Text></Text>

         
        
      
        </View>

        <View>
        <Text style={{fontWeight:'bold',color:'gray',opacity:0.7}}>VIEW ALL </Text>
        <Text style={{fontWeight:'bold',color:'gray',opacity:0.7,fontSize:20,lineHeight:10}}>_ _</Text>
        </View>




         </View>

         {/* Flatlist */}

        <WalletFlat />





      </View>
        </View>
    )
}

const styles = StyleSheet.create({


    container:
    {
        flex:1,
        backgroundColor:'#137383',
        paddingTop:Platform.OS==='android'?StatusBar.currentHeight:0,

    },

    leftIcon: {
        width: 40,
        height: 40,
        borderRadius: 20,
        backgroundColor: "#137383",
        elevation: 10,
        justifyContent: "center",
        alignItems: "center",
      },
    
      rightIcon: {
        width: 40,
        height: 40,
        borderRadius: 20,
        backgroundColor: "#137383",
        justifyContent: "center",
        alignItems: "center",
        elevation: 10,
      },
    
      headerContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginHorizontal: 20,
        marginTop: 20,
      },

      footer: {
        width: wp("100%"),
        flex: 1,
        backgroundColor: "#ffffff",
        marginTop: 20,
        borderTopLeftRadius: 50,
        borderTopRightRadius: 50,
      },


})
