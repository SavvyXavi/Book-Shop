import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BooksComponent } from './books.component';
import { BookComponent } from './Book/book.component';

import { BooksService } from './services/books.service';



@NgModule({
  declarations: [BooksComponent, BookComponent],
  providers: [BooksService],
  imports: [
    CommonModule
  ],
  exports: [BooksComponent]
})
export class BooksModule { }
