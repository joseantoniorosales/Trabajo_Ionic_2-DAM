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
    path: 'booklist',
    loadChildren: () => import('./booklist/booklist.module').then( m => m.BooklistPageModule)
  },
  {
    path: 'gamelist',
    loadChildren: () => import('./gamelist/gamelist.module').then( m => m.GamelistPageModule)
  },
  {
    path: 'serieslist',
    loadChildren: () => import('./serieslist/serieslist.module').then( m => m.SerieslistPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
