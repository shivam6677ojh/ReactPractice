import React, { useState } from "react";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Footer from "./components/Footer";
import CreatePost from "./components/CreatePost";
import PostList from "./components/PostList";
import PostListProvider from "./store/Post-list-Store";

export default function App() {

  const [selectedTab, setSelectedTab] = useState("Home");


  return (
    
    <PostListProvider>
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
    </PostListProvider>
  );
}
