import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponentComponent } from './home-component/home-component.component';
import { CreateComponent } from './create/create.component';

import { DetailsComponent } from './details/details.component';
import { EditComponent } from './edit/edit.component';

const routes: Routes = [ 
  { path: '', component: HomeComponentComponent },
  { path: 'create', component: CreateComponent },
  { path: 'angshowdetail/:id', component: DetailsComponent },
  { path: 'angupdate/:id', component: EditComponent }
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
