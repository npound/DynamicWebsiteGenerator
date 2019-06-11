import { Component, OnInit, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';
import { Page, SuperPiece, Data } from 'src/app/template/models/site';

import { v4 as uuid } from 'uuid';

@Component({
  selector: 'app-new-page',
  templateUrl: './new-page.component.html',
  styleUrls: ['./new-page.component.css']
})
export class NewPageComponent implements OnInit {

  name;
  route;

  @Output("onSave") onSave = new EventEmitter
  @ViewChild("btn") btn :ElementRef;
  constructor() { }

  ngOnInit() {
  }


    save()
    {
      let id = String(uuid());
let newPage = new Page();
newPage.data = new Data();
newPage.data.inner = []; 
newPage.data.next = [];
newPage.id = id;
newPage.meta = {};
newPage.name = this.name;
newPage.route = this.route;
newPage.type = 1;
newPage.parent = id;
newPage.page =id;

this.onSave.emit(newPage);
this.btn.nativeElement.click();

    }

}