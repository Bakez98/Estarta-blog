import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { MdEdit } from "react-icons/md";


const Blog = ({ blog }) => {
  const [Title, setTitle] = useState(blog.title);
  const [enableEditMode, setenableEditMode] = useState(false);

  const handleEdit = () => {
    setenableEditMode(true);
  };

  const handleSave = (blog) => {
    setenableEditMode(false);
  };

  const handleCancel = () => {
    setenableEditMode(false);
  };

  return (
    <div className="card">
      {enableEditMode ? (
        <div className="Editing">
          <label>Edit the Title: </label>
          <input
            type="text"
            defaultValue={blog.title}
            onChange={(event) => setTitle(event.target.value)}
          />
          <button onClick={() => handleSave()}>Save</button>
          <button onClick={handleCancel}>Cancel</button>
        </div>
      ) : (
        <div>
          <h2>
            Title : {Title}{" "}
            <MdEdit
              size={25}
              className="hovering"
              onClick={() => handleEdit()}
            />
          </h2>
        </div>
      )}
      <Link to={`/SingleBlog/${blog.id}`}>
        <div>Author : {blog.author}</div>
        <div>Blog : {blog.blog}</div>
      </Link>
    </div>
  );
};

export default Blog;
