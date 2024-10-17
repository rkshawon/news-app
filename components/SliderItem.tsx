// import { View, Text, StyleSheet, Dimensions, Image } from "react-native";
// import React from "react";
// import { NewsDataType } from "@/types";
// import { SharedValue } from "react-native-reanimated";
// import { LinearGradient } from "expo-linear-gradient";
// import { Colors } from "@/constants/Colors";

// type Props = {
//   slideItem: NewsDataType;
//   index: Number;
//   scrollX: SharedValue<number>;
// };

// const { width } = Dimensions.get("screen");

// export default function SliderItem({ slideItem, index, scrollX }: Props) {
//   return (
//     <View style={styles.itemWrapper}>
//       <Image source={{ uri: slideItem.image_url }} style={styles.image} />
//       <LinearGradient
//         colors={["transparent", "rgba(0, 0, 0, 0.8)"]}
//         style={styles.background}
//       >
//         <View style={styles.sourceInfo}>
//           {slideItem.source_icon && (
//             <Image
//               source={{ uri: slideItem.source_icon }}
//               style={styles.sourceIcon}
//             />
//           )}
//           <Text style={styles.sourceName}>{slideItem.source_name}</Text>

//           <Text numberOfLines={2} style={styles.sourceTitle}>
//             {slideItem.title}
//           </Text>
//         </View>
//       </LinearGradient>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   itemWrapper: {
//     position: "relative",
//     width: width,
//     justifyContent: "center",
//     alignItems: "center",
//   },
//   image: {
//     width: width - 60,
//     height: 180,
//     borderRadius: 20,
//   },
//   background: {
//     position: "absolute",
//     left: 30,
//     right: 0,
//     top: 0,
//     width: width - 60,
//     height: 180,
//     borderRadius: 20,
//     padding: 20,
//   },
//   sourceInfo: {
//     flexDirection: "row",
//     position: "absolute",
//     top: 85,
//     paddingHorizontal: 20,
//     alignContent: "center",
//     gap: 10,
//   },
//   sourceName: {
//     color: Colors.white,
//     fontSize: 12,
//     fontWeight: "600",
//   },
//   sourceTitle: {
//     fontSize: 14,
//     color: Colors.white,
//     position: "absolute",
//     top: 25,
//     paddingHorizontal: 20,
//     fontWeight: "600",
//   },
//   sourceIcon: { width: 20, height: 20, borderRadius: 20 },
// });

import { View, Text, StyleSheet, Dimensions, Image } from "react-native";
import React from "react";
import { NewsDataType } from "@/types";
import { SharedValue } from "react-native-reanimated";
import { LinearGradient } from "expo-linear-gradient";
import { Colors } from "@/constants/Colors";

type Props = {
  slideItem: NewsDataType;
  index: Number;
  scrollX: SharedValue<number>;
};

const { width } = Dimensions.get("screen");

export default function SliderItem({ slideItem, index, scrollX }: Props) {
  return (
    <View style={styles.itemWrapper}>
      <Image source={{ uri: slideItem.image_url }} style={styles.image} />
      <LinearGradient
        colors={["transparent", "rgba(0, 0, 0, 0.8)"]}
        style={styles.background}
      >
        <View style={styles.sourceInfo}>
          {slideItem.source_icon && (
            <Image
              source={{ uri: slideItem.source_icon }}
              style={styles.sourceIcon}
            />
          )}
          <View style={styles.textContainer}>
            <Text style={styles.sourceName}>{slideItem.source_name}</Text>
            <Text numberOfLines={2} style={styles.sourceTitle}>
              {slideItem.title}
            </Text>
          </View>
        </View>
      </LinearGradient>
    </View>
  );
}

const styles = StyleSheet.create({
  itemWrapper: {
    position: "relative",
    width: width,
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: width - 60,
    height: 180,
    borderRadius: 20,
  },
  background: {
    position: "absolute",
    left: 30,
    right: 0,
    top: 0,
    width: width - 60,
    height: 180,
    borderRadius: 20,
    padding: 20,
  },
  sourceInfo: {
    flexDirection: "row",
    position: "absolute",
    bottom: 20,
    paddingHorizontal: 20,
    alignItems: "center",
  },
  textContainer: {
    flex: 1,
  },
  sourceName: {
    color: Colors.white,
    fontSize: 12,
    fontWeight: "600",
  },
  sourceTitle: {
    fontSize: 14,
    color: Colors.white,
    fontWeight: "600",
  },
  sourceIcon: { width: 20, height: 20, borderRadius: 20, marginRight: 10 },
});
