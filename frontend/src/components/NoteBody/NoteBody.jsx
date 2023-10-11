// Importamos los prop-types.
import PropTypes from "prop-types";

// Importamos los estilos.
import "./NoteBody.css";

const NoteBody = ({ title, text, url }) => {
  const handleButtonClick = () => {
    const currentLocation = window.location.href;
    currentLocation.split("/")[2]; // Obtener el dominio sin "http://" o "https://"
    const newUrl = `http://${url}`;
    const confirmResult = window.confirm(
      "¿Estás seguro de que deseas abrir este enlace?"
    );
    if (confirmResult) {
      window.open(newUrl, "_blank");
    }
  };
  return (
    <div className="note-body">
      <h4>{title}</h4>
      <p className="cardText">{text}</p>
      <button className="urlButton" onClick={handleButtonClick}>
        Ver enlace
      </button>
    </div>
  );
};

NoteBody.propTypes = {
  title: PropTypes.string,
  text: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
};

export default NoteBody;
