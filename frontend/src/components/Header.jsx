
// // Importamos los hooks.
import { useAuth } from '../hooks/useAuth';

// Importamos los compontentes.
import { NavLink } from 'react-router-dom';

// Importamos los estilos
import '../components/Header.css';

// Importamos iconos
import { FaSearch } from "react-icons/fa"
import { AiFillHome } from "react-icons/ai"
import { AiOutlineStar } from "react-icons/ai"
import { BsLink45Deg } from "react-icons/bs"
import { BiSolidHelpCircle } from "react-icons/bi"
import { BiLogOutCircle } from "react-icons/bi"
import { AiFillCloseCircle } from "react-icons/ai"
import { AiOutlineMenu } from "react-icons/ai"
import { BsShareFill } from "react-icons/bs"

// importamos herramienta para manejar el estado
import { useState } from 'react';

const Header = () => {

    const { authUser, authLogout } = useAuth();

    const [menu, setMenu] = useState(false)

    const toggleMenu = () => {
        setMenu(!menu)
    }

    return (
        <header className="Cabecera">

            <button
                onClick={toggleMenu}
                className={`Cabecera-boton ${menu ? 'isActive' : ''}`}>
                <AiOutlineMenu className='Menu-icono' />
            </button>

            <h1 className='Cabecera-h1'>
                <NavLink to="/">WeShare!</NavLink>
            </h1>

            <nav className={`Cabecera-nav ${menu ? 'isActive' : ''}`}>

                <h2 className='Nav-h2'>
                    WeShare!
                </h2>

                <div className="Contenedor-Imagen-2">
                    <img
                        src="\public\img\favicom\profile\fotogero.jpeg"
                        // Aquí arriba en realidad se debe poner la url de la imagen del usuario logueado entre llaves {*}
                        alt="Foto de perfil"
                        className="Imagen-Perfil-2"
                    />
                </div>

                <div className="Contenedor-usuario">
                    {authUser && <span>@{authUser.username}</span>}
                </div>


                <button
                    onClick={toggleMenu} className="CerrarBoton">
                    <AiFillCloseCircle className='Cerrar-icono' />
                </button>

                <ul className="Nav-ul">

                    <li className="Nav-li">
                        <AiFillHome className='Nav-iconos' />
                        <a href="#" className="Nav-a">Principal</a>
                    </li>

                    <li className="Nav-li">
                        <AiOutlineStar className='Nav-iconos' />
                        <a href="#" className="Nav-a">Populares</a>
                    </li>

                    <li className="Nav-li">
                        <BsLink45Deg className='Nav-iconos' />
                        <a href="#" className="Nav-a">Sobre WeShare!</a>
                    </li>

                    <li className="Nav-li">
                        <BiSolidHelpCircle className='Nav-iconos' />
                        <a href="#" className="Nav-a">Ayuda</a>
                    </li>

                    <li className="Nav-li">
                        <BiLogOutCircle className='Nav-iconos' />
                        <a onClick={() => authLogout()} href="#" className="Nav-a">Cerrar sesión</a>
                    </li>

                </ul>

            </nav>

            <div className="Contenedor-buscador">
                <FaSearch className='Buscar-icono' />
                <input placeholder='Escribe para buscar' />
            </div>

            <div className='Contenedor-publicar'>
                <NavLink className='Navlink-publicar' to="/message">
                    <BsShareFill className='Compartir-icono' />
                    <h2 className="Cabecera-h2">Publicar</h2>
                </NavLink>
            </div>

            <div className="Contenedor-Imagen-1">
                <img
                    src="\public\img\favicom\profile\fotogero.jpeg"
                    // Aquí arriba en realidad se debe poner la url de la imagen del usuario logueado entre llaves {*}
                    alt="Foto de perfil"
                    className="Imagen-Perfil-1"
                />
            </div>



        </header >
    )
}

export default Header