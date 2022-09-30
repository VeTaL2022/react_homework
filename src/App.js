import {Navigate, Route, Routes} from "react-router-dom";

import './App.css';
import {MainLayout} from "./layouts/MainLayout";
import {AboutPage, HomePage, NotFoundPage, PostDetailsPage, PostsPage, UsersPage} from "./pages";

function App() {
  return (
    <Routes>
      <Route path={'/'} element={<MainLayout/>}>
        <Route index element={<Navigate to={'home'}/>}/>
        <Route path={'home'} element={<HomePage/>}/>
        <Route path={'users'} element={<UsersPage/>}/>
        <Route path={'posts'} element={<PostsPage/>}>
            <Route path={':id'} element={<PostDetailsPage/>}/>
        </Route>
        <Route path={'about'} element={<AboutPage/>}/>
      </Route>
        <Route path={'*'} element={<NotFoundPage/>}/>
    </Routes>
  );
}

export default App;
