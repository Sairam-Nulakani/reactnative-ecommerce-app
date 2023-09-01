import { Text, View, TouchableOpacity, Image } from "react-native";
import React from "react";
import styles from "./productCardView.style";
import { Ionicons } from "@expo/vector-icons";
import { COLORS } from "../../assets/constants/theme";
import { useNavigation } from "@react-navigation/native";

const ProductCardView = () => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity onPress={() => navigation.navigate("ProductDetails")}>
      <View style={styles.container}>
        <View style={styles.imageContainer}>
          <Image
            source={{
              uri: "https://img.freepik.com/free-photo/mid-century-modern-living-room-interior-design-with-monstera-tree_53876-129805.jpg?w=2000",
            }}
            style={styles.image}
          />
        </View>
        <View style={styles.details}>
          <Text style={styles.title} numberOfLines={1}>
            Productsefsdfsdfsdfdsf
          </Text>
          <Text style={styles.supplier} numberOfLines={1}>
            Product
          </Text>
          <Text style={styles.price} numberOfLines={1}>
            ₹9999
          </Text>
        </View>
        <TouchableOpacity style={styles.addBtn}>
          <Ionicons name="add-circle" size={35} color={COLORS.primary} />
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );
};

export default ProductCardView;
