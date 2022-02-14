import React, { Component } from "react";
import CorpoItem from "../CorpoItem/CorpoItem";
import "./estilo.css";

class ListaItens extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      // ul stands for "unordered list" / li stands for "list"
      // Cada CorpoItem fica dentro de um "li"
      <ul className="lista-itens">
        {this.props.cartas.map((cartas, index) => {
          return (
            <li className="lista-itens_item" key={index}>
              <CorpoItem
                titulo={cartas.titulo}
                destinatario={cartas.destinatario}
                texto={cartas.texto}
                remetente={cartas.remetente}
              />
            </li>
          );
        })}
      </ul>
    );
  }
}

export default ListaItens;
