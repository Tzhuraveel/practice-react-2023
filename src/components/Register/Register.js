import {useForm} from "react-hook-form";
import {useContext, useState} from "react";
import {joiResolver} from "@hookform/resolvers/joi";
import {useNavigate} from "react-router-dom";

import css from './Register.module.css'
import {usersValidator} from "../../validators";
import {StateContext} from "../../hoc/MyProvider";

const Register = () => {


    const navigate = useNavigate();

    const {setRegister, setListRegisterUser} = useContext(StateContext);

    const {register, handleSubmit, reset} = useForm({mode: "all", resolver: joiResolver(usersValidator)});

    const {register: login, handleSubmit: handleSubmitLogin, reset: resetLogin} = useForm({mode: "all"});

    const [stateLogin, setStateLogin] = useState(false);


    const reg = (newUser) => {

        setListRegisterUser(prev => {
            const check = prev.find(value => value.email === newUser.email);

            if (!check) {
                setRegister(newUser)
                navigate('/', {replace: true})
                return [...prev, {...newUser}]
            } else {
                console.log('error');
                reset()
                return [...prev]
            }
        })
        reset()
    }

    const log = (loginUser) => {
        setListRegisterUser(prev => {
                const user = prev.find(value => value.email === loginUser.email && value.password === loginUser.password);

                if (user) {
                    setRegister(user)
                    navigate('/', {replace: true})
                } else {
                    resetLogin()
                    console.log('error');
                }
                return [...prev];
            }
        );
    }


    return (
       <div className={css.wrapper__register}>
           {!stateLogin &&
               <div className={css.container__register}>
                   <form onSubmit={handleSubmit(reg)} className={css.register__form}>
                       <input className={css.input__register} type="text" placeholder={'name'} {...register('name')}/>
                       <input className={css.input__register} type="text" placeholder={'surname'} {...register('surname')}/>
                       <input className={css.input__register} type="text" placeholder={'email'} {...register('email')}/>
                       <input className={css.input__register} autoComplete={'on'} type={'password'} placeholder={'password'} {...register('password')}/>
                       <button className={css.button__register}>Register</button>
                       <div>
                           <button onClick={() => setStateLogin(true)} className={css.change__form}  type="button">I already have an account</button>
                       </div>
                   </form>
               </div>
           }
           {stateLogin &&
               <div className={css.container__register}>
                   <form onSubmit={handleSubmitLogin(log)} className={css.register__form}>
                       <input className={css.input__register} type="text" placeholder={'email'} {...login('email')}/>
                       <input className={css.input__register} autoComplete={'on'} type={'password'} placeholder={'password'} {...login('password')}/>
                       <button className={css.button__register}>Login</button>
                       <button onClick={() => setStateLogin(false)} className={css.change__form} type="button">I still don't have an account</button>
                   </form>
               </div>
           }
       </div>
    );
};

export {Register};