import {
    createBrowserRouter,
    createRoutesFromElements,
    Route
} from 'react-router-dom'

import App from './App'
import {stockLoader} from "./loader"
import Main from './pages/Main'
import Stocks from './pages/Stocks'
import Dashboard from './pages/Dashboard'
import About from './pages/About'

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path='/' element={<App/>}>
            <Route path='' element={<Main/>}/>
            <Route path='dashboard' element={<Dashboard/>}/>
            <Route path='stocks/:symbol' element={<Stocks/>} loader={stockLoader} />
            <Route path='about' element={<About/>}/>
        </Route>
    )
)

export default router