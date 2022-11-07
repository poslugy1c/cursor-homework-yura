import './App.css';
import { Route, Routes } from "react-router-dom";
import NewPost from "./components/NewPost/NewPost";
import Posts from "./components/Posts/Posts";
import Docs from "./components/Docs/Docs";

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<NewPost />}></Route>
        <Route path='posts' element={<Posts />}></Route>
        <Route path='/docs' element={<Docs />}></Route>
      </Routes>
    </div>
  );
}

export default App;
