import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  coindetainScreen: {
    backgroundColor: "#121212",
    paddingHorizontal: 5,
    height: "100%",
  },
  navigationBar: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 15,
    alignContent: "center",
  },
  coinDetainHeader: {
    flexDirection: "row",
    alignItems: "center",
    alignContent: "space-around",
  },
  coinDetainIcon: {
    flexDirection: "row",
  },
  text: {
    color: "#fff",
  },
  priceChange: {
    padding: 5,
    backgroundColor: "red",
    borderRadius: 5,
    padding: 8,
    flexDirection: "row",
  },
  coinPrice: {
    top: 50,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 15,
  },
  currentPrice: {
    color: "#fff",
    fontSize: 25,
    fontWeight: "bold",
  },
});

export default styles;
