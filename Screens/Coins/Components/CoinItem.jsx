import { StyleSheet, Text, View, Image } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import cryptocurrencies from "../../../assets/data/cryptocurrencies.json";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";

export default function CoinItem({ marketCoin }) {
  const {
    id,
    name,
    image,
    market_cap_rank,
    price_change_percentage_24h,
    symbol,
    current_price,
    market_cap,
  } = marketCoin;

  const navigation = useNavigation();

  const dividedMarketCap = () => {
    market_cap;
  };
  const normaliseMarketCap = () => {
    if (market_cap > 1000000000000) {
      return `${(market_cap / 100000000000).toFixed(2)} T`;
    }
    if (market_cap > 1000000000) {
      return `${(market_cap / 1000000000).toFixed(2)} B`;
    }
    if (market_cap > 1000000) {
      return `${(market_cap / 1000000).toFixed(2)} M`;
    }
  };

  return (
    <TouchableOpacity
      onPress={() => navigation.navigate("Coindetains")}
      style={styles.coinContainer}
    >
      <Image
        source={{ uri: image }}
        style={{ height: 40, width: 40, margin: 10 }}
      ></Image>
      <View style={styles.coinColumn}>
        <Text style={styles.title}>{name}</Text>
        <View style={styles.coinRow}>
          <Text style={styles.rank}>{market_cap_rank}</Text>
          <Text style={styles.text}>{symbol}</Text>
          <AntDesign
            name="caretup"
            size={12}
            color="white"
            style={{ marginRight: 10, alignSelf: "center" }}
          />
          <Text style={styles.text}>
            {price_change_percentage_24h.toFixed(2)}%
          </Text>
        </View>
      </View>
      <View style={{ marginLeft: "auto" }}>
        <Text style={styles.title}>{current_price}</Text>
        <View style={{ flexDirection: "row" }}>
          <Text style={styles.text}>MCap</Text>
          <Text style={styles.text}>{normaliseMarketCap()}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#121212",
  },
  coinContainer: {
    flexDirection: "row",
    marginBottom: 10,
    borderBottomWidth: 0.5,
    borderColor: "grey",
    alignItems: "center",
    padding: 5,
  },
  rank: {
    color: "#fff",
    alignSelf: "center",
    justifyContent: "center",
    marginRight: 10,
  },
  coinRow: {
    flexDirection: "row",
    paddingRight: 10,
  },
  coinPosition: {
    backgroundColor: "#585858",
    borderRadius: 1,
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderRadius: 7,
  },
  title: {
    fontSize: 20,
    color: "white",
    fontWeight: "bold",
  },
  text: {
    color: "#fff",
    marginRight: 10,
  },
  coinColumn: {
    marginRight: 200,
  },
});
