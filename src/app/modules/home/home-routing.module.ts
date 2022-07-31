import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { pathToFileURL } from 'url';
import { DetailComponent } from './detail/detail.component';
import { HomeComponent } from './home.component';
import { SearchComponent } from './search/search.component';


const routes: Routes = [
  {
    path: '', component: HomeComponent,
    children: [
      {
        path: 'detail', component: DetailComponent
      }      
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
