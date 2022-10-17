import {Navigate, Route, Routes} from "react-router-dom";
import {FC} from "react";

import {MainLayout} from "./layouts";
import {PostDetailsPage, PostPage} from "./pages";

export const App: FC = () => {

    return (
        <Routes>
            <Route path={''} element={<MainLayout/>}>
                <Route index element={<Navigate to={'posts'}/>}/>
                <Route path={'posts'} element={<PostPage/>}>
                    <Route path={':id'} element={<PostDetailsPage/>}/>
                </Route>
            </Route>
        </Routes>
    )

}