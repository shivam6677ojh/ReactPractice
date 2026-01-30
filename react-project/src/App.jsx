import React, { useState } from "react";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Footer from "./components/Footer";
import CreatePost from "./components/CreatePost";
import PostList from "./components/PostList";
import ShowMore from "./components/ShowMore.jsx";
import PostListProvider from "./store/Post-list-Store";
import { Route, Routes } from "react-router-dom";

export default function App() {
  const [selectedTab, setSelectedTab] = useState("Home");

  return (
    <PostListProvider>
      <Routes>

        {/* Main App Route */}
        <Route
          path="/"
          element={
            <div className="flex flex-col min-h-screen">
              <Header />
              <div className="flex flex-1">
                <Sidebar selectedTab={selectedTab} setSelectedTab={setSelectedTab} />
                <main className="flex-1 p-6 bg-white">
                  {selectedTab === "Home" ? <PostList /> : <CreatePost />}
                </main>
              </div>

              <Footer />
            </div>
          }
        />

        {/* Show more route (dynamic) */}
        <Route path="/showmore/:id" element={<ShowMore />} />

        {/* Fallback */}
        <Route path="*" element={<div className="p-10 text-center">404 - Not Found</div>} />

      </Routes>
    </PostListProvider>
  );
}
