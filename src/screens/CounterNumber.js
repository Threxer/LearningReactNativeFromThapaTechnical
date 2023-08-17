import React, { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View, LogBox } from "react-native";

const CounterNumber = () => {
  const [counter, setCounter] = useState(0);
  return (
    <View>
      <Text style={styles.counter}> {counter} </Text>

      <View style={styles.button_group}>
        <TouchableOpacity
          style={styles.commonButton}
          onPress={() => {
            setCounter(counter + 10);
            console.log(counter);
          }}
        >
          <Text style={styles.commonText}> + 10</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.commonButton}
          onPress={() => {
            setCounter(0);
          }}
        >
          <Text style={styles.commonText}> Reset</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.commonButton}
          onPress={() => {
            if (counter > 0) setCounter(counter - 10);
            console.log(counter);
          }}
        >
          <Text style={styles.commonText}> - 10</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  button_group: {
    width: "100%",
    display: "flex",
    alignItems: "center",
  },
  counter: {
    fontSize: 80,
    textAlign: "center",
    width: "100%",
    padding: 20,
    marginTop: 60,
    marginBottom: 30,
  },
  commonButton: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "black",
    borderRadius: 10,
    marginVertical: 20,
    height: 90,
    width: 200,
  },
  commonText: {
    fontSize: 25,
    fontWeight: "bold",
    color: "white",
    letterSpacing: 0.8,
  },
});

export default CounterNumber;
