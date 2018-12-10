import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cards-categories',
  templateUrl: './cards-categories.component.html',
  styleUrls: ['./cards-categories.component.scss']
})
export class CardsCategoriesComponent implements OnInit {
  card_1 = '../../../assets/card-dog.jpg';
  card_2 = '../../../assets/card-cat.jpg';
  card_3 = '../../../assets/card-bird.jpg';

  constructor() { }

  ngOnInit() {
  }

}
