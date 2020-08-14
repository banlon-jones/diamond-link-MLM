import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class historyService {

  constructor() { }
historys = [
  {
    order: 'Pack 1',
    description: ' Logitech Mouse ',
    price: 300,
    benefits: 'Wireless Mouse',
    sales: 25,
    company: 'Electronics',
    address: 'Buea'
  },
  {
    order: 'Pack 2',
    description: ' Bleu Necklace ',
    price: 20000,
    benefits: 'Beautiful armenia Blue necklace',
    sales: 25,
    company: 'Jewelry',
    address: 'Yaounde'
  },
  {
    order: 'Pack 1',
    description: ' LED TV ',
    price: 20000,
    benefits: 'High resolution Television',
    sales: 25,
    company: 'Electronics',
    address: 'Douala'
  }
];

gethistory(id: number) {
  return this.historys[id];
}
getAllhistorys() {
  return this.historys;
}
createhistory(order: string, description: string, amount: number, benefits: string, company: string, address: string) {
  this.historys.push(
    {order: order, description: description, price: amount, benefits : benefits, sales: 0 , company: company , address: address}
    );
}
}
