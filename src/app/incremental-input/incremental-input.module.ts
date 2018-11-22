import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IncrementalInputComponent } from './incremental-input.component';
import { IncrementalInputValueAccessor } from './incremental-input-value-accessor.directive';

@NgModule({
  declarations: [
    IncrementalInputComponent,
    IncrementalInputValueAccessor
  ],
  imports: [
    CommonModule
  ],
  exports: [
    IncrementalInputComponent,
    IncrementalInputValueAccessor
  ]
})
export class IncrementalInputModule { }
