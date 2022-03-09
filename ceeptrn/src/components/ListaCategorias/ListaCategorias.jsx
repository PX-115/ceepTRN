import React, { Component } from "react";
class ListaCategorias extends Component {
  constructor() {
    super();

    this.state = { categorias: [] };
  }

  _handleAdicionarCategoria(e) {
    if (e.key == "Enter") {
      let valorCategoria = e.target.value;
      this.props.addCategoria(valorCategoria);
    }
  }

  render() {
    return (
      <section className="lista-categorias">
        <ul className="lista-categorias_lista">
          {this.state.categorias.map((categoria, index) => {
            return (
              <li className="lista-categorias_item" key={index}>
                {categoria}
              </li>
            );
          })}
        </ul>
        <input
          type="text"
          className="lista-categorias_input"
          placeholder="Adicionar categoria"
          onKeyUp={this._handleAdicionarCategoria.bind(this)}
        ></input>
      </section>
    );
  }
}

export default ListaCategorias;
