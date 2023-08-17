import { StyleSheet, Text, FlatList, View } from "react-native";
import React from "react";

const Challenge2 = () => {
  const netflixSeries = [
    {
      index: "1",
      name: "The Lincoln Lawyer",
      Year: "2022-2023",
      Creator: "David E. Kelley",
      Stars:
        "Manuel Garcia-Rulfo, Neve Campbell, Becki Newton, Angus Sampson, Jazz Raycole",
      Genre: "Drama",
      Rating: "TV-MA",
    },

    {
      index: "2",
      name: "Heartstopper",
      Year: "2022",
      Creator: "Alice Oseman",
      Stars:
        "Kit Connor, Joe Locke, William Gao, Yasmin Finney, Corinna Brown, Kizzy Edgell, Olivia Coleman, Stephen Fry",
      Genre: "Romantic Drama",
      Rating: "TV-14",
    },

    {
      index: "3",
      name: "Sweet Magnolias",
      Year: "2020-2023",
      Creator: "Sheryl J. Anderson",
      Stars:
        "JoAnna Garcia Swisher, Brooke Elliott, Heather Headley, Jamie Lynn Spears",
      Genre: "Romantic Drama",
      Rating: "TV-14",
    },

    {
      index: "4",
      name: "A Perfect Story",
      Year: "2023",
      Creator: "Elisabet Benavent",
      Stars: "Anna Castillo, Álvaro Mel, Ana Belén",
      Genre: "Romantic comedy",
      Rating: "TV-MA",
    },

    {
      index: "5",
      name: "The Witcher",
      Year: "2020-2023",
      Creator: "Lauren Schmidt Hissrich",
      Stars:
        "Henry Cavill, Freya Allan, Eamon Farren, Anya Chalotra, Joey Batey",
      Genre: "Reality",
      Rating: "TV-14",
    },
  ];
  return (
    <FlatList
      style={styles.listStyle}
      keyExtractor={(key) => {
        return key.name;
      }}
      horizontal
      showsHorizontalScrollIndicator={false}
      data={netflixSeries}
      renderItem={({ item }) => {
        console.log(item.name);
        return (
          <View style={styles.viewStyle}>
            <Text style={styles.textStyle}> {item.name} </Text>
            <Text style={styles.textStyle}> {item.Year} </Text>
            <Text style={styles.textStyle}> {item.Creator} </Text>
            <Text style={styles.textStyle}> {item.Stars} </Text>
            <Text style={styles.textStyle}> {item.Genre} </Text>
            <Text style={styles.textStyle}> {item.Rating} </Text>
          </View>
        );
      }}
    />
  );
};

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 30,
    backgroundColor: "olive",
    color: "white",
    textAlign: "center",
  },
  listStyle: {
    textAlign: "center",
    margin: 20,
    padding: 5,
  },
  viewStyle: {
    margin: 20,
    padding: 5,
  },
});

export default Challenge2;
