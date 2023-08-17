import React from "react";
import {
  Text,
  View,
  StyleSheet,
  Button,
  Alert,
  TouchableOpacity,
  Image,
} from "react-native";

const OurButton = () => {
  return (
    <View>
      <Text style={styles.textStyle}>Buttons </Text>
      <Button
        color="#ff7f50"
        // disabled
        title="Join Now"
        onPress={() => {
          console.log("Roger will become a React Native Developer.");
          Alert.alert("Its Canon");
        }}
      />
      <TouchableOpacity
        color="#ff7f50"
        onPress={() => {
          // console.log("Roger will become a React Native Developer.");
          Alert.alert("Its Canon");
        }}
      >
        <Image
          style={styles.imageStyle}
          source={require("../../assets/favicon.png")}
        />
        <Text>Roger will become a React Native Developer.</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  textStyle: {
    marginVertical: 200,
    textAlign: "center",
    fontSize: 30,
    textDecorationColor: "black",
  },
  imageStyle: {
    width: 200,
    height: 200,
    alignContent: "center",
  },
});

export default OurButton;
