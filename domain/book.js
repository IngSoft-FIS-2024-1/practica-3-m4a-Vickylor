class Book {

  #title;
  #author;
  #pages;
  #words;
  
  constructor(title, author, pages) {
    this.setTitle(title);
    this.setAuthor(author);
    this.setPages(pages);
  }

  getTitle() {
    return this.#title;
  }

  getAuthor() {
    return this.#author;
  }

  getPages() {
    return this.#pages;
  }

  getWords() {
    return this.#words;
  }

  setTitle(title) {
    if (typeof (title) !== 'string') {
      throw new Error('El titulo no puede ser vacio');
    }
    title = title.trim();
    if (title.length === 0) {
      throw new Error('El titulo no puede ser vacio');
    }
    this.#title = title;
  }
  //trim saca los espacios en blancos en inicio y fin del string

  setAuthor(author) {
    if (typeof (author) !== 'string') {
      throw new Error('Autor debe contener letras');
    }
    author = author.trim();
    if (author.length === 0) {
      author = 'Anónimo';
    }
    this.#author = author;
  }

  setPages(pages) {
    if (typeof (pages) !== 'number' || isNaN(pages)) {
      throw new Error('Página debe ser un número');
    }
    if (pages < 1) {
      throw new Error('Página debe ser un número mayor a 1');
    }
    pages = Math.trunc(pages);
    this.#pages = pages;
  }

  setWords(words) {
    if (typeof (words) !== 'number' || isNaN(words)) {
      throw new Error('Las palabras deben ser un número');
    }
    this.#words = words;
  }

  wordsPerPage() {
    return this.getWords() / this.getPages();
  }

  toString() {
    return `Título: ${this.#title} Autor: ${this.#author} Páginas: ${this.#pages} Palabras: ${this.#words}`;
  }
}

export default Book;
