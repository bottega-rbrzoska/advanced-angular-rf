import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './main/home/home.component';
import { ContactComponent } from './main/contact/contact.component';
import { CustomPreloadService } from './core/custom-preload.service';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'products', loadChildren: () => import('./products/products.module').then(m => m.ProductsModule), data: { preload: true}},
  { path: 'twitter', loadChildren: () => import('./twitter/twitter.module').then(m => m.TwitterModule), data: { preload: false}}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    preloadingStrategy: CustomPreloadService
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
