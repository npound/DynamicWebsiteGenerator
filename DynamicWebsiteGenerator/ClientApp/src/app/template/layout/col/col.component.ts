import { Component, OnInit,ViewChild, ViewChildren, QueryList, ComponentFactoryResolver, Input,Type, AfterViewInit, AfterViewChecked, ChangeDetectorRef } from '@angular/core';
import { InnerPieceHostDirective } from '../../directive/innerpiecehost.directive';
import { Piece } from '../../models/piece';
import { TemplateType } from '../../enum/templatetype.enum';
import { ImageComponent } from '../image/image.component';
import { HtmlComponent } from '../html/html.component';
import { TextComponent } from '../text/text.component';
import { NextPieceHostDirective } from '../../directive/nextpiecehost.directive';
import { ComponentLoader} from '../../componentloader'
import { ActivatedRoute, Router } from '@angular/router';
import { SiteService } from 'src/app/service/site.service';

@Component({
  selector: 'app-col',
  templateUrl: './col.component.html',
  //styleUrls: ['./col.component.sass']
})



export class ColComponent implements AfterViewChecked, OnInit {

  @ViewChildren(InnerPieceHostDirective) cols: QueryList<InnerPieceHostDirective>
  @ViewChildren(NextPieceHostDirective) nexts: QueryList<NextPieceHostDirective>

  piece: any;
  type: Type<any>;
  page;
  pageId;

  constructor(
    private componentFactoryResolver: ComponentFactoryResolver,
    private cdref: ChangeDetectorRef) {

  }

  ngOnInit(): void {


  }



  ngAfterViewChecked() {
    console.log("here1")
    ComponentLoader.loadComponent(this.piece, this.componentFactoryResolver, this.cols.toArray(), this.nexts.toArray());
    this.cdref.detectChanges();

  }



}


