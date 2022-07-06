import { StyleSheet } from "react-native";

const homeStyles = StyleSheet.create({
  container: {
    padding: 12,
    display: "flex",
    flexDirection: "column",
  },
  title: {
    fontSize: 22,
    width: "100%",
    textAlign: "center",
    marginBottom: 12,
    fontWeight: 700,
  },
  card: {
    backgroundColor: "#9B8EA0",
    borderRadius: 6,
    paddingVertical: 12,
    display: "flex",
    flexDirection: "column",
    marginBottom: 6,
    alignItems: "center",
  },
  picture: {
    width: 200,
    height: 200,
    borderRadius: "100%",
    borderWidth: 4,
    borderColor: "#EECA76",
  },
  name: {
    fontSize: 18,
    fontWeight: 700,
    color: "white",
  },
  goButton: {
    paddingVertical: 2,
    paddingHorizontal: 6,
    backgroundColor: "#BCA967",
    fontWeight: 700,
    color: "white",
    borderRadius: 6,
    margin: 4,
  },
});

export default homeStyles;
