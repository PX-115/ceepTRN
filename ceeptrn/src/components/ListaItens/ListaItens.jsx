import React, { Component } from "react";
import "./estilo.css";

class ListaItens extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <ul className="lista-itens">
        {this.props.cartas.map((cartas, index) => {
          return <li className="lista-itens_item" key={index}></li>;
        })}
      </ul>
    );
  }
}

export default ListaItens;
