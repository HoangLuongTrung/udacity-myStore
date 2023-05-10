import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Selectbox } from 'src/app/models/product.model';

@Component({
  selector: 'app-selectbox',
  templateUrl: './selectbox.component.html',
  styleUrls: ['./selectbox.component.scss']
})
export class SelectboxComponent {
  @Input() options: Selectbox[] = [];
  @Output() change = new EventEmitter<Number>();
  constructor() { }

  onChange(event: any) {
    this.change.emit(event.target.value)
  }
}
