import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Book } from '../types/book';
import { CartService } from '../../cart/services/cart.service';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent {
  @Input() book: Book = {} as Book;
  inCart: boolean = false;

  constructor(private cartService: CartService) {}

  ngOnInit(): void {}

  addToCart() {
    this.inCart = true
    this.cartService.add(this.book);
  }

  removeFromCart(book: Book) {
    this.inCart = false
    this.cartService.removeFromCart(this.book);
  }
}
