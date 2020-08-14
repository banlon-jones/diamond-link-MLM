import { Component, OnInit } from '@angular/core';
import {DepartmentService} from './department.service';
import {NgbModal, NgbModalConfig} from "@ng-bootstrap/ng-bootstrap";
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-department',
  templateUrl: './department.component.html',
  styleUrls: ['./department.component.scss']
})
export class DepartmentComponent implements OnInit {
  departments;
  department;
  createDepForm;
  editDepartmentForm
  constructor(
    private modal: NgbModal,
    private modalConfig: NgbModalConfig,
    private departmentService: DepartmentService
  ) { }

  ngOnInit() {
    this.modalConfig.backdrop = 'static';
    this.modalConfig.keyboard = false;
    this.getDepartments();
    this.createDepForm = new FormGroup({
      name: new FormControl('', Validators.required),
      status: new FormControl(true, Validators.required)
    });
  }
  open(content) {
    this.modal.open(content);
  }
  openEditModel(editContent) {
    this.modal.open(editContent);
  }
  getDepartments() {
    return this.departmentService.listDepartments().subscribe(
      (response: any) => {
       this.departments = response.data;
      },
      (error) => {
        console.log(error.message);
      }
    );
  }
  getDepartment(id: number) {
    this.department = this.departments.find(department => department.id === id);
    this.editDepartmentForm = new FormGroup({
      id: new FormControl(this.department.id, Validators.required),
      name: new FormControl(this.department.name, Validators.required),
    });
  }
  updateDepartment() {
    this.departmentService.updateDepartment(this.editDepartmentForm.value).subscribe(
      (response: any) => {
        // success
        this.getDepartments();
      },
      (error) => {
        console.log(error.message);
      }
    );
  }
  addDepartment() {
      this.departmentService.createDepartment(this.createDepForm.value).subscribe(
        (response: any) => {
          // success
          this.getDepartments();
        },
        (error) => {
          console.log(error.message);
        }
      );
  }
}
