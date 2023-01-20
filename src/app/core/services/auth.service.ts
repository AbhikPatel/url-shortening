import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()

export class AuthService {

  public api:string = 'http://localhost:3000';
  public validUser:any;

  constructor(
    private _http:HttpClient
  ) { }

  public getUsers():Observable<any>{
    return this._http.get<any>(`${this.api}/users`)
  }

  public isLoggedIn(){
    return this.validUser ? true : false;
  }
}
