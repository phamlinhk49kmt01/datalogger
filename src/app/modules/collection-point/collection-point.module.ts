import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CollectionPointRoutingModule } from './collection-point-routing.module';
import { CollectionPointComponent } from './collection-point.component';


@NgModule({
  declarations: [
    CollectionPointComponent
  ],
  imports: [
    CommonModule,
    CollectionPointRoutingModule
  ]
})
export class CollectionPointModule { }
