import { FlatList, Text, View } from "react-native";
import React from "react";
import styles from "./productRow.style";
import { SIZES } from "../../assets/constants/theme";
import ProductCardView from "./ProductCardView";

const ProductRow = () => {
  const products = [1, 2, 3, 4, 5];
  return (
    <View style={styles.container}>
      <FlatList
        data={products}
        renderItem={({ product }) => <ProductCardView />}
        horizontal
        contentContainerStyle={{ columnGap: SIZES.medium }}
      />
    </View>
  );
};

export default ProductRow;
