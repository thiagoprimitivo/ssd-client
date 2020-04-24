import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SystemSearchComponent } from './system-search/system-search.component';
import { SystemAddComponent } from './system-add/system-add.component';
import { SystemEditComponent } from './system-edit/system-edit.component';


const routes: Routes = [
  {
    path: 'system/search',
    component: SystemSearchComponent
  },
  {
    path: 'system/create',
    component: SystemAddComponent
  },
  {
    path: 'edit/:id',
    component: SystemEditComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
