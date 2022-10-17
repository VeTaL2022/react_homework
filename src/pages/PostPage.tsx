import {FC} from "react";
import {Outlet} from "react-router-dom";

import {PostForm, Posts} from "../components";

export const PostPage:FC = () => {
    
    return(
        <div>
            <PostForm/>
            <Outlet/>
            <hr/>
            <Posts/>
        </div>
    )

}