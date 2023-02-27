import React, { useState } from "react";
import "./Blogs.css";
import useFetch from "../CustomHook/useFetch";
import Blog from "./Blog";

const Blogs = () => {
  const { data, loading, error } = useFetch("http://localhost:7000/blogs");
  const [searching, setSearch] = useState("");

  if (loading) return "loading ......";

  if (error) return "Errror fetching.....";

  return (
    <div className="Contatiner">
      <input
        className="search-bar"
        type="text"
        placeholder="search for a blog"
        value={searching}
        onChange={(event) => setSearch(event.target.value.toLowerCase())}
      />

      {data
        ?.filter(
          (blog) =>
            blog.author.toLowerCase().includes(searching) ||
            blog.blog.toLowerCase().includes(searching) ||
            blog.title.toLowerCase().includes(searching)
        )
        ?.map((blog, index) => (
          <Blog blog={blog} key={index} />
        ))}
    </div>
  );
};

export default Blogs;
