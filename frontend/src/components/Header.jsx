// // Importamos los hooks.
import { useAuth } from '../hooks/useAuth';

// Importamos los compontentes.
import { NavLink } from 'react-router-dom';
const baseURL = import.meta.env.VITE_API_URL;
import PropTypes from 'prop-types';
import NotesSearchForm from '../forms/NotesSearchForm';
import { userPropTypes } from '../utils/customPropTypes';
import { Link } from 'react-router-dom';

// Importamos los estilos
import '../components/Header.css';

// Importamos iconos
import { AiFillHome } from 'react-icons/ai';
import { AiOutlineStar } from 'react-icons/ai';
import { BsLink45Deg } from 'react-icons/bs';
import { BiLogOutCircle } from 'react-icons/bi';
import { AiFillCloseCircle } from 'react-icons/ai';
import { AiOutlineMenu } from 'react-icons/ai';
import { BsShareFill } from 'react-icons/bs';

// importamos herramienta para manejar el estado
import { useState } from 'react';
import defaultAvatar from '../../public/img/jpg/usuario.png';

// ... (importaciones y código anterior)

// ... (importaciones y código anterior)

const Header = ({ setSearchParams, loading, avatar }) => {
  const avatarImage = avatar ? `${baseURL}/${avatar}` : defaultAvatar;

  const { authUser, authLogout } = useAuth();
  const [menu, setMenu] = useState(false);

  const toggleMenu = () => {
    setMenu(!menu);
  };

  const closeMenu = () => {
    setMenu(false);
  };

  return (
    <header className='Cabecera'>
      <button
        onClick={toggleMenu}
        className={`Cabecera-boton ${menu ? 'isActive' : ''}`}
      >
        <AiOutlineMenu className='Menu-icono' />
      </button>

      <h1 className='Cabecera-h1'>
        <NavLink to='/notes'>WeShare!</NavLink>
      </h1>

      <nav className={`Cabecera-nav ${menu ? 'isActive' : ''}`}>
        <h2 className='Nav-h2'>WeShare!</h2>
        <div className='Contenedor-Imagen-2'>
          <img
            src={avatarImage}
            alt='Foto de perfil'
            className='Imagen-Perfil-2'
          />
        </div>
        <div className='Contenedor-usuario'>
          {authUser && <span>@{authUser.username}</span>}
        </div>
        <button onClick={toggleMenu} className='CerrarBoton'>
          <AiFillCloseCircle className='Cerrar-icono' />
        </button>
        <ul className='Nav-ul'>
          <Link to='/notes'>
            <li className='Nav-li' onClick={closeMenu}>
              <AiFillHome className='Nav-iconos' />
              <a href='' className='Nav-a'>
                Principal
              </a>
            </li>
          </Link>
          <Link to='/notes/trending'>
            <li className='Nav-li' onClick={closeMenu}>
              <AiOutlineStar className='Nav-iconos' />
              <a href='' className='Nav-a'>
                Populares
              </a>
            </li>
          </Link>
          <Link to='/about'>
            <li className='Nav-li' onClick={closeMenu}>
              <BsLink45Deg className='Nav-iconos' />
              <a href='' className='Nav-a'>
                Sobre WeShare!
              </a>
            </li>
          </Link>
          <li
            className='Nav-li'
            onClick={() => {
              authLogout();
              closeMenu();
            }}
          >
            <BiLogOutCircle className='Nav-iconos' />
            <a href='#' className='Nav-a'>
              Cerrar sesión
            </a>
          </li>
        </ul>
      </nav>

      {menu && <div className='overlay' onClick={closeMenu}></div>}

      <div className='buscador'>
        <NotesSearchForm setSearchParams={setSearchParams} loading={loading} />
      </div>

      <div className='Contenedor-publicar'>
        <NavLink className='Navlink-publicar' to='/message'>
          <BsShareFill className='Compartir-icono' />
          <h3 className='Cabecera-h2'>Publicar</h3>
        </NavLink>
      </div>

      <div className='Contenedor-Imagen-1'>
        <Link to='/users/profile'>
          <img
            src={avatarImage}
            alt='Foto de perfil'
            className='Imagen-Perfil-1'
          />
        </Link>
      </div>
    </header>
  );
};

Header.propTypes = {
  authUser: userPropTypes,
  setSearchParams: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired,
  avatar: PropTypes.string,
};

export default Header;
