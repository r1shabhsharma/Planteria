import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './pages/cart/cart.component';
import { CollectionPageComponent } from './pages/collection-page/collection-page.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { ItemPageComponent } from './pages/item-page/item-page.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot([
    { path: '', component: HomePageComponent },
    { path: 'collection', component: CollectionPageComponent },
    { path: 'collection/item', component: ItemPageComponent },
    { path: 'login', component: LoginPageComponent },
    { path: 'cart', component: CartComponent },
    { path: '**', component: HomePageComponent },
  ])],
  exports: [RouterModule]
})
export class AppRoutingModule { }
