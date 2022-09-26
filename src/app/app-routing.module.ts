import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth/auth.guard';
import { DashboardModule } from './modules/dashboard/dashboard.module';
import { HomeModule } from './modules/home/home.module';
import { LoginModule } from './modules/login/login.module';
import { MapModule } from './modules/map/map.module';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/dashboard',
    pathMatch: 'full'
  },
  { path: 'dashboard', loadChildren: () => DashboardModule ,  data: { usingLayout: true}, canActivate: [AuthGuard] },
  { path: 'home', loadChildren: () => HomeModule ,  data: { usingLayout: true},canActivate: [AuthGuard]},
  { path: 'map', loadChildren: () => MapModule ,  data: { usingLayout: true},canActivate: [AuthGuard]},
  { path: 'login', loadChildren: () => LoginModule ,  data: { usingLayout: false}},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
