import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { EmployeeService } from 'src/services/employee.service';

@Component({
  selector: 'app-employee-save',
  templateUrl: './employee-save.component.html',
  styleUrls: ['./employee-save.component.css']
})
export class EmployeeSaveComponent implements OnInit {

  constructor(private employeeService : EmployeeService) { 
   

  }

  employeeCreateForm = new FormGroup(
  {
    name : new FormControl(''),
  });

  ngOnInit() {
    
  }

  save()
  {
    const employee = {
      Name: this.employeeCreateForm.controls.name.value,
    }

    this.employeeService.save(employee).subscribe(
      response =>{
        if(response.status ==200)
        {
          console.log ("Inside Response");
        }
      
      });
    // this.employeeService.save(employee).subscribe(response =>{

    // });

  }



}
