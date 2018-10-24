import { Quote } from '../quote';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-quote-form',
  templateUrl: './quote-form.component.html',
  styleUrls: ['./quote-form.component.css']
})
export class QuoteFormComponent implements OnInit {
  newQuote = new Quote(0, '', '', 0, 0);
  @Output() addQuote = new EventEmitter();

  submitQuote() {
  this.addQuote.emit(this.newQuote);
  }
  constructor() { }

  ngOnInit() {
  }

}
