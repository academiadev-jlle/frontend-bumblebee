import { Directive, ElementRef, HostListener, Input, OnInit, Renderer, Renderer2, Output, EventEmitter } from '@angular/core';

@Directive({
  selector: '[appImageGalery]'
})
export class ImageGaleryDirective implements OnInit {

  // tslint:disable-next-line:no-input-rename
  @Input('appImageGalery') image: string;

  constructor(
    private el: ElementRef,
    public renderer: Renderer,
    public renderer2: Renderer2
  ) { }

  @HostListener('document:click', ['$event.target'])
  public onClick(targetElement) {
    const clickedInside = this.el.nativeElement.contains(targetElement);
    if (!clickedInside) {
      this.renderer2.removeClass(this.el.nativeElement, 'bumblebee-img-galery-zoom');
      this.renderer2.addClass(this.el.nativeElement, 'bumblebee-img-galery');
    } else {
      this.renderer2.removeClass(this.el.nativeElement, 'bumblebee-img-galery');
      this.renderer2.addClass(this.el.nativeElement, 'bumblebee-img-galery-zoom');
    }
  }

  ngOnInit() {
    this.renderer.setElementStyle(this.el.nativeElement, 'backgroundImage', `url(${this.image})`);
  }
}
