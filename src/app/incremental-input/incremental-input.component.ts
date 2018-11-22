import { Component, Input, Output, EventEmitter } from '@angular/core';
import { coerceNumberProperty } from '@angular/cdk/coercion';

@Component({
  selector: 'app-incremental-input',
  templateUrl: './incremental-input.component.html',
  styleUrls: ['./incremental-input.component.scss']
})
export class IncrementalInputComponent {
  private _value: number = null;
  get value(): number {
    return this._value;
  }
  @Input()
  set value(value: number) {
    this._value = coerceNumberProperty(value, null);
    this.previousValue = this.value;
  }

  private _minValue = 0;
  get minValue(): number {
    return this._minValue;
  }
  @Input()
  set minValue(minValue: number) {
    this._minValue = coerceNumberProperty(minValue, 0);
  }

  @Output() valueChange = new EventEmitter<number>();
  @Output() touch = new EventEmitter<void>();

  private previousValue: number = null;

  decrement(): void {
    this.valueChange.emit(--this.value);
    this.touch.emit();
  }

  increment(): void {
    this.valueChange.emit(++this.value);
    this.touch.emit();
  }

  onInput(input: HTMLInputElement): void {
    if (/\D/.test(input.value)) {
      input.value = coerceNumberProperty(this.previousValue, '').toString();
      this.touch.emit();
    } else {
      this.valueChange.emit(this.value = coerceNumberProperty(input.value, null));
      this.touch.emit();
    }
  }

  onBlur(): void {
    this.touch.emit();
  }
}
