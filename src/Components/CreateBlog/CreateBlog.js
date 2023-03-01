import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";
import "./CreateBlog.css";
import { Helmet } from "react-helmet";

const CreateBlog = () => {
  const navigate = useNavigate();
  const myRef = useRef({
    title: "",
    author: "",
    blog: "",
  });

  console.log(myRef.current);
  function handleSubmit(event) {
    event.preventDefault();

    fetch("http://localhost:7000/blogs", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(myRef.current),
    });
    console.log(myRef.current);
    navigate("/");
  }

  function handleChange(event) {
    myRef.current = {
      ...myRef.current,
      [event.target.name]: event.target.value,
    };
  }

  return (
    <div className="wrap">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Create a new Blog</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      <form className="container" onSubmit={handleSubmit}>
        <label>Title:</label>
        <input type="text" name="title" required onChange={handleChange} />

        <label>Body:</label>
        <textarea name="blog" required onChange={handleChange}></textarea>

        <label>Author:</label>
        <input type="text" name="author" required onChange={handleChange} />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default CreateBlog;
