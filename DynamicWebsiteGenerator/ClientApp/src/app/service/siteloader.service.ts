import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; 
import { Site } from '../template/models/site';
import { Observable } from 'rxjs';

@Injectable()
export class SiteloaderService {

  constructor(private http: HttpClient) { }

  getSite() : Observable<any>
  {
    return this.http.get("./assets/test.json");
  }
}




