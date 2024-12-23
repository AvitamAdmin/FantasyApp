import react, { View ,Text, Image,Pressable,StyleSheet} from 'react-native';
import { ScrollView } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

Text.defaultProps = Text.defaultProps || {};
Text.defaultProps.allowFontScaling = false;

export default function HowToPlay({ navigation }){
  return(

<ScrollView>

<View style={{display:'flex', flexDirection:'column',width: wp("100%"),gap:10}}>

    <View style={{display:'flex', flexDirection:'column',width:wp("100%"),}} >
                  <LinearGradient
                           colors={['#3247A0','#1B2656',]}
                           style={{height:hp(12)}}>
                         <View style={{ display:'flex', flexDirection:'row',paddingTop:55, paddingLeft:13}}>
                         <View style={{width:wp("10%")}}>
                         <Pressable onPress={() => navigation.goBack()}>
                         <AntDesign name="left" size={22} color="white" />
                         </Pressable>
                         </View>
                         <View style={{width:wp("50%")}}>
                              <Text style={{fontSize:hp(2), color:'#fff',fontWeight:'bold'}} >How to Play</Text>
                          </View>
                          </View>
                          </LinearGradient>
          </View>

          <View style={{width:wp("100%"),display:'flex',flexDirection:'column',gap:20 }}>
         <View style={{ justifyContent:'center',alignItems:'center'}}>
                   <View style={{width:wp("80%"),alignItems:'center',display:'flex',justifyContent:'center',paddingTop:10}}>
                             <Text style={{color:"#4C5789", fontWeight:'700',fontSize:hp(1.9)}}>FOLLOW THE STEPS MENTIONED BELOW &</Text>
                             <Text  style={{color:"#4C5789", fontWeight:'700',fontSize:hp(1.9)}}>BEGIN YOUR WINNING JOURNEY</Text> 
                   </View>
         </View>
          

          <View style={{width:wp("95%"), display:'flex',flexDirection:'row',justifyContent:'center',alignItems:'center'}}>
                
              <View  style={{width:wp("54%")}}>
                    <Image
                        source={require("../../assets/HowToPlay.png")}
                        style={{
                            width: 220,
                            height: 200,}}/>
              </View>
                    
                      
                    <View style={styles.line}>
                         {/* line */}
                    </View>
                 

                <View style={{display:'flex', flexDirection:'column', rowGap:10, width: wp("47%") }}>
        
                 <Pressable  style={styles.btn1}>
                    <Text style={styles.button}>SELECT A MATCH</Text>
                  </Pressable>
               
                  <Pressable style={styles.btn1} >
                    <Text style={styles.button}>CREATE YOUR TEAM</Text>
                  </Pressable>
                  <Pressable style={styles.btn1}>
                    <Text style={styles.button}>JOIN CONTEST</Text>
                  </Pressable>
                  <Pressable style={styles.btn1}>
                    <Text style={styles.button}>FOLLOW THE MATCH</Text>
                  </Pressable>
              </View>    
          </View>

              <View style={{width:wp("100%"),display:'flex',alignItems:'center',justifyContent:'center'}}>
            <View style={{width:wp("100%"),display:'flex',alignItems:'center',paddingTop:10}} >
                       <Image
                source={require("../../assets/SelectAMatch.png")}
               style={{
                  width: wp("95%"),
                  height: 190,
                  resizeMode:'stretch',
                }}/>
         </View>

         <View style={{width:wp("96%"), display:'flex',flexDirection:'column',alignItems:'flex-end',}}>
           <Text style={{ fontSize:hp(1.9), color:'#4D4D4D',paddingTop:6}} >
             To participate in a match, click on an upcoming match
             you want to play and keep eye on the match deadline.
           </Text>
         </View>
         </View>

         <View style={{width:wp("100%"),display:'flex',alignItems:'center',justifyContent:'center'}}>
         <View style={{width:wp("100%"),display:'flex',alignItems:'center',paddingTop:18}} >
                       <Image
                source={require("../../assets/CreateYourTeams.png")}
               style={{
                  width: wp("95%"),
                  height: 190,
                  resizeMode:'stretch',
                }}/>
         </View>

         <View style={{width:wp("100%"), display:'flex',flexDirection:'column',alignItems:'flex-end'}}>
         <View style={{width:wp("98%"), display:'flex',flexDirection:'column',alignItems:'center'}}>
         <Text style={{ fontSize:hp(1.9), color:'#4D4D4D',paddingTop:10}} >
            Use your sports knowledge to create your own fantasy team with players whom do you think willscore most points.
           </Text></View>
           <View style={{width:wp("96%"), display:'flex',flexDirection:'column',alignItems:'center'}}>
           <Text style={{ fontSize:hp(1.9), color:'#4D4D4D',paddingTop:10}}>
             Your team much contain 11 players of different categories (WK, Battter, All- rounder,Bowler).Maximum 7 players from one team.
           </Text></View>
           <View style={{width:wp("95%"), display:'flex',flexDirection:'column',}}>
           <Text style={{ fontSize:hp(1.9), color:'#4D4D4D',paddingTop:10}}>
           you can create up to 20 teams</Text></View>
         
         </View>
         </View>

         <View style={{width:wp("100%"),display:'flex',alignItems:'center',justifyContent:'center'}}>
         <View style={{width:wp("100%"),display:'flex',alignItems:'center',paddingTop:18}} >
                       <Image
                source={require("../../assets/SelectImpactPlayer.png")}
               style={{
                  width: wp("95%"),
                  height: 190,
                  resizeMode:'stretch',
                }}/>
         </View>

         <View style={{width:wp("100%"), display:'flex',flexDirection:'column',alignItems:'flex-end'}}>
         <View style={{width:wp("96%"), display:'flex',flexDirection:'column'}}>
         <Text style={{ fontSize:hp(1.9), color:'#4D4D4D',paddingTop:10,}} >
            After Selecting your team, you can add an IMPACT PLAYER to your team
           </Text></View>
           <View style={{width:wp("96%"), display:'flex',flexDirection:'column'}}>
           <Text style={{ fontSize:hp(1.9), color:'#4D4D4D',paddingTop:10}}>
          IMPACT PLAYER will replace a player with least points in your team after, the match completes.
            </Text></View>
           <View style={{width:wp("96%"), display:'flex',flexDirection:'column',}}>
           <Text style={{ fontSize:hp(1.9), color:'#4D4D4D',paddingTop:10}}> 
           So,add a player whom do you think will perfect backup for your team
           </Text></View>
         
         </View>
         </View>


         <View style={{width:wp("100%"),display:'flex',alignItems:'center',justifyContent:'center'}}>
         <View style={{width:wp("100%"),display:'flex',alignItems:'center',paddingTop:18}} >
                       <Image
                source={require("../../assets/SelectC-VC.png")}
               style={{
                  width: wp("95%"),
                  height: 190,
                  resizeMode:'stretch',
                }}/>
         </View>

         <View style={{width:wp("100%"), display:'flex',flexDirection:'column',alignItems:'flex-end'}}>
         <View style={{width:wp("96%"), display:'flex',flexDirection:'column'}}>
         <Text style={{ fontSize:hp(1.9), color:'#4D4D4D',paddingTop:10,}} >
            After creating your team, select the captain and vice-captain that will help you earn extra points.</Text>
            </View>
           <View style={{width:wp("96%"), display:'flex',flexDirection:'column'}}>
           <Text style={{ fontSize:hp(1.9), color:'#4D4D4D',paddingTop:10}}>The chosen captain will get x2 ponits during the match and the vice-captain will get x1.5 points.</Text>
    </View>         
         
         </View>
         </View>
         
         <View style={{width:wp("100%"),display:'flex',alignItems:'center',justifyContent:'center'}}>
         <View style={{width:wp("100%"),display:'flex',alignItems:'center',paddingTop:18}} >
                       <Image
                source={require("../../assets/JoinContest.png")}
               style={{
                  width: wp("95%"),
                  height: 190,
                  resizeMode:'stretch',
                }}/>
         </View>

         <View style={{width:wp("100%"), display:'flex',flexDirection:'column',alignItems:'flex-end'}}>
         <View style={{width:wp("96%"), display:'flex',flexDirection:'column'}}>
         <Text style={{ fontSize:hp(1.9), color:'#4D4D4D',paddingTop:10,}} >
  There are different contest available.you can join Free and Paid contest or you can even create a new private contest and play with your friends.                   </Text></View>
           <View style={{width:wp("96%"), display:'flex',flexDirection:'column'}}>
           <Text style={{ fontSize:hp(1.9), color:'#4D4D4D',paddingTop:10}}>
You can join as many contest you want!       </Text>
</View>
<View style={{width:wp("96%"), display:'flex',flexDirection:'column'}}>
           <Text style={{ fontSize:hp(1.9), color:'#4D4D4D',paddingTop:10}}>
        Join and start Winning!!    </Text>
        
        </View>
           
         
         </View>
         </View>

          
         <View style={{width:wp("100%"),display:'flex',alignItems:'center',justifyContent:'center'}}>
         <View style={{width:wp("100%"),display:'flex',alignItems:'center',paddingTop:18}} >
                       <Image
                source={require("../../assets/FollowTheMatch.png")}
               style={{
                  width: wp("95%"),
                  height: 190,
                  resizeMode:'stretch',
                }}/>
         </View>

         <View style={{width:wp("100%"), display:'flex',flexDirection:'column',alignItems:'flex-end'}}>
         <View style={{width:wp("96%"), display:'flex',flexDirection:'column'}}>
         <Text style={{ fontSize:hp(1.9), color:'#4D4D4D',paddingTop:10,}} >
              Once a match is live, you can follow your contests leaderboards to see how your're performing against your competition.
       </Text></View> 
         </View>

         </View>


         
        <View style={{width:wp("100%"),display:'flex',paddingTop:23}}>
          <View style={{display:'flex',alignItems:'stretch',width:'100%',paddingLeft:15}}>
            <Text style={{fontWeight:'bold',display:'flex', fontSize:hp(2), }}>WITHDRAW YOUR WINNINGS</Text>
          </View>

          <View style={{width:wp("100%"),display:'flex',alignItems:'center',paddingTop:18}} >
                       <Image
                source={require("../../assets/Winnings_Display.png")}
               style={{
                  width: wp("95%"),
                  height: 85,
                  resizeMode:'contain',
                }}/>
         </View>

          <View style={{width:wp("100%"), display:'flex',flexDirection:'column',alignItems:'flex-end'}}>
         <View style={{width:wp("96%"), display:'flex',flexDirection:'column'}}>
         <Text style={{ fontSize:hp(1.9 ), color:'#4D4D4D',paddingTop:10,}} >
            After a match ends, if you're in the winning zone for a contest, then your contest winnings are transferred to your account.               </Text></View>
           <View style={{width:wp("96%"), display:'flex',flexDirection:'column'}}>
           <Text style={{ fontSize:hp(1.9), color:'#4D4D4D',paddingTop:10}}>
            Use them to join more contests, or withdraw it and celebrate your success!</Text>
            </View>         
         </View>
        </View>
              
         <View style={{width:wp("100%"),display:'flex',justifyContent:'center',alignItems:'center',flexDirection:'row', paddingTop:30, paddingBottom:30}}>
          <View style={{width:wp("55%")}}>
            <Text style={{ fontSize:hp(1.7),color:'#000'}}>
                    Check our fantasy ponit system
            </Text>
          </View>
          <View style={{width:wp("35%")}}>
            <Pressable style={{width:wp("35%")}} ><Text  style={styles.btn}>POINT SYSTEM</Text></Pressable>
          </View>
         </View>

              </View>
          </View>
          </ScrollView>
  )
}

    
const styles = StyleSheet.create({
    
    
      button: {
        padding: 9,
        width: wp("50%"),    
        justifyContent: "center",
        alignItems: "center",
        textAlign:'center',
        fontWeight:'bold'
      },
      btn1:{
        backgroundColor: "#D9DEF3",
        borderWidth:1,
        borderRadius: 50,
        borderColor:'#8B9BDB'
      },
      btn:{
        color:"#fff",
        backgroundColor:"#35B267",
        padding:10,
        fontWeight:'800',
      },
      line:{
        borderleft:2,
        borderColor:'#000',
        borderWidth:.5,
        height: 186,
        right:50,
        // position: 'absolute',
        // left: 150,
        // top: 15,
        
      }
    })