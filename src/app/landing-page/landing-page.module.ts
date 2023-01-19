import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ClipboardModule } from '@angular/cdk/clipboard'

import { LandingPageRoutingModule } from './landing-page-routing.module';
import { LandingPageContainerComponent } from './landing-page-container/landing-page-container.component';
import { LandingPagePresentationComponent } from './landing-page-container/landing-page-presentation/landing-page-presentation.component';
import { LandingService } from './landing.service';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    LandingPageContainerComponent,
    LandingPagePresentationComponent
  ],
  imports: [
    CommonModule,
    LandingPageRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    ClipboardModule
  ],
  providers:[
    LandingService
  ]
})
export class LandingPageModule { }
