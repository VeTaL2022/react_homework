import {Outlet} from "react-router-dom";
import {Posts} from "../../components";

export function PostsPage() {

    return(
        <div style={{display:'flex'}}>
            <div>
                <Posts/>
            </div>
            <div style={{width:'40%'}}>
                <Outlet/>
            </div>
        </div>
    )

}