import {Route, Routes} from "react-router-dom";

import './App.css';
import {MainLayout} from "./layout/MainLayout";
import {CommentsPage, PostsPage, UsersPage} from "./pages";


function App() {
  return (
    <div>
        <Routes>
            <Route path={'/'} element={<MainLayout/>}>
                <Route path={'users'} element={<UsersPage/>}/>
                <Route path={'posts'} element={<PostsPage/>}/>
                <Route path={'comments'} element={<CommentsPage/>}/>
            </Route>
        </Routes>
    </div>
  );
}

export default App;
