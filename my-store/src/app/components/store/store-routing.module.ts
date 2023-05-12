import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StoreComponent } from './store.component';

const routes: Routes = [

  {
    path: '',
    component: StoreComponent,
    children: [
      {
        path: '', redirectTo: 'list', pathMatch: 'full'
      },
      {
        path: 'list',
        loadChildren: () =>
          import('../store/list/list.module').then(m => m.ListModule)
      },
      {
        path: 'cart',
        loadChildren: () =>
          import('../store/cart/cart.module').then(m => m.CartModule)
      },
      {
        path: 'detail/:id',
        loadChildren: () =>
          import('../store/detail/detail.module').then(m => m.DetailModule)
      },
      {
        path: 'summary',
        loadChildren: () =>
          import('../store/summary/summary.module').then(m => m.SummaryModule)
      },
      {
        path: 'not-found',
        loadChildren: () =>
          import('../store/not-found/not-found.module').then(m => m.NotFoundModule)
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StoreRoutingModule { }