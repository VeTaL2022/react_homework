import {Outlet} from "react-router-dom";
import {Posts} from "../../components";

export function PostsPage() {

    return(
        <div>
            <Posts/>
            <Outlet/>
        </div>
    )

}