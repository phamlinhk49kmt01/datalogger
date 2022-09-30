import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CollectionPointRoutingModule } from './collection-point-routing.module';
import { CollectionPointComponent } from './collection-point.component';
import { DevextremeModule } from '../devextreme.module';


@NgModule({
  declarations: [
    CollectionPointComponent
  ],
  imports: [
    CommonModule,
    CollectionPointRoutingModule,
    DevextremeModule
  ]
})
export class CollectionPointModule { }
