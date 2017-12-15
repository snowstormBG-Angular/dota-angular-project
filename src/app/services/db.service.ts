import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

const appKey = "kid_r1kO3_pbM"; // APP KEY HERE;
const appSecret = "91ee55016f6f4237a4f8a0eab6ca3a30"; // APP SECRET HERE;
const dashboardUrl = `https://baas.kinvey.com/appdata/${appKey}/dashboard`;
const newsUrl = `https://baas.kinvey.com/appdata/${appKey}/news`;
const itemsUrl = `https://baas.kinvey.com/appdata/${appKey}/items`;
const heroesUrl = `https://baas.kinvey.com/appdata/${appKey}/heroes`;

@Injectable()
export class DatabaseService {
  private currentAuthtoken : string;

  constructor(
    private http : HttpClient
  ) { }

  getNews(){
    return this.http.get(
      newsUrl,
      {
        headers: this.createAuthHeaders('Basic')
      }
    );
  }

  getDashboard(){
    return this.http.get(
      dashboardUrl,
      {
        headers: this.createAuthHeaders('Kinvey')
      }
    );
  }

  getItems(){
    return this.http.get(
      itemsUrl,
      {
        headers: this.createAuthHeaders('Kinvey')
      }
    );
  }

  getHeroes(){
    return this.http.get(
      heroesUrl,
      {
        headers: this.createAuthHeaders('Kinvey')
      }
    );
  }

  get authtoken() {
    return this.currentAuthtoken;
  }

  set authtoken(value : string) {
    this.currentAuthtoken = value;
  }

  private createAuthHeaders(type : string) : HttpHeaders {
    //hardcoded user will fetch public data in the NEWS section
    if (type === 'Basic') {
      return new HttpHeaders({
        'Authorization': `Basic ${btoa(`asd:asd`)}`,
        'Content-Type': 'application/json'
      })
    } else {
      return new HttpHeaders({
        'Authorization': `Kinvey ${localStorage.getItem('authtoken')}`,
        'Content-Type': 'application/json'
      })
    }
  }
}
