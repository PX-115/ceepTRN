import React, { Component } from "react";
import "./estilo.css";
import { ReactComponent as DeleteSVG } from "../../assets/img/delete.svg";

class CorpoItem extends Component {
  apagar() {
    const indice = this.props.indice;
    this.props.deletar(indice);
  }

  render() {
    return (
      <section className="corpo-item">
        <header className="corpo-item_cabecalho">
          <h3 className="corpo-item_titulo">{this.props.titulo}</h3>
          <DeleteSVG>{this.apagar.bind(this)}</DeleteSVG>
        </header>
        <header>
          <h4 className="corpo-item_subtitulo">
            Destinatário: {this.props.destinatario}
          </h4>
        </header>
        <p className="corpo-item_texto">{this.props.texto}</p>
        <footer className="corpo-item_rodape">
          Remetente: {this.props.remetente}
        </footer>
      </section>
    );
  }
}

export default CorpoItem;
