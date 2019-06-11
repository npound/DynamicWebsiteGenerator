import { Component, OnInit } from '@angular/core';
import { SiteService } from '../../service/site.service';
import { Site, Breadcrumb, SuperPiece } from '../../template/models/site';
import { ComponentLoader } from '../../template/componentloader';

@Component({
  selector: 'app-designer',
  templateUrl: './designer.component.html',
  styleUrls: ['./designer.component.css']
})
export class DesignerComponent implements OnInit {

  constructor(private ss: SiteService) { }



  navigating = false;
  breadcrumbs: Breadcrumb[] = [];

  currentPiece: SuperPiece;
  pendingChanges = false;


  
  public get site() : Site {
    return SiteService.site;
  }
  
  public set site(v : Site) {
    SiteService.site = v;
  }
  
  


  ngOnInit() {
    SiteService.site = SiteService.site;
    SiteService.save();
    console.log(SiteService.site)
  }



  gotoPage(p) {

    this.breadcrumbs = []
    this.navigating = true;

    let i = this.site.pages.findIndex(f => f.id == p.id);
    if (i != -1) {
      this.currentPiece = SiteService.site.pages[i];


      this.breadcrumbs.push({
        id: this.currentPiece.id,
        name: this.currentPiece.name
      })

      return;
    }

    console.log("This page don't exist")
  }


  gotoPiece(p) {

    this.navigating = true;
console.log(p)

      let i = this.site.pieces.findIndex(f => f.id == p);
      if (i != -1) {
        this.currentPiece = this.site.pieces[i];
        this.generateBreadCrumbs(this.currentPiece);
        return;
      }


    this.gotoPage({id:p}) 
  }

  changePiece(ch) {
    console.log("this is really complicated, ill get to it evenutally")
  }

  newSave(page){

    SiteService.site.pages.push(page);
    SiteService.save();
  }

  generateBreadCrumbs(piece:SuperPiece)
  {
    this.breadcrumbs = [];
    let page = piece.page;
    var cp = piece;

console.log(cp)
    while(cp.id != page)
    {
      this.breadcrumbs.unshift({
        id: cp.id,
        name: cp.name
      })

      var parentPiece = SiteService.site.pieces.find(f => f.id == cp.parent);
      if(parentPiece != undefined)
        cp = parentPiece;
      else
        cp = SiteService.site.pages.find(f => f.id == cp.parent);

        console.log(cp)
    }



    this.breadcrumbs.unshift({
      id: cp.id,
      name: cp.name
    })
    console.log(this.breadcrumbs)
  }


}
