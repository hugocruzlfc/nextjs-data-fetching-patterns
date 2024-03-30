import React from "react";
import { Albums } from "./Albums";

async function getPosts() {
  console.log("Getting Posts");
  const response = await fetch(
    "https://jsonplaceholder.typicode.com/posts?_limit=3"
  );
  const posts = await response.json();
  console.log("Done Getting Posts");
  return posts;
}

async function getAlbums() {
  console.log("Getting Albums");
  const response = await fetch(
    "https://jsonplaceholder.typicode.com/albums?_limit=3"
  );
  const albums = await response.json();
  console.log("Done Getting Albums");
  return albums;
}

export const Posts: React.FC = async () => {
  //   console.log("Getting posts...");
  //   const response = await fetch(
  //     "https://jsonplaceholder.typicode.com/posts?_limit=5"
  //   );
  //   const posts = await response.json();
  //   console.log("Done getting posts!");

  const postsPromise = getPosts();
  const albumsPromise = getAlbums();
  const [posts, albums] = await Promise.all([postsPromise, albumsPromise]);

  return (
    <div className="bg-gray-800 text-white p-5 min-h-screen">
      <h2 className="text-xl font-bold mb-4">Posts</h2>
      <ul className="space-y-2">
        {posts.map((post: any) => (
          <li
            key={post.id}
            className="bg-gray-700 p-3 rounded-md shadow"
          >
            {post.title}
          </li>
        ))}
      </ul>
      <Albums albums={albums} />
    </div>
  );
};
