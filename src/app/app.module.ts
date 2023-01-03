import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { CreatePatrolComponent } from './create-patrol/create-patrol.component';
import { PatrolDetailsComponent } from './patrol-details/patrol-details.component';
import { PatrolListComponent } from './patrol-list/patrol-list.component';
import { UpdatePatrolComponent } from './update-patrol/update-patrol.component';
import { CreateVehicleComponent } from './create-vehicle/create-vehicle.component';
import { VehicleDetailsComponent } from './vehicle-details/vehicle-details.component';
import { VehicleListComponent } from './vehicle-list/vehicle-list.component';
import { UpdateVehicleComponent } from './update-vehicle/update-vehicle.component';
import { CreatePoliceStationComponent } from './create-policeStation/create-policeStation.component';
import { PoliceStationDetailsComponent } from './policeStation-details/policeStation-details.component';
import { PoliceStationListComponent } from './policeStation-list/policeStation-list.component';
import { UpdatePoliceStationComponent } from './update-policeStation/update-policeStation.component';
@NgModule({
  declarations: [
    AppComponent,
    CreatePatrolComponent,
    PatrolDetailsComponent,
    PatrolListComponent,
    UpdatePatrolComponent,
    CreateVehicleComponent,
    VehicleDetailsComponent,
    VehicleListComponent,
    UpdateVehicleComponent,
    CreatePoliceStationComponent,
    PoliceStationDetailsComponent,
    PoliceStationListComponent,
    UpdatePoliceStationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
