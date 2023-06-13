import { Injectable } from '@angular/core';

import { Book } from '../../books/types/book';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  cart: Book[] = [];

  constructor() { }

  add(book: Book) {
    this.cart.push(book);
  }

  getCart() {
    return this.cart;
  }

  removeFromCart(book: Book) {
    this.cart = this.cart.filter(b => b != book)
  }
}
