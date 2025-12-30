import { useContext } from "react";
import Post from "./Post";
import { PostListContext } from "../store/PostListContext.jsx";

const PostList = () => {
    const { postlist } = useContext(PostListContext);
    return (
        <div className="flex flex-wrap gap-6 p-4">
            {postlist.map((post) => (
                <Post key={post.id} post={post} />
            ))}
        </div>
    );
};

export default PostList;