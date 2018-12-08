import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { NguCarouselConfig } from '@ngu/carousel';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'sample',
  templateUrl: './carousel.component.html'
})
export class CarouselComponent implements OnInit {
  imgags = [
    'https://picsum.photos/350/200/?image=650',
    'https://picsum.photos/350/200/?image=651',
    'https://picsum.photos/350/200/?image=652',
    'https://picsum.photos/350/200/?image=653',
    'https://picsum.photos/350/200/?image=654',
    'https://picsum.photos/350/200/?image=655'
  ];
  public carouselTileItems: Array<any> = [];
  public carouselTile: NguCarouselConfig = {
    grid: { xs: 1, sm: 1, md: 3, lg: 3, all: 0 },
    slide: 3,
    speed: 250,
    point: {
      visible: true
    },
    load: 2,
    touch: true,
    easing: 'cubic-bezier(0, 0, 0.2, 1)'
  };
  constructor(private cdr: ChangeDetectorRef) {}

  ngOnInit() {
    this.carouselTileLoad();
  }

  public carouselTileLoad() {
    const len = this.imgags.length;
    for (let i = 0; i < len; i++) {

      this.carouselTileItems.push(
        this.imgags[i]
      );
    }
    this.cdr.detectChanges();
  }
}
