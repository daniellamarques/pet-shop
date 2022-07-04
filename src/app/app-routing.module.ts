import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'segunda',
    loadChildren: () => import('./segunda/segunda.module').then( m => m.SegundaPageModule)
  },
  {
    path: 'terceiro',
    loadChildren: () => import('./terceiro/terceiro.module').then( m => m.TerceiroPageModule)
  },
  {
    path: 'cat',
    loadChildren: () => import('./cat/cat.module').then( m => m.CatPageModule)
  },
  {
    path: 'imagem',
    loadChildren: () => import('./imagem/imagem.module').then( m => m.ImagemPageModule)
  },
  

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
