import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {LilLoginModule} from './lil-login/lil-login.module';
import {LilLoadingSpinnerModule} from './lil-loading-spinner/lil-loading-spinner.module';
import { LilLoadingRouterComponent } from './lil-loading-router/lil-loading-router.component';
import { LilHeaderComponent } from './lil-header/lil-header.component';


@NgModule({
  declarations: [

    LilLoadingRouterComponent,
     LilHeaderComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    LilLoginModule,
    LilLoadingSpinnerModule
  ],
  exports: [
    FormsModule,
    ReactiveFormsModule,
    LilLoginModule,
    LilLoadingSpinnerModule,
    LilLoadingRouterComponent
  ]
})
export class SharedModule { }
