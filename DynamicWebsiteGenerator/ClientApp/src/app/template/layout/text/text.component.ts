import { Component, OnInit, Input, ViewContainerRef } from '@angular/core';

@Component({
  selector: 'app-text',
  templateUrl: './text.component.html',
  //styleUrls: ['./text.component.sass']
})
export class TextComponent implements OnInit {

  @Input() piece: any;
  
  ngOnInit() {
    console.log(this.piece)
  }

}
