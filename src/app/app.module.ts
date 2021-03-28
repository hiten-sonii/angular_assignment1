import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { ProductListComponent } from './modules/core/products/components/product-list/product-list.component';
import { CurrencyPipe } from './pipes/currency.pipe';
import { ReadMoreDirective } from './directives/read-more.directive';
import { FilterComponent } from './filter/filter.component';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { FormsModule } from '@angular/forms';
import { ProductComponent } from './modules/core/products/components/product/product.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    ProductComponent,
    CurrencyPipe,
    ReadMoreDirective,
    FilterComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
