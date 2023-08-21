// #fefbd0 for balance amount
// #fffdfc for wallet
// #363057 for my assets
// #2a2a2a for text in my assets
// #f0c46b for buttons
// ()=>()

import { StyleSheet, Text, TouchableOpacity, View, Image } from "react-native";
import React from "react";
import { useFonts } from "expo-font";
import AppLoading from "expo-app-loading";

const UIProj = () => {
  // let [loaded] = useFonts({
  //   "Britanica-Regular": require("./../assets/fonts/Britanica-regular.ttf"),
  // });

  // if (!loaded) {
  //   <AppLoading />;
  // }

  const nothing = () => {};

  return (
    <View style={styles.mainScreen}>
      <View style={styles.topBar}>
        <Text style={styles.titleText}>Wallet</Text>
        <View style={styles.topButtons}>
          <TouchableOpacity
            style={[styles.brCommon, styles.headerIcon]}
            onPress={nothing}
          >
            <Image
              style={[styles.headIconImage, styles.brCommon]}
              source={require("../../assets/icons8-notification-96.png")}
              resizeMode="contain"
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.brCommon, styles.headerIcon]}
            onPress={nothing}
          >
            <Image
              style={[styles.headIconImage, styles.brCommon]}
              source={require("../../assets/icons8-user-96.png")}
              resizeMode="contain"
            />
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.midScreen}>
        <Text style={styles.balTxt}>$23,867</Text>
        <Text style={styles.walletTxt}>Wallet id:26789340480</Text>
        <View style={styles.midScreenIcons}>
          <TouchableOpacity style={styles.txnsIcon}>
            <Image
              style={styles.coinImage}
              source={require("../../assets/icons8-down-left-arrow-96.png")}
              resizeMode="contain"
            />
          </TouchableOpacity>
          <TouchableOpacity style={styles.txnsIcon}>
            <Image
              style={styles.coinImage}
              source={require("../../assets/icons8-down-left-arrow-96.png")}
              resizeMode="contain"
            />
          </TouchableOpacity>
          <TouchableOpacity style={styles.txnsIcon}>
            <Image
              style={styles.coinImage}
              source={require("../../assets/icons8-ethereum-128.png")}
              resizeMode="contain"
            />
          </TouchableOpacity>
          <TouchableOpacity style={styles.txnsIcon}>
            <Image
              style={styles.txnsIcon}
              source={require("../../assets/icons8-ethereum-128.png")}
              resizeMode="contain"
            />
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.bottomScreen}>
        <Text style={styles.boxTitleTxt}>My Assets</Text>
        <View style={styles.mainCoin}>
          <View>
            <Image
              style={styles.coinImage}
              source={require("../../assets/icons8-ethereum-128.png")}
              resizeMode="contain"
            />
          </View>
          <View style={styles.coinView}>
            <View>
              <Text style={styles.text1}>Ethereum</Text>
              <Text style={styles.text2}>13.98%($28015)</Text>
            </View>
            <View>
              <Text style={styles.text1}>69.844 ETH</Text>
              <Text style={styles.text2}>$100,000.00</Text>
            </View>
          </View>
        </View>
        <View>
          <View>
            <Image
              style={styles.coinImage}
              source={{
                uri: "https://img.icons8.com/stickers/100/000000/about.png",
              }}
              resizeMode="contain"
            />
          </View>
          <View>
            <Text style={styles.text1}>Binance</Text>
            <Text style={styles.text2}>13.98%($28015)</Text>
          </View>
          <View>
            <Text style={styles.text1}>69.844 ETH</Text>
            <Text style={styles.text2}>$100,000.00</Text>
          </View>
        </View>
        <View>
          <View>
            <Image
              style={styles.coinImage}
              source={{
                uri: "https://img.icons8.com/stickers/100/000000/about.png",
              }}
              resizeMode="contain"
            />
          </View>
          <View>
            <Text style={styles.text1}>Tether USD</Text>
            <Text style={styles.text2}>13.98%($28015)</Text>
          </View>
          <View>
            <Text style={styles.text1}>69.844 ETH</Text>
            <Text style={styles.text2}>$100,000.00</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mainScreen: {
    backgroundColor: "#d46740",
    // flex: "100%",
    paddingVertical: 10,
    paddingHorizontal: 15,
    width: "100%",
    height: "100%",
  },
  topBar: {
    width: "100%",
    height: undefined,
    flexDirection: "row",
    justifyContent: "space-between",
    paddingTop: 60,
    alignItems: "center",
  },
  titleText: {
    fontSize: 25,
    fontWeight: "bold",
    letterSpacing: 1,
    color: "#eee",
  },
  topButtons: {
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
  brCommon: {
    borderRadius: 50,
  },
  headerIcon: {
    marginHorizontal: 5,
  },
  headIconImage: {
    width: 43,
    height: 40,
    backgroundColor: "#feedd2",
  },
  midScreen: {
    width: "100%",
    height: "35%",
    justifyContent: "space-around",
  },
  midScreenIcons: {
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
  balTxt: {
    marginTop: 40,
    textAlign: "center",
    fontSize: 70,
    color: "#fefbd0",
    // fontFamily: "Britanica-Regular",
  },
  walletTxt: {
    textAlign: "center",
    fontSize: 15,
    color: "#fffdfc",
  },
  txnsIcon: {
    width: 60,
    height: 60,
    borderRadius: 60,
    backgroundColor: "#f0c46b",
  },
  bottomScreen: {
    width: "100%",
    height: "25%",
    flexDirection: "column",
  },
  boxTitleTxt: {
    fontSize: 35,
  },
  mainCoin: {
    flexDirection: "row",

    justifyContent: "space-evenly",
  },
  // coinView: {
  //   flexDirection: "row",
  //   justifyContent: "space-between",
  // },
  coinImage: {
    width: 45,
    height: 45,
    alignSelf: "flex-start",
  },
  // text1: {
  //   width: 1,
  // },
  // text2: {
  //   width: 1,
  // },
});

export default UIProj;
