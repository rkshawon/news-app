import { Colors } from "@/constants/Colors";
import { NewsDataType } from "@/types";
import axios from "axios";
import { useEffect, useState } from "react";
import { ActivityIndicator, Image, StyleSheet, Text, View } from "react-native";

type Props = {
  category: string;
};

const NewsList = ({ category }: Props) => {
  const [breakingNews, setBreakingNews] = useState<NewsDataType[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getBreakingNews();
  }, [category]);

  const getBreakingNews = async () => {
    try {
      const url = `https://newsdata.io/api/1/news?apikey=${process.env.EXPO_PUBLIC_API_KEY}&language=en&category=${category}&size=10&removeduplicate=1`;
      const res = await axios.get(url);
      setIsLoading(false);
      if (res && res.data) {
        setBreakingNews(res?.data?.results);
      }
    } catch (err) {
      console.log(err);
    }
  };

  if (isLoading) {
    return <ActivityIndicator size="large" />;
  }
  return (
    <View style={styles.container}>
      {breakingNews.map((item, index) => (
        <View key={index} style={styles.itemContainer}>
          <Image source={{ uri: item.image_url }} style={styles.itemImg} />
          <View style={styles.itemInfo}>
            <Text style={styles.itemCategory}>{item.category}</Text>
            <Text style={styles.itemTitle}>{item.title}</Text>
          </View>
        </View>
      ))}
    </View>
  );
};

export default NewsList;

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 20,
  },
  itemContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
    flex: 1,
    gap: 10,
  },
  itemImg: {
    width: 90,
    height: 100,
    borderRadius: 20,
    marginRight: 10,
  },
  itemInfo: { flex: 1, gap: 10, justifyContent: "space-between" },
  itemCategory: {
    fontSize: 12,
    color: Colors.darkGrey,
    textTransform: "capitalize",
  },
  itemTitle: { fontSize: 12, fontWeight: "600", color: Colors.black },
});
