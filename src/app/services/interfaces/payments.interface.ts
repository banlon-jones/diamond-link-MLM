export interface Item {
  description: String;
  quantity: number;
  unitPrice: number;
  total: number;
}
export interface Order {
  /*title: string;*/
  date: Date;
  orderNumber: string;
  /*company: {
    name: string;
    email: string;
  };*/
  customer: {
    registrationCode: string;
    name: string;
    email: string;
    phone: string;
    address: string;
  };
  items: Array<Item>;
  total: number;
  taxRate: number;
  notes: Array<string>;
}
export interface Invoice {
  title: string;
  date: Date;
  invoiceNumber: string;
  company: {
    name: string;
    email: string;
  };
  customer: {
    registrationCode: string;
    name: string;
    email: string;
    phone: string;
    address: string;
  };
  items: Array<Item>;
  taxRate: number;
  total: number;
  notes: Array<string>;
}
