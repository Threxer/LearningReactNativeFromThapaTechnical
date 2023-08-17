import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";

const CardDetail = (roger) => {
  return (
    <View style={styles.listStyle}>
      <Text style={styles.textStyle}> {roger.textData}</Text>
      <Image style={styles.imageStyle} source={roger.imgSrc} />
    </View>
  );
};

const styles = StyleSheet.create({
  listStyle: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  textStyle: {
    fontSize: 30,
    marginTop: 100,
  },
  imageStyle: {
    width: 150,
    height: 150,
  },
});

export default CardDetail;
