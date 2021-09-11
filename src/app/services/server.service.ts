import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

const baseUrl = 'http://wptest.local';

const AUTH_API = 'http://wptest.local/wp-json/jwt-auth/v1/token';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class ServerService {
  private loggedIn = false;
  private token: string;

  constructor(private http: HttpClient) {}
/* 
  login(credentials): Observable<any> {
    return this.http.post(AUTH_API , {
      username: credentials.username,
      password: credentials.password
    }, httpOptions);
  } */

  register(user): Observable<any> {
    return this.http.post(AUTH_API + 'signup', {
      username: user.username,
      email: user.email,
      password: user.password
    }, httpOptions);
  }

  setLoggedIn( loggedIn: boolean, token?: string){
    this.loggedIn = loggedIn;
    this.token = token;
  }

  request(method: string, route: string, data?: any ){
    if(method === 'GET'){
      return this.get( route, data );
    }

    const header = ( this.loggedIn ) ? { Authorization: `Bearer ${this.token}` } : undefined;

    return this.http.request(method, baseUrl + route, {
      body: data,
      responseType: 'json',
      observe: 'body',
      headers: header
    });
  }

  get(route: string, data?: any){
    const  header = (this.loggedIn) ? { Authorization: `Bearer ${this.token}` } : undefined;

    let params = new HttpParams();
    if (data !== undefined ){
      Object.getOwnPropertyNames(data).forEach(key =>{
        params = params.set(key, data[key]);
      });
    }

    return this.http.get(baseUrl + route, {
      responseType: 'json',
      headers: header,
      params
    });
  }
}
