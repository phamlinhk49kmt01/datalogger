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
import { NsAutoHeightTableDirective } from 'src/app/directives/ns-auto-height-table.directive';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzInputModule } from 'ng-zorro-antd/input';
import { ModalCreateComponent } from './modal-create/modal-create.component';

@NgModule({
  declarations: [
    CollectionPointComponent,
    NsAutoHeightTableDirective,
    ModalCreateComponent,
  ],
  imports: [
    CommonModule,
    CollectionPointRoutingModule,
    MaterialModule,
    NzTableModule ,
    NzButtonModule,
    NzIconModule,
    NzSpaceModule,NzPopconfirmModule,
    NzModalModule,
    NzFormModule ,NzInputModule
  ]
})
export class CollectionPointModule { }


