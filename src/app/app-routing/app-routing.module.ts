import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NotFoundComponent } from '../modules/shared/not-found/components/not-found/not-found.component';
import { ProductListComponent } from '../modules/core/products/components/product-list/product-list.component';

const routes: Routes = [
  {
    path: 'products',
    loadChildren: () =>
      import('../modules/core/products/product.module').then(
        (m) => m.ProductModule
      ),
  },
  {
    path: 'filtered',
    component: ProductListComponent,
  },
  {
    path: '**',
    component: NotFoundComponent,
  },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
