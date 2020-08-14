import { Injectable } from '@angular/core';

export interface Country {
  id: number;
  name: string;
}
export interface DownLink {
  linkToDownLines: string;
}
export interface CustomerDetails {
  address: string;
  birthDate: Date;
  city: string;
  country: Country;
  countryId: number;
  firstName: string;
  lastName: string;
  gender: string;
  nationality: string;
  phone: string;
  email: string;
  registrationCode: string;
  state: string;
  zipCode: string;
}
export interface DownLine {
  downLineDetails: CustomerDetails;
  downLink: DownLink;
}
export interface Branch {
  customerDetails: CustomerDetails;
  downlines: DownLine[];
}
export interface GeneologyBranch {
  node: CustomerDetails;
  branches: DownLine[];
}
@Injectable({
  providedIn: 'root'
})

export class DownlinesService {

  constructor() { }
}
