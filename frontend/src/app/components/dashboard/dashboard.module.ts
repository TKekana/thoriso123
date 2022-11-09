import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { RouterModule, Routes } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { ViewRecordsComponent } from './view-records/view-records.component';
import { IndividualRecordComponent } from './individual-record/individual-record.component';

const routes: Routes = [
  {path:'dash', component:DashboardComponent, 
  children: [
    {path:'view-records', component:ViewRecordsComponent},
    {path:'single-record', component:IndividualRecordComponent},
    {path:'', redirectTo:'/dash', pathMatch:'full'}
  ]}
];
@NgModule({
  declarations: [
    NavbarComponent,
    DashboardComponent,
    ViewRecordsComponent,
    IndividualRecordComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class DashboardModule { }
