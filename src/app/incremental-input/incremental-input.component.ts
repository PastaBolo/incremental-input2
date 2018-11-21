import { OnInit, Component, Input } from '@angular/core'
import { coerceNumberProperty } from '@angular/cdk/coercion'

@Component({
  selector: 'app-incremental-input',
  templateUrl: './incremental-input.component.html',
  styleUrls: ['./incremental-input.component.scss']
})
export class IncrementalInputComponent implements OnInit {
  private _value: number = null
  get value(): number {
    return this._value
  }
  @Input()
  set value(value: number) {
    this._value = coerceNumberProperty(value, null)
    this.previousValue = this.value
  }

  private previousValue: number = null
  // private previousValue: number

  ngOnInit(): void {
    // this.previousValue = this.value
  }

  decrement(): void {
    this.previousValue = --this.value
  }

  increment(): void {
    this.previousValue = ++this.value
  }

  onInput(input: HTMLInputElement): void {
    if (/\D/.test(input.value)) {
      input.value = coerceNumberProperty(this.previousValue, '').toString()
    } else {
      this.previousValue = this.value = coerceNumberProperty(input.value, null)
    }
  }
}
