import { Component, OnInit } from '@angular/core';
import {Quote} from '../quote';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

    quotes = [
      new Quote(1, 'Dont stop when you are tired stop when you are done', 'By Wayne Mark', 0, 0),
      new Quote(2, 'Be so good they cant ignore you', ' By Mike Merkins', 0, 0),
      new Quote(3, 'Divas dont do drama they do business', 'By Shila', 0, 0 )
    ];
    toogleDetails(index) {
      this.quotes[index].showDescription = !this.quotes[index].showDescription;
    }
    constructor() {}
    ngOnInit() {

    }
    addNew(event) {
      this.quotes.push(event);
    }
    deleteQuote(isComplete, index) {
      if (isComplete) {
          const toDelete = confirm(`Are you sure you want to delete ${this.quotes[index].name}`);

          if (toDelete) {
              this.quotes.splice(index, 1);
          }
      }
  }
}
