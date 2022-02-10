import React, { Component } from "react";
import "./assets/App.css";
import "./assets/index.css";
import CampoTexto from "./components/CampoTexto/CampoTexto";
import ListaItens from "./components/ListaItens/ListaItens";

class App extends Component {
  render() {
    return (
      <div>
        <CampoTexto />
        <ListaItens />
      </div>
    );
  }
}

export default App;
