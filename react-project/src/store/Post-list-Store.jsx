import { createContext, useReducer } from "react";


const PostList = createContext({
    postList: [],
    addPost: () => { },
    deletePost: () => { },
});

const postlistReducer = (currentpostList, action) => {
    return currentpostList;
}


const PostListProvider = ({ children }) => {

    const [postlist, dispatchPostList] = useReducer(postlistReducer, []
    );

    const addPost = () => {


    }

    const delPost = () => {



    }



    return <PostList.Provider value={
        {
            postlist: postlist, // or we can write normal postlist;
            addPost: addPost,
            delPost: delPost
        }
    }>
        {children}
    </PostList.Provider>
}

export default PostListProvider
