import { RouterModule, Routes } from '@angular/router';
import { UsersLayoutComponent } from './layout/users-layout/users-layout.component';
import { HeroComponent } from './component/hero/hero.component';
import { AboutComponent } from './component/about/about.component';
import { CourseComponent } from './component/course/course.component';
import { TeamComponent } from './component/team/team.component';
import { FeatureComponent } from './component/feature/feature.component';
import { PricingComponent } from './component/pricing/pricing.component';
import { ContactComponent } from './component/contact/contact.component';
import { Error404Component } from './shared/error404/error404.component';
import { NgModule } from '@angular/core';
import { SubscriptionComponent } from './component/subscription/subscription.component';
const route: Routes = [
  {
    path: '',
    component: UsersLayoutComponent,
    children: [
      { path: 'home', component: HeroComponent , title : 'Home'},
      { path: 'about', component: AboutComponent , title : 'About'},
      { path: 'course', component: CourseComponent ,title : 'Courses' },
      { path: 'team', component: TeamComponent , title : 'Team'},
      { path: 'feature', component: FeatureComponent , title : 'Feature'},
      { path: 'pricing', component: PricingComponent , title : 'Pricing'},
      { path: 'subscription/:id', component: SubscriptionComponent , title : 'Subscription'},
      { path: 'subscription', component: SubscriptionComponent , title : 'Subscription'},
      { path: 'contact', component: ContactComponent , title : 'Contact'},
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: '**', component: Error404Component },
    ],
  },
];
@NgModule({
  imports : [RouterModule.forChild(route)],
  exports : [RouterModule]
})
export class UserModule {}
