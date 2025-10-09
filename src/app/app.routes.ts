import { Routes } from '@angular/router';
export const routes: Routes = [
  {
    path: 'users',
    loadChildren: () =>
      import('./features/users/users.routes.module').then((m) => m.UserModule),
  },
  {
    path: 'admin',
    loadChildren: () =>
      import('./features/admin/admin.routes.module').then((m) => m.AdminModule),
  },
  { path: '', redirectTo: 'users', pathMatch: 'full' },
];
