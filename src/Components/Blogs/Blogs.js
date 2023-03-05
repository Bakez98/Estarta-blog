import React, {  useMemo, useState , useEffect} from "react";
import "./Blogs.css";
// import useFetch from "../CustomHook/useFetch";
import Blog from "./Blog";

import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";

const Blogs = () => {
  // const { data, loading, error } = useFetch("http://localhost:7000/blogs");
  const [searching, setSearch] = useState("");

  //using useSelector to get the state from my reducer
  const { blogs, loading, error } = useSelector((state) => state.blogsReducer);

  //using useDispatch :
  const dispatch = useDispatch();
  
  //a useEffect for fetching the Blogs into my component and use the Dispatch to controll 

  useEffect(() => {

    async function fetchData() {
      dispatch({
        type: "FETCH_LOADING",
      });
  
      try {
        const responce = await fetch(
          "http://localhost:7000/blogs"
        );
        const FetchedBlogs = await responce.json();
  
        dispatch({
          type: "FETCH_SUCCESS",
          payload: FetchedBlogs,
        });
      } catch (error) {
        dispatch({
          type: "FETCH_ERROR",
        });
      }
    }
    

fetchData();



  }, [])
  




  // below is for filttering the blogs 
  const fillterArray = useMemo(() => {
    return blogs?.filter((blog) => {
     
      return (
        blog.author.toLowerCase().includes(searching) ||
        blog.blog.toLowerCase().includes(searching) ||
        blog.title.toLowerCase().includes(searching.toLocaleLowerCase())
      );
    });
  }, [searching, blogs]);



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

      {blogs?.map((blog, index) => (
        <Blog blog={blog}  key={index} />
      ))}


    </div>
  );
};

export default Blogs;
