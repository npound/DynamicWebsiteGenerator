import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { VerticalComponent } from './template/nav/vertical/vertical.component';
import { HorizontalComponent } from './template/nav/horizontal/horizontal.component';
import { ColComponent } from './template/layout/col/col.component';
import { PageComponent } from './template/page/page.component';
import { InnerPieceHostDirective } from './template/directive/innerpiecehost.directive';
import { NextPieceHostDirective } from './template/directive/nextpiecehost.directive';
import { ImageComponent } from './template/layout/image/image.component';
import { TextComponent } from './template/layout/text/text.component';
import { HtmlComponent } from './template/layout/html/html.component';
import { BasepieceComponent } from './template/layout/basepiece/basepiece.component';
import {SiteloaderService} from './service/siteloader.service'
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { SiteService } from './service/site.service';
import { DesignerComponent } from './portal/designer/designer.component';
import { NavigatorComponent } from './portal/designer/navigator/navigator.component';
import { NewpieceComponent } from './portal/designer/newpiece/newpiece.component';
import { NewPageComponent } from './portal/designer/dialogs/new-page/new-page.component';
import { NewPieceComponent } from './portal/designer/dialogs/new-piece/new-piece.component';
import { FormsModule } from '@angular/forms';
import { ColumnComponentEditorComponent } from './portal/designer/editors/column-component-editor/column-component-editor.component';
import { TextComponentEditorComponent } from './portal/designer/editors/text-component-editor/text-component-editor.component';

@NgModule({
  declarations: [
    AppComponent,
    VerticalComponent,
    HorizontalComponent,
    ColComponent,
    PageComponent,
    InnerPieceHostDirective,
    NextPieceHostDirective,
    ImageComponent,
    TextComponent,
    HtmlComponent,
    BasepieceComponent,
    DesignerComponent,
    NavigatorComponent,
    NewpieceComponent,
    NewPageComponent,
    NewPieceComponent,
    ColumnComponentEditorComponent,
    TextComponentEditorComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [SiteloaderService,
  SiteService],
  bootstrap: [AppComponent],
  entryComponents:[
    TextComponent,
    ColComponent
  ]
})
export class AppModule { }
