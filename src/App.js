import {Navigate, Route, Routes} from "react-router-dom";
import {AuthRequireLayout, MainLayout} from "./layouts";
import {CarsPage, LoginPage, RegisterPage} from "./pages";


function App() {
    return (
       <Routes>
           <Route path={'/'} element={<MainLayout/>}>
                <Route index element={<Navigate to={'cars'}/>}/>

               <Route element={<AuthRequireLayout/>}>
                   <Route path={'cars'} element={<CarsPage/>}/>
               </Route>

               <Route path={'/register'} element={<RegisterPage/>}/>
               <Route path={'/login'} element={<LoginPage/>}/>
           </Route>
       </Routes>
    );
}

export {App};