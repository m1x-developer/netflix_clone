import {useNavigate, useRoutes} from 'react-router-dom'
import Landing from '../pages/Landing/Landing'
import {protectedRoutes} from './protected'
import {publicRoutes} from './public'
import {useAuth} from "../hooks/useAuth";
import {getAuth, onAuthStateChanged} from "firebase/auth";
import {useEffect, useState} from "react";
import {setUser} from "../redux/slices/userSlice";
import {useDispatch} from "react-redux";
import {useAuthState} from "react-firebase-hooks/auth";
import {LoadingOverlay} from "@mantine/core";


export const AppRoutes = () => {
    const dispatch = useDispatch()
    const auth = getAuth();
    const navigate = useNavigate()

    const [user, loading, error] = useAuthState(auth)
    console.log(user,loading,error)



    useEffect(()=>{
       const  authFunc = async () => {
          await onAuthStateChanged(auth, (user) => {
               if (user) {
                   dispatch(setUser({
                       email: user.email,
                       id: user.uid,
                       token: user.refreshToken,
                   }))
                   navigate('/homepage')
               } else {
                   navigate('/')
               }

           });
       }

       authFunc()
    },[])


    const {isAuth} = useAuth()


    const commonRoutes = [{path: '/', element: <Landing/>}]

    const routes = isAuth ? protectedRoutes : publicRoutes

    const element = useRoutes([...routes, ...commonRoutes])

    if(loading) {
        return  <LoadingOverlay visible={true} />
    }

    return <>{element}</>
}
