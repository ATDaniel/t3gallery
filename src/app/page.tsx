// import { db } from "@vercel/postgres";

import { db } from "~/server/db";

const mockUrls = [
  "https://utfs.io/f/8b77296a-1760-497f-9aeb-cd03ba7b7bc3-f0g7u7.jpg",
  "https://utfs.io/f/d09938ce-2c6b-44ac-9033-6645e11e9069-f0g8fn.jpg",
  "https://utfs.io/f/a0ab705b-4a4b-47c4-82de-62dc7fef8231-f0g7v3.jpg",
  "https://utfs.io/f/1a90df96-830c-41e0-aa66-2c8f9a1b8778-f0g73f.jpg",
];

const mockImages = mockUrls.map((url, index) => ({
  id: index + 1,
  url,
}));

export default async function HomePage() {
  const posts = await db.query.posts.findMany();

  console.log(posts);

  return (
    <main className="">
      <div className="flex flex-wrap gap-4">
        {posts.map((post) => (
          <div key={post.id}>{post.name}</div>
        ))}
        {[...mockImages, ...mockImages, ...mockImages].map((image, index) => (
          <div key={image.id + "-" + index} className="w-48">
            <img src={image.url} alt="image" />
          </div>
        ))}
      </div>
      Hello (Gallery in Progress)
    </main>
  );
}
