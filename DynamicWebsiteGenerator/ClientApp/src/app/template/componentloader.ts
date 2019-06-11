import { Component, OnInit, ViewChild, ViewChildren, QueryList, ComponentFactoryResolver, Input, Type } from '@angular/core';
import { InnerPieceHostDirective } from './directive/innerpiecehost.directive';
import { TemplateType } from './enum/templatetype.enum';
import { ImageComponent } from './layout/image/image.component';
import { HtmlComponent } from './layout/html/html.component';
import { TextComponent } from './layout/text/text.component';
import { NextPieceHostDirective } from './directive/nextpiecehost.directive';
import { ColComponent } from './layout/col/col.component';
import { SuperPiece } from './models/site';
import { SiteService } from '../service/site.service';


export class ComponentLoader {

    static loadComponent(piece, componentFactoryResolver, cols, nexts) {

    

        if (piece.data.inner != undefined)
            for (let i = 0; i < piece.data.inner.length; i++) {

                let type;
                let subpiece = SiteService.site.pieces.find(f => f.id == piece.data.inner[i])


                switch (Number(subpiece.type)) {

                    case 1:
                        type = ColComponent;
                        break;



                    case 100:
                        type = ImageComponent;
                        break;

                    case 102:
                        type = HtmlComponent;
                        break;

                    case 101:
                        type = TextComponent;
                        break;

                    default:
                        break;
                }


                let cf = componentFactoryResolver.resolveComponentFactory(type);
                let viewContainerRef = cols[i].viewContainerRef;
                cols[i].viewContainerRef.clear();

                let componentRef = viewContainerRef.createComponent(cf);
                (componentRef.instance).piece = subpiece;
            }


        if (piece.data.next != undefined)
            for (let i = 0; i < piece.data.next.length; i++) {
                
                let type;
                let subpiece = SiteService.site.pieces.find(f => f.id == piece.data.next[i])

                switch (Number(subpiece.type)) {

                    case 1:
                        type = ColComponent;
                        break;
                    case 100:
                        type = ImageComponent;
                        break;

                    case 102:
                        type = HtmlComponent;
                        break;

                    case 101:
                        type = TextComponent;
                        break;

                    default:
                        break;
                }

                let cf = componentFactoryResolver.resolveComponentFactory(type);
                let viewContainerRef = nexts[0].viewContainerRef;
                nexts[0].viewContainerRef.clear();
                let componentRef = viewContainerRef.createComponent(cf);
                (componentRef.instance).piece = subpiece;
            }
    }


    static hasData(piece: SuperPiece, hasInner : Boolean) : boolean
    {
        if(piece.data == undefined)
        return false;

        else if(hasInner == true && piece.data.inner == undefined)
        return false;
        else if (hasInner == false && piece.data.next == undefined)
        return false;
else
return  true;


    }

}


