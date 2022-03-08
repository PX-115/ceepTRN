import React, { Component } from "react";
import "./assets/App.css";
import "./assets/index.css";
import CampoTexto from "./components/CampoTexto";
import ListaItens from "./components/ListaItens";
import ArrayDeCartas from "./dados/Cartas";
import ArrayDeCategorias from "./dados/Categoria";

class App extends Component {
  constructor() {
    super();

    this.cartas = new ArrayDeCartas();
    this.categorias = new ArrayDeCategorias();
  }

  render() {
    return (
      <section className="conteudo">
        <CampoTexto
          enviarCarta={
            this.enviarCarta.bind(
              this
            ) /* Injeção de dependência / Associando a propriedade enviarCarta criada aqui a função de enviar uma carta no CampoTexto*/
          }
        />
        <ListaItens cartas={this.state.cartas} />
      </section>
    );
  }
}

export default App;

/* // Método público pois eu passo ele para o CampoTexto usar
  // Criando uma função para passar como propriedade / passando ela na linha: 30
  enviarCarta(titulo, destinatario, texto, remetente) {
    const novaCarta = { titulo, destinatario, texto, remetente };
    //Usando spread operator para associar novaCarta no Array dentro do state
    const novoArrayCartas = [...this.state.cartas, novaCarta];
    const novoEstadoArrayCartas = {
      cartas: novoArrayCartas,
    };
    this.setState(novoEstadoArrayCartas);
  } */
