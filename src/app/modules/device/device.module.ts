import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DeviceRoutingModule } from './device-routing.module';
import { DeviceComponent } from './device.component';
import { MaterialModule } from '../material.module';
import { NzModule } from '../nz.module';
import { TranslateModule } from '@ngx-translate/core';
import { DirectivesModule } from '../directives.module';
import { DeviceSettingComponent } from './device-setting/device-setting.component';



@NgModule({
  declarations: [
    DeviceComponent,
    DeviceSettingComponent,
  ],
  imports: [
    CommonModule,
    DeviceRoutingModule,
    MaterialModule,
    NzModule,
    TranslateModule,
    DirectivesModule
  ]
})
export class DeviceModule { }
