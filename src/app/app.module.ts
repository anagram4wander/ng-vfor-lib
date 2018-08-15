import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NgGUDCoreModule } from '../../projects/ng-vfor-lib/src/public_api';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NgGUDCoreModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
