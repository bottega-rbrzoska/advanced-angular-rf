import { Directive } from '@angular/core';
import { ElementRef, HostListener, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[rfSelectable]'
})
export class SelectableDirective {

  @Input('rfSelectable') selectionClass: string;
  @Input() rfSelectableValue: any;
  isSelected = false;
  constructor(private el: ElementRef, private renderer: Renderer2) {
    renderer.setStyle(el.nativeElement, 'cursor', 'pointer');
  }

  @HostListener('click')
  toggleSelection() {
    if(!this.isSelected) {
      this.renderer.addClass(this.el.nativeElement, this.selectionClass || 'selected');
      this.isSelected = true;
    } else {
      this.renderer.removeClass(this.el.nativeElement, this.selectionClass || 'selected');
      this.isSelected = false;
    }
  }

}
