import axios from "axios";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";

export default function useFetch(url, query = "") {
  const [date, setDate] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    async function dataFetch() {
      try {
        setIsLoading(true);
        const { data } = await axios.get(`${url}?${query}`);
        setDate(date);
      } catch (err) {
        setDate([]);
        toast.error(err?.message);
      } finally {
        setIsLoading(false);
      }
    }
    dataFetch();
  }, [query, url]);
  return { isLoading, data };
}
