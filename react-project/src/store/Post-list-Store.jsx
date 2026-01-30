import { useReducer } from "react";
import { PostListContext } from './PostListContext.jsx';

// Default seed data must appear before usage (avoid TDZ ReferenceError)
// going to take data from dummyjson api instead of hardcoding
// const DEFAULT_POST_LIST = [
//     {
//         id: "1",
//         title: "Going to Mumbai",
//         body: "Hi",
//         reactions: 2,
//         userId: "user-9",
//         tags: ["vacations", "Mumbai", "Enjoying"],
//     },
//     {
//         id: "2",
//         title: "Going to Varanasi",
//         body: "Hard to believe",
//         reactions: 2,
//         userId: "user-8",
//         tags: ["vacations", "Hawaii", "Enjoying"],
//     },
// ];


const postlistReducer = (state, action) => {
    switch (action.type) {
        case "ADD_POST":
            return [action.payload, ...state];
        case "ADD_INITIAL_POST":
            return [...action.payload.postarray, ...state];
        case "DELETE_POST":
            return state.filter((p) => p.id !== action.payload);
        default:
            return state;
    }
};

const PostListProvider = ({ children }) => {
    const [postlist, dispatchPostList] = useReducer(
        postlistReducer,
        // DEFAULT_POST_LIST goint to take data from dummyjson api instead of hardcoding
        []
    );

    const addPost = ({ title, body, tags }) => {
        const newPost = {
            id: Date.now().toString(),
            title: title.trim(),
            body: body.trim(),
            reactions: 0,
            userId: "user-local",
            tags: tags
                .split(",")
                .map((t) => t.trim())
                .filter(Boolean),
        };
        dispatchPostList({ type: "ADD_POST", payload: newPost });
    };
    const addinitialposts = ({ postarray }) => {
        const newPost = {
            postarray
        };
        dispatchPostList({ type: "ADD_INITIAL_POST", payload: newPost });
    };

    const deletePost = (postId) => {
        dispatchPostList({ type: "DELETE_POST", payload: postId });
    };

    return (
        <PostListContext.Provider value={{ postlist, addPost, addinitialposts, deletePost }}>
            {children}
        </PostListContext.Provider>
    );
};

export default PostListProvider;

