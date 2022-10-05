import { useContext } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { UserContext } from '../../context/UserContext';
import './Login.css'

const Login = () => {
    const { setCurrentUser } = useContext(UserContext)
    //traemos register, handleSubmit y errors a nuestro componente
    const { register, handleSubmit, formState: { errors } } = useForm(); 
    const navigate = useNavigate()

    //"data" es la informacion que el usuario carga en el formulario
    const onSubmit = (data) => {
        localStorage.setItem('currentUser', JSON.stringify(data))
        setCurrentUser(data)
        navigate('/')
    }

    //aca armamos el formulario [a register le pasamos el id con el que vamos a identificar
    //ese register (username y password), y el requerido para que no lo dejen vacio al campo]
    return (
        <div className="sign-in-container">
            <span>Ingresa con tu usuario y contraseña</span>
            <form className="sign-in-form" onSubmit={handleSubmit(onSubmit)}>
                <input 
                    className="input-form"
                    type="text"
                    placeholder="nombre de usuario"
                    { ...register('username', {
                        required : 'Debe ingresar su nombre de usuario'
                        }
                    )} 
                />
                <p>{errors.username?.message}</p>
                <input
                    className="input-form"
                    type='password'
                    placeholder="Contraseña"
                    {...register('password', {
                        required : 'Debe ingresar su contraseña'
                        }
                    )}
                />
                <p>{errors.password?.message}</p>
                <button className="btn-form" type="submit">Iniciar Sesion</button>
            </form>
        </div>
    )
}

export default Login;