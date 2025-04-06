"use client";

import { useState } from "react";
import { deletePost } from "../_actions/delete-post";
import { Trash2 } from "lucide-react";

interface IDeletePostButtonProps {
    postId: string;
}

const DeletePostButton = ({ postId }: IDeletePostButtonProps) => {
    const [isDeleting, setIsDeleting] = useState(false);

    const handleDelete = async () => {
        if (confirm("Are you sure you want to delete this post?")) {
            setIsDeleting(true);
            try {
                await deletePost(postId);
            } catch (error) {
                console.error("Failed to delete post:", error);
                alert("Failed to delete post. Please try again.");
            } finally {
                setIsDeleting(false);
            }
        }
    };

    return (
        <button
            onClick={handleDelete}
            disabled={isDeleting}
            className="text-gray-400 hover:text-red-500 transition-colors duration-200 focus:outline-none disabled:opacity-50"
            aria-label="Delete post"
        >
            <Trash2 size={18} />
        </button>
    );
};

export default DeletePostButton; 