import { Button, StyleSheet, Text, Touchable, View } from "react-native";
import React from "react";
import { TouchableOpacity } from "react-native";

export default function Headerlist({ headerData }) {
  const { headertitle } = headerData;
  return (
    <TouchableOpacity>
      <View style={styles.headerlist}>
        <Text style={{ color: "#fff", fontSize: 15, textAlign: "center" }}>
          {headertitle}
        </Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  headerlist: {
    padding: 8,
    paddingHorizontal: 15,
    alignItems: "center",
    backgroundColor: "#282828",
    borderRadius: 15,
    marginRight: 10,
  },
});
