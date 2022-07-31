import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: 'characters',
    loadChildren: () => import('./modules/home/home.module').then(m => m.HomeModule)
  },

  //ruta 404
  { path: '**', redirectTo: 'characters' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
