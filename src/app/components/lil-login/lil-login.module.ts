import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LilLoginRoutingModule } from './lil-login-routing.module';
import {LilLoginComponent} from './lil-login.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {SharedModule} from '../shared.module';
import {LilLoadingSpinnerModule} from '../lil-loading-spinner/lil-loading-spinner.module';


@NgModule({
  declarations: [
    LilLoginComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    LilLoginRoutingModule,
    LilLoadingSpinnerModule,
  ]
})
export class LilLoginModule { }
