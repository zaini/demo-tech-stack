import { submitNewPost } from "../_actions/submit-new-post";

const NewPostForm = () => {
    return (
        <div className="mb-12 bg-white shadow-md rounded-lg p-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Create New Post</h2>
            <form action={submitNewPost} className="space-y-4">
                <div>
                    <label htmlFor="title" className="block text-sm font-medium text-gray-700 mb-1">Title</label>
                    <input
                        name="title"
                        id="title"
                        type="text"
                        placeholder="Enter post title"
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        required
                    />
                </div>
                <div>
                    <label htmlFor="content" className="block text-sm font-medium text-gray-700 mb-1">Content</label>
                    <textarea
                        name="content"
                        id="content"
                        placeholder="Write your post content here"
                        rows={4}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        required
                    ></textarea>
                </div>
                <button
                    type="submit"
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-md transition duration-300 ease-in-out"
                >
                    Create Post
                </button>
            </form>
        </div>
    )
}

export default NewPostForm;