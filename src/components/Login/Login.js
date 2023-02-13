
import css from './Login.module.css'
import {useForm} from "react-hook-form";
import {authService} from "../../api";
import {useNavigate} from "react-router-dom";
import {useState} from "react";

const Login = () => {

    const navigate = useNavigate();

    const {register, handleSubmit, reset} = useForm();
    const [error, setError] = useState();


    const login = async (user) => {
       try {
           await authService.login(user)
           navigate('/cars')
           reset()
       }catch (e){
           setError(e.response.data)
       }
    }


    return (
        <div className={css.container__form}>
            <form onSubmit={handleSubmit(login)} className={css.form}>
                <input className={css.input} type="text" placeholder={'username'} {...register('username')}/>
                <input className={css.input} type="text" placeholder={'password'} {...register('password')}/>
                <button className={css.button}>Login</button>
            </form>
        </div>
    );
}

export {Login};