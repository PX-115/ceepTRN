import React, { Component } from "react";
class ListaCategorias extends Component {
  constructor() {
    super();

    this.state = { categorias: [] };
    this._novaCategoria = this._novaCategoria.bind(this);
  }

  _novaCategoria(categorias) {
    this.setState({ ...this.state, categorias });
  }

  componentDidMount() {
    this.props.categorias.inscrever(this._novaCategoria);
  }

  componentWillUnmount() {
    this.props.categorias.desinscrever(this._novaCategoria);
  }

  _handleAdicionarCategoria(e) {
    if (e.key === "Enter") {
      let valorCategoria = e.target.value;
      this.props.addCategoria(valorCategoria);
    }
  }

  render() {
    return (
      <section className="lista-categorias">
        <ul className="lista-categorias_lista">
          {this.state.categorias.map((categoria, index) => {
            /* inicialmente o map chama a categoria como objeto,
             isso faz com que o map não realize sua função devidamente, 
             quando chamamos o props.categorias.categorias estamos chamando agora o array que pertence as categorias, 
             assim fazendo com que o map possa funcionar corretamente */
            return (
              <li className="lista-categorias_item" key={index}>
                {/* {categoria} */}
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
