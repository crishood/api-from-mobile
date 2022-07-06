import { View, Text, FlatList, Image, ScrollView } from "react-native";
import { useState, useEffect } from "react";
import axios from "axios";
import homeStyles from "../styles/HomeStyles";

const Home = ({ navigation }) => {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios.get("https://rickandmortyapi.com/api/character").then((res) => {
      console.log(res.data.results);
      setData(res.data.results);
    });
  }, []);

  return (
    <ScrollView style={homeStyles.container}>
      <Text style={homeStyles.title}>Characters</Text>
      <View>
        <FlatList
          data={data}
          renderItem={({ item }) => {
            return (
              <View style={homeStyles.card}>
                <Image style={homeStyles.picture} source={item.image} />
                <Text style={homeStyles.name}>{item.name}</Text>
                <Text>{item.status}</Text>
                <Text>{item.species}</Text>
                <Text
                  style={homeStyles.goButton}
                  onPress={() => {
                    navigation.navigate("Character", { id: item.id });
                  }}
                >
                  Go to character
                </Text>
              </View>
            );
          }}
          keyExtractor={(item) => item.id}
        />
      </View>
    </ScrollView>
  );
};

export default Home;
