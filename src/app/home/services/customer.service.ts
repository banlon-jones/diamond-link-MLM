import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {customerUrls, transactionUrls, withdrawalUrls, paymentsUrls} from '../../services/app-http/backendUrlStrings';
import {permissions} from '../../services/app-http/frontendRouteDefinitions';
import {AuthserviceService} from '../../public/authservice.service';

export interface Permission {
  id: number; name: string; uri: string;
  icon: string; collapsible: boolean; collapseTo: string; displayed: boolean;
}
export interface CollapsiblePermission {
  label: string;
  type: string;
  icon: string;
  collapsible: boolean;
  permissions: Array<Permission>;
}
export interface PermissionGroup {
  collapsible: Array<CollapsiblePermission>;
  notCollapsible: Array<Permission>;
}
interface EmailAddress {
  name: string;
  email: string;
}
@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  constructor(private http: HttpClient, private authService: AuthserviceService) { }
  updateProfile(profile: any) {
    return this.http.post(customerUrls._PROFILE_UPDATE, profile);
  }
  changePassword(passwordObj: any) {
    return this.http.post(customerUrls._CHANGE_PASSWORD, passwordObj);
  }
  sendReferralMails(addresses: Array<EmailAddress>, referralUrl: string) {
    return this.http.post(customerUrls.SEND_REFERRAL_MAIL, {emailAddresses: addresses, referralUrl: referralUrl});
  }
  searchCustomer(registrationCode: string) {
    return this.http.get(customerUrls.SEARCH_CUSTOMER + '?registrationCode=' + registrationCode);
  }
  getAllRoles() {
    return this.http.get(customerUrls.GET_ROLES);
  }
  addCustomerRoles(roleName: Array<string>, uuid: string) {
    return this.http.post(customerUrls.ADD_ROLES, {roleName: roleName, uuid: uuid});
  }
  removeCustomerRoles(roleName: Array<string>, uuid: string) {
    return this.http.post(customerUrls.REMOVE_ROLES, {roleName: roleName, uuid: uuid});
  }
  getTransactionDetails(transactionCode: string) {
    return this.http.post(transactionUrls.GET_TRANSACTION_DETAILS, {transactionCode: transactionCode});
  }
  confirmTransaction(confirm: boolean, transactionCode: string, comment: string = 'Transaction management') {
    return this.http.post(transactionUrls.CONFIRM_TRANSACTION,
      {confirm: confirm, transactionCode: transactionCode, comment: comment});
  }
  requestWithDrawalForCash(amount: number, password: string, currency: string = 'PCH') {
    return this.http.post(withdrawalUrls.REQUEST_CASH_WITHDRAWAL,
      {amount: amount, password: password, currency: currency});
  }
  getAccountSnapshot() {
  return this.http.get(customerUrls.GET_ACCOUNT_SNAPSHOT);
  }
  storeAccountSnapshot(snapshot: any) {
    localStorage.setItem('accountSnapshot', JSON.stringify(snapshot));
  }
  retrieveAccountSanpshot() {
    return JSON.parse(localStorage.getItem('accountSnapshot'));
  }
  setCustomerDetails(details: any) {
    localStorage.setItem('customerDetails', JSON.stringify(details));
  }
  loadCustomerDetails() {
    return JSON.parse(this.authService.retrieveFromLocalStorage('customerDetails'));
  }
  getDetailsRefreshedState() {
    return this.authService.getDetialsState();
  }
  setDetailsRefeshedState(state: boolean) {
    this.authService.setDetailsState(state);
  }
  getRegistrationOrders() {
    return this.http.get(paymentsUrls.GET_REGISTRATION_ORDERS);
  }
  getCustomerPermissionRoutes() {
    const customerEncodedPermissions = this.loadCustomerDetails().permissions;
    const customerPermissionGroup: PermissionGroup = {collapsible: [], notCollapsible: []};
    const collapseTo: Array<string> = [];
    for (const cp of customerEncodedPermissions) {
      // check if permission is registered in the frontend
        if (permissions.has(atob(cp.uri).toString())) {
          // check if permission is collapsible
          if (cp.collapsible) {
            // check if permission.collapseTo is in collapseTo array
            if (collapseTo.find(c => c === cp.collapseTo) !== undefined) {
              console.log('found in collapseTo array');
              const collapsiblePermission = customerPermissionGroup.collapsible.find(colP => colP.label === cp.collapseTo);
              if (collapsiblePermission !== undefined) {
                collapsiblePermission.permissions.push({
                  id: cp.id, name: cp.name, uri: permissions.get(atob(cp.uri).toString()),
                  icon: cp.icon, collapsible: cp.collapsible, collapseTo: cp.collapseTo, displayed: cp.displayed
                });
              }
            } else {
              // add it to collapseTo array
              collapseTo.push(cp.collapseTo);
              // create new CollapsiblePermission
              const collapsiblePermission: CollapsiblePermission = {
                label: cp.collapseTo,
                type: 'dropdown',
                icon: cp.icon,
                collapsible: true,
                permissions: [{
                  id: cp.id, name: cp.name, uri: permissions.get(atob(cp.uri).toString()),
                  icon: cp.icon, collapsible: cp.collapsible, collapseTo: cp.collapseTo, displayed: cp.displayed
                }]
              };
              // add to permission group
              customerPermissionGroup.collapsible.push(collapsiblePermission);
            }
          } else {
            customerPermissionGroup.notCollapsible.push({
              id: cp.id, name: cp.name, uri: permissions.get(atob(cp.uri).toString()),
              icon: cp.icon, collapsible: cp.collapsible, collapseTo: cp.collapseTo, displayed: cp.displayed
            });
          }
        }
    }
    console.log(customerPermissionGroup);
    console.log(collapseTo);
    this.authService.setDetailsState(false);
    return customerPermissionGroup;
  }
  getCustomerPermissionList(): Array<string> {
    const customerEncodedPermissions = this.loadCustomerDetails().permissions;
    const permissionList: Array<string> = [];
    for (const cp of customerEncodedPermissions) {
      // check if permission is registered in the frontend
      if (permissions.has(atob(cp.uri).toString())) {
        // check if permission is collapsible
        permissionList.push((atob(cp.uri).toString()));
      }
    }
    return permissionList;
  }
}
