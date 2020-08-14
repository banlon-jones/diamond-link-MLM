import { Component, OnInit } from '@angular/core';
import {CustomerService} from '../services/customer.service';
import {MessageService} from 'primeng/api';

@Component({
  selector: 'app-manage-roles',
  templateUrl: './manage-roles.component.html',
  styleUrls: ['./manage-roles.component.scss'],
  providers: [MessageService]
})
export class ManageRolesComponent implements OnInit {
roles: Array<string> = [];
foundCustomer: {id: number, name: string, uuid: string} = {id: 0, name: null, uuid: null};
found = false;
registrationCode = '';
roleForAction = '';
loading = false;
  constructor(private customerService: CustomerService, private messageService: MessageService) { }

  ngOnInit() {
    this.getRoles();
  }
  getRoles() {
    this.customerService.getAllRoles().subscribe(
      (response: any) => {
        this.roles = response;
      }, (error) => {
        console.log(error);
      }
    );
  }
  searchCustomer() {
    this.loading = true;
    this.customerService.searchCustomer(this.registrationCode).subscribe(
      (response: any) => {
        this.foundCustomer = response;
        this.registrationCode = '';
        this.found = true;
        this.loading = false;
      }, (error) => {
        console.log(error);
        this.toastSingle({message: 'Failure. Cause: ' + error.error.message , severity: 'error', summary: 'error'});
        this.loading = false;
      }
    );
  }
  addRole() {
    this.loading = true;
    this.customerService.addCustomerRoles([this.roleForAction], this.foundCustomer.uuid).subscribe(
      (response: any) => {
        console.log(response);
        this.found = false;
        this.loading = false;
        this.toastSingle({message: 'Role added', severity: 'success', summary: 'success'});
      }, (error) => {
        console.log(error);
        this.loading = false;
        this.toastSingle({message: 'Failed to add Role. Cause: ' + error.error.message , severity: 'error', summary: 'error'});
      }
    );
  }
  removeRole() {
    this.loading = true;
    this.customerService.removeCustomerRoles([this.roleForAction], this.foundCustomer.uuid).subscribe(
      (response: any) => {
        console.log(response);
        this.found = false;
        this.loading = false;
        this.toastSingle({message: 'Role removed', severity: 'success', summary: 'success'});
      }, (error) => {
        console.log(error);
        this.loading = false;
        this.toastSingle({message: 'Failed to remove Role. Cause: ' + error.error.message , severity: 'error', summary: 'error'});
      }
    );
  }

  toastSingle(toast: {message: string, severity: string, summary: string}) {
    this.messageService.add({severity: toast.severity, summary: 'DLC ' +
    toast.summary + ' Message', detail: toast.message});
  }

}
