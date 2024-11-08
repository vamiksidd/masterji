import axios from "axios";

export const fetchDataFromApi = async (url) => {
    try {
        const {data} = await axios.get(url)
       
        
        return data;

    } catch (err) {
        console.log("this error occured in utils api.js", err)
    }
}