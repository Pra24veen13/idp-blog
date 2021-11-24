import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [ { path: '', loadChildren: () => import('./pages/home/home.module').then(m => m.HomeModule) },
 { path: 'blog', loadChildren: () => import('./pages/blog/blog.module').then(m => m.BlogModule) },
  { path: 'readmore', loadChildren: () => import('./pages/blog-details/blog-details.module').then(m => m.BlogDetailsModule) },
 { path: 'form', loadChildren: () => import('./pages/form/form.module').then(m => m.FormModule) }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
