import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ParentTreeComponent } from './parent-tree/parent-tree.component';

const routes: Routes = [
  {
    path: '',
    component: ParentTreeComponent,
    children: [
      {
        path: '',
        loadChildren: () =>
          import('./parent-tree/parent-tree.module').then(
            (m) => m.ParentTreeModule
          )
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
