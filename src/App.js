import "./App.css";
import NavBar from "./Components/NavBar/NavBar";
import { lazy, Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Helmet } from "react-helmet";

const Blogs = lazy(() => import("./Components/Blogs/Blogs"));
const SingleBlog = lazy(() => import("./Components/SingleBlog/SingleBlog"));
const Error = lazy(() => import("./Components/Error/Error"));
const CreateBlog = lazy(() => import("./Components/CreateBlog/CreateBlog"));

// to run the server for fetching data from it :
//npx json-server --watch data/db.json --port 7000

//to run the project :
//npm start

function App() {
  return (
    <BrowserRouter>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Estarta Blogs</title>
        <link rel="icon" href="%PUBLIC_URL%/favicon.ico" />
      </Helmet>
      <div className="App">
        <NavBar />
        <Suspense fallback={"Loading.........."}>
          <Routes>
            <Route path="/" element={<Blogs />} />
            <Route path="/SingleBlog/:id" element={<SingleBlog />} />
            <Route path="*" element={<Error />} />
            <Route path="/CreateBlog" element={<CreateBlog />} />
          </Routes>
        </Suspense>
      </div>
    </BrowserRouter>
  );
}

export default App;
