import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { SearchComponent } from './search/search.component';
import { DetailComponent } from './detail/detail.component';
import { ListComponent } from './list/list.component';
import { CustomMaterialModule } from 'src/app/custom-material/custom-material/custom-material.module';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [HomeComponent, SearchComponent, DetailComponent, ListComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    CustomMaterialModule,
    ReactiveFormsModule
  ]
})
export class HomeModule { }
