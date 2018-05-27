import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
//import 'rxjs/add/operator/map';
//import 'rxjs/add/observable/of';
//import { Observable } from 'rxjs/Rx';
import { map } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(public http:Http) {
    console.log('Data Service conected .. ');
   }

   getPosts(){
      return this.http.get('https://jsonplaceholder.typicode.com/posts')
        .pipe(map(res => res.json()));
   }
}
