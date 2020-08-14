import { Injectable } from '@angular/core';
interface CartItem {
  product: any;
  quantity: number;
}
interface CartItemDTO {
  productId: number;
  quantity: number;
}
@Injectable({
  providedIn: 'root'
})
export class RegCartServiceService {
  cartItems: Array<CartItem> = [];
  cartItemsRecycleBin: Array<CartItem> = [];
  cartDTO: Array<CartItemDTO> = [];
  cartDTOBin: Array<CartItemDTO> = [];
  constructor() { }

  addToRegistrationCart(product: any, quantity: number) {
    // add if not exist
    // update if exists
    const found = this.cartItems.find((cartItem) => cartItem.product.id === product.id);
    console.log('found..:');
    console.log(found);
    if (found === undefined) {
      this.cartItems.push({product: product, quantity: quantity});
      this.cartDTO.push({productId: product.id, quantity: quantity});
    } else {
      this.updateCartItem(found.product, found.quantity + quantity);
    }
    console.log(this.cartItems);
    console.log(this.cartDTO);
  }
  removeFromRegistrationCart(productId: number) {
    const remove = this.cartItems.findIndex((cartItem) => cartItem.product.id === productId);
    const rem = this.cartDTO.findIndex((cartDTO) => cartDTO.productId === productId);
    console.log('removing...');
    console.log(remove);
    if (remove != null && rem != null) {
      this.cartItems.splice(remove, 1);
      this.cartDTO.splice(rem, 1);
    }
  }
  clearRegistrationCart() {
    this.cartItemsRecycleBin = this.cartItems;
    this.cartDTOBin = this.cartDTO;
    this.cartDTO = null;
    this.cartItems = null;
  }
  updateCartItem(product: any, quantity: number) {
    const update = this.cartItems.findIndex((cartItem) => cartItem.product.id === product.id);
    const up = this.cartDTO.findIndex((cartDTO) => cartDTO.productId === product.id);
    console.log('updating...');
    console.log(update);
    if (update != null && up != null) {
      this.cartItems.splice(update, 1);
      this.cartDTO.splice(up, 1);
      this.cartItems.push({product: product, quantity: quantity});
      this.cartDTO.push({productId: product.id, quantity: quantity});
    }
  }
  getRegistrationCartItems(): Array<CartItem> {
    return this.cartItems;
  }
  getRegistrationCartDTO() {
    return this.cartDTO;
  }
  restoreCart() {
    this.cartItems = this.cartItemsRecycleBin;
    this.cartDTO = this.cartDTOBin;
  }
}
