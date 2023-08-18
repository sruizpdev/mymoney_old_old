import { Link } from "expo-router";
import { View, Text, StyleSheet } from "react-native";

const PinScreen = () => {
  return (
    <View style={styles.container}>
      <Text>Pin Screen</Text>
      <Link href="/(tabs)/">Login</Link>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
export default PinScreen;
