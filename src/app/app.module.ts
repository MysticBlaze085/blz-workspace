import { AppComponent } from './app.component';
import { BlzRfmJsonModule } from 'projects/blz-rfm-json/src/public-api';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BlzRfmJsonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
