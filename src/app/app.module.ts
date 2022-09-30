import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutModule } from './layout/layout.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MapComponent } from './modules/map/map.component';
import { AuthGuard } from './auth/auth.guard';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptor } from './auth/auth.interceptor';
import { NgxTranslateModule } from './core/translate/translate.module';
import { ApiInterceptor } from './auth/api.interceptor';
import { LoadingBarModule } from '@ngx-loading-bar/core';
import { LoadingBarHttpClientModule } from '@ngx-loading-bar/http-client';
import { LoadingBarRouterModule } from '@ngx-loading-bar/router';
import { ApiErrorInterceptor } from './auth/api-error.interceptor';
import { MaterialModule } from './modules/material.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    BrowserAnimationsModule,
    LayoutModule,
    NgxTranslateModule,
    LoadingBarModule,
    LoadingBarHttpClientModule,
    LoadingBarRouterModule,
    MaterialModule
  ],
  providers: [
    AuthGuard,
    {provide: HTTP_INTERCEPTORS,useClass: ApiInterceptor, multi: true},
    {provide: HTTP_INTERCEPTORS,useClass: AuthInterceptor, multi: true},
    {provide: HTTP_INTERCEPTORS,useClass: ApiErrorInterceptor, multi: true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
