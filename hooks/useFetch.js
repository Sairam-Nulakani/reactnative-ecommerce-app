import { View, Text } from "react-native";
import { useState, useEffect } from "react";
import axios from "axios";

const useFetch = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchData = async () => {
    setIsLoading(true);
    try {
      const res = await axios.get("http://localhost:8090/api/products");
      setData(res.data);
      setIsLoading(false);
    } catch (err) {
      setError(err);
    } finally {
      setIsLoading(false);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);
  const reFetch = () => {
    setIsLoading(true);
    fetchData();
  };
  return { data, isLoading, err, reFetch };
};

export default useFetch;
