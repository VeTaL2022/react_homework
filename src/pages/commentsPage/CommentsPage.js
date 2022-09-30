import {Outlet} from "react-router-dom";

import {Comments} from "../../components";

export function CommentsPage() {

    return(
        <div style={{display:'flex'}}>
            <div style={{width:'40%'}}>
                <Outlet/>
            </div>
            <div>
                <Comments/>
            </div>
        </div>
    )

}