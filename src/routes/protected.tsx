import { Navigate } from 'react-router-dom'
import Homepage from "../pages/Homepage/Homepage";
import DetailVideo from "../pages/DetailVideo/DetailVideo";
import Movies from "../pages/Movies/Movies";
import Favorites from "../pages/Favorites/Favorites";

export const protectedRoutes = [
	{
		path: '/homepage/',
		element: <Homepage />,
		children: [
			{ path: '/homepage/', element: <Homepage /> },
		],
	},
	{
		path: '/detailvideo/',
		element: <DetailVideo />,
		children: [
			{ path: '/detailvideo/:id', element: <DetailVideo /> },
		],
	},
	{
		path: '/movies/',
		element: <Movies />,
		children: [
			{ path: '/movies/', element: <Movies /> },
		],
	},
	{
		path: '/tvshows/',
		element: <DetailVideo />,
		children: [
			{ path: '/tvshows/', element: <DetailVideo /> },
		],
	},
	{
		path: '/cartoons/',
		element: <DetailVideo />,
		children: [
			{ path: '/cartoons/', element: <DetailVideo /> },
		],
	},
	{
		path: '/favorites/',
		element: <Favorites />,
		children: [
			{ path: '/favorites/', element: <Favorites /> },
		],
	},
]
