import React, { createContext, useContext, useState } from "react";
import useFetch from "../../hooks/useFetch";
import axios from "axios";
import toast from "react-hot-toast";

const BookmarkContext = createContext();
const BASE_URL = "http://localhost:5000";

function BookmarkListProvider({ children }) {
  const [currentBookmark, setCurrentBookmark] = useState(null);
  const [isLoadingCurrentBookmark, setIsLoadingCurrentBookmark] =
    useState(false);

  // Fetch all bookmarks
  const { isLoading, data: bookmarks } = useFetch(`${BASE_URL}/bookmarks`);

  // Fetch a single bookmark by ID
  async function getBookmark(id) {
    setIsLoadingCurrentBookmark(true);
    try {
      const { data } = await axios.get(`${BASE_URL}/bookmarks/${id}`);
      setCurrentBookmark(data);
      setIsLoadingCurrentBookmark(false);
    } catch (error) {
      toast.error(error.message || "Failed to fetch bookmark");
      setIsLoadingCurrentBookmark(false);
    }
  }

  return (
    <BookmarkContext.Provider
      value={{
        isLoading,
        bookmarks,
        getBookmark,
        isLoadingCurrentBookmark,
        currentBookmark,
      }}
    >
      {children}
    </BookmarkContext.Provider>
  );
}

export function useBookmark() {
  const context = useContext(BookmarkContext);

  if (!context) {
    throw new Error("useBookmark must be used within a BookmarkListProvider");
  }

  return context;
}

export default BookmarkListProvider;