import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ParentTreeComponent } from './parent-tree.component';
import { ChildFormComponent } from './child-form/child-form.component';
import { MaterialModule } from '../material/material.module';


@NgModule({
  declarations: [
    ParentTreeComponent,
    ChildFormComponent,
  ],
  imports: [
    CommonModule,
    MaterialModule,
  ]
})
export class ParentTreeModule { }
