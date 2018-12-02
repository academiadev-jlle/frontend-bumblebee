import { Directive, ElementRef, Renderer2, OnInit, HostListener, Input } from '@angular/core';

@Directive({
    selector: '[appNormalFontWeight]'
})

export class NormalFontWeightDirective implements OnInit {
    defaultColor = 'yellow';

    // tslint:disable-next-line:no-input-rename
    @Input('appNormalFontWeight') appHightLightColor: string;

    @HostListener('mouseenter') onMouseEnter() {
        this.hightlight(this.appHightLightColor);
    }

    @HostListener('mouseleave') onMouseLeave() {
        this.hightlight('initial');
    }

    constructor(
        private el: ElementRef,
        private renderer: Renderer2
    ) { }

    ngOnInit() {
        this.renderer.setStyle(this.el.nativeElement, 'font-weight', 'bold');
    }

    private hightlight(color: string) {
        console.log(color);
        this.renderer.setStyle(this.el.nativeElement, 'background-color', color || this.defaultColor);
    }
}
