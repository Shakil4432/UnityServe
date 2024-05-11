import { createBrowserRouter } from "react-router-dom";
import Root from "../Root/Root";
import NotFound from "../Shared/NotFound";
import Home from "../Pages/Home/Home";
import Need_Volunteer from "../Pages/Need_Volunteer/Need_Volunteer";
import Login from "../LoginAndRegister/Login";
import Register from "../LoginAndRegister/Register";
import AddPost from "../PrivateComponents/AddPost";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import ManagePost from "../PrivateComponents/ManagePost";
import RequestPost from "../PrivateComponents/RequestPost";
import VolunteerJobDetails from "../PrivateComponents/VolunteerJobDetails";

export const router = createBrowserRouter([
    {
        path:'/',
        element:<Root></Root>,
        errorElement:<NotFound></NotFound>,
        children:[
            {
                path:'/',
                element:<Home></Home>
            },
            {
                path:'/needvolunteer',
                element:<Need_Volunteer></Need_Volunteer>,
            },
            {
                path:'/needvolunteer/:id',
                element:<PrivateRoute>
                    <VolunteerJobDetails></VolunteerJobDetails>
                </PrivateRoute>,
                loader:({params})=> fetch(`http://localhost:7000/volunteerneed/${params.id}`)
            },
            {
                path:'/login',
                element:<Login></Login>,
            },
            {
                path:'/register',
                element:<Register></Register>
            },
            {
                path:'/addvolunteerpost',
                element:<PrivateRoute>
                    <AddPost></AddPost>
                </PrivateRoute>
            },
            {
                path:'/managepost',
                element:<PrivateRoute>
                    <ManagePost></ManagePost>
                </PrivateRoute>
            },
            {
                path:'/requestedpost',
                element:<PrivateRoute>
                    <RequestPost></RequestPost>
                </PrivateRoute>
            }

        ]
    }
])