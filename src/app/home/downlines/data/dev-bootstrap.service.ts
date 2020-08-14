import { Injectable } from '@angular/core';
import {Branch} from "../../../services/interfaces/downlines.service";
import {CustomerDetails} from "../../../services/interfaces/downlines.service";
import {DownLine} from "../../../services/interfaces/downlines.service";

@Injectable({
  providedIn: 'root'
})
export class DevBootstrapService {
  branch: Branch;
  customerDetails: CustomerDetails;
  constructor() {
    this.customerDetails = {
      address: 'Malingo',
      gender: 'Male',
      email: 'paul@dlc.com',
      phone: '678945621',
      firstName: 'John',
      lastName: 'Paul',
      city: 'Buea',
      state: 'SW',
      nationality: 'Cameroonian',
      country: {
        id: 1,
        name: 'Cameroon'
      },
      countryId: 237,
      birthDate: new Date('1990-27-02'),
      registrationCode: 'CM00123',
      zipCode: '237'
    };
  }
  generate(downLinesCount: number) {
    this.branch = {
      customerDetails: this.customerDetails,
      downlines: this.getDownLines(downLinesCount)
    };
    return this.branch;
  }
  getDownLines(count: number): Array<DownLine> {
    // tslint:disable-next-line: prefer-const
    let downLines: Array<DownLine> = new Array<DownLine>(count);
    for (let i = 1; i <= count; i++) {
      downLines[i - 1] = {
        downLineDetails: {
        address: i % 2 ? 'Malingo' : 'Bonduma',
        gender: i % 2 ? 'Male' : 'Female',
        email: 'paul' + i + '@dlc.com',
        phone: '6785621' + i,
        firstName: i % 2 ? 'John' : 'Andrew',
        lastName: i % 3 ? 'Paul' : 'Collins',
        city: i % 2 ? 'Buea' : 'Douala',
        state: i % 2 ? 'SW' : 'LT',
        nationality: 'Cameroonian',
        country: {
          id: 1,
          name: 'Cameroon'
        },
        countryId: 273,
        birthDate: new Date('1990-27-02'),
        registrationCode: 'CM0012' + i,
        zipCode: '237'
        },
        downLink: {
          linkToDownLines: '/api/customer/' + i + '/down_lines'
        }
      };

    }
    return downLines;
  }
}
