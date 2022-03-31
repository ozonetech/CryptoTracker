import { StyleSheet, Text, View, Image, FlatList } from "react-native";
import React from "react";
import { AntDesign } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import styles from "../style";
import crypto from "../../../assets/data/crypto.json";
import { useNavigation } from "@react-navigation/native";
import { TouchableOpacity } from "react-native-gesture-handler";
export default function CoinDetainNav() {
  const {
    image: { small },
    symbol,
    market_cap,
    market_data: {
      market_cap_rank,
      current_price,
      price_change_percentage_24h,
    },
    name,
  } = crypto;
  const navigation = useNavigation();
  return (
    <View style={styles.navigationBar}>
      <TouchableOpacity onPress={() => navigation.navigate("Homescreen")}>
        <AntDesign name="left" size={24} color="white" />
      </TouchableOpacity>
      <View style={styles.coinDetainHeader}>
        <Image
          source={{ uri: small }}
          style={{ width: 30, height: 30 }}
        ></Image>
        <Text
          style={{
            color: "#fff",
            marginHorizontal: 10,
            fontSize: 16,
            fontWeight: "bold",
          }}
        >
          {symbol.toUpperCase()}
        </Text>
        <View
          style={{ backgroundColor: "#585858", padding: 2, borderRadius: 5 }}
        >
          <Text style={{ color: "#fff" }}>#{market_cap_rank}</Text>
        </View>
      </View>
      <View style={styles.coinDetainIcon}>
        <Ionicons
          name="md-search"
          size={24}
          color="#fff"
          style={{ marginHorizontal: 5 }}
        />
        <Feather name="star" size={24} color="#fff" />
      </View>
    </View>
  );
}
