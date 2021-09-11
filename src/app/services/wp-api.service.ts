import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class WpAPIService {

  private api_url: any;

  constructor( private http: HttpClient ) { 
    this.api_url = 'http://wptest.local/wp-json/wp/v2/';
  }

  getPosts(){
    return this.http.get( this.api_url + 'posts');
  }
}
