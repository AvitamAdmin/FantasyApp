import React, {useEffect, useState} from 'react';
import {NavigationContainer, useNavigation} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {
  ActivityIndicator,
  Pressable,
  StyleSheet,
  View,
  Text,
  Image,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

// Import Screens
import Nameregister from './src/Auth/NameRegister';
import Profile from './src/BottomTabs/Profile';
import ReferAndEarn from './src/BottomTabs/ReferAndEarn';
import FantacyPointsSystems from './src/DrawerScreens/FantacyPointsSystems';
import HowToPlay from './src/DrawerScreens/HowToPlay';
import AboutUs from './src/DrawerScreens/AboutUs';
import HelpAndSupport from './src/DrawerScreens/HelpAndSupport';
import Cricket from './src/BottomTabs/TopScreens/Cricket';
import Football from './src/BottomTabs/TopScreens/Football';

// Context
import {SportProvider, useSport} from './src/SportContext';
// import ContestScreen from './src/Screens/ContestScreen';
import DrawerHeader from './src/DrawerScreens/DrawerHeader';
import Legality from './src/DrawerScreens/Legality';
import TermsAndCondition from './src/DrawerScreens/TermsAndCondition';
import ContestScreen from './src/Screens/ContestScreen/ContestScreen';
import ContestDetailScreen from './src/Screens/ContestScreen/ContestDetail/ContestDetailScreen';
import MyTeam from './src/Screens/ContestScreen/MyTeam/MyTeam';
import CreateTeam from './src/Screens/ContestScreen/MyTeam/CreateTeam/CreateTeam';
import ContestHeader from './src/Screens/ContestScreen/ContestHeader';
import CarouselScreen from './src/Auth/CarouselScreen';
import RegisterPage from './src/Auth/RegisterPage';
import LoginPhone from './src/Auth/LoginPhone';
import Otp from './src/Auth/otp';
import LoginEmail from './src/Auth/LoginEmail';
import CricketPonits from './src/DrawerScreens/Cricket';
import GetTheApp from './src/DrawerScreens/Help&SupportFiles/GetStarted/GetTheApp';
import GettingStarted from './src/DrawerScreens/Help&SupportFiles/GetStarted/GettingStarted';
import Impact11 from './src/DrawerScreens/Help&SupportFiles/GetStarted/Impact11';
import LostNumber from './src/DrawerScreens/Help&SupportFiles/GetStarted/LostNumber';
import QOTP from './src/DrawerScreens/Help&SupportFiles/GetStarted/QOTP';
import QSignUp from './src/DrawerScreens/Help&SupportFiles/GetStarted/QSignUp';
import StillPlay from './src/DrawerScreens/Help&SupportFiles/GetStarted/StillPlay';
import PlayingOnImpact from './src/DrawerScreens/Help&SupportFiles/PlayOnImpact/PlayingOnImpact';
import EditTeams from './src/DrawerScreens/Help&SupportFiles/PlayOnImpact/EditTeams';
import EditAfterMatch from './src/DrawerScreens/Help&SupportFiles/PlayOnImpact/EditAfterMatch';
import DeleteTeam from './src/DrawerScreens/Help&SupportFiles/PlayOnImpact/DeleteTeam';
import SwitchTeams from './src/DrawerScreens/Help&SupportFiles/PlayOnImpact/SwitchTeams';
import MultipleTeam from './src/DrawerScreens/Help&SupportFiles/PlayOnImpact/MultipleTeam';
import IncorrectLineup from './src/DrawerScreens/Help&SupportFiles/PlayOnImpact/IncorrectLineup';
import PlayerDoNotPlay from './src/DrawerScreens/Help&SupportFiles/PlayOnImpact/PlayerDoNotPlay';
import ContestJoin from './src/DrawerScreens/Help&SupportFiles/PlayOnImpact/ContestJoin';
import PublicPrivateContest from './src/DrawerScreens/Help&SupportFiles/PlayOnImpact/PublicPrivateContest';
import FlexibileContest from './src/DrawerScreens/Help&SupportFiles/PlayOnImpact/FlexibileContest';
import UnfilledContest from './src/DrawerScreens/Help&SupportFiles/PlayOnImpact/UnfilledContest';
import FindContest from './src/DrawerScreens/Help&SupportFiles/PlayOnImpact/FindContest';
import ScorePoints from './src/DrawerScreens/Help&SupportFiles/Scores&Points/ScorePoints';
import ScoresAndPoints from './src/DrawerScreens/Help&SupportFiles/Scores&Points/ScoresAndPoints';
import PointsNotUpdated from './src/DrawerScreens/Help&SupportFiles/Scores&Points/PointsNotUpdated';
import PointsForSuperOver from './src/DrawerScreens/Help&SupportFiles/Scores&Points/PointsForSuperOver';
import SubstitutePlayer from './src/DrawerScreens/Help&SupportFiles/Scores&Points/SubstitutePlayer';
import HSMyBalance from './src/DrawerScreens/Help&SupportFiles/MyBalance/HSMyBalance';
import WithDrawWinnings from './src/DrawerScreens/Help&SupportFiles/MyBalance/WithDrawWinnings';
import WithdrawalRequest from './src/DrawerScreens/Help&SupportFiles/MyBalance/WithdrawalRequest';
import CheckStatusWithdrawal from './src/DrawerScreens/Help&SupportFiles/MyBalance/CheckStatusWithdrawal';
import WithdrawalBankAccDetails from './src/DrawerScreens/Help&SupportFiles/MyBalance/WithdrawalBankAccDetails';
import WithdrawalRequestCancel from './src/DrawerScreens/Help&SupportFiles/MyBalance/WithdrawalRequestCancel';
import DiscountBonus from './src/DrawerScreens/Help&SupportFiles/MyBalance/DiscountBonus';
import AddCashMyBalance from './src/DrawerScreens/Help&SupportFiles/MyBalance/AddCashMyBalance';
import ManageWallets from './src/DrawerScreens/Help&SupportFiles/MyBalance/ManageWallets';
import ManageCards from './src/DrawerScreens/Help&SupportFiles/MyBalance/ManageCards';
import Winnings from './src/DrawerScreens/Help&SupportFiles/Winnings/Winnings';
import InformCashPrize from './src/DrawerScreens/Help&SupportFiles/Winnings/InformCashPrize';
import ReceiveMyWinnings from './src/DrawerScreens/Help&SupportFiles/Winnings/ReceiveMyWinnings';
import Distributed from './src/DrawerScreens/Help&SupportFiles/Winnings/Distributed';
import TaxWinnings from './src/DrawerScreens/Help&SupportFiles/Winnings/TaxWinnings';
import ProfileAndVerification from './src/DrawerScreens/Help&SupportFiles/Profile&Verification/ProfileAndVerification';
import ChangeMobileNumber from './src/DrawerScreens/Help&SupportFiles/Profile&Verification/ChangeMobileNumber';
import ChangeMailId from './src/DrawerScreens/Help&SupportFiles/Profile&Verification/ChangeMailId';
import ChangeTeamName from './src/DrawerScreens/Help&SupportFiles/Profile&Verification/ChangeTeamName';
import ChangeState from './src/DrawerScreens/Help&SupportFiles/Profile&Verification/ChangeState';
import Calculate from './src/DrawerScreens/Help&SupportFiles/Profile&Verification/Calculate';
import NotReceivingMail from './src/DrawerScreens/Help&SupportFiles/Profile&Verification/NotReceivingMail';
import VerifyImapact11P from './src/DrawerScreens/Help&SupportFiles/Profile&Verification/VerifyImapact11P';
import PanVerify from './src/DrawerScreens/Help&SupportFiles/Profile&Verification/PanVerify';
import AadharVerifyWhy from './src/DrawerScreens/Help&SupportFiles/Profile&Verification/AadharVerifyWhy';
import PanReject from './src/DrawerScreens/Help&SupportFiles/Profile&Verification/PanReject';
import BankAccReject from './src/DrawerScreens/Help&SupportFiles/Profile&Verification/BankAccReject';
import ChangePan from './src/DrawerScreens/Help&SupportFiles/Profile&Verification/ChangePan';
import BankAccChange from './src/DrawerScreens/Help&SupportFiles/Profile&Verification/BankAccChange';
import CompleteVerification from './src/DrawerScreens/Help&SupportFiles/Profile&Verification/CompleteVerification';
import OffersAndRewards from './src/DrawerScreens/Help&SupportFiles/Offer&Rewards/OffersAndRewards';
import InviteFriends from './src/DrawerScreens/Help&SupportFiles/Offer&Rewards/InviteFriends';
import Earn from './src/DrawerScreens/Help&SupportFiles/Offer&Rewards/Earn';
import MaximumInvite from './src/DrawerScreens/Help&SupportFiles/Offer&Rewards/MaximumInvite';
import Security from './src/DrawerScreens/Help&SupportFiles/Security/Security';
import AccountSecurity from './src/DrawerScreens/Help&SupportFiles/Security/AccountSecurity';
import Ensure from './src/DrawerScreens/Help&SupportFiles/Security/Ensure';
import Guide from './src/DrawerScreens/Help&SupportFiles/Security/Guide';
import LegalityScreen from './src/DrawerScreens/Help&SupportFiles/Legality/LegalityScreen';
import GameLegal from './src/DrawerScreens/Help&SupportFiles/Legality/GameLegal';
import Allow from './src/DrawerScreens/Help&SupportFiles/Legality/Allow';
import FairPlay from './src/DrawerScreens/Help&SupportFiles/FairPlay/FairPlay';
import FairPlayViolation from './src/DrawerScreens/Help&SupportFiles/FairPlay/FairPlayViolation';
import Suspicious from './src/DrawerScreens/Help&SupportFiles/FairPlay/Suspicious';
import AccessToChangeTeam from './src/DrawerScreens/Help&SupportFiles/FairPlay/AccessToChangeTeam';
import MatchDeadline from './src/DrawerScreens/Help&SupportFiles/FairPlay/MatchDeadline';
import DetailsSafe from './src/DrawerScreens/Help&SupportFiles/FairPlay/DetailsSafe';
import LosingGame from './src/DrawerScreens/Help&SupportFiles/FairPlay/LosingGame';
import HomeNotification from './src/BottomTabs/Home/HomeNotification';
import All from './src/BottomTabs/Home/All';
import Offers from './src/BottomTabs/Home/Offer';
// import AddCash from './src/Screens/PaymentScreen/AddCash';

const getHeaderRight = () => {
  const navigation = useNavigation(); // Get navigation context

  return (
    <View
      style={{
        flexDirection: 'column',
        backgroundColor: '#3385ff',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 5,
        width: '100%',
      }}>
      <View
        style={{
          flexDirection: 'row',
          padding: 3,
          paddingTop: 20,
          gap: 10,
          alignItems: 'center',
          justifyContent: 'center',
          width: '100%',
        }}>
        <Pressable
          style={{justifyContent: 'flex-start', paddingLeft: 10}}
          onPress={() => navigation.toggleDrawer()} // Ensure it toggles the drawer
        >
          <Text style={{color: 'white'}}>Menu Icon</Text>
        </Pressable>

        <Image
          source={require('./assets/IMPACT11LogoExtended.png')}
          style={{width: 120, height: 20, borderRadius: 20}}
        />

        <View
          style={{
            flex: 1,
            flexDirection: 'row',
            justifyContent: 'flex-end',
            gap: 10,
          }}>
          <View
            style={{
              borderWidth: 2,
              borderColor: '#fff',
              borderRadius: 6,
              justifyContent: 'space-between',
              flexDirection: 'row',
              display: 'flex',
              width: 81,
              height: 37,
              gap: 10,
            }}>
            <Pressable
              onPress={() => navigation.navigate('login')}
              style={{
                flexDirection: 'row',
                marginRight: 20,
                alignItems: 'center',
                gap: 10,
              }}>
              <Text style={{color: '#fff', marginLeft: 5}}>₹100</Text>
              <Ionicons
                name="wallet-outline"
                size={24}
                color="white"
                style={{}}
              />
            </Pressable>
          </View>
          <Pressable
            onPress={() => navigation.navigate('HomeNotification')}
            style={{
              marginRight: 20,
              paddingTop: 9,
            }}>
            <Ionicons name="notifications-outline" size={24} color="white" />
          </Pressable>
        </View>
      </View>
    </View>
  );
};


function AppWrapper() {
  const [isAuthenticated, setIsAuthenticated] = React.useState(false);
  const [isLoading, setIsLoading] = React.useState(true);

  useEffect(() => {
    const checkAuth = async () => {
      const token = await AsyncStorage.getItem('jwtToken');
      setIsAuthenticated(!!token);
      setIsLoading(false);
    };

    checkAuth();
  }, [isAuthenticated]); // Add isAuthenticated as a dependency

  if (isLoading) {
    return (
      <View style={styles.center}>
        <ActivityIndicator size="large" color="#3385ff" />
      </View>
    );
  }

  return (
    <StackNavigator
      isAuthenticated={isAuthenticated}
      setIsAuthenticated={setIsAuthenticated}
    />
  );
}

// function DrawerNavigation() {
//   const Drawer = createDrawerNavigator();

//   return (
//     <Drawer.Navigator >
//       <Drawer.Screen name="H" component={BottomTabs}/>
//       <Drawer.Screen name="MyInfoAndSettings" component={MyinfoAndSettings} />
//       <Drawer.Screen name="HelpAndSupport" component={HelpAndSupport} />
//     </Drawer.Navigator>
//   );
// }

function StackNavigator({isAuthenticated, setIsAuthenticated}) {
  const Stack = createStackNavigator();

  return (
    <Stack.Navigator>
      {isAuthenticated ? (
        <>
          <Stack.Screen name="DrawerNavigation" options={{headerShown: false}}>
            {() => <DrawerNavigation setIsAuthenticated={setIsAuthenticated} />}
          </Stack.Screen>
          <Stack.Screen
            options={{
              headerTitle: () => <ContestHeader />,
              headerStyle: {
                backgroundColor: '#3385ff',
              },
              headerTintColor: '#fff',
            }}
            name="ContestScreen"
            component={ContestScreen}
          />
          <Stack.Screen
            options={{
              headerTitle: () => <ContestHeader />,
              headerStyle: {
                backgroundColor: '#3385ff',
              },
              headerTintColor: '#fff',
            }}
            name="ContestDetailScreen"
            component={ContestDetailScreen}
          />
          <Stack.Screen
            options={{
              headerTitle: () => <ContestHeader />,
              headerStyle: {
                backgroundColor: '#3385ff',
              },
              headerTintColor: '#fff',
            }}
            name="MyTeam"
            component={MyTeam}
          />
          <Stack.Screen
            options={{headerShown: false}}
            name="CreateTeam"
            component={CreateTeam}
          />

          <Stack.Screen
          options={{
            headerStyle:{
             backgroundColor:"#3385ff"
            },
            headerTitle:"Notifications",
            headerTitleStyle:{
             color:"#fff",
             fontSize:hp(2)
            },
            headerTintColor:"#fff"
          
            
         }}
            name="HomeNotification"
            component={HomeNotification}
          />
          <Stack.Screen
            options={{headerShown: false}}
            name="All"
            component={All}
          />
          <Stack.Screen     
            options={{headerShown: false}}
            name="Offers"
            component={Offers}
          />

        
          <Stack.Screen name="GettingStarted" component={GettingStarted} options={{headerShown: false}} />
          <Stack.Screen name="Impact11" component={Impact11} options={{headerShown: false}} />
          <Stack.Screen name="GetTheApp" component={GetTheApp} options={{headerShown: false}} />
          <Stack.Screen name="LostNumber" component={LostNumber} options={{headerShown: false}} />
          <Stack.Screen name="QOTP" component={QOTP} options={{headerShown: false}} />
          <Stack.Screen name="QSignUp" component={QSignUp} options={{headerShown: false}} />
          <Stack.Screen name="StillPlay" component={StillPlay} options={{headerShown: false}} />
          
          <Stack.Screen name="PlayingOnImpact" component={PlayingOnImpact} options={{headerShown: false}} />
          <Stack.Screen name="EditTeams" component={EditTeams} options={{headerShown: false}} />
          <Stack.Screen name="EditAfterMatch" component={EditAfterMatch} options={{headerShown: false}} />
          <Stack.Screen name="DeleteTeam" component={DeleteTeam} options={{headerShown: false}} />
          <Stack.Screen name="SwitchTeams" component={SwitchTeams} options={{headerShown: false}} />
          <Stack.Screen name="MultipleTeam" component={MultipleTeam} options={{headerShown: false}} />
          <Stack.Screen name="IncorrectLineup" component={IncorrectLineup} options={{headerShown: false}} />
          <Stack.Screen name="PlayerDoNotPlay" component={PlayerDoNotPlay} options={{headerShown: false}} />
          <Stack.Screen name="ContestJoin" component={ContestJoin} options={{headerShown: false}} />
          <Stack.Screen name="PublicPrivateContest" component={PublicPrivateContest} options={{headerShown: false}} />
          <Stack.Screen name="FlexibileContest" component={FlexibileContest} options={{headerShown: false}} />
          <Stack.Screen name="UnfilledContest" component={UnfilledContest} options={{headerShown: false}} />
          <Stack.Screen name="FindContest" component={FindContest} options={{headerShown: false}} />

          <Stack.Screen name="ScoresAndPoints" component={ScoresAndPoints} options={{headerShown: false}} />
          <Stack.Screen name="ScorePoints" component={ScorePoints} options={{headerShown: false}} />
          <Stack.Screen name="PointsNotUpdated" component={PointsNotUpdated} options={{headerShown: false}} />
          <Stack.Screen name="PointsForSuperOver" component={PointsForSuperOver} options={{headerShown: false}} />
          <Stack.Screen name="SubstitutePlayer" component={SubstitutePlayer} options={{headerShown: false}} />

          <Stack.Screen name="HSMyBalance" component={HSMyBalance} options={{headerShown: false}} />
          <Stack.Screen name="WithDrawWinnings" component={WithDrawWinnings} options={{headerShown: false}} />
          <Stack.Screen name="WithdrawalRequest" component={WithdrawalRequest} options={{headerShown: false}} />
          <Stack.Screen name="CheckStatusWithdrawal" component={CheckStatusWithdrawal} options={{headerShown: false}} />
          <Stack.Screen name="WithdrawalBankAccDetails" component={WithdrawalBankAccDetails} options={{headerShown: false}} />
          <Stack.Screen name="WithdrawalRequestCancel" component={WithdrawalRequestCancel} options={{headerShown: false}} />
          <Stack.Screen name="DiscountBonus" component={DiscountBonus} options={{headerShown: false}} />
          <Stack.Screen name="AddCashMyBalance" component={AddCashMyBalance} options={{headerShown: false}} />
          <Stack.Screen name="ManageWallets" component={ManageWallets} options={{headerShown: false}} />
          <Stack.Screen name="ManageCards" component={ManageCards} options={{headerShown: false}} />

          <Stack.Screen name="Winnings" component={Winnings} options={{headerShown: false}} />
          <Stack.Screen name="InformCashPrize" component={InformCashPrize} options={{headerShown: false}} />
          <Stack.Screen name="ReceiveMyWinnings" component={ReceiveMyWinnings} options={{headerShown: false}} />
          <Stack.Screen name="Distributed" component={Distributed} options={{headerShown: false}} />
          <Stack.Screen name="TaxWinnings" component={TaxWinnings} options={{headerShown: false}} />

          <Stack.Screen name="ProfileAndVerification" component={ProfileAndVerification} options={{headerShown: false}} />
          <Stack.Screen name="ChangeMobileNumber" component={ChangeMobileNumber} options={{headerShown: false}} />
          <Stack.Screen name="ChangeMailId" component={ChangeMailId} options={{headerShown: false}} />
          <Stack.Screen name="ChangeTeamName" component={ChangeTeamName} options={{headerShown: false}} />
          <Stack.Screen name="ChangeState" component={ChangeState} options={{headerShown: false}} />
          <Stack.Screen name="Calculate" component={Calculate} options={{headerShown: false}} />
          <Stack.Screen name="NotReceivingMail" component={NotReceivingMail} options={{headerShown: false}} />
          <Stack.Screen name="VerifyImapact11P" component={VerifyImapact11P} options={{headerShown: false}} />
          <Stack.Screen name="PanVerify" component={PanVerify} options={{headerShown: false}} />
          <Stack.Screen name="AadharVerifyWhy" component={AadharVerifyWhy} options={{headerShown: false}} />
          <Stack.Screen name="PanReject" component={PanReject} options={{headerShown: false}} />
          <Stack.Screen name="BankAccReject" component={BankAccReject} options={{headerShown: false}} />
          <Stack.Screen name="ChangePan" component={ChangePan} options={{headerShown: false}} />
          <Stack.Screen name="BankAccChange" component={BankAccChange} options={{headerShown: false}} />
          <Stack.Screen name="CompleteVerification" component={CompleteVerification} options={{headerShown: false}} />

          <Stack.Screen name="OffersAndRewards" component={OffersAndRewards} options={{headerShown: false}} />
          <Stack.Screen name="InviteFriends" component={InviteFriends} options={{headerShown: false}} />
          <Stack.Screen name="Earn" component={Earn} options={{headerShown: false}} />
          <Stack.Screen name="MaximumInvite" component={MaximumInvite} options={{headerShown: false}} />

          <Stack.Screen name="Security" component={Security} options={{headerShown: false}} />
          <Stack.Screen name="AccountSecurity" component={AccountSecurity} options={{headerShown: false}} />
          <Stack.Screen name="Ensure" component={Ensure} options={{headerShown: false}} />
          <Stack.Screen name="Guide" component={Guide} options={{headerShown: false}} />

          <Stack.Screen name="LegalityScreen" component={LegalityScreen} options={{headerShown: false}} />
          <Stack.Screen name="GameLegal" component={GameLegal} options={{headerShown: false}} />
          <Stack.Screen name="Allow" component={Allow} options={{headerShown: false}} />

          <Stack.Screen name="FairPlay" component={FairPlay} options={{headerShown: false}} />
          <Stack.Screen name="FairPlayViolation" component={FairPlayViolation} options={{headerShown: false}} />
          <Stack.Screen name="Suspicious" component={Suspicious} options={{headerShown: false}} />
          <Stack.Screen name="AccessToChangeTeam" component={AccessToChangeTeam} options={{headerShown: false}} />
          <Stack.Screen name="MatchDeadline" component={MatchDeadline} options={{headerShown: false}} />
          <Stack.Screen name="DetailsSafe" component={DetailsSafe} options={{headerShown: false}} />
          <Stack.Screen name="LosingGame" component={LosingGame} options={{headerShown: false}} />

          {/* <Stack.Screen name="AddCash" component={AddCash} options={{headerShown: false}} /> */}

        </>
      ) : (
        <>


         <Stack.Screen name="LoginEmail" component={LoginEmail} options={{headerShown: false}} />
        <Stack.Screen name="otp" component={Otp} options={{headerShown: false}} />
        <Stack.Screen name="CarouselScreen" component={CarouselScreen} options={{headerShown: false}} />
        <Stack.Screen name="LoginPhone" component={LoginPhone} options={{headerShown: false}} />
        <Stack.Screen name="RegisterPage" component={RegisterPage} options={{headerShown: false}} />
          <Stack.Screen name="Nameregister" component={Nameregister} options={{headerShown: false}} />
          <Stack.Screen name="CricketPonits" component={CricketPonits} options={{headerShown: false}} />
          <Stack.Screen name="Football" component={Football} options={{headerShown: false}} />

       
       


          <Stack.Screen name="DrawerNavigation">
            {() => <DrawerNavigation setIsAuthenticated={setIsAuthenticated} />}
          </Stack.Screen>
        </>
      )}
    </Stack.Navigator>
  );
}



function DrawerNavigation({setIsAuthenticated}) {
  const Drawer = createDrawerNavigator();

  return (
    <Drawer.Navigator
      drawerContent={props => <DrawerHeader {...props} />}
      screenOptions={{
        headerShown: false,
      }}>
      <Drawer.Screen name="home">
        {() => <BottomTabs setIsAuthenticated={setIsAuthenticated} />}
      </Drawer.Screen>
      <Drawer.Screen
        name="Help & Support"
        component={HelpAndSupport}
        options={{
          headerShown: false,
        }}
      />
      <Drawer.Screen
        name="Fantasy Point System"
        component={FantacyPointsSystems}
        options={{
          headerShown: false,
        }}
      />
      <Drawer.Screen
        options={{
          headerShown: false,
        }}
        name="How To Play?"
        component={HowToPlay}
      />
      <Drawer.Screen
        options={{
          headerShown: false,
        }}
        name="Legality"
        component={Legality}
      />
      <Drawer.Screen
        name="Terms & Condition"
        component={TermsAndCondition}
        options={{
          headerShown: false,
        }}
      />
      <Drawer.Screen
        name="About us"
        component={AboutUs}
        options={{
          headerShown: false,
        }}
      />
    
    </Drawer.Navigator>
  );
}

// Bottom Tabs Navigation
function BottomTabs({setIsAuthenticated, navigation}) {
  const Tab = createBottomTabNavigator();
  const {setTabName} = useSport();

  const handleTab = tabName => {
    console.log(`Tab switched to: ${tabName}`);
    setTabName(tabName);
  };

  return (
    <Tab.Navigator screenOptions={{headerShown: true}}>
      <Tab.Screen
        name="Home"
        component={TopScreen}
        options={{
          tabBarLabel: 'Home',
          header: () => getHeaderRight(navigation),
        }}
        listeners={{tabPress: () => handleTab('home')}}
      />
      <Tab.Screen
        name="MyMatches"
        component={TopScreen}
        listeners={{tabPress: () => handleTab('matches')}}
      />

      <Tab.Screen
        name="ReferAndEarn"
        component={ReferAndEarn}
        options={{headerShown: false}}
      />
      <Tab.Screen name="Profile">
        {() => <Profile setIsAuthenticated={setIsAuthenticated} />}
      </Tab.Screen>
    </Tab.Navigator>
  );
}

function TopScreen() {
  const Tab = createMaterialTopTabNavigator();
  const {setSelectedSport, selectedSport, TabName} = useSport();

  const initialRouteName =
    selectedSport === 'Football' && TabName === 'matches'
      ? 'Football'
      : 'Cricket';

  const handleTabPress = sport => {
    console.log(`Sport switched to: ${sport}`);
    setSelectedSport(sport);
  };

  return (
    <Tab.Navigator
      initialRouteName={initialRouteName}
      screenOptions={{
        tabBarLabelStyle: {fontWeight: 'bold', color: 'white'},
        tabBarStyle: {backgroundColor: '#3385ff'},
        swipeEnabled: false,
        tabBarIndicator: false,
      }}>
      <Tab.Screen
        name="Cricket"
        component={Cricket}
        listeners={{tabPress: () => handleTabPress('Cricket')}}
      />
      <Tab.Screen
        name="Football"
        component={Football}
        listeners={{tabPress: () => handleTabPress('Football')}}
      />
    </Tab.Navigator>
  );
}

export default function Navigation() {
  return (
    <SportProvider>
      <NavigationContainer>
        <AppWrapper />
      </NavigationContainer>
    </SportProvider>
  );
}

// Styles
const styles = StyleSheet.create({
  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  headerTitle: {fontSize: 18, fontWeight: 'bold', color: '#3385ff'},
});