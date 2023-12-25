import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import NoPage from "./pages/nopage.tsx";
import Projects from "./pages/projects/index.tsx";
import Todolist from "./pages/projects/todolist/index.tsx";
import Home from "./pages/home/home.tsx";
import Blog from "./pages/blog/blog.tsx";

function App() {
  return (
    <BrowserRouter>
      <Toaster />
      <Routes>
        <Route index element={<Home />}></Route>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/projects" element={<Projects />}></Route>
        <Route path="/projects/todolist" element={<Todolist />}></Route>
        <Route path="/blog" element={<Blog />}></Route>
        <Route path="*" element={<NoPage />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
