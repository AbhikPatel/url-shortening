import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RegistrationRoutingModule } from './registration-routing.module';
import { RegistrationContainerComponent } from './registration-container/registration-container.component';
import { RegistrationPresentationComponent } from './registration-container/registration-presentation/registration-presentation.component';
import { RegistrationService } from './registration.service';


@NgModule({
  declarations: [
    RegistrationContainerComponent,
    RegistrationPresentationComponent
  ],
  imports: [
    CommonModule,
    RegistrationRoutingModule
  ],
  providers:[
    RegistrationService
  ]
})
export class RegistrationModule { }
