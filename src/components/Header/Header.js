import {NavLink} from "react-router-dom";

import css from './Header.module.css'
import {useState} from "react";
import {useContextHook} from "../../hooks/useContextHook";

const Header = () => {

    const {register:{name, surname, email}, setRegister} = useContextHook();

    const [modalState, setModalState] = useState(false);





    return (
        <div className={css.container}>
            <div className={css.wrapper}>
                <div>
                    logo
                </div>
               <div className={css.right__side__menu}>
                   <ul className={css.menu__list}>
                       <li className={css.menu__item}><NavLink to={'users'}>USERS</NavLink></li>
                       <li className={css.menu__item}><NavLink to={'posts'}>POSTS</NavLink></li>
                       <li className={css.menu__item}><NavLink to={'comments'}>COMMENTS</NavLink></li>
                   </ul>
                   <button className={css.user} onClick={() => setModalState(true)}>Profile</button>
                   {modalState &&
                       <div className={css.wrapper_module__menu}>
                           <button className={css.button__close} onClick={() => setModalState(false)}>close</button>
                           <div className={css.user__information}>
                               <div className={css.avatar}></div>
                               <div className={css.information}>
                                   <h3>Name: {name}</h3>
                                   <h3>Surname: {surname}</h3>
                                   <h3>{email}</h3>
                               </div>
                               <button className={css.button__logout} onClick={() => setRegister(null)}>logout</button>
                           </div>
                       </div>
                   }

               </div>

            </div>
        </div>
    );
};

export {Header};