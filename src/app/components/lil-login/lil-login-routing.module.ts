import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LilLoginComponent} from './lil-login.component';

const routes: Routes = [
  {
    path: 'login',
    component: LilLoginComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LilLoginRoutingModule { }
