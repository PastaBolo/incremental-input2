import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { IncrementalInputModule } from './incremental-input/incremental-input.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    IncrementalInputModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
