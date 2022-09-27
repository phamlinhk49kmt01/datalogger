import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CollectionPointRoutingModule } from './collection-point-routing.module';
import { CollectionPointComponent } from './collection-point.component';
import { DataTablesModule } from 'angular-datatables';


@NgModule({
  declarations: [
    CollectionPointComponent
  ],
  imports: [
    CommonModule,
    CollectionPointRoutingModule,
    DataTablesModule 
  ]
})
export class CollectionPointModule { }
