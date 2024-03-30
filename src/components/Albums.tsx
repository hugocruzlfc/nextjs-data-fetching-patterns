import React from "react";

export interface AlbumsProps {
  albums: any[];
}

export const Albums: React.FC<AlbumsProps> = async ({ albums }) => {
  //   console.log("Getting albums...");
  //   const response = await fetch(
  //     "https://jsonplaceholder.typicode.com/albums?_limit=5"
  //   );
  //   const albums = await response.json();
  //   console.log("Done getting albums!");
  return (
    <div className="bg-gray-900 text-gray-100 p-5 mt-8 rounded-lg">
      <h2 className="text-lg font-semibold mb-3">Albums</h2>
      <ul className="space-y-2">
        {albums.map((album: any) => (
          <li
            key={album.id}
            className="bg-gray-800 p-3 rounded shadow-md"
          >
            {album.title}
          </li>
        ))}
      </ul>
    </div>
  );
};
