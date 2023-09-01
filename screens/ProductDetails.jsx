import { Text, TouchableOpacity, View, Image } from "react-native";
import React, { useState } from "react";
import styles from "./productDetails.style";
import {
  Ionicons,
  SimpleLineIcons,
  MaterialCommunityIcons,
} from "@expo/vector-icons";
import { COLORS, SIZES } from "../assets/constants/theme";

const ProductDetails = ({ navigation }) => {
  const [count, setCount] = useState(1);
  return (
    <View style={styles.container}>
      <View style={styles.upperRow}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="chevron-back-circle" size={30} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => {}}>
          <Ionicons name="heart" size={30} color={COLORS.primary} />
        </TouchableOpacity>
      </View>
      <Image
        source={{
          uri: "https://img.freepik.com/free-photo/mid-century-modern-living-room-interior-design-with-monstera-tree_53876-129805.jpg?w=2000",
        }}
        style={styles.image}
      />
      <View style={styles.details}>
        <View style={styles.titleRow}>
          <Text style={styles.title}>Product</Text>
          <View style={styles.priceWrapper}>
            <Text style={styles.price}>₹9999</Text>
          </View>
        </View>
        <View style={styles.ratingRow}>
          <View style={styles.rating}>
            {[1, 2, 3, 4, 5].map((index) => (
              <Ionicons key={index} name="star" size={24} color="gold" />
            ))}
            <Text style={styles.ratingText}>(4.8)</Text>
          </View>
          <View style={styles.rating}>
            <TouchableOpacity
              onPress={() => setCount((prev) => (prev === 1 ? 1 : prev - 1))}
            >
              <SimpleLineIcons name="minus" size={20} />
            </TouchableOpacity>
            <Text style={styles.quantity}>{count}</Text>
            <TouchableOpacity onPress={() => setCount((prev) => prev + 1)}>
              <SimpleLineIcons name="plus" size={20} />
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.descWrapper}>
          <Text style={styles.desc}>Description</Text>
          <Text style={styles.descText}>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Libero at
            obcaecati ad neque sunt? Voluptates obcaecati laborum quos
            consectetur similique quas voluptas eius sed temporibus officia?
            Asperiores harum, quisquam, vel neque facere ut, explicabo omnis
            eveniet et ullam soluta obcaecati!
          </Text>
        </View>
        <View style={{ marginBottom: SIZES.small }}>
          <View style={styles.location}>
            <View style={{ flexDirection: "row" }}>
              <Ionicons name="location-outline" size={20} />
              <Text> Hyderabad </Text>
            </View>
            <View style={{ flexDirection: "row" }}>
              <MaterialCommunityIcons name="truck-delivery-outline" size={20} />
              <Text> Free Delivery </Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

export default ProductDetails;
