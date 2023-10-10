import './Main.css'
import { Link } from 'react-router-dom';

function HomePage() {

  return(
    <div className='homeContainer'>
    <h1>WeShare!</h1>
    <div className='buttondiv'>
      <Link to='/users/login'>
        <button className='loginregisterbutton'>Iniciar sesion</button>
      </Link>
      <Link to='/users/register'>
        <button className='loginregisterbutton'>Registrarse</button>
      </Link>
    </div>
</div>

  )
}

export default HomePage