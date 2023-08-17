import { FlatList, StyleSheet, Text, View, Image } from "react-native";
import React, { useEffect, useState } from "react";

const HookEffect = () => {
  const [myLilData, setmyLilData] = useState();
  const [isLoaded, setIsLoaded] = useState(true);

  const getUserData = async () => {
    try {
      const response = await fetch(
        "https://thapatechnical.github.io/userapi/users.json"
      );
      const myData = await response.json();
      setmyLilData(myData);
      setIsLoaded(false);
      console.log(myData);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getUserData();
  }, []);
  return (
    <View>
      <FlatList
        data={myLilData}
        renderItem={({ item }) => {
          return (
            <View style={styles.card}>
              <View style={styles.imgContainer}>
                <Image
                  style={styles.imgStyle}
                  resizeMode="cover"
                  source={{ uri: item.image }}
                />
              </View>
              <View style={styles.bioDataContainer}>
                <Text style={styles.bioData}>Bio-Data</Text>
                <Text style={styles.idNumber}>{item.id}</Text>
              </View>
              <View style={styles.mainContain}>
                <Text style={styles.myName}>Name: {item.name}</Text>
                <Text style={styles.myName}>Email: {item.email}</Text>
                <Text style={styles.myName}>Mobile: {item.mobile}</Text>
              </View>
            </View>
          );
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({});

export default HookEffect;
