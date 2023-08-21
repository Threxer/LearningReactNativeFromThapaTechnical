import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import Menu from "../component/Menu";
import {
  useFonts,
  JosefinSans_400Regular,
} from "@expo-google-fonts/josefin-sans";
import { Nunito_700Bold } from "@expo-google-fonts/nunito";
import AppLoading from "expo-app-loading";

const Home = (props) => {
  let [fontsLoaded] = useFonts({
    JosefinSans_400Regular,
    Nunito_700Bold,
  });

  if (!fontsLoaded) {
    <AppLoading />;
  }

  const description = `I am an intern at DIGIINTERFACE. Currently I am learning React-Native for mobile app frontend. I have learned MySQL and Javascript at the company and am finishing up with RN right now with this project.`;

  return (
    <View style={styles.mainContainer}>
      <View style={styles.homeTop}>
        <Image
          style={styles.headerImage}
          source={require("../../assets/logo.jpeg")}
          resizeMode="contain"
        />
        <Text style={styles.mainHeader}>Welcome To Rogers Projects</Text>
        <Text
          style={[
            styles.mainHeader,
            {
              fontSize: 36,
              color: "#4c5dab",
              marginTop: 0,
            },
          ]}
        >
          {props.internName}
        </Text>
        <Text style={styles.paraStyle}> {description} </Text>
      </View>

      <View style={styles.menuStyle}>
        <View style={styles.lineStyle}></View>
        <Menu />
        <View
          style={[
            styles.lineStyle,
            {
              marginVertical: 10,
            },
          ]}
        ></View>
      </View>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  mainContainer: {
    height: "100%",
    display: "flex",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    backgroundColor: "#fff",
    textAlign: "center",
  },

  homeTop: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 5,
  },

  headerImage: {
    height: undefined,
    width: "75%",
    aspectRatio: 1,
    display: "flex",
    alignItems: "stretch",
    marginTop: 50,
    marginBottom: 20,
    borderRadius: 20,
  },

  mainHeader: {
    fontSize: 25,
    color: "#344055",
    textTransform: "uppercase",
    justifyContent: "center",
    textAlign: "center",
    fontFamily: "Nunito_700Bold",
  },

  paraStyle: {
    textAlign: "left",
    fontSize: 19,
    color: "#7d7d7d",
    marginTop: 30,
    paddingBottom: 50,
    lineHeight: 26,
    fontFamily: "JosefinSans_400Regular",
  },

  lineStyle: {
    marginBottom: 10,
    borderWidth: 0.5,
    borderColor: "grey",
  },
});
