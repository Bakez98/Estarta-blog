import React from 'react'
import './Blogs.css'
import useFetch from '../CustomHook/useFetch'
import { Link } from 'react-router-dom'


const Blogs = () => {
    

const {data, loading, error} = useFetch("http://localhost:7000/blogs")


if(loading) return "loading ......"

if(error) return "Errror fetching....."

  return (
    <div className='Contatiner'>

        {
        data?.map((blog) => (
            <div key={blog.id}>
              <Link to={`/SingleBlog/${blog.id}`}>
                <h2>{blog.title}</h2>
                <div>{blog.author}</div>
                <div>{blog.blog}</div>
                </Link>
            </div>

        ))}

    </div>
  )
}

export default Blogs