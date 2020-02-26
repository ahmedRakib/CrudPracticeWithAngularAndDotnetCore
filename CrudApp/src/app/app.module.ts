import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule , ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { EmployeeListComponent } from './student-list/employee-list.component';
import { HttpClientModule } from '@angular/common/http';
import { EmployeeSaveComponent } from './employee-save/employee-save.component';


const appRoutes: Routes = [
  { path: 'student-list',component: EmployeeListComponent}, 
  { path: 'employee-create',component: EmployeeSaveComponent}, 
  
  ];
@NgModule({
  declarations: [
    AppComponent,
    EmployeeListComponent,
    EmployeeSaveComponent,

  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes),
    ReactiveFormsModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
