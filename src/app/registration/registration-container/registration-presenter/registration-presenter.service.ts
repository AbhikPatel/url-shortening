import { Injectable } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Injectable()

export class RegistrationPresenterService {

  constructor(
    private _fb:FormBuilder
  ) { }

  public getGroups(){
    return this._fb.group({
      name:['',[Validators.required, Validators.maxLength(30)]],
      userName:['',[Validators.required, Validators.maxLength(30)]],
      mail:['',[Validators.required, Validators.email]],
      password:['',[Validators.required, Validators.maxLength(8)]],
      password2:['',[Validators.required, Validators.maxLength(8)]],
    })
  }
}
