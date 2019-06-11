import { Component } from '@angular/core';
import { SiteloaderService } from './service/siteloader.service';
import { THROW_IF_NOT_FOUND } from '@angular/core/src/di/injector';
import { SiteService } from './service/site.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  //styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'ClientApp';
site;

  constructor(private sl : SiteloaderService, private ss : SiteService){
    sl.getSite()
    .subscribe(s => 
      {
        SiteService.site = s;
        this.site = s;
        
      });
  }
}


