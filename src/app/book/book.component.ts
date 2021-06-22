import { Component, OnInit } from '@angular/core';
import { Book } from './book.model';
@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss'],
})
export class BookComponent implements OnInit {



  books: Book[] = [];
  nowyBook = new Book();

  constructor() { }

  ngOnInit(): void {
    let potop = new Book();
    potop.nazwa = 'Potop';
    potop.liczbaStron = 884;
    potop.autor = "Henryk Sienkiewicz";
    potop.gatunek = 'powieść historyczna';
    potop.czyPrzeczytane = false;


    let malowany = new Book();
    malowany.nazwa = 'Malowany człowiek';
    malowany.liczbaStron = 416;
    malowany.autor = "Peter V. Brett";
    malowany.gatunek = 'fantasy';
    malowany.czyPrzeczytane = true;

    let mistrz = new Book();
    mistrz.nazwa = 'Mistrz i Małgorzata';
    mistrz.liczbaStron = 520;
    mistrz.autor = 'Michaił Bułhakow';
    mistrz.gatunek = 'powieść';
    mistrz.czyPrzeczytane = true;

    this.dodajKsiazke(potop);
    this.dodajKsiazke(malowany);
    this.dodajKsiazke(mistrz);

  }

  dodajKsiazke(nowaKsiazka: Book){
    this.books.push(nowaKsiazka);
  }

  onClick(){
    this.dodajKsiazke(this.nowyBook);
    this.nowyBook.id = Math.floor(Math.random() * (100 - 1)) + 1;
    console.log(this.nowyBook);
  }

  remove(book: Book){
    this.books = this.books.filter( e => e !==book);
  }


}





