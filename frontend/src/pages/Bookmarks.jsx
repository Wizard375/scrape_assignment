import { useEffect, useState } from "react";

import API from "../api/axios";

import { useAuth } from "../context/AuthContext";

function Bookmarks() {
  const [bookmarks, setBookmarks] = useState([]);

  const { token } = useAuth();

  const fetchBookmarks = async () => {
    try {
      const { data } = await API.get("/stories/bookmarks/me", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      setBookmarks(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchBookmarks();
  }, []);

  return (
    <div className="p-5">
      <h1 className="text-3xl font-bold mb-5">My Bookmarks</h1>

      <div className="space-y-4">
        {bookmarks.map((story) => (
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
          </div>
        ))}
      </div>
    </div>
  );
}

export default Bookmarks;
