import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { SiteService } from '../../../../service/site.service';
import { SuperPiece, ColComponent } from '../../../..//template/models/site';
import { TemplateType } from '../../../../template/enum/templatetype.enum';

@Component({
  selector: 'app-column-component-editor',
  templateUrl: './column-component-editor.component.html',
  styleUrls: ['./column-component-editor.component.css']
})
export class ColumnComponentEditorComponent implements OnInit {

  @Input("piece") piece: ColComponent
  @Output("goToPage") gt = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }




  newSave(p: SuperPiece, inner: boolean) {
    p.page = this.piece.page;
    p.parent = this.piece.id;
    let parentPieceIndex: number;

    parentPieceIndex = SiteService.site.pieces.findIndex(f => f.id == this.piece.id);
    if (parentPieceIndex != -1) {
      if (inner == true)
        SiteService.site.pieces[parentPieceIndex].data.inner.push(p.id)
      else
        SiteService.site.pieces[parentPieceIndex].data.next.push(p.id)

      SiteService.site.pieces.push(p);
    }
    else {
      parentPieceIndex = SiteService.site.pages.findIndex(f => f.id == this.piece.id);

      if (parentPieceIndex != -1) {
        if (inner == true)
          SiteService.site.pages[parentPieceIndex].data.inner.push(p.id)
        else
          SiteService.site.pages[parentPieceIndex].data.next.push(p.id)

        SiteService.site.pieces.push(p);
      }
    }
    SiteService.save();
  }

  goToPage(p) {
    this.gt.emit(p);
  }

  getName(p)
  {
    return SiteService.site.pieces.find(f => f.id == p).name;
  }
  getType(p)
  {
    return TemplateType[SiteService.site.pieces.find(f => f.id == p).type];
  }

}
