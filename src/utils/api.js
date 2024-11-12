import axios from "axios";

export const fetchDataFromApi = async (url) => {
    try {
        const { data } = await axios.get(url);
        return data;
    } catch (err) {
        console.error(`Error occurred while fetching data from ${url}:`, err.message || err);
        throw err; 
    }
};
