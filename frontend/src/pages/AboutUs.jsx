import "./AboutUs.css";
import { Link } from "react-router-dom";

export default function AboutUs() {
  return (
    <div className="aboutContainer">
      <div className="aboutUp">
        <h1>About us</h1>
        <div className="aboutIcons">
          <div className="aboutPlayer">
            <img className="aboutFotos" src="../../public/checa.jpg" alt="" />
            <h3>Pepe Checa</h3>
            <div className="linksContainers">
              <Link to="https://www.linkedin.com/in/pepe-checa-garcía-54a091150/" target="_blank" >
                <img
                  className="gitlinkIcons"
                  src="../../public/linkedin.png"
                  alt=""
                />
                </Link>
                <Link to="https://github.com/PepeCheca" target="_blank">
                <img
                  className="gitlinkIcons"
                  src="../../public/github.png"
                  alt=""
                />
              </Link>
            </div>
          </div>
          <div className="aboutPlayer">
            <img className="aboutFotos" src="../../public/miguel.jpg" alt="" />
            <h3>Miguel Vispo</h3>
            <div className="linksContainers">
              <Link to="https://www.linkedin.com/in/miguel-vispo-alvarez/" target="_blank">
                <img
                  className="gitlinkIcons"
                  src="../../public/linkedin.png"
                  alt=""
                />
                </Link>
                <Link to="https://github.com/MiguelVispo" target="_blank">
                <img
                  className="gitlinkIcons"
                  src="../../public/github.png"
                  alt=""
                />
              </Link>
            </div>
          </div>
          <div className="aboutPlayer">
            <img className="aboutFotos" src="../../public/gero.jpg" alt="" />
            <h3>Geronimo Mc Cluskey</h3>
            <div className="linksContainers">
              <Link to="https://www.linkedin.com/in/geronimomc/" target="_blank">
                <img
                  className="gitlinkIcons"
                  src="../../public/linkedin.png"
                  alt=""
                />
                </Link>
                <Link to="https://github.com/Geronimomc95" target="_blank">
                <img
                  className="gitlinkIcons"
                  src="../../public/github.png"
                  alt=""
                />
              </Link>
            </div>
          </div>
          <div className="aboutPlayer">
            <img className="aboutFotos" src="../../public/lidia.jpeg" alt="" />
            <h3>Lidia mª Cuadrado</h3>
            <div className="linksContainers">
              <Link to="https://www.linkedin.com/in/lidiamcuadrado/" target="_blank">
                <img
                  className="gitlinkIcons"
                  src="../../public/linkedin.png"
                  alt=""
                />
              </Link>
              <Link to="https://github.com/lidiamcuadrado" target="_blank">
                <img
                  className="gitlinkIcons"
                  src="../../public/github.png"
                  alt=""
                />
              </Link>
            </div>
          </div>
          <div className="aboutPlayer">
            <img className="aboutFotos" src="../../public/javi.jpeg" alt="" />
            <h3>Javier de la Fuente</h3>
            <div className="linksContainers">
              <Link to="https://www.linkedin.com/in/javiergarciadelafuente/" target="_blank">
                <img
                  className="gitlinkIcons"
                  src="../../public/linkedin.png"
                  alt=""
                />
              </Link>
              <Link to="https://github.com/jvdelafuente" target="_blank">
                <img
                  className="gitlinkIcons"
                  src="../../public/github.png"
                  alt=""
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="aboutDown">
        <h3>sobre WeShare</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore
          suscipit amet f
        </p>
      </div>
    </div>
  );
}
