import { ActivityIndicator, FlatList, Text, View } from "react-native";
import React from "react";
import styles from "./productRow.style";
import { COLORS, SIZES } from "../../assets/constants/theme";
import ProductCardView from "./ProductCardView";
import useFetch from "../../hooks/useFetch";

const ProductRow = () => {
  const { data, isLoading, err } = useFetch();
  const products = [1, 2, 3, 4, 5];
  return (
    <View style={styles.container}>
      {isLoading ? (
        <ActivityIndicator size={SIZES.xxLarge} color={COLORS.primary} />
      ) : err ? (
        <Text>Something Went Wrong</Text>
      ) : (
        <FlatList
          data={data}
          key={(item) => item._id}
          renderItem={({ item }) => <ProductCardView item={item} />}
          horizontal
          contentContainerStyle={{ columnGap: SIZES.medium }}
        />
      )}
    </View>
  );
};

export default ProductRow;
