import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SNavComponent } from './components/s-nav/s-nav.component';

const routes: Routes = [
  {
    path: '',
    component: SNavComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StudentRoutingModule {}
