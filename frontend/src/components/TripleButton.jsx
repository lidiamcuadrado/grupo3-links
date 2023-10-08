import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import { useState, useEffect } from 'react';
import { getToken } from "../utils/getToken";
const baseURL = import.meta.env.VITE_API_URL;
import "./tripleButton.css"
function TripleButton() {
  const [data, setData] = useState([]);
  const [order, setOrder] = useState('newest'); // Orden predeterminado: más nueva a más vieja

  useEffect(() => {
    fetchData();
  }, [order]);

  const fetchData = async () => {
    try {
      let url = `${baseURL}/notes?order=${order}`;
      const token = getToken(); // Obtén el token de autenticación
      const response = await fetch(url, {
        headers: {
          Authorization: token, // Agrega el token en el encabezado Authorization
        },
      });
      const fetchedData = await response.json();
      setData(fetchedData);
      console.log('Datos recibidos:', fetchedData);
    } catch (error) {
      console.error('Error al obtener los datos: ', error);
    }
  };
const handleOrderChange = async (newOrder) => {
  try {
    if (newOrder === 'oldest') {
      const url = `${baseURL}/notes?order=${newOrder}`;
      const token = getToken();
      const response = await fetch(url, {
        headers: {
          Authorization: token,
        },
      });
      const responseData = await response.json();

      if (response.ok) {
        const fetchedData = responseData.data.notes;
        const sortedData = [...fetchedData].sort((a, b) => new Date(a.createdAt) - new Date(b.createdAt));
        setData(sortedData);
      } else {
        console.error('Error en la respuesta de la API:', responseData);
      }
    } else {
      setOrder(newOrder);
    }
  } catch (error) {
    console.error('Error al obtener los datos:', error);
  }
};


  return (
    <ButtonGroup className="tripleButtongroup" aria-label="Basic example">
      <Button onClick={() => handleOrderChange('newest')} className="triplebutton L" variant="secondary">Latest</Button>
      <Button onClick={() => handleOrderChange('oldest')} className="triplebutton R" variant="secondary">Oldest</Button>
    </ButtonGroup>
  );
}

export default TripleButton;