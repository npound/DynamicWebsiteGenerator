import { Injectable } from '@angular/core';
import { Site } from '../template/models/site';


@Injectable()
export class SiteService {

    public static site : Site;
    public static originalSite : Site;

    
  static save()
  {
    let t = JSON.stringify(SiteService.site);
    SiteService.originalSite = JSON.parse(t)
  }

}
