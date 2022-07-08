// @ts-ignore
import logo from '../../../assets/logo.PNG'
import {useFormik} from 'formik';
import {Link, useNavigate} from "react-router-dom";
import {useDispatch} from "react-redux";
import {setUser} from "../../../redux/slices/userSlice";
import {useState} from "react";
import {getAuth, createUserWithEmailAndPassword} from "firebase/auth";
import {LoadingOverlay} from "@mantine/core";

const Registration = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const auth = getAuth();

    const [visibleLoader, setVisibleLoaler] = useState(false)


    const formik = useFormik({
        initialValues: {
            email: '',
            password: ''
        },
        onSubmit: values => {
            setVisibleLoaler(true)
            createUserWithEmailAndPassword(auth, values.email, values.password)
                .then((userCredential) => {
                    const user = userCredential.user;
                    console.log(userCredential)
                    dispatch(setUser({
                        email: user.email,
                        id: user.uid,
                        token: user.refreshToken,
                    }))
                    alert('Вы успешно зарегистрировались')
                    console.log(user)
                    navigate('/homepage')

                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;

                    console.log(errorCode)
                    if (errorCode === 'auth/weak-password') {
                        alert('Пароль должен содержать не менее 6 символов')
                    }
                    if (errorCode === 'auth/email-already-in-use') {
                        alert('Данный email уже зарегистрирован')
                    }
                }).finally(() => {
                setVisibleLoaler(false)
            });
        },
    });

    return (
        <>
            <main style={{padding: '0px 10px'}}>
                <header className={"d-flex space-between middle-align"}>
                    <a href="/">
                        <img src={logo} alt={'logo'} height="50px" width="170px"/>
                    </a>
                    <button className="button">
                        <Link to="/auth">Login</Link>
                    </button>
                </header>
                <section id="login-form-section">

                    <div className="loginContainer d-flex direction-column">
                        <h2 className="formtitle">
                            Register Account
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
        </>
    );
};

export default Registration;
