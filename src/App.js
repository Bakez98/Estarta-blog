import './App.css';
import NavBar from './NavBar/NavBar';
import Blogs from './Blogs/Blogs';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Error from './Error/Error';
import SingleBlog from './SingleBlog/SingleBlog';
import CreateBlog from './CreateBlog/CreateBlog';


// to run the server for fetching data from it :
//npx json-server --watch data/db.json --port 7000

//to run the project :
//npm start

function App() {
  
  return (
    <BrowserRouter>
    <div className="App">
      <NavBar/>
      <Routes>
        <Route path='/' element={<Blogs />}/>
        <Route path='/SingleBlog/:id' element={<SingleBlog />}/>
        <Route path='*' element={<Error />}/>
        <Route path='/CreateBlog' element={<CreateBlog/>}/>


      </Routes>
      
    </div>
    </BrowserRouter>
  );
}

export default App;
