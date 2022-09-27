import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CollectionPointComponent } from './collection-point.component';

const routes: Routes = [
  {path:'', component : CollectionPointComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CollectionPointRoutingModule { }
