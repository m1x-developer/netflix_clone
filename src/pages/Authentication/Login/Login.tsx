// @ts-ignore
import logo from '../../../assets/logo.PNG'
import {useFormik} from "formik";
import {LoadingOverlay} from "@mantine/core";
import {useState} from "react";
import {useAuth} from "../../../hooks/useAuth";
import {useDispatch} from "react-redux";
import {setUser} from "../../../redux/slices/userSlice";
import {useNavigate} from "react-router-dom";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

const Login = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const auth = getAuth();
    const [visibleLoader, setVisibleLoaler] = useState(false)

    const {email, token, id,isAuth} = useAuth()
    console.log(`email:${email}`,`isAuth:${isAuth}`,`token:${token}`,`id:${id}`)



    const formik = useFormik({
        initialValues: {
            email: '',
            password: ''
        },
        onSubmit: values => {
            signInWithEmailAndPassword(auth, values.email, values.password)
                .then((userCredential) => {
                    const user = userCredential.user;
                    console.log(user)
                    alert('ok')
                    dispatch(setUser({
                        email: user.email,
                        id: user.uid,
                        token: user.refreshToken,
                    }))
                    navigate('/homepage')
                })
                .catch((error) => {
                    const errorCode = error.code;
                    if (errorCode === 'auth/user-not-found') {
                        alert('Пользователь не найден')
                    }
                    if (errorCode === 'auth/wrong-password') {
                        alert('Неверный пароль')
                    }
                }).finally(() => {
                setVisibleLoaler(false)
            });
        },
    });

    return (
        <main style={{padding: '0px 10px'}}>
            <header className="d-flex space-between middle-align">
                <a href="/">
                    <img src={logo}
                         height="50px"
                         width="170px"
                         alt="site logo main"
                         style={{margin: 'auto'}}/>
                </a>
            </header>
            <section id="login-form-section">

                <div className="loginContainer d-flex direction-column">
                    <p>⚠ Do not enter your personal information.</p>
                    <h2 className="formtitle">
                        Sign In
                    </h2>
                    <form onSubmit={formik.handleSubmit} id="loginForm" className="d-flex direction-column"
                          method="post"
                          name="loginForm">
                        <input
                            placeholder='Email Address'
                            id="email"
                            name="email"
                            type="email"
                            onChange={formik.handleChange}
                            value={formik.values.email}
                        />
                        <input
                            placeholder='Password'
                            id="password"
                            name="password"
                            type="password"
                            onChange={formik.handleChange}
                            value={formik.values.password}
                        />

                        <button type="submit" className='button submitButton'>Submit</button>
                    </form>
                </div>
            </section>
            <LoadingOverlay visible={visibleLoader}/>
        </main>
    );
};

export default Login;
