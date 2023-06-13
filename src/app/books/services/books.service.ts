import { Injectable } from '@angular/core';

import { Book } from 'src/app/books/types/book';

@Injectable()
export class BooksService {

  constructor() { }

  getBooks(): Book[] {
    return [
      {
        name: 'clean code',
        author: 'robert c martin',
        image: 'https://m.media-amazon.com/images/I/41EYLUDaF8L.jpg',
        price: 70
      },
      {
        name: 'the pragmatic programmer',
        author: "david thomas",
        image: "https://m.media-amazon.com/images/I/51A8l+FxFNL.jpg",
        price: 45
      },
      {
        name: 'the art of computer programming',
        author: 'donald john fuller',
        image: 'https://m.media-amazon.com/images/I/51l8dNiauwL._SY556_BO1,204,203,200_.jpg',
        price: 207.95
      },
      {
        name: 'introduction to algorithms',
        author: 'thomas cormen',
        image: 'https://m.media-amazon.com/images/I/41SNoh5ZhOL._SX440_BO1,204,203,200_.jpg',
        price: 34.48
      }
    ]
  }
}
