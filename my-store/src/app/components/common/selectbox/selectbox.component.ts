import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Selectbox } from 'src/app/models/product.model';

@Component({
  selector: 'app-selectbox',
  templateUrl: './selectbox.component.html',
  styleUrls: ['./selectbox.component.scss']
})
export class SelectboxComponent {
  @Input() options: Selectbox[] = [];
  @Output() selectItem = new EventEmitter<number>();
  selected = 1;
  constructor() { }

  onChange(value: number) {
    this.selectItem.emit(+value);
  }
}
