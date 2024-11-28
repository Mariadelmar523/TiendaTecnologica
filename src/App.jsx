import React from 'react';
import Tarjeta from './Tarjeta';
import './App.css'; // Importar el archivo CSS

import PortatilImg from './img/portatil.png';
import DiademasImg from './img/diadema.png';
import SillaGamerImg from './img/silla_gamer.png';
import MouseImg from './img/mouse.png';
import MonitorImg from './img/monitor.png';


function App() {
  const productos = [
    { id: 1, nombre: 'Portatil', precio: 1999990, imagen: PortatilImg },
    { id: 2, nombre: 'Diademas', precio: 100000, imagen: DiademasImg },
    { id: 3, nombre: 'Silla Gamer', precio: 500000, imagen: SillaGamerImg },
    { id: 4, nombre: 'Mouse', precio: 60000, imagen: MouseImg },
    { id: 5, nombre: 'Monitor', precio: 250000, imagen: MonitorImg },
  ];

  return (
    <div className="grid">
      {productos.map((producto) => (
        <Tarjeta
          key={producto.id}
          nombre={producto.nombre}
          precio={producto.precio}
          imagen={producto.imagen}
        />
      ))}
    </div>
  );
}

export default App;
