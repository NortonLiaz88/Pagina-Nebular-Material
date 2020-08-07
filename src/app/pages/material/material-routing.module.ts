import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MaterialComponent } from './material.component';
import { UserTableComponent } from './user-table/user-table.component';


const routes: Routes = [
  
  {path: '',
   component: MaterialComponent,
   children: [
     {
       path: 'hub',
       component: UserTableComponent
     }
   ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MaterialRoutingModule { }


export const routedComponents = [
  MaterialComponent,
  UserTableComponent
];
