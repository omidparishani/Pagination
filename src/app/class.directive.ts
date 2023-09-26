import { Directive, HostListener, HostBinding, Input, ElementRef } from '@angular/core';

@Directive({
  selector: '[appClass]'
})
export class ClassDirective {

  @Input() set color(newColor: string) {
    this.elementRef.nativeElement.style.backgroundColor = newColor;
  }

  constructor(private elementRef: ElementRef) { }

  // @HostBinding('style.backgroundColor') backgroundColor: string = 'transparent';

  // @HostListener('mouseenter') onMouseOver() {
  //   this.backgroundColor = 'red';
  // }

  // @HostListener('mouseleave') onMouseLeave() {
  //   this.backgroundColor = 'transparent';
  // }
}
