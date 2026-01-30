import { useContext, useEffect, useState } from "react";
import Post from "./Post";
import { PostListContext } from "../store/PostListContext.jsx";
import WelcomeMssg from "./WelcomeMssg.jsx";
import Spinner from "./Spinner.jsx";

const PostList = () => {
    const { postlist, addinitialposts } = useContext(PostListContext);
    const [ fetching, setFetching ] = useState(false)

    useEffect( () => {
        setFetching(true);
        fetch('https://dummyjson.com/posts')
            .then(res => res.json())
            .then((data) => {
                console.log(data);
                addinitialposts({ postarray: data.posts });
                setFetching(false);
            });
    }, []);



    // there is no need for this we can easily do with useRef  useEfeecet useEffect
    // this method is not worthy as it will call on every render so we will

    // const fetchPostFromServer = async () => {
    //     fetch('https://dummyjson.com/posts')
    //     .then(res => res.json())
    //     .then((data) => {
    //         console.log(data);
    //         addinitialposts({ postarray: data.posts });
    //     });
    // };


    return (
        <div className="flex flex-wrap gap-6 p-4">

            {fetching && <Spinner />}
            {!fetching && postlist.length === 0 ? (
                <WelcomeMssg />
            ) : (
                postlist.map((post) => <Post key={post.id} post={post} />)
            )}

        </div>
    );
};

export default PostList;