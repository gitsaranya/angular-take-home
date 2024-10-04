import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BookService } from '../../services/book.service';
import { Book } from '../../models/book';

@Component({
  selector: 'app-book-entry',
  templateUrl: './book-entry.component.html',
  styleUrls: ['./book-entry.component.css']
})
export class BookEntryComponent implements OnInit{
  bookForm!: FormGroup;
  submitted = false;
  //idOrig: number | null | undefined = null;
  idOrig: number = 0;
  fetchedBook: Book | null | undefined = null;
  bookList: Book[] = [];

  constructor(private fb: FormBuilder, private bookService: BookService){}

  ngOnInit(): void {
    this.bookForm = this.fb.group({
      title: ['', Validators.required],
      author: ['', Validators.required],
      price: ['', [Validators.required, Validators.pattern("^[0-9]*$")]],
      genre: ['', Validators.required]
    });
  }

  get f() { return this.bookForm.controls;}

  onSubmit(): void {
    this.submitted = true;
    if (this.bookForm.invalid) return;
    const bookData: Book = this.bookForm.value;
    this.bookService.createBook(bookData).subscribe(
      (book) => {
        this.idOrig = book.id ? book.id : 0;
        
        console.log("Succcessfully saved the book");
        this.fetchBook(this.idOrig);
      },
      (error) => {
        console.error("Error saving the book", error);
      }
    );
  }

  fetchBook(id: number): void {
    this.bookService.getBookById(id).subscribe(
      (book) => {
        this.fetchedBook = book;
      },
      (error) => {
        console.error("Error fetching the book", error);
      }
    );
  }
}
