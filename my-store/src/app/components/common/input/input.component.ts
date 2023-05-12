import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent implements OnInit {
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
