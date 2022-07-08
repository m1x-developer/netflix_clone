import { Navigate } from 'react-router-dom'
import Homepage from "../pages/Homepage/Homepage";
import DetailVideo from "../pages/DetailVideo/DetailVideo";

export const protectedRoutes = [
	{
		path: '/homepage',
		element: <Homepage />,
		children: [
			{ path: '/homepage/*', element: <Homepage /> },
			{ path: '*', element: <Navigate to='.' /> },
		],
	},
	{
		path: '/detailvideo',
		element: <DetailVideo />,
		children: [
			{ path: '/detailvideo/*', element: <DetailVideo /> },
			{ path: '*', element: <Navigate to='.' /> },
		],
	},
]
