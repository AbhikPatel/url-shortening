import { Component, OnInit } from '@angular/core';
import { RegistrationService } from '../registration.service';

@Component({
  selector: 'app-registration-container',
  templateUrl: './registration-container.component.html'
})
export class RegistrationContainerComponent implements OnInit {

  constructor(
    private _service:RegistrationService
  ) { }

  ngOnInit(): void {
  }

}
