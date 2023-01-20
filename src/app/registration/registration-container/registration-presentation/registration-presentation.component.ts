import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { RegistrationPresenterService } from '../registration-presenter/registration-presenter.service';

@Component({
  selector: 'app-registration-presentation',
  templateUrl: './registration-presentation.component.html',
  viewProviders:[RegistrationPresenterService],
  changeDetection:ChangeDetectionStrategy.OnPush
})
export class RegistrationPresentationComponent implements OnInit {

  public registrationGroup:FormGroup;
  public matched:boolean;
  
  constructor(
    private _service:RegistrationPresenterService
  ) { 
    this.registrationGroup = this._service.getGroups();
    this.matched = false;
  }

  ngOnInit(): void {
    this.registrationGroup.valueChanges.subscribe((data) => data.password === data.password2 ? this.matched = true : this.matched = false)
  }

  public onSubmit(){

  }

  public get getControls(){
    return this.registrationGroup['controls']
  }

}
