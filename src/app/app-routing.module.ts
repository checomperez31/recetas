import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'user',
    loadChildren: () => import('./user/user.module').then( m => m.UserModule )
  },
  {
    path: 'role',
    loadChildren: () => import('./role/role.module').then( m => m.RoleModule )
  },
  {
    path: 'action',
    loadChildren: () => import('./action/action.module').then( m => m.ActionModule )
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
