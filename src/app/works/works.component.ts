import { Component } from '@angular/core';
import { CardsService } from '../services/cards.service';

@Component({
  selector: 'app-works',
  imports: [],
  templateUrl: './works.component.html',
  styleUrl: './works.component.scss'
})
export class WorksComponent {
  cards: any;
  private _cardService: CardsService;
  constructor(cardService: CardsService){
    this._cardService = cardService;
    this.cards = this._cardService.getCard();
  }
}
