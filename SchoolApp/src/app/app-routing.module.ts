import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'admin',
    loadChildren: () =>
      import('./admin/admin.module').then((a) => a.AdminModule),
  },
  {
    path: 'student',
    loadChildren: () =>
      import('./student/student.module').then((s) => s.StudentModule),
  },
  {
    path: 'login',
    loadChildren: () => import('./auth/auth.module').then((a) => a.AuthModule),
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
