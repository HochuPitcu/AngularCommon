import { Component, OnInit,Input } from '@angular/core';
import {SharedService} from 'src/app/shared.service';

@Component({
  selector: 'app-add-edit-emp',
  templateUrl: './add-edit-emp.component.html',
  styleUrls: ['./add-edit-emp.component.css']
})
export class AddEditEmpComponent implements OnInit {

  constructor(private service:SharedService) { }

  @Input() emp:any;
  EmployeeId:string;
  Department:string;
  FullName:string;
  DateOfBirth:string;
  DateOfJoining:string;
  Salary:string;

  // DepartmentsList:any=[];

  ngOnInit(): void {
    this.loadEmpList();
  }

  loadEmpList(){
    this.EmployeeId=this.emp.EmployeeId;
    this.Department=this.emp.Department;
    this.FullName=this.emp.FullName;
    this.DateOfBirth=this.emp.DateOfBirth;
     this.DateOfJoining=this.emp.DateOfJoining;
    this.Salary=this.emp.Salary;

  }
  // loadDepartmentList(){
  //   this.service.getAllDepartmentNames().subscribe((data:any)=>{
  //     this.DepartmentsList=data;

  //     this.EmployeeId=this.emp.EmployeeId;
  //     this.Department=this.emp.Department;
  //     this.FullName=this.emp.FullName;
  //     this.DateOfBirth=this.emp.DateOfBirth;
  //     this.DateOfJoining=this.emp.DateOfJoining;
  //     this.Salary=this.emp.Salary;
  //   });
  // }

  addEmployee(){
    var val = {EmployeeId:this.EmployeeId,
      Department:this.Department,
      FullName:this.FullName,
      DateOfBirth:this.DateOfBirth,
      DateOfJoining:this.DateOfJoining,
      Salary:this.Salary,};
      
      this.service.addEmployee(val).subscribe(res=>{
        
      });

    // this.service.addEmployee(val).subscribe(res=>{
    //   alert(res.toString());
    // });
  }

  updateEmployee(){
    var val = {EmployeeId:this.EmployeeId,
      Department:this.Department,
      FullName:this.FullName,
      DateOfBirth:this.DateOfBirth,
      DateOfJoining:this.DateOfJoining,
      Salary:this.Salary};

    this.service.updateEmployee(val).subscribe(res=>{
    
    });
  }

}

