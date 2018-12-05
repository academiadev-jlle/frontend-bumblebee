import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})
export class SliderComponent implements OnInit {

  // tslint:disable-next-line:max-line-length
  slider1 = '../../../assets/slider-1.jpg';
  slider2 = '../../../assets/slider-2.jpg';
  slider3 = '../../../assets/slider-3.jpg';

  constructor() { }

  ngOnInit() {
  }

}
