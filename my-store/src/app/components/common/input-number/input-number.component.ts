import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-input-number',
  templateUrl: './input-number.component.html',
  styleUrls: ['./input-number.component.scss']
})
export class InputNumberComponent implements OnInit {
  @Input() type = "text";
  @Input() data: string | number;
  @Input() placeholder = "Please input value";
  @Input() maxlength = 3;
  @Output() valueChange = new EventEmitter<string | number>();
  constructor() { }
  ngOnInit(): void {}
  onChange() {
    this.valueChange.emit(this.data);
  }
}
