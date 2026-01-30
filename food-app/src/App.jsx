import { Routes, Route, useNavigate } from "react-router-dom";
import About from "./components/About";
import Contact from "./components/Contact";
import Home from "./components/Home";
import Profile from "./components/Profile";
import User from "./components/user";
import DummyApi from "./components/DummyApi";
import FetchApi from "./components/FetchApi";
import Forms from "./components/Forms.jsx";
import Practice from "./components/Practice.jsx";

const App = () => {
    // const navigate = useNavigate();

    
    function name(){
    
            return "hi"
    
    }

    
    function age(){
    
            return 12;
    
    }

    return (
        <div>
            {/* <nav style={{ display: "flex", gap: "10px", marginBottom: "20px" }}>
                <button onClick={() => navigate("/")}>Home</button>
                <button onClick={() => navigate("/about")}>About</button>
                <button onClick={() => navigate("/contact")}>Contact</button>
            </nav> */}

            {/* <Routes>
                <Route path="/" element={<Home />} />
                <Route path='/profile' element={<Profile />} />
                <Route path = "/user" element = {<User />} />
            </Routes> */}

            {/* <DummyApi /> */}
            {/* <FetchApi /> */}
            {/* <Forms /> */}
            <Practice  name={name()} age={age()}/>


        </div>
    );
};

export default App;
