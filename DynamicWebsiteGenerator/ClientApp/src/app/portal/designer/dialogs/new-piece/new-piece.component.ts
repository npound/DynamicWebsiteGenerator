import { Component, OnInit, Input, ViewChild, ElementRef, Output, EventEmitter } from '@angular/core';
import { HtmlComponent, TextComponent, ImageComponent, ColComponent, SuperPiece, Data } from '../../../../template/models/site';
import { v4 as uuid } from 'uuid';

@Component({
  selector: 'app-new-piece',
  templateUrl: './new-piece.component.html',
  styleUrls: ['./new-piece.component.css']
})
export class NewPieceComponent implements OnInit {

  constructor() { }

  @ViewChild("btn") btn :ElementRef;
  
  @Input("parentId") parentId : string

  @Output("onSave") onSave = new EventEmitter;
  pieceType;
  name;


  ngOnInit() {
  }


  save()
  {
    let newPiece = new SuperPiece();
switch(this.pieceType)
{
  case "1":
newPiece = new ColComponent();
newPiece.data = new Data();
newPiece.data.inner = [];
newPiece.data.next = [];
  break;

  case "100":
  newPiece = new ImageComponent();
    break;

    case "101":
    newPiece = new TextComponent();
    (<TextComponent>newPiece).textType = 1;
    newPiece.data.text = "";
      break;

      case "102":
      newPiece = new HtmlComponent();
        break;
}

newPiece.id = uuid();
newPiece.type = Number(this.pieceType)
newPiece.name = this.name;

    this.onSave.emit(newPiece);
    this.btn.nativeElement.click();

  }

}
