import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CollectionPointRoutingModule } from './collection-point-routing.module';
import { CollectionPointComponent } from './collection-point.component';
import { MaterialModule } from '../material.module';
import { NsAutoHeightTableDirective } from 'src/app/directives/ns-auto-height-table.directive';
import { ModalCreateComponent } from './modal-create/modal-create.component';
import { NzModule } from '../nz.module';
import { DirectivesModule } from '../directives.module';

@NgModule({
  declarations: [
    CollectionPointComponent,
    ModalCreateComponent,
  ],
  imports: [
    CommonModule,
    CollectionPointRoutingModule,
    MaterialModule,
    NzModule,
    DirectivesModule
  ]
})
export class CollectionPointModule { }


