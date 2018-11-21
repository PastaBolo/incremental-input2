import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { IncrementalInputComponent } from './incremental-input/incremental-input.component';

@NgModule({
  declarations: [
    AppComponent,
    IncrementalInputComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
