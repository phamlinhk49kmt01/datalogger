import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DeviceRoutingModule } from './device-routing.module';
import { DeviceComponent } from './device.component';
import { MaterialModule } from '../material.module';
import { NzModule } from '../nz.module';
import { TranslateModule } from '@ngx-translate/core';



@NgModule({
  declarations: [
    DeviceComponent
  ],
  imports: [
    CommonModule,
    DeviceRoutingModule,
    MaterialModule,
    NzModule,
    TranslateModule
  ]
})
export class DeviceModule { }
