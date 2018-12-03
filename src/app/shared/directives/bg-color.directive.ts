import { Directive, ElementRef, OnInit, Input } from '@angular/core';

@Directive({
  selector: '[appBgColor]'
})
export class BgColorDirective implements OnInit {
  mainColor = '#1c2331';
  mainColorDarker = '#141a24';
  secondaryColor = 'yellow';
  secondaryColorDarker = '#ffc30b';

  // tslint:disable-next-line:no-input-rename
  @Input() appBgColor: string;
  @Input() appTextColor: string;

  constructor(
    private el: ElementRef
  ) { }

  ngOnInit() {
    this.el.nativeElement.style = `
    background-color: ${this.appBgColor || this.mainColor};
    color: ${this.appTextColor || 'white'};
    `;
  }

}
