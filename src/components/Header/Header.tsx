// @ts-ignore
import searchSVG from '../../assets/icons/search.svg'
import {Link} from 'react-router-dom'
import {getAuth, signOut} from 'firebase/auth'

import './header.scss'
import {Avatar, Select} from '@mantine/core'
import {useDispatch} from 'react-redux'
import {removeUser} from '../../redux/slices/userSlice'
import {useAuth} from '../../hooks/useAuth'
import {Heart, Notification, Search} from "tabler-icons-react";
import {useFavourites} from "../../hooks/useFavorite";
import {useState} from "react";

export const Header = () => {
    const dispatch = useDispatch()
    const {favourites} = useFavourites()
    const countFav = favourites.length
    const {isAuth} = useAuth()
    const auth = getAuth()

    const exit = () => {
        signOut(auth)
            .then(() => {
                dispatch(removeUser())
            })
            .catch(error => {
                alert('Ошибка выхода')
            })
    }

    return (
        <header className='d-flex space-between flex-center flex-middle'>
            <div className='nav-links d-flex flex-center flex-middle align-items-center'>
                <nav className='d-flex space-between align-items-center'>
                    <Link to={!isAuth ? '/' : ''} className='nav-item home'>
                        <h2 className='logo logo-text red-color f-s-28 m-r-25'>NETFLIX</h2>
                    </Link>
                    <div className='nav-links'>
                        <Link to={'/homepage'} className='nav-item home'>
                            Домой
                        </Link>
                        <Link to={'/series/'} className='nav-item home'>
                            Сериалы
                        </Link>
                        <Link to={'/movies/'} className='nav-item home'>
                            Фильмы
                        </Link>
                        <Link to={'/cartoons/'} className='nav-item home'>
                            Мультфильмы
                        </Link>
                    </div>
                </nav>
            </div>
            <div className='righticons d-flex flex-end flex-middle align-items-center'>
                <div>
                    <Link to={'/search/'}>
                        <Search
                            size={30}
                            strokeWidth={2}
                            color={'white'}
                        />
                    </Link>
                </div>
                <div>
                    <Link to={'/favorites/'} className='nav-item home' style={{display: 'flex', alignItems: 'center'}}>
                        <Heart
                            size={30}
                            strokeWidth={2}
                            color={'#bf4240'}
                            style={{paddingRight: '7px'}}
                        />
                        {countFav}
                    </Link>
                </div>
                <div className='dropdown notification'>
                    <Notification
                        size={30}
                        strokeWidth={2}
                        color={'#fff'}
                    />
                    <div className='dropdown-content'>
                        <Link to={'/homepage'} className='nav-item home'>
                            <Notification
                                size={20}
                                strokeWidth={2}
                                color={'#e6b7b3'}
                            />
                            <span>
								You have new notification from <span>User 123</span>
							</span>
                        </Link>
                    </div>
                </div>

                <div className='dropdown'>
                    <div>
                        <Avatar color='cyan' radius='xl'>
                            MK
                        </Avatar>
                        <span className='profile-arrow'/>
                        <div className='dropdown-content'>
                            <div className='profile-links'>
                                <a href='#' className='profile-item last'>
                                    Manage Profiles
                                </a>
                            </div>
                            <div className='line'></div>
                            <div className='links d-flex direction-column'>
                                <a href='user-profile/home.html'>Account</a>
                                <button
                                    onClick={() => {
                                        exit()
                                    }}
                                >
                                    Sign Out of Netflix
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}
