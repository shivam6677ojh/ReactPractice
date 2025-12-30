import { useParams } from 'react-router-dom';
import { useContext } from 'react';
import { PostListContext } from '../store/PostListContext.jsx';

const ShowMore = () => {
  const { id } = useParams();
  const { postlist } = useContext(PostListContext);
  const post = postlist.find(p => p.id === id);

  if (!post) {
    return <div className="p-8">Post not found.</div>;
  }

  return (
    <div className="max-w-3xl mx-auto p-8 space-y-6">
      <div className="h-48 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600" />
      <h1 className="text-3xl font-bold text-gray-900">{post.title}</h1>
      <p className="text-gray-700 leading-relaxed whitespace-pre-wrap">{post.body}</p>
      <div className="flex flex-wrap gap-2">
        {post.tags.map((t, i) => (
          <span key={i} className="px-3 py-1 bg-blue-100 text-blue-700 text-xs rounded-full">#{t}</span>
        ))}
      </div>
      <p className="font-medium">❤️ {post.reactions} reactions</p>
    </div>
  );
};

export default ShowMore;
