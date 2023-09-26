import { Directive, HostListener, HostBinding } from '@angular/core';

@Directive({
  selector: '[appClass]'
})
export class ClassDirective {

  @HostBinding('style.backgroundColor') backgroundColor: string = 'transparent';

  @HostListener('mouseenter') onMouseOver() {
    this.backgroundColor = 'red';
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.backgroundColor = 'transparent';
  }
}
