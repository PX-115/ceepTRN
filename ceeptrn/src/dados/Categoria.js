export default class ArrayDeCategorias {
  constructor() {
    this.categorias = [];
    this._inscritos = [];
  }

  addCategoria(novaCategoria) {
    this.categorias.push(novaCategoria);
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
      func(this.categorias);
    });
  }
}
