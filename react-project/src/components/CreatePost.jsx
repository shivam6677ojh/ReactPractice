import React, { useState, useContext } from "react";
import { PostListContext } from "../store/PostListContext.jsx";

export default function CreatePost() {
    const { addPost } = useContext(PostListContext);
    const [formData, setFormData] = useState({ title: "", body: "", tags: "" });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!formData.title.trim() || !formData.body.trim()) return;
        addPost(formData);
        setFormData({ title: "", body: "", tags: "" });
    };

    return (
        <div className="bg-gray-50">
            <form
                onSubmit={handleSubmit}
                className="bg-white p-6 rounded-2xl shadow-md w-full max-w-md border border-gray-100 space-y-4"
            >
                <h2 className="text-xl font-semibold text-gray-800 mb-2 text-center">
                    Create Post
                </h2>

                <div>
                    <label
                        htmlFor="title"
                        className="block text-sm font-medium text-gray-700 mb-1"
                    >
                        Title
                    </label>
                    <input
                        id="title"
                        name="title"
                        type="text"
                        required
                        value={formData.title}
                        onChange={handleChange}
                        className="block w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none"
                        placeholder="Trip to the mountains"
                    />
                </div>

                <div>
                    <label
                        htmlFor="body"
                        className="block text-sm font-medium text-gray-700 mb-1"
                    >
                        Body
                    </label>
                    <textarea
                        id="body"
                        name="body"
                        rows={4}
                        required
                        value={formData.body}
                        onChange={handleChange}
                        className="block w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none resize-none"
                        placeholder="Share your experience..."
                    />
                </div>

                <div>
                    <label
                        htmlFor="tags"
                        className="block text-sm font-medium text-gray-700 mb-1"
                    >
                        Tags (comma separated)
                    </label>
                        <input
                            id="tags"
                            name="tags"
                            type="text"
                            value={formData.tags}
                            onChange={handleChange}
                            className="block w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none"
                            placeholder="travel, summer, beach"
                        />
                </div>

                <button
                    type="submit"
                    className="w-full cursor-pointer bg-indigo-600 text-white py-2 rounded-md text-sm font-medium hover:bg-indigo-700 transition"
                >
                    Add Post
                </button>
            </form>
        </div>
    );
}
