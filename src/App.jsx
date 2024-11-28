import React from "react";
import Headers from "./commponents/Headers/Headers";
import LocationsList from "./commponents/LocationsList/LocationsList";
import { Toaster } from "react-hot-toast";
import { Route, Routes } from "react-router-dom";
import AppLayout from "./commponents/AppLayout/AppLayout";
import Hotels from "./commponents/Hotels/Hotels";
import HotelsProvider from "./commponents/context/HotelsProvider";
import SingleHotel from "./commponents/SingleHotel/SingleHotel";
import BookmarkLayout from "./commponents/BookmarkLayout/BookmarkLayout";
import BookmarkListProvider from "./commponents/context/BookmarkListContext";

function App() {
  return (
    <BookmarkListProvider>
      <HotelsProvider>
        <Toaster />
        <Headers />
        <Routes>
          <Route path="/" element={<LocationsList />} />
          <Route path="/hotels" element={<AppLayout />}>
            <Route index element={<Hotels />} />
            <Route path=":id" element={<SingleHotel />} />
          </Route>
          <Route path="/bookmark" element={<BookmarkLayout />}>
            <Route index element={<div>bookmark List</div>} />
            <Route path="add" element={<div>add new bookmark</div>} />
          </Route>
        </Routes>
      </HotelsProvider>
    </BookmarkListProvider>
  );
}

export default App;
