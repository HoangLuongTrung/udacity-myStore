import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DetailComponent } from './detail.component';
import { RouterModule, Routes } from '@angular/router';
import { SelectboxModule } from '../../common/selectbox/selectbox.module';
import { ButtonModule } from '../../common/button/button.module';

const routes: Routes = [
  {
    path: '',
    component: DetailComponent
  }
];

@NgModule({
  declarations: [
    DetailComponent
  ],
  imports: [
    CommonModule,
    ButtonModule,
    SelectboxModule,
    RouterModule.forChild(routes)
  ]
})
export class DetailModule { }
