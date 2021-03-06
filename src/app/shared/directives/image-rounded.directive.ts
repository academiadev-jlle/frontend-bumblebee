import { Directive, ElementRef, Renderer2, OnInit, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appImageRounded]'
})
export class ImageRoundedDirective implements OnInit {

  // tslint:disable-next-line:no-input-rename
  @Input('appImageRounded') image: string;

  styleCommon = `
    width: 180px;
    height: 180px;
    margin: -70px auto auto auto;
    transition: width 0.3s, height 0.3s, border-radius 0.2s;
  `;

  defaultStyle = `
    ${this.styleCommon}
    border-radius: 50%;
    border: 5px solid white;
    background-size: cover;
  `;

  @HostListener('mouseenter') onMouseEnter() {
    this.el.nativeElement.style = `
      ${this.styleCommon}
      border-radius: 5%;
      border: 2px solid white;
      width: 270px;
      height: 270px;
      background-size: contain;
      background-repeat: no-repeat;
      background-color: whitesmoke;
      background-position: center;
      box-shadow: 0px 0px 5px gray;
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
