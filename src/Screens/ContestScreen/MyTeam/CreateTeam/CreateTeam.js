import {Pressable, SafeAreaView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {useNavigation} from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';
import TopCreateScreen from './TopCreateScreen';
import {resetFinalPlayerSelected} from '../../../../Redux/Slice';

const CreateTeam = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const totalDots = 11;

  const playercount = useSelector(
    state => state.fantasy.finalPlayerSelected.length,
  );

  const team1count = useSelector(state => state.fantasy.selectedTeam1.length);
  const team2count = useSelector(state => state.fantasy.selectedTeam2.length);
  console.log(team2count, 'team2count from createTeam screen');

  const team1ShortName = useSelector(state => state.fantasy.team1ShortName);
  const team2ShortName = useSelector(state => state.fantasy.team2ShortName);

  const handleResetSelection = () => {
    dispatch(resetFinalPlayerSelected());
  };
  
  const handleNext = () =>{
    if(playercount==11){
      navigation.navigate("MyTeam")
    }
  }

  return (
    <SafeAreaView style={{flex: 1}}>
      <LinearGradient
        style={{
          height: hp(9),
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          width: wp('100%'),
        }}
        colors={['#3b53bd', '#243373', '#192451', '#020202']}>
        <View
          style={{
            width: wp('90%'),
            display: 'flex',
            justifyContent: 'space-between',
            flexDirection: 'row',
          }}>
          <View style={{flexDirection: 'row', gap: 10}}>
            <Pressable onPress={() =>{ navigation.goBack()
              handleResetSelection();
            }}>
              <Text style={{color: '#fff', fontWeight: 'bold'}}>{'<'}-</Text>
            </Pressable>
            <View style={{flexDirection: 'column'}}>
              <Text style={{color: '#fff', fontWeight: 'bold'}}>
                Create Team 1
              </Text>
              <Text style={{color: '#fff', fontSize: hp(1.3)}}>
                21M 30S left
              </Text>
            </View>
          </View>

          <View style={{flexDirection: 'row', gap: 10}}>
            <View>
              {/* <FontAwesome5 name="question-circle" size={26} color="#fff" /> */}
            </View>
            <View
              style={{
                borderWidth: 2.5,
                borderColor: '#fff',
                borderRadius: 30,
                fontWeight: '700',
                paddingTop: 4,
                paddingBottom: 4,
                paddingRight: 2,
                paddingLeft: 2,
              }}>
              <Text
                style={{fontWeight: '700', fontSize: hp(1.5), color: '#fff'}}>
                PTS
              </Text>
            </View>
          </View>
        </View>
      </LinearGradient>
      <View
        style={{
          flexDirection: 'column',
          display: 'flex',
          width: wp('90%'),
          justifyContent: 'center',
        }}>
        <View
          style={{
            width: wp('90%'),
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}>
          <View style={{flexDirection: 'row', gap: 10}}>
            {/* <Image/> */}
            <View style={{flexDirection: 'column', gap: 5}}>
              <Text style={{color: '#000'}}>{team1ShortName}</Text>
              <Text style={{color: '#000'}}>{team1count}</Text>
            </View>
          </View>
          <View style={{flexDirection: 'row', gap: 10}}>
            {/* <Image/> */}
            <View style={{flexDirection: 'column', gap: 5}}>
              <Text style={{color: '#000'}}>{team2ShortName}</Text>
              <Text style={{color: '#000'}}>{team2count}</Text>
            </View>
          </View>
        </View>
      </View>
      <View
        style={{
          display: 'flex',
          flexDirection: 'column',
          width: wp('100%'),
          justifyContent: 'center',
          alignItems: 'center',
          gap: 10,
          paddingLeft: 10,
          paddingRight: 10,
        }}>
        <View>
          <Text style={{fontSize: hp(1.5), color: '#000'}}>
            Maximum 7 Players for one team
          </Text>
        </View>
        <View
          style={{display: 'flex', flexDirection: 'row', width: wp('100%')}}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
              width: wp('100%'),
            }}>
            {[...Array(totalDots)].map((_, index) => (
              <View
                key={index}
                style={{
                  width: 22,
                  height: 7,
                  marginHorizontal: 5,
                  backgroundColor: index < playercount ? '#3e57c4' : '#a8b6f4',
                }}
              />
            ))}
          </View>
        </View>
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            width: wp('95%'),
            justifyContent: 'space-between',
            alignItems: 'center',
            paddingLeft: 15,
            paddingRight: 15,
            paddingTop: 5,
          }}>
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              gap: 3,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <View>
              <Text
                style={{fontWeight: '500', color: '#000', fontSize: hp(1.5)}}>
                Players
              </Text>
            </View>
            <View>
              <Text
                style={{fontWeight: '500', color: '#000', fontSize: hp(1.5)}}>
                {playercount}/11
              </Text>
            </View>
          </View>
          <View>
            <Pressable
              onPress={handleResetSelection}
              style={{
                borderWidth: 1,
                borderColor: '#4d4d4d',
                paddingLeft: 10,
                paddingRight: 10,
                borderRadius: 4,
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Text style={{color: '#000', fontSize: hp(1.5)}}>Reset</Text>
            </Pressable>
          </View>
        </View>
      </View>

      <View
        style={{
          display: 'flex',
          flexDirection: 'row',
          width: wp('100%'),
          marginTop: 5,
        }}>
        <LinearGradient
          style={{
            height: 25,
            display: 'flex',
            flexDirection: 'row',
            width: wp('100%'),
          }}
          colors={['#7185d8', '#c2cffe']}
          start={{x: 1, y: 0}}
          end={{x: 0, y: 0}}>
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              width: wp('100%'),
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <View>
              {/* <Entypo name="location-pin" size={24} color="black" /> */}
            </View>
            <View>
              <Text style={{fontWeight: '500', fontSize: hp(1.5)}}>
                M.Chinnaswamy Stadium, Bangalore
              </Text>
            </View>
          </View>
        </LinearGradient>
      </View>

      <View style={{flex: 1}}>
        <TopCreateScreen />
      </View>
      <View
             style={{
               display: 'flex',
               flexDirection: 'row',
               width: '100%',
               padding: 15,
               justifyContent: 'space-evenly',
             }}>
             <View style={{width: wp('45%')}}>
               <Pressable
                //  onPress={() => navigation.navigate('MYContest')}
                 style={{
                   backgroundColor: '#000',
                   paddingTop: 10,
                   paddingBottom: 10,
                   borderRadius: 10,
                   width: wp('43%'),
                   display: 'flex',
                   flexDirection: 'row',
                   justifyContent: 'center',
                   alignItems: 'center',
                   gap: 5,
                 }}>
                
                 <Text style={{fontWeight: '400', color: '#fff', fontSize: hp(2)}}>
                   PREVIEW
                 </Text>
             
               </Pressable>
             </View>
             <View style={{width: wp('43%')}}>
               <Pressable
                 onPress={() => handleNext()}
                 style={{
                   backgroundColor: '#000',
                   paddingTop: 8,
                   paddingBottom: 8,
                   borderRadius: 10,
                   width: wp('43%'),
                   display: 'flex',
                   flexDirection: 'row',
                   justifyContent: 'center',
                   alignItems: 'center',
                   gap: 5,
                 }}>
                
                 <Text style={{fontWeight: '400', color: '#fff', fontSize: hp(2)}}>
                   NEXT
                 </Text>
               
               </Pressable>
             </View>
           </View>
    </SafeAreaView>
  );
};

export default CreateTeam;

const styles = StyleSheet.create({});