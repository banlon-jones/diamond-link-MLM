import { Component, OnInit } from '@angular/core';
import {CategoryService} from "./category.service";
import { NgbModal, NgbModalConfig } from "@ng-bootstrap/ng-bootstrap";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {DepartmentService} from "../department/department.service";

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent implements OnInit {
  categories;
  category;
  addCategoryForm;
  editCategoryForm;
  departments;
  constructor(private categoryService: CategoryService,
              private modal: NgbModal,
              private modalConfig: NgbModalConfig,
              private departmentService: DepartmentService
              ) { }

  ngOnInit() {
    this.getCategories();
    // customize default values of modals used by this component tree
    this.modalConfig.backdrop = 'static';
    this.modalConfig.keyboard = false;
    this.getCategories();
    //
    this.getDepartments();

    this.addCategoryForm = new FormGroup({
      name: new FormControl('', Validators.required),
      departmentId: new FormControl('', Validators.required),
      status: new FormControl(true, Validators.required),
    });
  }
  getCategories() {
    this.categoryService.getCategories().subscribe(
      (categories: any) => {
        this.categories = categories.data;
      },
      (error) => {
        console.log(error);
      }
    );
  }
  getDepartments() {
    return this.departmentService.listDepartments().subscribe(
      (response: any) => {
        this.departments = response.data;
      }
    );
  }
  open(content) {
    this.modal.open(content);
  }
  openEditModel(editContent) {
    this.modal.open(editContent);
  }
  addCategory() {
    this.categoryService.addCategory(this.addCategoryForm.value).subscribe(
      (response: any) => {
        this.getCategories();
      }
    );
  }
  //
  getCategory(id: number) {
    this.category = this.categories.find(category => category.id === id);
    this.editCategoryForm = new FormGroup({
      id: new FormControl(this.category.id, Validators.required),
      name: new FormControl(this.category.name, Validators.required),
      departmentId: new FormControl(this.category.department.id, Validators.required)
    })
    //console.log(this.category);
  }
  updateCategory() {
    this.categoryService.updateCategory(this.editCategoryForm.value).subscribe(
      (response: any) => {
        // success
        this.getCategories();
      }
    );
  }

}
