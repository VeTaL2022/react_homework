import {Navigate, Route, Routes} from "react-router-dom";

import './App.css';
import {MainLayout} from "./layouts";
import {RegisterPage} from "./pages";

function App() {
  return (
    <Routes>
        <Route path={'/'} element={<MainLayout/>}>
            <Route index element={<Navigate to={'/register'}/>}/>
            {/*<Route path={'/login'} element={<LoginPage/>}/>*/}
            <Route path={'/register'} element={<RegisterPage/>}/>
        </Route>
    </Routes>
  );
}

export default App;