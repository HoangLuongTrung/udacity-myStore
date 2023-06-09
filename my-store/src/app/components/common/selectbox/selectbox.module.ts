import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SelectboxComponent } from './selectbox.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    SelectboxComponent
  ],
  imports: [
    CommonModule,
    FormsModule      
  ],
  exports: [
    SelectboxComponent
  ]
})
export class SelectboxModule { }
