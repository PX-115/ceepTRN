import React, { Component } from "react";
import "./estilo.css";

class CampoTexto extends Component {
  // As propriedades associadas são recebidas aqui no construtor
  constructor(props) {
    super(props);
    this.titulo = "";
    this.destinatario = "";
    this.texto = "";
    this.remetente = "";
    this.categorias = "Sem categoria";
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

  _handleCategoria(evento) {
    evento.stopPropagation();
    this.categorias = evento.target.value;
  }

  _handleTitulo(evento) {
    // Verifica que há um evento (digitação do título) ...
    // ... e alveja este valor para que seja armazenado na variável título
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

  _enviarCarta(evento) {
    evento.preventDefault();
    evento.stopPropagation();
    //Chamando a propriedade criada em App.js, a função enviarCarta
    this.props.enviarCarta(
      this.titulo,
      this.destinatario,
      this.texto,
      this.remetente,
      this.categorias
    );
  }

  render() {
    return (
      <form className="campo-texto" onSubmit={this._enviarCarta.bind(this)}>
        <input
          type="text"
          placeholder="Título"
          className="campo-texto_input"
          onChange={this._handleTitulo.bind(this)}
        ></input>
        <select
          className="campo-texto_input"
          onChange={this._handleCategoria.bind(this)}
        >
          <option>Sem categoria</option>

          {this.state.categorias.map((categoria, index) => {
            return <option key={index}>{categoria}</option>;
          })}
        </select>
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
      </form>
    );
  }
}

export default CampoTexto;
