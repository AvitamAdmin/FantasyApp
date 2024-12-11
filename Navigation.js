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

// Import Screens
import LoginWithEmail from './src/Auth/LoginScreen';
import Nameregister from './src/Auth/NameRegister';
import OtpScreen from './src/Auth/OtpScreen';
import Profile from './src/BottomTabs/Profile';
import ReferAndEarn from './src/BottomTabs/ReferAndEarn';
import FantacyPointsSystems from './src/DrawerScreens/FantacyPointsSystems';
import HowToPlay from './src/DrawerScreens/HowToPlay';
import AboutUs from './src/DrawerScreens/AboutUs';
import MyinfoAndSettings from './src/DrawerScreens/MyinfoAndSettings';
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
import More from './src/DrawerScreens/More';
import ContestHeader from './src/Screens/ContestScreen/ContestHeader';

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
        </>
      ) : (
        <>
          <Stack.Screen name="LoginWithEmail" component={LoginWithEmail} />
          <Stack.Screen name="Nameregister" component={Nameregister} />
          <Stack.Screen name="OTP" component={OtpScreen} />
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
        name="How to Play"
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
        name="TermsAndCondition"
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
      <Drawer.Screen
        name="More"
        component={More}
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