import { Directive, Input, OnInit, HostListener, ElementRef } from '@angular/core';

@Directive({
  selector: '[appCardHome]'
})
export class CardHomeDirective implements OnInit {
  // tslint:disable-next-line:no-input-rename
  @Input('appCardHome') image: string;

  styleCommon = `
    height: 250px;
    background-size: auto 250px;
    background-repeat: no-repeat;
    background-position: center;
  `;

  defaultStyle = `
    ${this.styleCommon}
    filter: grayscale(100%);
  `;

  @HostListener('mouseenter') onMouseEnter() {
    this.el.nativeElement.style = `
      ${this.styleCommon}
      background-image: url("${this.image}");
    `;
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.setStyle(this.image);
  }

  constructor(
    private el: ElementRef,
  ) { }

  ngOnInit() {
    this.setStyle(this.image);
  }

  private setStyle(image: string) {
    this.el.nativeElement.style = `${this.defaultStyle} background-image: url('${image}');`;
  }
}
