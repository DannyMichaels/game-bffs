import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { AppComponent } from './app.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { JwtInterceptor } from './jwt-http';
import { XHttpClient } from './x-http-client';
import { AppRoutingModule } from './app-routing.module';
import { AppLayout } from './layout/app-layout/app.layout';

@NgModule({
  declarations: [AppComponent, AppLayout],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: JwtInterceptor,
      multi: true,
      deps: [Router],
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: XHttpClient,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
