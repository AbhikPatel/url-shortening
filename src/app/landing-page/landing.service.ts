import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable()

export class LandingService {

  public api:string;
  private Url:Subject<any>;
  public Url$:Observable<any>;

  constructor(
    private _http:HttpClient
  ) { 
    this.api = 'https://api.shrtco.de/v2/shorten?url';
    this.Url = new Subject();
    this.Url$ = new Observable();
    this.Url$ = this.Url.asObservable()
  }

  public getShortenUrl(data:any):Observable<any>{
    return this._http.get<any>(`${this.api}=${data}`)
  }

  public coventer(data:any){
    this.Url.next(data)
  }
}
