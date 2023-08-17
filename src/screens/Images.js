import React from "react";
import { ScrollView } from "react-native";
import CardDetail from "../components/CardDetail";

const ImageFile = () => {
  return (
    <ScrollView>
      <CardDetail
        textData="This is my first img"
        imgSrc={require("../../assets/6308.jpg")}
      />
      <CardDetail
        textData="This is my second img"
        imgSrc={require("../../assets/favicon.png")}
      />
      <CardDetail
        textData="This is my third img"
        imgSrc={require("../../assets/6308.jpg")}
      />
      <CardDetail
        textData="This is my fourth img"
        imgSrc={require("../../assets/favicon.png")}
      />
    </ScrollView>
  );
};

export default ImageFile;
