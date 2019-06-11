import { Component, OnInit, ViewChild, ViewChildren, QueryList, ComponentFactoryResolver, Input, Type, AfterViewInit, AfterViewChecked, AfterContentInit, OnChanges } from '@angular/core';
import { InnerPieceHostDirective } from '../directive/innerpiecehost.directive';
import { NextPieceHostDirective } from '../directive/nextpiecehost.directive';
import { ComponentLoader } from '../componentloader'
import { ActivatedRoute, Router } from '@angular/router';
import { SiteService } from 'src/app/service/site.service';
import { ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',

  //styleUrls: ['./page.component.sass']
})
export class PageComponent implements AfterViewChecked, OnInit {

  @ViewChildren(InnerPieceHostDirective) cols: QueryList<InnerPieceHostDirective>
  @ViewChildren(NextPieceHostDirective) nexts: QueryList<NextPieceHostDirective>
  piece: any;

  type: Type<any>;
  page;
  pageId;

  constructor(
    private componentFactoryResolver: ComponentFactoryResolver,
    private route: ActivatedRoute,
    private router: Router,
    private cdref: ChangeDetectorRef) {

  }


  ngOnInit(): void {
    this.pageChange();

  }



  ngAfterViewChecked() {
    let current_page = this.route.snapshot.paramMap.get('page');
    if (current_page != this.pageId) {
      this.pageId = current_page;
      this.pageChange();
    }

    ComponentLoader.loadComponent(this.piece, this.componentFactoryResolver, this.cols.toArray(), this.nexts.toArray());
    this.cdref.detectChanges();

  }

  pageChange() {
    if (this.pageId == null)
      this.piece = (<Array<any>>SiteService.site.pages).find(f => f.route == "Home");

    else
      this.piece = SiteService.site.pages.find(f => f.route == this.pageId);

    if (this.piece == undefined)
      this.router.navigate([""])

    this.cdref.detectChanges();

  }



}


