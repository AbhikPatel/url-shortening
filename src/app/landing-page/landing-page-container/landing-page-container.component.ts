import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { LandingService } from '../landing.service';
import { linksModel } from '../models/links.model';

@Component({
  selector: 'app-landing-page-container',
  templateUrl: './landing-page-container.component.html'
})
export class LandingPageContainerComponent implements OnInit {

  public getUrl$:Observable<any>;

  constructor(
    private _service:LandingService
  ) { 
    this.getUrl$ = new Observable();
  }

  ngOnInit(): void {
    this.getUrl$ = this._service.Url$
  }

  public emitFormData(data:any){
    this._service.getShortenUrl(data).subscribe((url) =>  this._service.coventer(url))
  }

}
