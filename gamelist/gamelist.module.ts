import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GamelistPageRoutingModule } from './gamelist-routing.module';

import { GamelistPage } from './gamelist.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GamelistPageRoutingModule
  ],
  declarations: [GamelistPage]
})
export class GamelistPageModule {}
