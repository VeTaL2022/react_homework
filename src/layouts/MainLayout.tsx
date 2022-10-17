import {Outlet} from "react-router-dom";
import {FC} from "react";

export const MainLayout: FC = () => {

    return (
        <div>
            <Outlet/>
        </div>
    );
};