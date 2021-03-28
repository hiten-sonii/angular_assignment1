import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductListComponent } from '../modules/core/products/components/product-list/product-list.component';

const routes: Routes = [
  { path: 'all', component: ProductListComponent },
  {
    path: 'filtered',
    component: ProductListComponent,
  },
  { path: '**', redirectTo: 'all', pathMatch: 'full' },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
