import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminLayoutComponent } from './layout/admin-layout/admin-layout.component';
import { HomeAdminComponent } from './components/home-admin/home-admin.component';
import { AdminError404Component } from './shared/admin-error404/admin-error404.component';
import { CreatCoursesComponent } from './components/courses/creat-courses/creat-courses.component';
import { CoursesListComponent } from './components/courses/courses-list/courses-list.component';
import { UpdateCoursesComponent } from './components/courses/update-courses/update-courses.component';
import { TrainnerCreateComponent } from './components/trainners/trainner-create/trainner-create.component';
import { TrainnerListComponent } from './components/trainners/trainner-list/trainner-list.component';
import { TrainnerUpdateComponent } from './components/trainners/trainner-update/trainner-update.component';
import { AdminListComponent } from './components/admins/admin-list/admin-list.component';
import { AdminCreateComponent } from './components/admins/admin-create/admin-create.component';
import { AdminUpdateComponent } from './components/admins/admin-update/admin-update.component';
import { AdminLoginComponent } from './components/admins/admin-login/admin-login.component';
import { authGuard } from '../../core/guards/auth.guard';
import { PricingCreateComponent } from './components/pricing/pricing-create/pricing-create.component';
import { PricingListComponent } from './components/pricing/pricing-list/pricing-list.component';
import { PricingUpdateComponent } from './components/pricing/pricing-update/pricing-update.component';
import { CustomersListComponent } from './components/Customers/customers-list/customers-list.component';
import { CustomersUpdateComponent } from './components/Customers/customers-update/customers-update.component';
const route: Routes = [
  {
    path: '',
    component: AdminLayoutComponent,
    children: [
      { path: 'home', component: HomeAdminComponent , canActivate : [authGuard] },
      { path: 'login', component: AdminLoginComponent },
      { path: 'al', component: AdminListComponent , canActivate : [authGuard]  },
      { path: 'ac', component: AdminCreateComponent },
      { path: 'au/:id', component: AdminUpdateComponent , canActivate : [authGuard]  },
      {path : 'cc' , component : CreatCoursesComponent , canActivate : [authGuard] },
      {path : 'cl' , component : CoursesListComponent , canActivate : [authGuard] },
      {path : 'cu/:id' , component : UpdateCoursesComponent , canActivate : [authGuard] },
      {path : 'tc' , component : TrainnerCreateComponent , canActivate : [authGuard] },
      {path : 'tl' , component : TrainnerListComponent , canActivate : [authGuard] },
      {path : 'tu/:id' , component : TrainnerUpdateComponent , canActivate : [authGuard] },
      {path : 'pc' , component : PricingCreateComponent , canActivate : [authGuard] },
      {path : 'pl' , component : PricingListComponent , canActivate : [authGuard] },
      {path : 'pu/:id' , component : PricingUpdateComponent , canActivate : [authGuard] },
      {path : 'sl' , component : CustomersListComponent , canActivate : [authGuard] },
      {path : 'su/:id' , component : CustomersUpdateComponent , canActivate : [authGuard] },
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: '**', component: AdminError404Component },
    ],
  },
];
@NgModule({
  imports: [RouterModule.forChild(route)],
  exports: [RouterModule],
})
export class AdminModule {}
