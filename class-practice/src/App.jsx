import React from "react";
import Forms from "./components/Forms";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import User from "./components/User";
import Counter from "./components/Counter";
import TodoPractice from "./components/TodoPractice";

const App = () => {
    return <>
        {/* <Forms /> */}
        {/* Search prams and useSearchPrams */}

        {/* <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/user/:id" element={<User />} />
        </Routes> */}

        {/* <Counter /> */}

        <TodoPractice />


    </>
};

export default App;