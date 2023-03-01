import React, {  useMemo, useState } from "react";
// import useCallback from "react";
import "./Blogs.css";
import useFetch from "../CustomHook/useFetch";
import Blog from "./Blog";
// import { MdPermDataSetting } from "react-icons/md";

const Blogs = () => {
  const { data, loading, error } = useFetch("http://localhost:7000/blogs");
  const [searching, setSearch] = useState("");
  // const [test, setTest] = useState(true);

  const fillterArray = useMemo(() => {
    return data?.filter((blog) => {
      // console.log("useMemo");
      return (
        blog.author.toLowerCase().includes(searching) ||
        blog.blog.toLowerCase().includes(searching) ||
        blog.title.toLowerCase().includes(searching.toLocaleLowerCase())
      );
    });
  }, [searching, data]);

  // const fillterArray = data?.filter((blog) => {
  //   console.log("useMemo");
  //   return (
  //     // blog.author.toLowerCase().includes(searching) ||
  //     // blog.blog.toLowerCase().includes(searching) ||
  //     blog.title.toLowerCase().includes(searching.toLocaleLowerCase())
  //   );
  // });

  // const TestCallback = useCallback(() => {
  //   console.log("TestCallback");
  // }, [searching]);

  // const TestCallback = () => {
  //   console.log("TestCallback");
  // };



  // console.log("parent render");

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

      {fillterArray?.map((blog, index) => (
        <Blog blog={blog}  key={index} />
      ))}
      {/* <button onClick={() =>   TestCallback()}>Test</button>
      <button onClick={() => setTest(!test)}>change</button> */}

    </div>
  );
};

export default Blogs;
