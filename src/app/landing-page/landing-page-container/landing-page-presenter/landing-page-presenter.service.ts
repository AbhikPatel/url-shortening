import { Injectable } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Observable, Subject } from 'rxjs';
import { linksModel } from '../../models/links.model';

@Injectable()

export class LandingPagePresenterService {

  private FormData: Subject<any>;
  public FormData$: Observable<any>;

  constructor(
    private _fb: FormBuilder
  ) {
    this.FormData = new Subject();
    this.FormData$ = new Observable();
    this.FormData$ = this.FormData.asObservable();
  }

  public getGroups() {
    return this._fb.group({
      shorten: ['', [Validators.required, Validators.pattern('(https?://)?([\\da-z.-]+)\\.([a-z.]{2,6})[/\\w .-]*/?')]]
    })
  }

  public getData(data: any) {
    this.FormData.next(data)
  }
}
