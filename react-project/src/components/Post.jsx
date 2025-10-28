const Post = () => {
    return (
        <div className="w-72 bg-white rounded-xl shadow-md overflow-hidden">
            <div className="p-4">
                <h5 className="text-lg font-semibold mb-2">Card title</h5>
                <p className="text-gray-600 mb-4">
                    Some quick example text to build on the card title and make up the
                    bulk of the card's content.
                </p>
                <a
                    href="#"
                    className="inline-block bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
                >
                    Go somewhere
                </a>
            </div>
        </div>
    );
};

export default Post;
