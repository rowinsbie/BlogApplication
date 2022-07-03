import {Routes,Route} from 'react-router-dom';
import Dashboard from '../pages/Dashboard';
import Login from '../pages/Login';
const Router = () => {
    return (
        <>
            <Routes>
                <Route path='/' element={<Dashboard />} />
                <Route path='/login' element={<Login />} />
            </Routes>
        </>
    )
}

export default Router;