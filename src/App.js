import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import About from "./pages/about/About";
import AddArticle from "./pages/addArticle/AddArticle";
import Article from "./pages/article/Article";
import EditArticle from "./pages/editArticle/EditArticle";
import Articles from "./pages/articles/Articles";
import Courses from "./pages/courses/Courses";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/add-article" element={<AddArticle />} />
        <Route path="/article/:articleId" element={<Article />} />
        <Route path="/edit-article/:articleId" element={<EditArticle />} />
        <Route path="/articles" element={<Articles />} />
        <Route path="/courses" element={<Courses />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
