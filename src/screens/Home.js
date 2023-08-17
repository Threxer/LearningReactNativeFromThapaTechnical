import { View, Text, Button, StyleSheet } from "react-native";
import React from "react";
import { useFonts, Nunito_700Bold } from "@expo-google-fonts/nunito";
import AppLoading from "expo-app-loading";

const Home = ({ route, navigation }) => {
  const { myName } = route.params;
  let [fontLoaded, error] = useFonts({
    Nunito_700Bold,
  });

  if (!fontLoaded) {
    return <AppLoading />;
  }

  return (
    <View style={styles.mainContainer}>
      <Text style={styles.mainHeader}>Welcome {myName}</Text>
      <Button title="Go Back" onPress={() => navigation.goBack()} />
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    height: "100%",
    display: "flex",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    backgroundColor: "#fff",
    textAlign: "center",
  },
  mainHeader: {
    fontSize: 30,
    color: "#344055",
    textTransform: "uppercase",
    fontFamily: "Nunito_700Bold",
  },
});

export default Home;
