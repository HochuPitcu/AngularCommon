import { Component, OnInit } from '@angular/core';
import {SharedService} from 'src/app/shared.service';

@Component({
  selector: 'app-show-emp',
  templateUrl: './show-emp.component.html',
  styleUrls: ['./show-emp.component.css']
})
export class ShowEmpComponent implements OnInit {

  constructor(private service:SharedService) { }

  EmployeeList:any=[];

  ModalTitle:string;
  ActivateAddEditEmpComp:boolean=false;
  emp:any;

  EmployeeDepartmentFilter:string="";
  EmployeeFullNameFilter:string="";
  EmployeeBirthFilter="";
  EmployeeJoinedFilter="";
  EmployeeSalaryFilter="";

  EmployeeListWithoutFilter:any=[];

  ngOnInit(): void {
    this.refreshEmpList();
  }

  addClick(){
    this.emp={
      EmployeeId:0,
      Department:"",
      FullName:"",
      DateOfBirth:"",
      DateOfJoining:"",
      Salary:""
    }
    this.ModalTitle="Добавить сотрудника";
    this.ActivateAddEditEmpComp=true;

  }

  editClick(item){
    console.log(item);
    this.emp=item;
    this.ModalTitle="Отредактировать сотрудника";
    this.ActivateAddEditEmpComp=true;
  }


  delClick(item){
    
    this.emp=item;
    this.ModalTitle="Удалить сотрудника";
    this.ActivateAddEditEmpComp=true;
  
}
  deleteClick(item){
    
      this.service.deleteEmployee(item.EmployeeId).subscribe(data=>{
        
        this.refreshEmpList();
      })
    
  }

  closeClick(){
    this.ActivateAddEditEmpComp=false;
    this.refreshEmpList();
  }


  refreshEmpList(){
    this.service.getEmpList().subscribe(data=>{
      this.EmployeeList=data;
      this.EmployeeListWithoutFilter=data;
    });
  }
  FilteFunc(){
    var EmployeeFullNameFilter = this.EmployeeFullNameFilter;
    var EmployeeDepartmentFilter = this.EmployeeDepartmentFilter;
    var EmployeeBirthFilter = this.EmployeeBirthFilter;
    var EmployeeJoinedFilter = this.EmployeeJoinedFilter;
    var EmployeeSalaryFilter = this.EmployeeSalaryFilter;

    this.EmployeeList = this.EmployeeListWithoutFilter.filter(function (el){
      return el.FullName.toString().toLowerCase().includes(
        EmployeeFullNameFilter.toString().toLowerCase()
      )&&
      el.Department.toString().toLowerCase().includes(
        EmployeeDepartmentFilter.toString().toLowerCase()
      )&&
      el.DateOfBirth.toString().toLowerCase().includes(
        EmployeeBirthFilter.toString().toLowerCase()
      )&&
      el.DateOfJoining.toString().toLowerCase().includes(
        EmployeeJoinedFilter.toString().toLowerCase()
      )&&
      el.Salary.toString().toLowerCase().includes(
        EmployeeSalaryFilter.toString().toLowerCase()
      )
    });
  }

  sortResult(prop,asc){
    this.EmployeeList = this.EmployeeListWithoutFilter.sort(function(a,b){
      if(asc){
        return (a[prop]>b[prop])?1 : ((a[prop]<b[prop])?-1:0);
      }
      else{
        return (b[prop]>a[prop])?1 : ((b[prop]<a[prop])?-1:0);
      }
    })
  }
}

