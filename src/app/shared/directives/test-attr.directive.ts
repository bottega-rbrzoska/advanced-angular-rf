import { Directive, ElementRef, HostListener, Input, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[rfTestAttr]',
  exportAs: 'attrDir'
})
export class TestAttrDirective implements OnInit {

  @Input() rfTestAttr: string;
  @Input() rfTestAttrSecondInput: boolean; //dajemy nazwe dyrektywy jako prefix inputa

  constructor(private el: ElementRef<HTMLElement>, private renderer: Renderer2) {
  }

  ngOnInit() {
    this.renderer.setStyle(this.el.nativeElement, 'backgroundColor', this.rfTestAttr || 'lightblue');
  }

  @HostListener('mouseover')
  changeColorOnMouseOver() {
    this.renderer.setStyle(this.el.nativeElement, 'backgroundColor', 'black');
  }

  @HostListener('mouseout')
  changeColorOnMouseOut() {
    this.renderer.setStyle(this.el.nativeElement, 'backgroundColor', this.rfTestAttr || 'lightblue');
  }

}
