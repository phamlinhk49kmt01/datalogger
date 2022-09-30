import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MapRoutingModule } from './map-routing.module';
import { GoogleMapsModule } from '@angular/google-maps';
import { MapComponent } from './map.component';
import { MaterialModule } from '../material.module';


@NgModule({
  declarations: [MapComponent],
  imports: [
    CommonModule,
    MapRoutingModule,
    GoogleMapsModule,
    MaterialModule
  ]
})
export class MapModule { }
