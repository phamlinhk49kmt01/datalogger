import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CollectionPointRoutingModule } from './collection-point-routing.module';
import { CollectionPointComponent } from './collection-point.component';
import { MaterialModule } from '../material.module';
import { NsAutoWidthHeightTableDirective } from 'src/app/directives/ns-auto-width-height-table.directive';
import { ModalCreateComponent } from './modal-create/modal-create.component';
import { NzModule } from '../nz.module';

@NgModule({
  declarations: [
    CollectionPointComponent,
    NsAutoWidthHeightTableDirective,
    ModalCreateComponent,
  ],
  imports: [
    CommonModule,
    CollectionPointRoutingModule,
    MaterialModule,
    NzModule
  ]
})
export class CollectionPointModule { }


