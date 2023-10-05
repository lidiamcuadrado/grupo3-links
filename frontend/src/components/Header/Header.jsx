// Importamos los hooks.
import { useState } from 'react';
import { useAuth } from '../../hooks/useAuth';
import { NavLink } from 'react-router-dom';
import { FaSearch } from "react-icons/fa";
import { AiFillHome, AiOutlineStar, AiOutlineMenu, AiFillCloseCircle } from "react-icons/ai";
import { BsLink45Deg, BiSolidHelpCircle, BiLogOutCircle, BsShareFill } from "react-icons/bs";
import '../components/Header/Header.css';

const Header = () => {
    const { authUser, authLogout } = useAuth();
    const [menu, setMenu] = useState(false);

    const toggleMenu = () => {
        setMenu(!menu);
    };

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
                        src="/img/favicom/profile/fotogero.jpeg"
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
                        <NavLink to="/" className="Nav-a">Principal</NavLink>
                    </li>
                    <li className="Nav-li">
                        <AiOutlineStar className='Nav-iconos' />
                        <NavLink to="/populares" className="Nav-a">Populares</NavLink>
                    </li>
                    <li className="Nav-li">
                        <BsLink45Deg className='Nav-iconos' />
                        <NavLink to="/sobre" className="Nav-a">Sobre WeShare!</NavLink>
                    </li>
                    <li className="Nav-li">
                        <BiSolidHelpCircle className='Nav-iconos' />
                        <NavLink to="/ayuda" className="Nav-a">Ayuda</NavLink>
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
                    src="/img/favicom/profile/fotogero.jpeg"
                    alt="Foto de perfil"
                    className="Imagen-Perfil-1"
                />
            </div>
        </header>
    );
};

export default Header;
