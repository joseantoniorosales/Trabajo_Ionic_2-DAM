import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GamelistPage } from './gamelist.page';

const routes: Routes = [
  {
    path: '',
    component: GamelistPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GamelistPageRoutingModule {}
