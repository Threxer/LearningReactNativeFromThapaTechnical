import {
  FlatList,
  StyleSheet,
  Text,
  View,
  Image,
  ActivityIndicator,
} from "react-native";
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
    <View style={styles.mainContainer}>
      {isLoaded ? (
        <View style={styles.loader}>
          <ActivityIndicator size="large" color="#0000ff" />
        </View>
      ) : (
        <View>
          <Text style={styles.mainHeader}> List Of Students</Text>
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
                  <View>
                    <View style={styles.bioDataContainer}>
                      <Text style={styles.bioData}>Bio-Data</Text>
                      <Text style={styles.idNumber}>
                        {item.id < 10 ? `#0${item.id}` : `#${item.id}`}
                      </Text>
                    </View>

                    <View style={styles.detailsContainer}>
                      <Text style={styles.myName}>Name: {item.name}</Text>
                      <Text style={styles.myName}>Email: {item.email}</Text>
                      <Text style={styles.myName}>Mobile: {item.mobile}</Text>
                    </View>
                  </View>
                </View>
              );
            }}
          />
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  loader: {
    minHeight: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },

  mainContainer: {
    width: "100%",
    paddingTop: 50,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#b696d7",
  },
  card: {
    width: 250,
    backgroundColor: "#fff",
    borderRadius: 5,
    marginVertical: 20,
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
  },
  imgContainer: {
    padding: 10,
  },
  imgStyle: {
    width: "100%",
    height: 180,
  },
  bioDataContainer: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#353535",
    paddingVertical: 10,
  },
  detailsContainer: {
    backgroundColor: "#353535",
    borderRadius: 5,
  },
  bioData: {
    fontSize: 30,
    color: "#fff",
    paddingLeft: 5,
  },
  idNumber: {
    fontSize: 30,
    color: "rgba(255,255,255,0.5)",
  },
  myName: {
    color: "#fff",
    padding: 5,
    fontSize: 20,
  },
  mainHeader: {
    fontSize: 20,
    color: "#fff",
  },
});

export default HookEffect;
