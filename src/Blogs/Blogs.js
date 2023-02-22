

import React, { useState } from 'react'
import './Blogs.css'
import useFetch from '../CustomHook/useFetch'
import { Link } from 'react-router-dom'
import { MdEdit } from 'react-icons/md';

const Blogs = () => {
    
  const { data, loading, error } = useFetch("http://localhost:7000/blogs")
  const [searching, setSearch] = useState("");
  const [editMode, setEditMode] = useState(false);
  const [editedTitle, setEditedTitle] = useState("");
  const [selectedBlogId, setSelectedBlogId] = useState(null);


  const handleEdit = (id, title) => {
    setSelectedBlogId(id);
    setEditedTitle(title);
    setEditMode(true);
  }

  const handleSave = (blog , index) => {
    blog =  {...blog, title : editedTitle };
  data.splice(index,1, blog)
    setEditMode(false);
  }

  const handleCancel = () => {
    setSelectedBlogId(null);
    setEditedTitle("");
    setEditMode(false);
  }

  if (loading) return "loading ......"

  if (error) return "Errror fetching....."

  return (
    <div className='Contatiner'>
      <input
      className='search-bar'
        type="text"
        placeholder="search for a blog"
        value={searching}
        onChange={(event) => setSearch(event.target.value.toLowerCase())}
      />

      {data?.filter((blog) => blog.author.toLowerCase().includes(searching))?.map((blog , index) => (
        <div key={blog.id} className="card">
          {editMode && selectedBlogId === blog.id ? (
            <div className='Editing'>
              <label>Edit the Title: </label>
              <input
                type="text"
                value={editedTitle}
                onChange={(event) => setEditedTitle(event.target.value)}
              />
              <button onClick={() =>handleSave(blog , index)}>Save</button>
              <button onClick={handleCancel}>Cancel</button>
            </div>
          ) : (
            <div>
              <h2>Title : {blog.title} <MdEdit size={25} className="hovering" onClick={() => handleEdit(blog.id, blog.title)} /></h2> 
              <Link to={`/SingleBlog/${blog.id}`} >
              </Link>
            </div>
          )}
          <div>Author : {blog.author}</div>
          <div>Blog : {blog.blog}</div>
        </div>
      ))}
    </div>
  )
}

export default Blogs
