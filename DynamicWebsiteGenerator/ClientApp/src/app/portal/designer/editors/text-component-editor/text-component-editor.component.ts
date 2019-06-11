import { Component, OnInit, Input } from '@angular/core';
import { TextComponent } from '../../../../template/models/site'
import { ConstantPool } from '@angular/compiler';
import { SiteService } from '../../../../service/site.service';

@Component({
  selector: 'app-text-component-editor',
  templateUrl: './text-component-editor.component.html',
  styleUrls: ['./text-component-editor.component.css']
})
export class TextComponentEditorComponent implements OnInit {

  constructor() { }

  @Input("piece") piece: TextComponent

  public set textType(v : String) {
    console.log(v)
    this.piece.textType = Number(v);
  }

  

  
  ngOnInit() {
    let i = SiteService.originalSite.pieces.findIndex(f => f.id == this.piece.id);
    console.log(i,this.piece, <TextComponent>SiteService.originalSite.pieces[i]);

  }

  save()
  {
    SiteService.save();
  }
  reset()
  {
    
    let i = SiteService.originalSite.pieces.findIndex(f => f.id == this.piece.id);
    console.log(i,this.piece, <TextComponent>SiteService.originalSite.pieces[i]);
    this.piece = <TextComponent>SiteService.originalSite.pieces[i];
  }


}
