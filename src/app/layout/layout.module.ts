import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatMenuModule} from '@angular/material/menu';
import {MatListModule} from '@angular/material/list';
import {MatSidenavModule} from '@angular/material/sidenav';
import { RouterModule } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatDividerModule} from '@angular/material/divider';
import { HttpClientJsonpModule, HttpClientModule } from '@angular/common/http';
import { GoogleMapsModule } from '@angular/google-maps';


@NgModule({
  declarations: [
    HeaderComponent,
    SidebarComponent,
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    HttpClientJsonpModule ,
    RouterModule,
    FlexLayoutModule,
    MatToolbarModule,
    MatIconModule,
    MatMenuModule,
    MatListModule,
    MatSidenavModule,

    MatButtonModule,
    MatCardModule,
    MatDividerModule,


  ], 
  exports:[
    HeaderComponent,
    SidebarComponent,
    CommonModule,
    RouterModule,
    FlexLayoutModule,
    HttpClientJsonpModule,
    MatToolbarModule,
    MatIconModule,
    MatMenuModule,
    MatListModule,
    MatSidenavModule,
    MatButtonModule,
    MatCardModule,
    MatDividerModule, 
    GoogleMapsModule 
 ]
})
export class LayoutModule { }
