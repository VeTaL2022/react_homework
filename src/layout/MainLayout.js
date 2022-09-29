import {Outlet} from "react-router-dom";
import {Headers} from "../components";

export function MainLayout() {

    return(
        <div>
            <Headers/>
            <h3>Content</h3>
            <Outlet/>
        </div>
    )

}