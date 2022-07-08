import Registration from "../pages/Authentication/Registration/Registration";
import Login from "../pages/Authentication/Login/Login";
import {Navigate} from "react-router-dom";

export const publicRoutes = [
	{
		path: '/registration',
		element: <Registration />,
	},
	{
		path: '/auth',
		 element: <Login />,
	},
	{ path: '*', element: <Navigate to='.' /> },
]
