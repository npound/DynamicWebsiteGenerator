import { Component, OnInit } from '@angular/core';
import { SiteService } from 'src/app/service/site.service';


@Component({
  selector: 'app-horizontal',
  templateUrl: './horizontal.component.html',
  styleUrls: ['./horizontal.component.css']
})
export class HorizontalComponent implements OnInit {

  site
  constructor() { 
    this.site = SiteService.site;
  }

  ngOnInit() {
    
  }

}
