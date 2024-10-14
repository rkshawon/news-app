import { Colors } from "@/constants/Colors";
import { NewsDataType } from "@/types";
import { View, Text, StyleSheet, FlatList } from "react-native";
import SliderItem from "./SliderItem";
import { useEffect, useState } from "react";
import axios from "axios";

export default function BreakingNews() {
  const [breakingNews, setBreakingNews] = useState<NewsDataType[]>([]);

  useEffect(() => {
    getBreakingNews();
  }, []);

  const getBreakingNews = async () => {
    try {
      const url = `https://newsdata.io/api/1/news?apikey=${process.env.EXPO_PUBLIC_API_KEY}&language=en&category=crime&size=5&removeduplicate=1`;
      const res = await axios.get(url);
      if (res && res.data) {
        setBreakingNews(res?.data?.results);
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>BreakingNews</Text>
      <View style={styles.slidewrapper}>
        <FlatList
          data={breakingNews}
          renderItem={({ item, index }) => (
            <SliderItem slideItem={item} index={index} />
          )}
          keyExtractor={(_, index) => `list_item${index}`}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 10,
  },
  title: {
    fontSize: 10,
    fontWeight: "600",
    color: Colors.black,
    marginBottom: 10,
    marginLeft: 20,
  },
  slidewrapper: {
    width: 100,
    flex: 1,
    justifyContent: "center",
  },
});
