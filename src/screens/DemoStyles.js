import { StyleSheet, Text, View } from "react-native";
import React from "react";

const DemoStyles = () => {
  return (
    <View>
      <View style={styles.parentView}>
        <Text style={[styles.childText1, styles.commonStyle]}>Box 1</Text>
        <Text style={[styles.childText2, styles.commonStyle]}>Box 2</Text>
        <Text style={[styles.childText3, styles.commonStyle]}>Box 3</Text>
        <Text style={[styles.childText4, styles.commonStyle]}>Box 4</Text>
        <View style={styles.subParent}>
          <Text style={[styles.childText5, styles.commonStyle]}>Box 5</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  parentView: {
    width: "95%",
    height: 500,
    marginTop: 100,
    marginHorizontal: 10,
    borderWidth: 3,
    borderColor: "#101820FF",
    backgroundColor: "aliceblue",
    position: "relative",
  },
  childText1: {
    backgroundColor: "#97BC62FF",
    borderColor: "#2C5F2D",
    color: "#2C5F2D",
  },
  childText2: {
    backgroundColor: "#D4B996FF",
    borderColor: "#A07855FF",
    color: "#A07855FF",
    right: 0,
  },
  childText3: {
    backgroundColor: "#9CC3D5FF",
    borderColor: "#0063B2FF",
    color: "#0063B2FF",
    alignSelf: "stretch",
    bottom: 0,
    right: 0,
  },
  childText4: {
    backgroundColor: "#9CC3D5FF",
    borderColor: "#0063B2FF",
    color: "#0063B2FF",
    bottom: 0,
  },
  childText5: {
    backgroundColor: "#9CC3D5FF",
    borderColor: "#0063B2FF",
    color: "#0063B2FF",
    // top: "25%",
    // left: "30%",
    alignSelf: "center",
  },
  commonStyle: {
    fontSize: 20,
    width: 60,
    height: 60,
    borderWidth: 1,
    position: "absolute",
  },
  subParent: {
    justifyContent: "center",
    width: "100%",
    height: "100%",
  },
});

export default DemoStyles;
