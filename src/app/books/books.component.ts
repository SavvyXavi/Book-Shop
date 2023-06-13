import { Component } from '@angular/core';
import { Book } from './types/book';

import { BooksService } from './services/books.service';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent {
  books: Book[] = []

   cart: Book[] = [];

  isShowing: boolean = true;

  constructor(private BooksService: BooksService) {}

  ngOnInit(): void {
    this.books = this.BooksService.getBooks();
  }
}
