import { Component, Input } from '@angular/core';
import { Book } from '../types/book';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent {
  @Input() book: Book = {} as Book;

  constructor() {}

  ngOnInit(): void {}

  addToCart() {
    console.log(this.book.name);
  }
}
