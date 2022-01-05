import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListasAnimaisComponent } from './listas-animais/listas-animais.component';

const routes: Routes = [
  {
    path: '',
    component: ListasAnimaisComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AnimaisRoutingModule { }
