import { createBrowserRouter } from "react-router-dom";
import Home from "./Components/Home";
import Main from "./Components/Main";

const router = createBrowserRouter([
    {
        path:'/',
        element: <Main/>,
        children: [
            {
                path: '/',
                element: <Home/>,
                loader: ()=> fetch('http://localhost:5000/users'),
            }
        ]
    }
])

export default router;