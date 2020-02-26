import { Component, OnInit } from '@angular/core';
import { EmployeeService } from 'src/services/employee.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  public employeeList : [];
  constructor(private employeeService : EmployeeService ) { }

  ngOnInit() {
console.log("Hi");
   
 this.getALlCompany();


    }


    getALlCompany() {
      this.employeeService.getEmployees().subscribe((data) =>
     
      this.employeeList = data
     
      )
    }
  
    
  }

  
/**
 *  
 */
// interface Employee {  
//   id: number; 
//   name : string 
// }