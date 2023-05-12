import { Component, EventEmitter, Input, OnInit, Output, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => InputComponent),
      multi: true
    }
  ]
})
export class InputComponent implements ControlValueAccessor {
  @Input() type = "text";
  @Input() data: string | number;
  @Input() placeholder = "Please input value";
  @Input() maxlength = 3;
  @Output() valueChange = new EventEmitter<string | number>();
  value: any;
  onChange: any = () => {};
  onTouched: any = () => {};
  constructor() { }
  writeValue(obj: any): void {
    this.value = obj;
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  onChangeValue(value: any): void {
    if (value !== this.value) {
      this.writeValue(value);
      this.onChange(value);
    }
    this.valueChange.emit(this.value);
  }
}
