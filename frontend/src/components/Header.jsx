// Importamos los hooks.
import { useAuth } from '../hooks/useAuth';

// Importamos los compontentes.
import { NavLink } from 'react-router-dom';

// Importamos los iconos.
import RegisterIcon from '../../public/iconExample/register-icon.png';
import LoginIcon from '../../public/iconExample/login-icon.png';
import LogoutIcon from '../../public/iconExample/logout-icon.png';
import MessageIcon from '../../public/iconExample/message-icon.png';

// Importamos los estilos.
import './Header.css';

const Header = () => {
    const { authUser, authLogout } = useAuth();

    return (
        <header>
            <h1>
                <NavLink to="/">WeShare!</NavLink>
            </h1>

            <nav>
                {authUser && <span>@{authUser.username}</span>}

                {!authUser && (
                    <>
                        <div>
                            <NavLink to="/users/login">
                                <img src={LoginIcon} alt="Login Icon" />
                            </NavLink>
                        </div>
                        <div>
                            <NavLink to="/users/register" alt="Register Icon">
                                <img src={RegisterIcon} />
                            </NavLink>
                        </div>
                    </>
                )}

                {authUser && (
                    <>
                        <div>
                            <NavLink to="/message">
                                <img src={MessageIcon} alt="Message Icon" />
                            </NavLink>
                        </div>
                        <button className='loginbutton' onClick={() => authLogout()}>
                            <img src={LogoutIcon} alt="Logout Icon" />
                        </button>
                    </>
                )}
            </nav>
        </header>
    );
};

export default Header;
