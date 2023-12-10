import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Components/Home/Home";

const Routes = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout></MainLayout>,
        children:[
            {
                path: "/",
                element: <Home/>
            },
            {
                path: "/about",
                element: <h1>About</h1>
            }
        ]
    }
])


export default Routes;