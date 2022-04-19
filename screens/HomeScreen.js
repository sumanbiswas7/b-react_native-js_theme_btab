import { AntDesign } from "@expo/vector-icons";
import { StatusBar } from "react-native";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";

const headerMarginTop = StatusBar.currentHeight;
export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={[styles.cart_container]} activeOpacity={0.5}>
        <AntDesign
          name="shoppingcart"
          size={20}
          color={"#fff"}
          style={{ marginRight: 2 }}
        />
      </TouchableOpacity>
      <Text style={styles.title}>Home</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: headerMarginTop,
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  cart_container: {
    position: "absolute",
    top: 20,
    right: 15,
    backgroundColor: "#000",
    width: 35,
    height: 35,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 30,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
});
