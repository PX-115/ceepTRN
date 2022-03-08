export default class ArrayDeCartas {
  constructor() {
    this.cartas = [];
    this._inscritos = [];
  }

  enviarCarta(titulo, destinatario, texto, remetente) {
    const novaCarta = new Cartas(titulo, destinatario, texto, remetente);
    this.cartas.push(novaCarta);
    this.notificar();
  }

  deletar(indice) {
    this.cartas.splice(indice, 1);
    this.notificar();
  }

  inscrever(func) {
    this._inscritos.push(func);
  }

  desinscrever(func) {
    this._inscritos = this._inscritos.filter((f) => f != func);
  }

  notificar() {
    this._inscritos.forEach((func) => {
      func(this.cartas);
    });
  }
}

class Cartas {
  constructor(titulo, destinatario, texto, remetente) {
    this.titulo = titulo;
    this.destinatario = destinatario;
    this.texto = texto;
    this.remetente = remetente;
  }
}
