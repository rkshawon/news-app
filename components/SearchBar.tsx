import { Colors } from "@/constants/Colors";
import { Ionicons } from "@expo/vector-icons";
import { View, TextInput, StyleSheet } from "react-native";

export default function SearchBar() {
  return (
    <View style={styles.container}>
      <View style={styles.searchBar}>
        <Ionicons name="search-outline" size={20} color={Colors.lightGrey} />
        <TextInput
          placeholder="Search"
          placeholderTextColor={Colors.lightGrey}
          style={styles.searchText}
          autoCapitalize="none"
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 20,
    marginTop: 20,
  },
  searchBar: {
    backgroundColor: "#e4e4e4",
    paddingHorizontal: 12,
    paddingVertical: 10,
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 8,
  },
  searchText: {
    fontSize: 14,
    flex: 1,
    color: Colors.darkGrey,
    marginLeft: 10,
  },
});
