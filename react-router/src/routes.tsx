import { createBrowserRouter } from "react-router-dom";

import { Home } from "./Pages/Home/index";
import { Sobre } from "./Pages/Sobre/index";

const router = createBrowserRouter ([

    {
        path:"/",
        element:<Home/>
    },
    {
        path:"/sobre",
        element:<Sobre/>
    }
    
])
export{router};