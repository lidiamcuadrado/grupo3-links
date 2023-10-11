import "./AboutUs.css";
import { Link } from "react-router-dom";

// importamos los iconos
import { BsGithub } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";

export default function AboutUs() {
  return (
    <div className="aboutContainer">
      <div className="aboutUp">
        <h2>Sobre Nosotros</h2>

        <div className="aboutIcons">
          <div className="aboutPlayer">
            <img className="aboutFotos" src="../../public/img/jpg/checa.jpg" alt="foto-perfil-pepe" />
            <h3>Pepe Checa</h3>
            <div className="linksContainers">
              <Link
                to="https://www.linkedin.com/in/pepe-checa-garcía-54a091150/"
                target="_blank"
              >
                <BsGithub />
              </Link>
              <Link to="https://github.com/PepeCheca" target="_blank">
                <BsLinkedin />
              </Link>
            </div>
          </div>

          <div className="aboutPlayer">
            <img className="aboutFotos" src="../../public/img/jpg/miguel.jpg" alt="foto-perfil-miguel" />
            <h3>Miguel Vispo</h3>
            <div className="linksContainers">
              <Link
                to="https://www.linkedin.com/in/miguel-vispo-alvarez/"
                target="_blank"
              >
                <BsGithub />
              </Link>
              <Link to="https://github.com/MiguelVispo" target="_blank">
                <BsLinkedin />
              </Link>
            </div>
          </div>

          <div className="aboutPlayer">
            <img className="aboutFotos" src="../../public/img/jpg/gero.jpg" alt="foto-perfil-gero" />
            <h3>Geronimo Mc Cluskey</h3>
            <div className="linksContainers">
              <Link
                to="https://www.linkedin.com/in/geronimomc/"
                target="_blank"
              >
                <BsGithub />
              </Link>
              <Link to="https://github.com/Geronimomc95" target="_blank">
                <BsLinkedin />
              </Link>
            </div>
          </div>

          <div className="aboutPlayer">
            <img className="aboutFotos" src="../../public/img/jpg/lidia.jpeg" alt="foto-perfil-lidia" />
            <h3>Lidia mª Cuadrado</h3>
            <div className="linksContainers">
              <Link
                to="https://www.linkedin.com/in/lidiamcuadrado/"
                target="_blank"
              >
                <BsGithub />
              </Link>
              <Link to="https://github.com/lidiamcuadrado" target="_blank">
                <BsLinkedin />
              </Link>
            </div>
          </div>

          <div className="aboutPlayer">
            <img className="aboutFotos" src="../../public/img/jpg/javi.jpeg" alt="foto-perfil-javi" />
            <h3>Javier de la Fuente</h3>
            <div className="linksContainers">
              <Link
                to="https://www.linkedin.com/in/javiergarciadelafuente/"
                target="_blank"
              >
                <BsGithub />
              </Link>
              <Link to="https://github.com/jvdelafuente" target="_blank">
                <BsLinkedin />
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="containerAboutDown">
        <h3 className="welcome">Sobre WeShare!</h3>
        <div className="aboutDown">
          <div className="cardAbout">
            <h4>Nuestra Misión</h4>
            <p>
              En el vasto universo digital, buscamos simplificar y mejorar la
              experiencia de compartir enlaces web. Creemos en la accesibilidad
              y la conectividad como pilares fundamentales para un intercambio
              de información eficiente. WeShare! se compromete a ser tu
              plataforma de elección, diseñada para impulsar la colaboración y
              el descubrimiento.
            </p>
          </div>
          <div className="cardAbout">
            <h4>Equipo de Desarrollo </h4>
            <p>
              El corazón de WeShare! late gracias a un equipo diverso de mentes
              apasionadas. Provenientes del Bootcamp de Web Developer en HACK A
              BOSS, cada uno aporta su experiencia única. Nuestra fuerza radica
              en la colaboración, la creatividad y el compromiso con la
              excelencia técnica. Juntos, hemos tejido la magia que impulsa
              WeShare.
            </p>
          </div>
          <div className="cardAbout">
            <h4>Nuestro Compromiso</h4>
            <p>
              En WeShare!, nos esforzamos por construir más que una plataforma;
              buscamos forjar una comunidad. Nuestra promesa es la
              transparencia, la escucha activa y la mejora constante. Valoramos
              tus comentarios y sugerencias, y nos comprometemos a evolucionar
              con las necesidades cambiantes de nuestra comunidad. La confianza
              y la calidad son los cimientos de nuestro compromiso contigo.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
