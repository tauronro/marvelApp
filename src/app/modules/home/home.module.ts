import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { SearchComponent } from './search/search.component';
import { DetailComponent } from './detail/detail.component';
import { ListComponent } from './list/list.component';


@NgModule({
  declarations: [HomeComponent, SearchComponent, DetailComponent, ListComponent],
  imports: [
    CommonModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
