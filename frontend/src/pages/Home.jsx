import { useEffect, useState } from "react";

import API from "../api/axios";

import { useAuth } from "../context/AuthContext";

function Home() {
  const [stories, setStories] = useState([]);

  const { token } = useAuth();

  const fetchStories = async () => {
    try {
      const { data } = await API.get("/stories");

      setStories(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchStories();
  }, []);

  const toggleBookmark = async (id) => {
    try {
      await API.post(
        `/stories/${id}/bookmark`,
        {},
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      );

      alert("Bookmark updated");
    } catch (error) {
      alert("Login required");
    }
  };

  return (
    <div className="p-5">
      <h1 className="text-3xl font-bold mb-5">Hacker News Stories</h1>

      <div className="space-y-4">
        {stories.map((story) => (
          <div key={story._id} className="bg-white p-4 rounded shadow">
            <a
              href={story.url}
              target="_blank"
              className="text-xl font-semibold text-blue-600"
            >
              {story.title}
            </a>

            <p className="mt-2">Points: {story.points}</p>

            <p>Author: {story.author}</p>

            <p>Posted: {story.postedAt}</p>

            <button
              onClick={() => toggleBookmark(story._id)}
              className="mt-3 bg-black text-white px-4 py-2 rounded"
            >
              Bookmark
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;
