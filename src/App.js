import React from "react";
import "./style.css";
import { Message } from './components/Message/Message';
import Profile from './features/Profile/Profile';

export default function App() {
  return (
    <div className="App">
      <Message/>
      <Profile/>
    </div>
  );
}

export default App;

/* Todos los componentes tienen algo que se llama "props" (objeto).
Este objeto contiene informacion relacionada al componente.
Para saber cual es el contenido del objeto, basta con aceeder a la propiedad llamada "this.props" */
