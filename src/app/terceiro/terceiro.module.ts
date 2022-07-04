import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TerceiroPageRoutingModule } from './terceiro-routing.module';

import { TerceiroPage } from './terceiro.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TerceiroPageRoutingModule
  ],
  declarations: [TerceiroPage]
})
export class TerceiroPageModule {}
