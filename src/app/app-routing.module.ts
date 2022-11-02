import { HomeComponent } from './home/home.component';

import { Route, RouterModule, Routes } from '@angular/router';

import { NgModule } from '@angular/core';


const routes: Routes = [
  {path: '', component: HomeComponent, title: 'NLW Copa - Página Inicial'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }