import { ElementRef, SimpleChanges } from '@angular/core';
import { OnChanges } from '@angular/core';
import { Input } from '@angular/core';
import { Directive } from '@angular/core';

@Directive({
  selector: '[appColor]'
})
export class ColorDirective implements OnChanges {
  defaultColor = 'blue'

  @Input('appColor') color!:string

  constructor(private el:ElementRef) { }


  ngOnChanges(changes: SimpleChanges): void {
    this.el.nativeElement.style.backgroundColor = this.color || this.defaultColor
  }

}
