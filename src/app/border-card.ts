import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appBorderCard]',
  standalone: true,
})
export class BorderCard {

  initialColor: string = '#f5f5f5';

  defaultColor: string = 'solid 4px'+'#8f2929';

  defaultHeight: number = 180;

  constructor(private el: ElementRef) {
    this.setHeight(this.defaultHeight);
    this.setBorder(this.initialColor);
   }

   @Input('appBorderCard') borderColor: string;

   //On va écouter l'évènement mouseenter
   @HostListener('mouseenter') onMouseEnter() {
    this.setBorder( this.borderColor + '#009688');
   }

   @HostListener('mouseleave') onMouseLeave() {
    this.setBorder('#8f2929');
   }

   setHeight(height: number): void {
    let currentHeight= this.defaultHeight || height;
    this.el.nativeElement.style.height = currentHeight + `px`;
   }

   setBorder(color: string): void {
    let borderColor = this.defaultColor || 'solid 4px' + color;
    this.el.nativeElement.style.border = borderColor;
   }

   

}
