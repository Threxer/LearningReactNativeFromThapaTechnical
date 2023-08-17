import { Text, View, Image, StyleSheet, Button, Linking } from "react-native";
import React from "react";
import AppLoading from "expo-app-loading";
import {
  useFonts,
  JosefinSans_100Thin,
  JosefinSans_200ExtraLight,
  JosefinSans_300Light,
  JosefinSans_400Regular,
  JosefinSans_500Medium,
  JosefinSans_600SemiBold,
  JosefinSans_700Bold,
  JosefinSans_100Thin_Italic,
  JosefinSans_200ExtraLight_Italic,
  JosefinSans_300Light_Italic,
  JosefinSans_400Regular_Italic,
  JosefinSans_500Medium_Italic,
  JosefinSans_600SemiBold_Italic,
  JosefinSans_700Bold_Italic,
} from "@expo-google-fonts/josefin-sans";

const NetflixCard = () => {
  let [fontsLoad] = useFonts({
    JosefinSans_100Thin,
    JosefinSans_200ExtraLight,
    JosefinSans_300Light,
    JosefinSans_400Regular,
    JosefinSans_500Medium,
    JosefinSans_600SemiBold,
    JosefinSans_700Bold,
    JosefinSans_100Thin_Italic,
    JosefinSans_200ExtraLight_Italic,
    JosefinSans_300Light_Italic,
    JosefinSans_400Regular_Italic,
    JosefinSans_500Medium_Italic,
    JosefinSans_600SemiBold_Italic,
    JosefinSans_700Bold_Italic,
  });
  if (!fontsLoad) {
    return <AppLoading />;
  }

  return (
    <View style={styles.container}>
      <Text style={styles.header}> Netflix Card </Text>
      <View style={styles.poster}>
        <Image
          style={styles.imgStyle}
          source={{
            uri: "https:www.heavenofhorror.com/wp-content/uploads/2021/10/my-name-netflix.jpg",
          }}
        />
      </View>
      <View style={styles.poster_info}>
        <Text style={styles.poster_title}>My Name</Text>
        <Text style={styles.poster_text}>
          Following her father's murder, a revenge-driven woman puts her trust
          in a powerful crime boss -- and enters the force under his direction.
        </Text>
        <Button
          title="Watch This"
          onPress={() =>
            Linking.openURL("https://www.youtube.com/watch?v=ZOl7iOrD31Q")
          }
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 50,
    justifyContent: "center",
    alignItems: "center",
  },
  header: {
    fontSize: 45,
    marginBottom: 20,
    fontFamily: "JosefinSans_700Bold",
    color: "rgb(255,0,0)",
    // fontStyle: "italic",
    // fontWeight: "bold",
    fontVariant: ["small-caps"],
  },
  poster: {
    width: 250,
    borderWidth: 1,
    alignItems: "center",
  },
  poster_info: {
    alignItems: "center",
    marginVertical: 10,
  },
  poster_title: {
    fontSize: 35,
    marginBottom: 10,
    fontVariant: ["small-caps"],
    letterSpacing: 1,
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 10,
    textShadowColor: "rgba(0, 0, 0, 0.75)",
    textTransform: "uppercase",
  },
  poster_text: {
    color: "#999",
    paddingHorizontal: 20,
    marginBottom: 10,
    fontFamily: "JosefinSans_300Light",
    fontSize: 25,
    letterSpacing: 0.4,
    lineHeight: 25,
    textAlign: "justify",
  },
  imgStyle: {
    width: "100%",
    height: undefined,
    aspectRatio: 1.5,
  },
  buttonStyle: {
    borderWidth: 0,
    borderRadius: 20,
  },
});

export default NetflixCard;
