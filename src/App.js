import {Route, Routes, useNavigate} from "react-router-dom";
import {UsersPage} from "./components/UsersPage";

const App = () => {
    const navigate = useNavigate();
    return (
        <div>
            <div>
                <button onClick={() => navigate('/users')}>users</button>
                <button onClick={() => navigate('/cars')}>cars</button>
            </div>
            <hr/>
            <Routes>
                <Route path={'/users'} element={<UsersPage/>}/>
            </Routes>
        </div>
    );
};

export {App};