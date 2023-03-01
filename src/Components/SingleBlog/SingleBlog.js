import React from 'react'
import { Helmet } from 'react-helmet'
import { useNavigate, useParams } from 'react-router-dom'
import useFetch from '../CustomHook/useFetch'



const SingleBlog = () => {
    

  
    const navigate = useNavigate()
    const {id} = useParams()
    const {data : blog, loading, error} = useFetch(`http://localhost:7000/blogs/${id}`)

   async function HandleDelete() {
        
       await fetch(`http://localhost:7000/blogs/${id}`, {
            method: "DELETE"
        })

       navigate("/")
    }

    if(loading) return "loading ......"

if(error) return "Errror fetching....."

  return (


    <div key={blog.id}>
          <Helmet>
    <meta charSet="utf-8" />
    <title>{`Blog ${blog.id}`}</title>
    <link rel="canonical" href="http://mysite.com/example" />
  </Helmet>
    
      <h2>{blog.title}</h2>
      <div>{blog.author}</div>
      <div>{blog.blog}</div>
     <button onClick={HandleDelete}>Delete this Blog</button>
  </div>
  )
}

export default SingleBlog