import React from "react";
import { View, StyleSheet, Image } from "react-native";
import { SliderBox } from "react-native-image-slider-box";
import { COLORS } from "../../assets/constants/theme";

const Carousel = () => {
  const slides = [
    "https://img.freepik.com/free-photo/mid-century-modern-living-room-interior-design-with-monstera-tree_53876-129805.jpg?w=2000",
    "https://media.istockphoto.com/id/968086564/photo/wooden-chairs-at-table-in-bright-open-space-interior-with-lamp-next-to-grey-couch-real-photo.webp?b=1&s=170667a&w=0&k=20&c=1QWAJYxULtionMdO3uJewgbRsFVF_gv8Y0xHG89Hhzw=",
    "https://cdn.pixabay.com/photo/2014/08/11/21/39/wall-416060_640.jpg",
    "https://img.staticmb.com/mbcontent/images/uploads/2023/5/Kitchen-Furniture-Design-Ideas.jpg",
  ];

  return (
    <View style={styles.carouselContainer}>
      <SliderBox
        images={slides}
        dotColor={COLORS.primary}
        inactiveDotColor={COLORS.secondary}
        ImageComponentStyle={{ borderRadius: 15, width: "92%", marginTop: 15 }}
        autoplay
        circleLoop
      />
    </View>
  );
};

export default Carousel;

const styles = StyleSheet.create({
  carouselContainer: {
    flex: 1,
    alignItems: "center",
  },
});
