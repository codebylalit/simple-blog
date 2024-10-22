import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Pagination from "../component/pagination";

const Home = () => {
  const [posts, setPosts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 9; // Show 5 posts per page

  // Get current posts
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  useEffect(() => {
    fetch("/posts.json")
      .then((response) => response.json())
      .then((data) => setPosts(data))
      .catch((error) => console.error("Error fetching posts:", error));
  }, []);

  return (
    <div className="min-h-screen flex flex-col p-6 bg-yellow-200">
      <h1 className="text-4xl font-bold text-gray-800 mb-6 text-center ">
        Blog Posts
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {currentPosts.map((post) => (
          <div
            key={post.id}
            className="bg-gray-800 p-4 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-200"
          >
            <Link to={`/posts/${post.id}`} className="flex w-full">
              <img
                src={post.image}
                alt={post.title}
                className="w-32 h-32 rounded-md text-white mr-4 object-cover" // Added object-cover for better image display
              />
              <div className="flex-1">
                <h2 className="text-xl font-semibold text-white mb-2">
                  {post.title}
                </h2>
                <p className="text-gray-400 mb-4">{post.excerpt}</p>
              </div>
            </Link>
          </div>
        ))}
      </div>
      <Pagination
        totalPosts={posts.length}
        postsPerPage={postsPerPage}
        paginate={paginate}
        currentPage={currentPage} // Pass the current page
      />
    </div>
  );
};

export default Home;
