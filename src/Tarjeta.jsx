import React from 'react';
import './Tarjeta.css';

const Tarjeta = ({ nombre, precio, imagen }) => {
  // Formatear el precio con separadores de miles
  const formatoPrecio = new Intl.NumberFormat('es-CO', {
    style: 'decimal',
    minimumFractionDigits: 0,
  }).format(precio);

  return (
    <div className="tarjeta">
      <img src={imagen} alt={nombre} className="tarjeta-imagen" />
      <h3 className="tarjeta-nombre">{nombre}</h3>
      <p className="tarjeta-precio">${formatoPrecio}</p>
    </div>
  );
};

export default Tarjeta;
