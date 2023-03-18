import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { scmRoutes } from './scm.routing';
import { RecieveVehicleComponent } from './service/recieve-vehicle/recieve-vehicle.component';
import { CustomerProfileComponent } from './service/customer-profile/customer-profile.component';
import { MatCardModule } from '@angular/material/card';
import { ReactiveFormsModule } from '@angular/forms';
import  { FlexLayoutModule } from '@angular/flex-layout';
import {MatFormFieldModule} from '@angular/material/form-field'; 
import {TextFieldModule} from '@angular/cdk/text-field'; 
import { MatInputModule } from '@angular/material/input';

@NgModule({
  declarations: [
    RecieveVehicleComponent,
    CustomerProfileComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(scmRoutes),
    MatCardModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    MatFormFieldModule,
    TextFieldModule,
    MatInputModule
  ]
})
export class ScmModule { }
