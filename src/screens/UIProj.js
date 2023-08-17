import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";

const UIProj = () => {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.header}>Wallet</Text>
        <Text style={styles.header}>Wallet</Text>
      </View>
      <View>
        <TouchableOpacity />
        <TouchableOpacity />
        <TouchableOpacity />
        <TouchableOpacity />
      </View>
      <View>
        <FlatList />
      </View>
    </View>
  );
};

export default UIProj;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "orange",
    marginTop: 20,
    marginBottom: 20,
  },
  header: {
    fontSize: 30,
    marginBottom: 20,
    // fontFamily: "Britanica-Black-Regular",
  },
});
