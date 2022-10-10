import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CollectionPointRoutingModule } from './collection-point-routing.module';
import { CollectionPointComponent } from './collection-point.component';
import { MaterialModule } from '../material.module';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzSpaceModule } from 'ng-zorro-antd/space';
import { NzPopconfirmModule } from 'ng-zorro-antd/popconfirm';

@NgModule({
  declarations: [
    CollectionPointComponent
  ],
  imports: [
    CommonModule,
    CollectionPointRoutingModule,
    MaterialModule,
    NzTableModule ,
    NzButtonModule,
    NzIconModule,
    NzSpaceModule,NzPopconfirmModule
  ]
})
export class CollectionPointModule { }


