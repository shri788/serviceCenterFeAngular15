import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { scmRoutes } from './scm.routing';
import { RecieveVehicleComponent } from './service/recieve-vehicle/recieve-vehicle.component';
import { CustomerProfileComponent } from './service/customer-profile/customer-profile.component';
import { MatCardModule } from '@angular/material/card';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import  { FlexLayoutModule } from '@angular/flex-layout';
import {MatFormFieldModule} from '@angular/material/form-field'; 
import {TextFieldModule} from '@angular/cdk/text-field'; 
import { MatInputModule } from '@angular/material/input';
import { SrkLoaderComponent } from './srk-loader/srk-loader.component';
import { HttpClientModule } from '@angular/common/http';
import {MatSelectModule} from '@angular/material/select';
import { CustomerService } from './services/customer.service';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatMomentDateModule } from "@angular/material-moment-adapter";
import {MatButtonModule} from '@angular/material/button';
import { VehicleListComponent } from './service/vehicle-list/vehicle-list.component';
import {MatTableModule} from '@angular/material/table'; 
import {MatIconModule} from '@angular/material/icon'; 

@NgModule({
  declarations: [
    RecieveVehicleComponent,
    CustomerProfileComponent,
    SrkLoaderComponent,
    VehicleListComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(scmRoutes),
    MatCardModule,
    FormsModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    MatFormFieldModule,
    TextFieldModule,
    MatInputModule,
    HttpClientModule,
    MatSelectModule,
    MatDatepickerModule,
    MatMomentDateModule,
    MatButtonModule,
    MatTableModule,
    MatIconModule
  ],
  providers: [CustomerService]
})
export class ScmModule { }
