import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import {MatInputModule} from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';



@NgModule({
  declarations: [],
  imports: [
    MatCardModule,
    MatButtonModule,
    MatInputModule,
    MatIconModule,
    CommonModule
  ], exports: [
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatInputModule,
    MatDividerModule
  ]
})
export class CustomMaterialModule {

}
