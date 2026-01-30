import { useContext } from "react";
import { Link } from "react-router-dom";
import { PostListContext } from "../store/PostListContext.jsx";

const Post = ({ post }) => {
    const { deletePost } = useContext(PostListContext);
    return (
        <div className="relative w-80 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow overflow-hidden border border-gray-100">
            {/* Header illustration / placeholder */}
            <div className="h-32 bg-gradient-to-r from-blue-600 to-purple-600">
                {/* Delete */}
                <button
                    type="button"
                    aria-label="Delete post"
                    title="Delete post"
                    className="absolute top-2 right-2 p-2 rounded-full bg-white/80 text-gray-600 hover:bg-red-600 hover:text-white shadow-sm transition-colors"
                    onClick={() => deletePost(post.id)}
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="w-5 h-5"
                    >
                        <path d="M9.5 3h5a1 1 0 0 1 .96.73l.54 1.62H19a1 1 0 1 1 0 2h-.3l-1.16 11.05A2.5 2.5 0 0 1 15.06 21H8.94a2.5 2.5 0 0 1-2.48-2.6L5.3 7.35H5a1 1 0 0 1 0-2h3l.54-1.62A1 1 0 0 1 9.5 3Zm.42 2 .2-.6h3.76l.2.6H9.92ZM7.32 7.35l1.1 10.47a.5.5 0 0 0 .5.45h6.16a.5.5 0 0 0 .5-.45l1.1-10.47H7.32Z" />
                    </svg>
                </button>
            </div>

            <div className="p-5">
                <h5 className="text-xl font-bold text-gray-900 mb-2">
                    {post.title}
                </h5>

                <p className="text-gray-600 leading-relaxed mb-4">
                    {post.body}
                </p>

                {/* Reactions */}
                <p>👍 {post.reactions.likes} | 👎 {post.reactions.dislikes}</p>


                {/* Tags */}
                <div className="mb-4">
                    <h6 className="text-sm font-semibold text-gray-700 mb-1">Tags</h6>
                    <div className="flex flex-wrap gap-2">
                        {post.tags?.map((tag, index) => (
                            <span 
                                key={index}
                                className="px-3 py-1 bg-blue-100 text-blue-700 text-xs rounded-full"
                            >
                                #{tag}
                            </span>
                        ))}
                    </div>
                </div>
                {/* <Link></Link> */}

                <Link
                    to={`/showmore/${post.id}`}
                    className="inline-block w-full text-center bg-blue-600 text-white py-2.5 rounded-lg hover:bg-blue-700 transition-colors font-medium"
                >
                    Read More
                </Link>
            </div>
        </div>
    );
};

export default Post;
