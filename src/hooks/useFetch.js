import axios from "axios";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";

export default function useFetch(url, query = " ") {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    async function dataFetch() {
      try {
        setIsLoading(true);
        const response = await axios.get(`${url}?${query}`);
        setData(response.data); // 
      } catch (err) {
        setData([]); 
        toast.error(err?.message);
      } finally {
        setIsLoading(false);
      }
    }
    dataFetch();
  }, [query, url]);

  return { isLoading, data }; 
}