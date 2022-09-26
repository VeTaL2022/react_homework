import './App.css';
import css from './App.module.css'
import {Routes,Route,Link} from "react-router-dom";

import Home from "./components/home/Home";
import Todos from "./components/todos/Todos";
import TodoDetails from "./components/todos/TodoDetails";
import Albums from "./components/albums/Albums";
import Comments from "./components/comments/Comments";
import Post from "./components/posts/Post";

function App() {

  return (
    <div className={css.App}>
      <ul>
          <li><Link to={'/'}>Home</Link></li>
          <li><Link to={'/todos'}>Todos</Link></li>
          <li><Link to={'/albums'}>Albums</Link></li>
          <li><Link to={'/comments'}>Comments</Link></li>
      </ul>

        <hr/>
        <Routes>
            <Route index element={<Home/>}/>
            <Route path={'todos'} element={<Todos/>}/>
            <Route path={'todos/:id'} element={<TodoDetails/>}/>
            <Route path={'albums'} element={<Albums/>}/>
            <Route path={'comments'} element={<Comments/>}/>
            <Route path={'posts/:id'} element={<Post/>}/>
        </Routes>
        <hr/>
    </div>
  );
}

export default App;