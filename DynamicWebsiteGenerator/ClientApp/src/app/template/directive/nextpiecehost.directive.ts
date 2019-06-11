import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appNextPieceHost]'
})
export class NextPieceHostDirective {

  constructor(public viewContainerRef: ViewContainerRef) { }

}
