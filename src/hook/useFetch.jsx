import { useEffect, useState } from "react";
import { fetchDataFromApi } from "../utils/api";

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true); // Start as loading
  const [error, setError] = useState(null);

  useEffect(() => {
    // Reset state on URL change
    setLoading(true);
    setData(null);
    setError(null);

    // Fetch data from API
    fetchDataFromApi(url)
      .then((res) => {
        setLoading(false); // Stop loading
        setData(res); // Set data from response
      })
      .catch((err) => {
        setLoading(false); // Stop loading
        setError(err.message || "An error occurred while fetching data.");
      });
  }, [url]);

  return { data, loading, error };
};

export default useFetch;
