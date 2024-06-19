import {describe, it, expect, beforeEach} from '@jest/globals';
import Book from '../book.js';

describe('Book', () => {
  let myBook;

  beforeEach(() => {
    myBook = new Book('Cuentos de la Selva', 'Horacio Quiroga', 350);
    myBook.setWords(1000);
  });

  it('return the correct title', () => {
    expect(myBook.getTitle()).toBe('Cuentos de la Selva');
  });

  it('return the correct author', () => {
    expect(myBook.getAuthor()).toBe('Horacio Quiroga');
  });

  it('return the correct number of pages', () => {
    expect(myBook.getPages()).toBe(350);
  });

  it('return the correct number of words', () => {
    expect(myBook.getWords()).toBe(1000);
  });

  it('check title is a string', () => {
    expect(() => myBook = new Book(451, 1, 350)).toThrow();
  });

  it('check title is not empty', () => {
    expect(() => myBook = new Book('', 'Horacio Quiroga', 350)).toThrowError('El titulo no puede ser vacio');
  });

  it('check author is a string', () => {
    expect(() => myBook = new Book('Cuentos de la Selva', 43, 350)).toThrowError('Autor debe contener letras');
  });

  it('check page param is a number', () => {
    expect(() => myBook = new Book('Cuentos de la Selva', 'Horacio Quiroga', 'String')).toThrowError('Página debe ser un número');
  });

  it('check pages not < 1', () => {
    expect(() => myBook = new Book('Cuentos de la Selva', 'Horacio Quiroga', 0)).toThrowError('Página debe ser un número mayor a 1');
  });

  it('check words param is a number', () => {
    expect(() => myBook.setWords('String')).toThrowError('Las palabras deben ser un número');
  });

  it('check author anonymous', () => {
    myBook = new Book('Cuentos de la Selva','', 350);
    expect(myBook.getAuthor()).toBe('Anónimo');
  });

  it('check wordsPerPage', () => {
    myBook = new Book('Cuentos de la Selva','Horacio Quiroga', 350);
    myBook.setWords(7000);
    expect(myBook.wordsPerPage()).toBe(20);
  });

  it('toString()', () => {
    myBook = new Book('Cuentos de la Selva','Horacio Quiroga', 350);
    myBook.setWords(7000);
    expect(myBook.toString()).toBe('Título: Cuentos de la Selva Autor: Horacio Quiroga Páginas: 350 Palabras: 7000');
    
  });

});
