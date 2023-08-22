import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

const CopyTextApp = () => {
  const handleCopyPress = async () => {
    const textToCopy = "Text to be copied.";
    await Clipboard.setString(textToCopy);
  };

  return (
    <View style={styles.mainScreen}>
      <Text>Text to be copied.</Text>
      <TouchableOpacity onPress={handleCopyPress}>
        <Text>Copy Text</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  mainScreen: {
    backgroundColor: "#d46740",
    // flex: "100%",
    paddingVertical: 100,
    paddingHorizontal: 30,
    width: "100%",
    height: "100%",
  },
});

export default CopyTextApp;
