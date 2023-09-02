import {
  Text,
  View,
  TouchableOpacity,
  TextInput,
  Image,
  FlatList,
} from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons, Feather } from "@expo/vector-icons";
import { COLORS, SIZES } from "../assets/constants/theme";
import styles from "./search.style";
import axios from "axios";
import SearchTile from "../components/products/SearchTile";

const Search = () => {
  const [searchValue, setSearchValue] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = async () => {
    try {
      const res = await axios.get(
        `http://localhost:8090/api/products/search/${searchValue}`
      );
      setSearchResults(res.data);
    } catch (err) {
      console.log("Failed to get Products", err);
    }
  };
  return (
    <SafeAreaView>
      <View style={styles.searchContainer}>
        <TouchableOpacity>
          <Ionicons
            name="camera-outline"
            size={SIZES.xLarge}
            style={styles.searchIcon}
          />
        </TouchableOpacity>
        <View style={styles.searchWrapper}>
          <TouchableOpacity>
            <TextInput
              style={styles.searchInput}
              value={searchValue}
              placeholder="What are you looking for"
              onChangeText={setSearchValue}
            />
          </TouchableOpacity>
        </View>
        <View>
          <TouchableOpacity
            style={styles.searchBtn}
            onPress={() => handleSearch()}
          >
            <Feather name="search" size={24} color={COLORS.offwhite} />
          </TouchableOpacity>
        </View>
      </View>
      {searchResults.length === 0 ? (
        <View style={{ flex: 1 }}>
          <Image
            source={require("../assets/images/Pose23.png")}
            style={styles.searchImage}
          />
        </View>
      ) : (
        <FlatList
          data={searchResults}
          keyExtractor={(item) => item._id}
          renderItem={({ item }) => <SearchTile item={item} />}
          style={{ marginHorizontal: 12 }}
        />
      )}
    </SafeAreaView>
  );
};

export default Search;
