import React from 'react';
import './Message.css';

//Este componente lo voy a renderizar desde mi app.js
export class Message extends React.Component{
  render() {
    return (
      <div>
        <h1 className="Message">Omg! soy un nuevo Componente</h1>
      </div>
    )
  }
}

//Se puede exportar por defecto O
//Haciendo la importación de Message en App que es donde lo queremos mostrar