import React from "react";

export default function Sidebar({ selectedTab, setSelectedTab }) {

    const HandleOnclick = (tabname) => {
        setSelectedTab(tabname)
    }

    return (
        <aside className="w-64 bg-gray-50 border-r border-gray-200 h-screen p-4 hidden md:block">
            <h2 className="text-lg font-semibold text-gray-800 mb-4">Sidebar</h2>
            <nav className="flex flex-col space-y-2">
                <a href="#" onClick={() => {HandleOnclick('Home')}} className={`${selectedTab === 'Home' && "active"}text-gray-700 hover:bg-indigo-300 hover:text-indigo-600 rounded-md px-3 py-2`}>Home</a>
                <a href="#" onClick={() => {HandleOnclick('CreatePost')}}  className={`${selectedTab === 'CreatePost' && "active"}text-gray-700 hover:bg-indigo-300 hover:text-indigo-600 rounded-md px-3 py-2`}>CreatePost</a>
            </nav>
        </aside>
    );
}
