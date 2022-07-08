import {QueryClient, QueryClientProvider} from 'react-query'
import {BrowserRouter} from 'react-router-dom'
import {ReactQueryDevtools} from 'react-query/devtools'
import {AppRoutes} from './routes'
import {store} from './redux'
import {Provider} from 'react-redux'
import './firebase'
import './scss/app.scss'
import {
    getAuth,
    onAuthStateChanged,
    setPersistence,
    signInWithRedirect,
    inMemoryPersistence,
    GoogleAuthProvider
} from "firebase/auth";
import {useEffect} from "react";

const queryClient = new QueryClient()

function App() {
    return (
        <QueryClientProvider client={queryClient}>
            <BrowserRouter>
                <Provider store={store}>
                    <AppRoutes/>
                </Provider>
            </BrowserRouter>
            <ReactQueryDevtools initialIsOpen={false}/>
        </QueryClientProvider>
    )
}

export default App
