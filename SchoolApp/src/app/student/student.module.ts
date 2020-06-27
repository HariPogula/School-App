import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StudentRoutingModule } from './student-routing.module';
import { SNavComponent } from './components/s-nav/s-nav.component';


@NgModule({
  declarations: [SNavComponent],
  imports: [
    CommonModule,
    StudentRoutingModule
  ]
})
export class StudentModule { }
