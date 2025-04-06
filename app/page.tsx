import { prisma } from "@/lib/prisma";
import NewPostForm from "./_components/new-post-form";
import DeletePostButton from "./_components/delete-post-button";

export default async function Home() {
  const posts = await prisma.post.findMany();
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <NewPostForm />
        <h2 className="text-3xl font-extrabold text-gray-900 text-center mb-8">Latest Posts</h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-2">
          {posts.map((post) => (
            <div key={post.id} className="bg-white overflow-hidden shadow rounded-lg hover:shadow-md transition-shadow duration-300">
              <div className="px-6 py-5">
                <div className="flex justify-between items-center mb-2">
                  <h3 className="text-xl font-semibold text-gray-900">{post.title}</h3>
                  <DeletePostButton postId={post.id} />
                </div>
                <div className="h-px bg-gray-200 my-3"></div>
                <p className="text-gray-600 mt-2">{post.content}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
