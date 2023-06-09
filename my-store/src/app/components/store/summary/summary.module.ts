import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SummaryComponent } from './summary.component';
import { RouterModule, Routes } from '@angular/router';
import { ButtonModule } from '../../common/button/button.module';

const routes: Routes = [
  {
    path: '',
    component: SummaryComponent
  }
];

@NgModule({
  declarations: [
    SummaryComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ButtonModule
  ]
})
export class SummaryModule { }
