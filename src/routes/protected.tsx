import { Navigate } from 'react-router-dom'
import Homepage from "../pages/Homepage/Homepage";
import DetailVideo from "../pages/DetailVideo/DetailVideo";
import Movies from "../pages/Movies/Movies";
import Favorites from "../pages/Favorites/Favorites";
import Cartoons from "../pages/Cartoons/Cartoons";
import Series from "../pages/Series/Series";
import Search from "../pages/Search/Search";

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
		path: '/series/',
		element: <Series />,
		children: [
			{ path: '/series/', element: <Series /> },
		],
	},
	{
		path: '/cartoons/',
		element: <Cartoons/>,
		children: [
			{ path: '/cartoons/', element: <Cartoons/> },
		],
	},
	{
		path: '/favorites/',
		element: <Favorites />,
		children: [
			{ path: '/favorites/', element: <Favorites /> },
		],
	},
	{
		path: '/search/',
		element: <Search />,
		children: [
			{ path: '/search/', element: <Search /> },
		],
	},
]
