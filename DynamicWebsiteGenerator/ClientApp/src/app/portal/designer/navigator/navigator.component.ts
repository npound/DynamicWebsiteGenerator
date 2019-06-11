import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { SuperPiece, ColComponent, TextComponent, Breadcrumb, Site } from '../../../template/models/site';
import { SiteService } from '../../../service/site.service';
import { TemplateType } from '../../../template/enum/templatetype.enum';

@Component({
  selector: 'app-navigator',
  templateUrl: './navigator.component.html',
  styleUrls: ['./navigator.component.css']
})
export class NavigatorComponent implements OnInit {

  @Input("piece") piece : SuperPiece 

  @Output("changedPiece") ch = new EventEmitter();

  @Output("goToPage") gt = new EventEmitter();

  constructor() { }

    
  public get site() : Site {
    return SiteService.site;
  }
  
  public set site(v : Site) {
    SiteService.site = v;
  }
  
  

  ngOnInit() {

    console.log(this.piece)
    switch(this.piece.type)
    {

      case 1:
      this.piece = <ColComponent>this.piece;
      break;

      case 101:
      this.piece = <TextComponent>this.piece;
      break;
    //  image=100,
    //  html=102
    }
  }



  goToPage(p)
  {
  this.gt.emit(p);
}



}
