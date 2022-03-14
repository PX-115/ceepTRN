import React, { Component } from "react";
import CorpoItem from "../CorpoItem/CorpoItem";
import "./estilo.css";

class ListaItens extends Component {
  constructor(props) {
    super();

    this.state = { cartas: [] };
    this._novaCarta = this._novaCarta.bind(this);
  }

  _novaCarta(cartas) {
    this.setState({ ...this.state, cartas });
  }

  componentDidMount() {
    this.props.cartas.inscrever(this._novaCarta);
  }

  componentWillUnmount() {
    this.props.cartas.desinscrever(this._novaCarta);
  }

  render() {
    return (
      // ul stands for "unordered list" / li stands for "list"
      // Cada CorpoItem fica dentro de um "li"
      <ul className="lista-itens">
        {this.state.cartas.map((cartas, index) => {
          return (
            <li className="lista-itens_item" key={index}>
              <CorpoItem
                //pegando o indice para ser passado para o CorpoItem
                //que será então enviado para a função deletarCartas em App.js
                index={index}
                //definindo deletar como uma proprieade. A origem desta propriedade é App.js -> deletarCarta
                deletarCarta={this.props.deletarCarta}
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
