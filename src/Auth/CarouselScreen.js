import React, { useRef, useState } from 'react';
import { View, Text, ImageBackground, ScrollView, Pressable,Dimensions } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const CarouselScreen = ({ navigation }) => {
  const [activeIndex, setActiveIndex] = useState(0);  // State to keep track of the current active slide
  const scrollViewRef = useRef(null);     // Use ref for ScrollView to scroll programmatically

  // This function updates the activeIndex when the user scrolls
  const handleScroll = (event) => {
    const contentOffsetX = event.nativeEvent.contentOffset.x;
    const newIndex = Math.floor(contentOffsetX / wp("100%"));
    setActiveIndex(newIndex);
  };

  // Function to programmatically scroll to the next slide
  const goToNextSlide = () => {
    if (activeIndex < 2) {  // Only go to the next slide if we're not on the last one
      const nextIndex = activeIndex + 1;
      scrollViewRef.current.scrollTo({ x: nextIndex * wp("100%"), animated: true });
      setActiveIndex(nextIndex);  // Update activeIndex after scrolling
    } else {
      // Go to the login screen when reaching the last slide
      navigation.navigate("RegisterPage");
    }
  };

  // Function to handle dot press to navigate between slides
  const goToSlide = (index) => {
    scrollViewRef.current.scrollTo({ x: index * wp("100%"), animated: true });
    setActiveIndex(index);  // Update activeIndex when a dot is pressed
  };
  const screenHeight = Dimensions.get("window").height;
  const getSlideHeight = () => (screenHeight < 750 ? hp("95%") : hp("100%"));

  return (
    <View style={{ flex: 1 ,backgroundColor: "#3950B3" ,}}>
      <ScrollView
        horizontal
        pagingEnabled
        onScroll={handleScroll}
        showsHorizontalScrollIndicator={false}
        scrollEventThrottle={16}
        ref={scrollViewRef}  // Attach the ref to ScrollView
        contentOffset={{ x: activeIndex * wp("100%"), y: 0 }}  // Sync ScrollView with activeIndex
      >
        {/* Slide 1 */}
        <View style={{ width: wp("100%"), height: getSlideHeight() }}>
          <ImageBackground
            source={require("../../assets/Images-2.png")}
            resizeMode="cover"
            style={{ width: wp('100%'), height: hp('100%'), flex: 1 }}
          >
            <View style={{ flex: 1, justifyContent: 'flex-end', paddingBottom: hp("13%"),  }}>
              <View style={{ justifyContent: 'center', alignItems: 'center', paddingVertical: hp(2) }}>
                <Text style={{ color: "#fff", fontWeight: "bold", fontSize: hp(2.3) }}>
                  Join Contests with Just ₹1
                </Text>
              </View>
              <View style={{ width: wp("100%"), alignItems: 'center', }}>
                <Text style={{ color: "#fff", fontSize: hp(1.6), textAlign: 'center' }}>
                  Get in on the action by joining contests starting at just 1 </Text>
                  <Text style={{ color: "#fff", fontSize: hp(1.6), textAlign: 'center' }}> 
                  rupee. Enjoy the excitement without breaking the bank!</Text>
              </View>
            </View>
          </ImageBackground>
        </View>

        {/* Slide 2 */}
        <View style={{ width: wp("100%"), height: getSlideHeight() }}>
          <ImageBackground
            source={require("../../assets/Images-1.png")}
            resizeMode="cover"
            style={{ width: wp('100%'), height: hp('100%'), flex: 1 }}
          >
            <View style={{ flex: 1, justifyContent: 'flex-end', paddingBottom: hp("13%") }}>
              <View style={{ justifyContent: 'center', alignItems: 'center', paddingVertical: hp(2) }}>
                <Text style={{ color: "#fff", fontWeight: "bold", fontSize: hp(2.4) }}>
                  COMPLETE WITH REAL PLAYERS
                </Text>
              </View>
              <View style={{ width: wp("100%"), alignItems: 'center', }}>
                <Text style={{ color: "#fff", fontSize: hp(1.6), textAlign: 'center' }}>
                  Create your fantasy cricket team and compete with real</Text>
                  <Text style={{ color: "#fff", fontSize:  hp(1.6), textAlign: 'center' }}>
                  players. Dive into the action and showcase your cricket </Text>
                  <Text style={{ color: "#fff", fontSize:  hp(1.6), textAlign: 'center' }}>knowledge!</Text>
               
              </View>
            </View>
          </ImageBackground>
        </View>

        {/* Slide 3 */}
        <View style={{ width: wp("100%"), height: getSlideHeight() }}>
          <ImageBackground
            source={require("../../assets/Images.png")}
            resizeMode="cover"
            style={{ width: wp('100%'), height: hp('100%'), flex: 1 }}
          >
            <View style={{ flex: 1, justifyContent: 'flex-end', paddingBottom: hp("13%") }}>
              <View style={{ justifyContent: 'center', alignItems: 'center', paddingVertical: hp(2) }}>
                <Text style={{ color: "#fff", fontWeight: "bold", fontSize: hp(2.5) }}>
                  Everyone Can Win
                </Text>
              </View>
              <View style={{ width: wp("100%"), alignItems: 'center', }}>
                <Text style={{ color: "#fff", fontSize: hp(1.6), textAlign: 'center' }}>
                  Whether you're a newbie or a pro, everyone has a chance to</Text>
                <Text style={{ color: "#fff", fontSize: hp(1.6), textAlign: 'center' }}>
                win amazing prizes. Join us and see if you have what it takes </Text>
                <Text style={{ color: "#fff", fontSize: hp(1.6), textAlign: 'center' }}>
                  to rise to the top!</Text>
                
              </View>
            </View>
          </ImageBackground>
        </View>
      </ScrollView>

      {/* Dots Indicator and NEXT/GET STARTED button */}
      <View style={{ position: 'absolute', bottom: hp(3), left: 0, right: 0, alignItems: 'center' }}>
        {/* Dots Indicator */}
        <View style={{ flexDirection: 'row', justifyContent: 'center', marginBottom: hp(2) }}>
          {Array.from({ length: 3 }).map((_, index) => (
            <Pressable key={index} onPress={() => goToSlide(index)}>
              <View
                style={{
                  width: activeIndex === index ? 15 : 8,
                  height: 6,
                  borderRadius: 5,
                  backgroundColor: activeIndex === index ? '#fff' : '#ccc',
                  margin: 2,
                }}
              />
            </Pressable>
          ))}
        </View>

        {/* Conditionally Rendered Button */}
       

        
        <Pressable
          onPress={goToNextSlide}  // Navigate to the next slide or login
          style={{
            width: wp("90%"),
            justifyContent: "center",
            alignItems: "center",
            padding: 12,
            backgroundColor: "#fff",
            borderRadius: 7,
          }}
        >
          <Text style={{ color: "#3757E2", fontSize: hp(1.7), fontWeight: 'bold' }}>
            {activeIndex === 2 ? "GET STARTED" : "NEXT"}
          </Text>
        </Pressable>
        {/* </View> */}
      </View>
    
    </View>
  );
};

export default CarouselScreen;