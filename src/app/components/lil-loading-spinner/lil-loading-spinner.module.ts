import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {LilLoadingSpinnerComponent} from './lil-loading-spinner.component';


@NgModule({
  declarations: [
    LilLoadingSpinnerComponent
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    LilLoadingSpinnerComponent
  ]
})
export class LilLoadingSpinnerModule { }
