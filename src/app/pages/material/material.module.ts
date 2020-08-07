import { NgModule } from '@angular/core';

import { NbButtonModule, NbCardModule } from '@nebular/theme';
import { MaterialRoutingModule, routedComponents } from './material-routing.module';
import { MaterialComponent } from './material.component';


import { MatSliderModule } from '@angular/material/slider';
import { UserTableComponent } from './user-table/user-table.component';

import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [routedComponents],
  imports: [
    MaterialRoutingModule,
    NbButtonModule, NbCardModule,
    MatSliderModule,
    MatButtonModule,

    
  ]
})
export class MaterialModule { }
