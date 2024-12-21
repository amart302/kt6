import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { title } from 'node:process';

@Injectable({
  providedIn: 'root'
})
export class CardsService {
  private _dataCard: object[] = [{
    image: "./images/cardImg1.png",
    title: "Designing Dashboards",
    description: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
    year: 2020,
    type: "Dashboard"
  },   
  {
    image: "./images/cardImg2.png",
    title: "Vibrant Portraits of 2020",
    description: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
    year: 2018,
    type: "Illustration"
  },
  {
    image: "./images/cardImg3.png",
    title: "36 Days of Malayalam type",
    description: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
    year: 2018,
    type: "Typography"
  },
  {
    image: "./images/cardImg4.png", 
    title: "Components", 
    description: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
    year: 2018,
    type: "Components, Design"
  }
]

  constructor() { }

  getCard(){
    return this._dataCard
  }
}
