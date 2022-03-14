import React, { Component } from "react";
import { ReactComponent as DeleteSVG } from "../../assets/img/delete.svg";
// importa o SVG como um componente pra q ele possa ser facilmente referenciado
import "./estilo.css";

class CorpoItem extends Component {
  deletar() {
    //método facilita apagar um card, não precisando escrever dentro do onClick usando os props
    // importando props da ListaDeNotas
    const index = this.props.index;
    // importanto props do App.js
    this.props.deletarCarta(index);
  }

  render() {
    return (
      <section className="corpo-item">
        <header className="corpo-item_cabecalho">
          <h3 className="corpo-item_titulo">{this.props.titulo}</h3>
          <DeleteSVG onClick={this.deletar.bind(this)} />
          <h4>{this.props.categoria}</h4>
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
