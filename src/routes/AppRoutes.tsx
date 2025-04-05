import { Route, Routes } from 'react-router-dom'
import { HomePage } from '../views/HomePage'
export function AppRoutes(){
    return(
        <Routes>
            <Route path='/' element={ 
                <>
                    <HomePage></HomePage>
                </> 
            } />
            <Route path='/register' element={ <h2>register</h2> } />
            <Route path='/About' element={ <h2>About</h2> } />
            <Route path='/login' element={ <h2>login</h2> } />
        </Routes>
    )
}