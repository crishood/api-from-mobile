import { useEffect, useState } from "react";
import { View, Text, Image } from "react-native";
import homeStyles from "../styles/HomeStyles";
import axios from "axios";

const Character = ({ route }) => {
  const { id } = route.params;
  const [data, setData] = useState({});
  console.log(id);
  useEffect(() => {
    axios.get(`https://rickandmortyapi.com/api/character/${id}`).then((res) => {
      console.log(res.data);
      setData(res.data);
    });
  }, []);
  return (
    <View style={homeStyles.container}>
      <View style={homeStyles.card}>
        <Image style={homeStyles.picture} source={data.image} />
        <Text style={homeStyles.name}>{data.name}</Text>
        <Text>{data.status}</Text>
        <Text>{data.species}</Text>
      </View>
    </View>
  );
};

export default Character;
