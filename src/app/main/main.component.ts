import { Component } from '@angular/core';
import { CardsService } from '../services/cards.service';

@Component({
  selector: 'app-main',
  imports: [],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss'
})
export class MainComponent {
  cards: any;
  private _cardService: CardsService;
  constructor(cardService: CardsService){
    this._cardService = cardService;
    this.cards = this._cardService.getCard();
    console.log(this.cards);
    
  }
}
