import './App.css';
import NavBar from './NavBar/NavBar';
import Blogs from './Blogs/Blogs';
import { useState, useEffect } from 'react';

const blogs = [
  {
    "id": 0,
      "title":"First Blog",
      "author":"First author ",
      "blog": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut pariatur quam repudiandae consequatur provident, mollitia ipsam accusamus,"
  }, 
   {
    "id": 1,
      "title": "Second Blog",
      "author": "Second author",
      "blog": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut pariatur quam repudiandae consequatur provident, mollitia ipsam accusamus,"
  },      {
      "id": 2,
      "title": "Third Blog",
      "author": "Third author",
      "blog": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut pariatur quam repudiandae consequatur provident, mollitia ipsam accusamus,"
  },      {
    "id": 3,
      "title": "Forth Blog",
      "author": "Forth author",
      "blog": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut pariatur quam repudiandae consequatur provident, mollitia ipsam accusamus,"
  }
];



function App() {

  const [data,setData] = useState([])
  const [loading, setLoading] = useState(true);
  

  useEffect(() => {

    
    setTimeout(() => {
      setData(blogs)
      setLoading(!loading)
    }, "2000")
  },[])
  
  return (
    <div className="App">
      <NavBar/>
      <Blogs data={data} loading={loading} />
    </div>
  );
}

export default App;
