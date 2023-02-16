import css from './Header.module.css';
import {NavLink} from "react-router-dom";

const Header = () => {


    return (
        <div>
            <div className={css.container}>
                <div className={css.wrapperHeader}>
                    <div>
                        logo
                    </div>
                    <div className={css.containerMenu}>
                        <ul className={css.menuList}>
                            <li className={css.menuItem}>
                                <NavLink to={'/weather'}>weather</NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className={css.height}>
            </div>
        </div>

    );
};

export {Header};