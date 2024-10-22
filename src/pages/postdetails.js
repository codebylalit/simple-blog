import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

const PostDetails = () => {
  const { id } = useParams();
  const [post, setPost] = useState(null);

  useEffect(() => {
    fetch(`/posts.json`)
      .then((response) => response.json())
      .then((data) => {
        const foundPost = data.find((p) => p.id === parseInt(id));
        setPost(foundPost);
      })
      .catch((error) => console.error("Error fetching post:", error));
  }, [id]);

  if (!post) return <div>Loading...</div>;

  return (
    <div className="min-h-screen flex flex-col p-6 bg-yellow-200">
      <img
        src={post.image}
        alt={post.title}
        className="w-full h-64 object-cover rounded-lg mb-4"
      />
      <h2 className="text-3xl font-semibold text-gray-800 mb-2">
        {post.title}
      </h2>
      <p className="text-gray-600">{post.content}</p>
    </div>
  );
};

export default PostDetails;
