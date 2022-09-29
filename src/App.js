import {Route, Routes} from "react-router-dom";

import './App.css';
import {MainLayout} from "./layout/MainLayout";
import {CommentsPage, PostsPage, UsersPage} from "./pages";


function App() {
  return (
    <div>
        <Routes>
            <Route>
                <Route index element={<MainLayout/>}/>
                <Route path={'users'} element={<UsersPage/>}/>
                <Route path={'posts'} element={<PostsPage/>}></Route>
                <Route path={'comments'} element={<CommentsPage/>}></Route>
            </Route>
        </Routes>
    </div>
  );
}

export default App;
