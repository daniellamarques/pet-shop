import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TerceiroPage } from './terceiro.page';

const routes: Routes = [
  {
    path: '',
    component: TerceiroPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TerceiroPageRoutingModule {}
