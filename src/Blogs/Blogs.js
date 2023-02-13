import React from 'react'
import './Blogs.css'

const Blogs = ({loading , data}) => {
    

  return (
    <div className='Contatiner'>

        {loading ? <p>Loading.....</p> :
        
        data.map((blog) => (
            <div key={blog.id}>
                <h2>{blog.title}</h2>
                <div>{blog.author}</div>
                <div>{blog.blog}</div>
            </div>

        ))}

    </div>
  )
}

export default Blogs