import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path:'', redirectTo:'/users-list', pathMatch:'full' },
  { path: 'users-list', loadChildren: () => import('./components/pages/users-list/users-list.module').then(m => m.UsersListModule) }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
