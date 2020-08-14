import { Component, OnInit } from '@angular/core';
import { PackageService } from './package.service';
import { NgbModal, NgbModalConfig } from "@ng-bootstrap/ng-bootstrap";
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-manage-packages',
  templateUrl: './manage-packages.component.html',
  styleUrls: ['./manage-packages.component.scss'],
  // NgbModal, NgbModalConfig to component providers
  providers: [NgbModalConfig, NgbModal]
})
export class ManagePackagesComponent implements OnInit {
  packages;
  package;
  createPackageForm;
  editPackageForm;

  constructor( private packageservice: PackageService,
               private modal: NgbModal,
               private modalConfig: NgbModalConfig
              ) { }

  ngOnInit() {
    //
    this.getPackages();
    // customize default values of modals used by this component tree
    this.modalConfig.backdrop = 'static';
    this.modalConfig.keyboard = false;
    // package creation form
    this.createPackageForm = new FormGroup({
      name: new FormControl('', Validators.required),
      description: new FormControl('', Validators.required),
      registrationPoints: new FormControl('', Validators.required),
      qualificationPoints: new FormControl('', Validators.required),
      directReferralPercentage: new FormControl('', Validators.required)
    });
  }
  // display create package modal
  open(content) {
    this.modal.open(content);
  }
  // display edit modal
  openEditModel(editContent) {
    this.modal.open(editContent);
  }
  getPackages() {
    this.packageservice.getAllPackages().subscribe(
      (data: any) => {
        console.log(data.data);
        this.packages = data.data;
      },
      (error) => {
        console.log(error);
      }
    );
  }
  // create package
  onCreate() {
    this.packageservice.createPackage(this.createPackageForm.value).subscribe(
      (response: Response) => {
        console.log(response);
        this.getPackages();
      },
    (error) => {
        console.log(error);
    }
    );
  }
  // Get package by Id
  getPackage(id: number) {
    this.package = this.packages.find(pack => pack.id === id);
    this.editPackageForm = new FormGroup({
      id: new FormControl(this.package.id, Validators.required),
      name: new FormControl(this.package.name, Validators.required),
      description: new FormControl(this.package.description, Validators.required),
      registrationPoints: new FormControl(this.package.registrationPoints, Validators.required),
      qualificationPoints: new FormControl(this.package.qualificationPoints, Validators.required),
      directReferralPercentage: new FormControl(this.package.directReferralPercentage, Validators.required)
    });
  }

  updatePackage() {
    this.packageservice.updatePackage(this.editPackageForm.value).subscribe(
      (response: any) => {
        // success
        console.log(response);
        this.getPackages();
      },
      (error) => {
        console.log(error.message);
      }
    );
  }


}
