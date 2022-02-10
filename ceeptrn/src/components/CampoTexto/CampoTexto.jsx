import React, { Component } from "react";
import "./estilo.css";

class CampoTexto extends Component {
  constructor(props) {
    super(props);
    this.titulo = "";
    this.destinatario = "";
    this.texto = "";
    this.remetente = "";
  }

  _handleTitulo(evento) {
    evento.stopPropagation();
    this.titulo = evento.target.value;
  }

  _handleDestinatario(evento) {
    evento.stopPropagation();
    this.destinatario = evento.target.value;
  }

  _handleTexto(evento) {
    evento.stopPropagation();
    this.texto = evento.target.value;
  }

  _handleRemetente(evento) {
    evento.stopPropagation();
    this.remetente = evento.target.value;
  }

  render() {
    return (
      <div className="campo-texto">
        <input
          type="text"
          placeholder="Título"
          className="campo-texto_input"
          onChange={this._handleTitulo.bind(this)}
        ></input>
        <input
          type="text"
          placeholder="Destinatário"
          className="campo-texto_input"
          onChange={this._handleDestinatario.bind(this)}
        ></input>
        <textarea
          type="text"
          rows={15}
          placeholder="Escreva sua mensagem..."
          className="campo-texto_input"
          onChange={this._handleTexto.bind(this)}
        ></textarea>
        <input
          type="text"
          placeholder="Remetente"
          className="campo-texto_input"
          onChange={this._handleRemetente.bind(this)}
        ></input>
        <button className="campo-texto_submit campo-texto_submit=active">
          Enviar carta
        </button>
      </div>
    );
  }
}

export default CampoTexto;
