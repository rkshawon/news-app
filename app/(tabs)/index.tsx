import { ScrollView, StyleSheet } from "react-native";
import React, { useState } from "react";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import Header from "@/components/Header";
import SearchBar from "@/components/SearchBar";
import BreakingNews from "@/components/BreakingNews";
import Categories from "@/components/Categories";
import NewsList from "@/components/NewsList";

type Props = {};

const Page = (props: Props) => {
  const { top: safeTop } = useSafeAreaInsets();
  const [category, setCategory] = useState("");

  const onCategoryChanged = (category: string) => {
    if (category === "all") {
      setCategory("");
    } else {
      setCategory(category);
    }
  };

  return (
    <ScrollView style={[styles.container, { paddingTop: safeTop }]}>
      <Header />
      <SearchBar />
      <BreakingNews />
      <Categories onCategoryChanged={onCategoryChanged} />
      <NewsList category={category} />
    </ScrollView>
  );
};

export default Page;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
