import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import {
  bulkyAngularDashboardModule,
  bulkyAngularStatusBarModule,
  bulkyAngularDragDropModule,
  bulkyAngularProgressBarModule,
  bulkyAngularDashboardModalModule,
} from '@bulky/angular';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    bulkyAngularDashboardModule,
    bulkyAngularStatusBarModule,
    bulkyAngularDashboardModalModule,
    bulkyAngularDragDropModule,
    bulkyAngularProgressBarModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
