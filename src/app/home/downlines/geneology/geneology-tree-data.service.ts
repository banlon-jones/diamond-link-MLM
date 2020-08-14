import { Injectable, Output, EventEmitter } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {customerUrls} from '../../../services/app-http/backendUrlStrings';

@Injectable({
  providedIn: 'root'
})
export class GeneologyTreeDataService {
  @Output() onAddNode: EventEmitter<null> = new EventEmitter<null>();
  constructor(private http: HttpClient) { }

  generateData() {
    return [{
      label: 'CM002',
      expanded: true,
      children: [
        {
          label: 'CM003',
          expanded: true,
          children: [
            {label: 'CM004'},
            {label: 'CM005'}
          ]
        },
        {label: 'CM006'},
        {
          label: 'CM007',
          expanded: true,
          children: [
            {label: 'CM008'},
            {label: 'CM009'},
            {label: 'CM010'}
          ]
        }
      ]
    }];
  }
  generateAdvancedData() {
    const demo = [
      {
        label: 'CM002',
        expanded: true,
        type: 'department',
        styleClass: 'org-dept',
        data: {id: '1', name: 'Alex Konradi', avatar: 'face1.jpg'},
        children: [
          {
            upLineRegistrationCode: 'CM002',
            type: 'new',
          },
          {
            label: 'CM003',
            expanded: true,
            type: 'department',
            styleClass: 'org-dept',
            data: {id: '2', name: 'Sara Schmidt', avatar: 'face2.jpg'},
            children: [
              {
                upLineRegistrationCode: 'CM003',
                type: 'new',
              },
              {
                label: 'CM004',
                styleClass: 'org-role',
                children: [{
                  upLineRegistrationCode: 'CM004',
                  type: 'new',
                }]
              },
              {
                label: 'CM005',
                styleClass: 'org-role',
                children: [{
                  upLineRegistrationCode: 'CM005',
                  type: 'new',
                }]
              },
              {
                upLineRegistrationCode: 'CM005',
                type: 'new',
              }
            ]
          },
          {
            label: 'CM006',
            type: 'department',
            styleClass: 'org-dept',
            data: {id: '3', name: 'Veronica Schiefel', avatar: 'face4.jpg'},
            children: [{
              upLineRegistrationCode: 'CM006',
              type: 'new',
            }]
          },
          {
            label: 'CM007',
            expanded: true,
            type: 'department',
            styleClass: 'org-dept',
            data: {id: '4', name: 'Max Mustermann', avatar: 'face14.jpg'},
            children: [
              {
                upLineRegistrationCode: 'CM007',
                type: 'new',
              },
              {
                label: 'CM008',
                styleClass: 'org-role',
                children: [{
                  upLineRegistrationCode: 'CM008',
                  type: 'new',
                }]
              },
              {
                label: 'CM009',
                styleClass: 'org-role',
                children: [{
                  upLineRegistrationCode: 'CM009',
                  type: 'new',
                }]
              },
              {
                label: 'CM010',
                styleClass: 'org-role',
                children: [
                  {
                    upLineRegistrationCode: 'CM0100',
                    type: 'new',
                  }
                ]
              },
              {
                upLineRegistrationCode: 'CM009',
                type: 'new',
              }
            ]
          },
          {
            upLineRegistrationCode: 'CM002',
            type: 'new',
          }
        ]
      }
    ];
    return this.http.get(customerUrls._CUSTOMER_TREE);
  }
  generate3LevelData(customerId: number, placementPath: Array<number>) {
    return this.http.post(customerUrls._CUSTOMER_TREE3 + '?customerId=' + customerId, placementPath);
  }

  getReferrals() {
    const demo = [
      {id: 11, registrationCode: 'CM011'},
      {id: 15, registrationCode: 'CM015'},
      {id: 16, registrationCode: 'CM016'},
      {id: 18, registrationCode: 'CM018'}
    ];
    return this.http.get(customerUrls._CUSTOMER_UNREGISTERD_DOWNLINES);
  }
  addDownLine(immediateUpLineId: number, id: number, position: string) {
    return this.http.post(
      customerUrls._REGISTER_DOWNLINE + '?immediateUpLineId=' + immediateUpLineId +
      '&downLineId=' + id
      + '&position=' + position,
      '');
  }
}
