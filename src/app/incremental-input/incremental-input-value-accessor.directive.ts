import { Directive, forwardRef, HostListener } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { IncrementalInputComponent } from './incremental-input.component';

@Directive({
  // tslint:disable-next-line:directive-selector
  selector: 'app-incremental-input[formControl], app-incremental-input[formControlName], app-incremental-input[ngModel]',
  providers: [{ provide: NG_VALUE_ACCESSOR, useExisting: forwardRef(() => IncrementalInputValueAccessor), multi: true }]
})
// tslint:disable-next-line:directive-class-suffix
export class IncrementalInputValueAccessor {
  private onChange: (value: number | string) => void;
  private onTouched: any;

  constructor(private incrementalInput: IncrementalInputComponent) {}

  @HostListener('valueChange', ['$event'])
  onValueChange(value: number): void {
    this.onChange(value);
  }

  @HostListener('touch')
  onTouch(): void {
    this.onTouched();
  }

  writeValue(value: number): void {
    this.incrementalInput.value = value;
  }

  registerOnChange(onChange: (value: number) => void): void {
    this.onChange = onChange;
  }
  registerOnTouched(onTouched: any): void {
    this.onTouched = onTouched;
  }
}
