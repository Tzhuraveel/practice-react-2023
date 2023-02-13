import css from './Header.module.css';
import {NavLink} from "react-router-dom";


const Header = () => {


    return (
        <div className={css.container}>
            <div className={css.menu__list}>
                <div className={css.menu__item}>
                    <NavLink to={'/login'}>Login</NavLink>
                </div>
                <div className={css.menu__item}>
                    <NavLink to={'/register'}>Register</NavLink>
                </div>
            </div>
        </div>
    );
};

export {Header};