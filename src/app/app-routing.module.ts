import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth/auth.guard';
import { LayoutComponent } from './layout/layout.component';
import { CollectionPointModule } from './modules/collection-point/collection-point.module';
import { DashboardModule } from './modules/dashboard/dashboard.module';
import { HomeModule } from './modules/home/home.module';
import { LoginModule } from './modules/login/login.module';
import { MapModule } from './modules/map/map.module';

const routes: Routes = [
  {
    path: '', component: LayoutComponent,
    children: [
      { path: 'dashboard', loadChildren: () => DashboardModule },
      { path: '', loadChildren: () => HomeModule },
      { path: 'home', loadChildren: () => HomeModule },
      { path: 'collection-point', loadChildren: () => CollectionPointModule },
    ],
    canActivate: [AuthGuard]
  },
  { path: 'map', loadChildren: () => MapModule },
  { path: 'login', loadChildren: () => LoginModule }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
