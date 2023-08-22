// #fefbd0 for balance amount
// #fffdfc for wallet
// #363057 for my assets
// #2a2a2a for text in my assets
// #f0c46b for buttons
// ()=>()

import { StyleSheet, Text, TouchableOpacity, View, Image } from "react-native";
import React, { useState } from "react";
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

  // const [walletId, setWalletId] = useState('');

  return (
    <View style={styles.mainScreen}>
      <View style={styles.topBar}>
        <Text style={styles.titleText}>Wallet</Text>
        <View style={styles.topButtons}>
          <TouchableOpacity style={styles.brCommon} onPress={nothing}>
            <Image
              style={styles.headIconImage}
              source={require("../../assets/icons8-notification-96.png")}
              resizeMode="contain"
            />
          </TouchableOpacity>
          <TouchableOpacity style={styles.brCommon} onPress={nothing}>
            <Image
              style={styles.headIconImage}
              source={require("../../assets/icons8-user-96.png")}
              resizeMode="contain"
            />
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.midScreen}>
        <Text style={styles.balTxt}>$23,867</Text>
        <Text style={styles.walletTxt}>Wallet id:</Text>
        <View style={styles.midScreenIcons}>
          <TouchableOpacity style={styles.txnsIcon}>
            <Image
              style={styles.txnsImg}
              source={require("../../assets/down-left-arrow_8591505.png")}
              resizeMode="contain"
            />
          </TouchableOpacity>
          <TouchableOpacity style={styles.txnsIcon}>
            <Image
              style={styles.txnsImg}
              source={require("../../assets/up-right-arrow_8591645.png")}
              resizeMode="contain"
            />
          </TouchableOpacity>
          <TouchableOpacity style={styles.txnsIcon}>
            <Image
              style={styles.txnsImg}
              source={require("../../assets/refresh_8618502.png")}
              resizeMode="contain"
            />
          </TouchableOpacity>
          <TouchableOpacity style={styles.txnsIcon}>
            <Image
              style={styles.txnsImg}
              source={require("../../assets/plus_10233500.png")}
              resizeMode="contain"
            />
          </TouchableOpacity>
        </View>
      </View>
      <View>
        <View style={styles.bottomScreen}>
          <View style={styles.boxTitle}>
            <Text style={styles.boxTitleTxt}>My Assets</Text>
            <Text style={styles.boxTitleTxt}>My Transactions</Text>
          </View>
          <View style={styles.mainCoin}>
            <View style={styles.littleCoin}>
              <Image
                style={styles.coinImage}
                source={require("../../assets/icons8-ethereum-128.png")}
                resizeMode="contain"
              />
              <View>
                <Text style={styles.text1}>Ethereum</Text>
                <Text style={styles.text2}>13.98% ($28015)</Text>
              </View>
            </View>
            <View style={styles.coinView}>
              <View>
                <Text style={styles.text1}>69.844 ETH</Text>
                <Text style={styles.text2}>$100,000.00</Text>
              </View>
            </View>
          </View>
          <View style={styles.mainCoin}>
            <View style={styles.littleCoin}>
              <Image
                style={styles.coinImage}
                source={require("../../assets/Bnb.png")}
                resizeMode="contain"
              />
              <View>
                <Text style={styles.text1}>Binance</Text>
                <Text style={styles.text2}>13.98% ($28015)</Text>
              </View>
            </View>
            <View style={styles.coinView}>
              <View>
                <Text style={styles.text1}>69.844 BNB</Text>
                <Text style={styles.text2}>$100,000.00</Text>
              </View>
            </View>
          </View>
          <View style={styles.mainCoin}>
            <View style={styles.littleCoin}>
              <Image
                style={styles.coinImage}
                source={require("../../assets/Tetherlogo.png")}
                resizeMode="contain"
              />
              <View>
                <Text style={styles.text1}>Tether USD</Text>
                <Text style={styles.text2}>13.98% ($28015)</Text>
              </View>
            </View>
            <View style={styles.coinView}>
              <View>
                <Text style={styles.text1}>69.844 ETH</Text>
                <Text style={styles.text2}>$100,000.00</Text>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.bottomIcons}>
          <TouchableOpacity style={styles.bottomButtons}>
            <Image
              style={styles.txnsImg}
              source={require("../../assets/home.png")}
              resizeMode="contain"
            />
            <Text>Home</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.bottomButtons}>
            <Image
              style={styles.txnsImg}
              source={require("../../assets/wallet.png")}
              resizeMode="contain"
            />
            <Text>Wallet</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.bottomButtons}>
            <Image
              style={styles.txnsImg}
              source={require("../../assets/pie-chart.png")}
              resizeMode="contain"
            />
            <Text>Chart</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.bottomButtons}>
            <Image
              style={styles.txnsImg}
              source={require("../../assets/settings.png")}
              resizeMode="contain"
            />
            <Text>Settings</Text>
          </TouchableOpacity>
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
    paddingHorizontal: 8,
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
    paddingHorizontal: 10,
  },
  titleText: {
    fontSize: 25,
    fontWeight: "bold",
    letterSpacing: 1,
    color: "#eee",
  },
  topButtons: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  brCommon: {
    borderRadius: 45,
    width: 45,
    height: 45,
    backgroundColor: "#feedd2",
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 10,
  },
  headerIcon: {
    marginHorizontal: 5,
  },
  headIconImage: {
    width: 30,
    height: 30,
    justifyContent: "center",
    alignItems: "center",
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
  txnsImg: {
    width: 26,
    height: 26,
  },
  txnsIcon: {
    width: 75,
    height: 75,
    borderRadius: 75,
    backgroundColor: "#f0c46b",
    justifyContent: "center",
    alignItems: "center",
  },
  bottomScreen: {
    width: "100%",
    height: 360,
    paddingTop: 5,
    marginTop: 15,
    flexDirection: "column",
    backgroundColor: "#eee",
  },
  boxTitle: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 40,
  },
  boxTitleTxt: {
    fontSize: 20,
  },
  mainCoin: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 30,
    marginHorizontal: 10,
  },
  littleCoin: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  coinImage: {
    width: 45,
    height: 45,
    marginHorizontal: 5,
    borderRadius: 45,
  },
  text1: {
    fontWeight: "bold",
    fontSize: 17,
  },
  text2: {
    fontWeight: "500",
    fontSize: 17,
    color: "grey",
  },
  bottomIcons: {
    flexDirection: "row",
    backgroundColor: "#eee",
    width: "100%",
    height: 90,
    borderColor: "grey",
    borderWidth: 1,
    paddingHorizontal: 25,
    paddingVertical: 15,
    justifyContent: "space-between",
  },
  bottomButtons: {
    width: 60,
    height: 60,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default UIProj;
