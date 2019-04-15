import { NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatInputModule } from '@angular/material/input';

@NgModule({
  declarations: [],
  imports: [
    MatCardModule,
    MatButtonModule,
    MatExpansionModule,
    MatInputModule
  ],
  
  exports: [
    MatCardModule,
    MatButtonModule,
    MatExpansionModule,
    MatInputModule,
  ]
  
})
export class MaterialModule { }
