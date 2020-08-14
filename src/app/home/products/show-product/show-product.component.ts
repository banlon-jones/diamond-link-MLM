import { Component, OnInit } from '@angular/core';
import {ProductsService} from "../../manage-products/products.service";
import {ActivatedRoute, Params} from '@angular/router';
import {CartService} from "../../cart/cart.service";
import {productImageBaseUrl} from "../../../services/app-http/backendUrlStrings";

@Component({
  selector: 'app-show-product',
  templateUrl: './show-product.component.html',
  styleUrls: ['./show-product.component.scss']
})
export class ShowProductComponent implements OnInit {

  productId;
  currentRate;
  product;
  images;
  quantity = 1;
  base_url = productImageBaseUrl.BASE_URI;
  constructor(
    private productService: ProductsService,
    private cartService: CartService,
    private route: ActivatedRoute,
  ) { }

  ngOnInit() {
    // get signup parameter
    this.route.params.subscribe(
      (params: Params) => {
        this.productId = params['id'];
      }
    );
    this.getProduct(this.productId);
  }
  getProduct(productId: number) {
    this.productService.getProduct(productId).subscribe(
      (data: any) => {
        this.product = data;
        this.images = data.images;
        console.log(data);
      },
      (error) => {
        console.log(error);
      }
    );
  }
  addProductToCart(productId, quantity) {
    console.log([productId, quantity]);
    this.cartService.addItemToCart([{
      productId: productId,
      quantity: quantity
    }]).subscribe(
        (response: any) => {
          // alert(response.message);
          this.cartService.getCartItems().subscribe(
            (respon: any) => {
              this.cartService.updateCartCount(respon.length);
            }
          );
          console.log(response);
        },
        (error) => {
          console.log(error.message);
        });
  }
}
