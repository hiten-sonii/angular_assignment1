import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FilterComponent } from '../filter/filter.component';
import { ProductListComponent } from '../product-list/product-list.component';

const routes: Routes = [
  { path: 'all', component: ProductListComponent },
  { path: 'filter', component: FilterComponent },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
