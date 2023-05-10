import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent {
  @Input() type = "text";
  @Input() placeholder = "Please input value";
  @Output() valueChange = new EventEmitter<string | number>();
  value = '';
  constructor() { }
  onChange() {
    this.valueChange.emit(this.value);
  }
}
