import {Route, Routes} from "react-router-dom";
import {MainLayout} from "./layouts";
import {WeatherPage} from "./pages";

const App = () => {


    return (
        <Routes>
            <Route path={'/'} element={<MainLayout/>}>
                <Route path={'/weather'} element={<WeatherPage/>}/>
            </Route>
        </Routes>
    );
};

export {App};