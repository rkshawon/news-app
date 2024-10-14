import { View, Text, StyleSheet, Dimensions, Image } from "react-native";
import React from "react";
import { NewsDataType } from "@/types";

type Props = {
  slideItem: NewsDataType;
  index: Number;
};

const { width } = Dimensions.get("screen");

export default function SliderItem({ slideItem, index }: Props) {
  return (
    <View style={styles.itemWrapper}>
      <Image source={{ uri: slideItem.image_url }} style={styles.image} />
    </View>
  );
}

const styles = StyleSheet.create({
  itemWrapper: {
    position: "relative",
    width: width,
    justifyContent: "center",
  },
  image: {
    width: width,
    height: 10,
    justifyContent: "center",
  },
});
