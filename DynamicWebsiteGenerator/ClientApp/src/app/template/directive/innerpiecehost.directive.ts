import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appInnerPieceHostDirective]'
})
export class InnerPieceHostDirective {

  constructor(public viewContainerRef: ViewContainerRef) { }

}
