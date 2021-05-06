import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {LilLoadingRouterComponent} from './lil-loading-router.component';


@NgModule({
  declarations: [
    LilLoadingRouterComponent
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    LilLoadingRouterComponent
  ]
})
export class LilLoadingRouterModule { }
