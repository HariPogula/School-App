import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ANavComponent } from './components/a-nav/a-nav.component';

const routes: Routes = [
  {
    path: '',
    component: ANavComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule {}
