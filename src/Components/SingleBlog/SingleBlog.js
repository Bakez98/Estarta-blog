import React from "react";
import { Helmet } from "react-helmet";
import { useNavigate, useParams } from "react-router-dom";
import {useEffect} from 'react'
// import useFetch from "../CustomHook/useFetch";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";

const SingleBlog = () => {

  const { loading, error, activeBlog } = useSelector((state) => state.blogsReducer);
  const dispatch = useDispatch()
  const navigate = useNavigate();
  const { id } = useParams();
  // const {
  //   data: blog,
  //   loading,
  //   error,
  // } = useFetch(`http://localhost:7000/blogs/${id}`);

  useEffect(() => {
    async function fetchData() {
      dispatch({
        type: "FETCH_LOADING",
      });

      try {
        const responce = await fetch(`http://localhost:7000/blogs/${id}`);
        const activeBlog = await responce.json();
        console.log(activeBlog)
        dispatch({
          type: "FETCH_SINGLE_BLOG",
          payload: activeBlog,
        });
      } catch (error) {
        dispatch({
          type: "FETCH_ERROR",
        });
      }
    }

    fetchData();

    return () => {
      dispatch({
        type: "FETCH_CLEAN_UP"
      })
      console.log("Clean up for singleBlog")
    };
  }, []);

  async function HandleDelete() {
    await fetch(`http://localhost:7000/blogs/${id}`, {
      method: "DELETE",
    });

    navigate("/");
  }

  if (loading) return "loading ......";

  if (error) return "Errror fetching.....";

  return (
    <div key={activeBlog.id}>
      <Helmet>
        <meta charSet="utf-8" />
        <title>{`Blog ${activeBlog.id}`}</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>

      <h2>{activeBlog.title}</h2>
      <div>{activeBlog.author}</div>
      <div>{activeBlog.blog}</div>
      <button onClick={HandleDelete}>Delete this Blog</button>
    </div>
  );
};

export default SingleBlog;
