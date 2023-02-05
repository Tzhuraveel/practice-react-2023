import {Route, Routes} from "react-router-dom";
import {MainLayout} from "./layout";
import {CommentsPage, PostsPage, RegisterPage, UsersPage} from "./pages";
import {Required} from "./hoc/Required";

const App = () => {
    return (
        <Routes>
            <Route path={''} element={<Required><MainLayout/></Required>}>
                <Route path={'users'} element={<UsersPage/>}/>
                <Route path={'posts'} element={<PostsPage/>}/>
                <Route path={'comments'} element={<CommentsPage/>}/>
            </Route>
            <Route path={'register'} element={<RegisterPage/>}/>
        </Routes>
    );
};

export {App};