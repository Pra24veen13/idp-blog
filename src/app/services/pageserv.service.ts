import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PageservService {


  url: any;
  constructor(private http: HttpClient) {
    this.url = "https://api.json-generator.com/templates/VUDUZd4V3QyJ/data?access_token=sdxv5aybndbk39af52pub0x8rlmyp6usm4glpoh2";
  }

  getAllBlogs(): Observable<any> {
    return this.http.get<any>(this.url);
  }

}
