// import { createContext } from "react";

// export const AuthContext = createContext({
//     isLoggedIn: false,
//     onLogin: () => { },
//     onLogout: () => { },
// });

// const AuthContextProvider = ({ children }) => {

//     const loginHandler = () => {
//         // logic for login
//     }
//     const logoutHandler = () => {
//         // logic for logout
//     }
//     return (
//         <AuthContext.Provider value={
//             {
//                 isLoggedIn: false,
//                 onLogin: loginHandler,
//                 onLogout: logoutHandler
//             }
//         }>
//             {children}
//         </AuthContext.Provider>
//     );
// }

import { createContext } from "react";

export const AuthContext = createContext({
    login: false,
    setLogin: () => { }
});
