import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PatrolDetailsComponent } from './patrol-details/patrol-details.component';
import { CreatePatrolComponent } from './create-patrol/create-patrol.component';
import { PatrolListComponent } from './patrol-list/patrol-list.component';
import { UpdatePatrolComponent } from './update-patrol/update-patrol.component';
import { VehicleDetailsComponent } from './vehicle-details/vehicle-details.component';
import { CreateVehicleComponent } from './create-vehicle/create-vehicle.component';
import { VehicleListComponent } from './vehicle-list/vehicle-list.component';
import { UpdateVehicleComponent } from './update-vehicle/update-vehicle.component';
import { PoliceStationDetailsComponent } from './policeStation-details/policeStation-details.component';
import { CreatePoliceStationComponent } from './create-policeStation/create-policeStation.component';
import { PoliceStationListComponent } from './policeStation-list/policeStation-list.component';
import { UpdatePoliceStationComponent } from './update-policeStation/update-policeStation.component';
import { CreateMapComponent } from './map-component/create-map.component';
import { LoginComponent } from './login-component/login.component';
import { CreateSingleMapComponent } from './create-single-map-component/create-single-map.component';

const routes: Routes = [
  //{ path: '', redirectTo: 'patrol', pathMatch: 'full' },
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'patrols', component: PatrolListComponent },
  { path: 'add', component: CreatePatrolComponent },
  { path: 'update/:id', component: UpdatePatrolComponent },
  { path: 'details/:id', component: PatrolDetailsComponent },
 // { path: 'vehicles/:id', component: VehicleListComponent },
  { path: 'vehicles', component: VehicleListComponent },
  { path: 'addVehicle', component: CreateVehicleComponent },
  { path: 'updateVehicle/:id', component: UpdateVehicleComponent },
  { path: 'vehicleDetails/:id', component: VehicleDetailsComponent },
  { path: 'policeStations', component: PoliceStationListComponent },
  { path: 'addPoliceStation', component: CreatePoliceStationComponent },
  { path: 'updatePoliceStation/:id', component: UpdatePoliceStationComponent },
  { path: 'policeStationDetails/:id', component: PoliceStationDetailsComponent },
  { path: 'maps', component: CreateMapComponent },
  { path: 'map', component: CreateSingleMapComponent },
  { path: 'login', component: LoginComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


// Generated modifications for app/app-routing.module.ts
// Verify if the route for 'create-patrol' is correctly configured.
// Ensure lazy loading optimizations if necessary.


// Generated code snippets:
// Line 10: Ensure that the 'create-patrol' route exists and maps correctly.
{ path: 'create-patrol', component: CreatePatrolComponent }

