import { Component, OnInit } from '@angular/core';
import {ProductsService} from "./products.service";
import {NgbModal, NgbModalConfig} from "@ng-bootstrap/ng-bootstrap";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {CategoryService} from "../categories/category.service";
// import {MessageService} from 'primeng';
import {ErrorBagService} from '../../services/errors/error-bag.service';

@Component({
  selector: 'app-manage-products',
  templateUrl: './manage-products.component.html',
  styleUrls: ['./manage-products.component.scss']
})
export class ManageProductsComponent implements OnInit {
  selectedFiles: FileList;
  progressBar = false;
  addProductForm;
  editProductForm;
  units;
  uploadImage;
  categories;
  constructor(
    private productService: ProductsService,
    private modal: NgbModal,
    private modalConfig: NgbModalConfig,
    private categoryService: CategoryService,
    // private messageService: MessageService,
    private errorBag: ErrorBagService
  ) { }
  products;
  product;
  ngOnInit() {
    this.modalConfig.backdrop = 'static';
    this.modalConfig.keyboard = false;
    this.getProducts();
    this.getMeasurementUnits();
    this.getProductCategories();
    this.addProductForm = new FormGroup({
      name: new FormControl('', Validators.required),
      description: new FormControl('', Validators.required),
      code: new FormControl('', Validators.required),
      price: new FormControl('', Validators.required),
      tags: new FormControl('', Validators.required),
      status: new FormControl(true, Validators.required),
      weight: new FormControl('', Validators.required),
      volume: new FormControl('', Validators.required),
      categoryId : new FormControl('', Validators.required),
      measurementUnitId : new FormControl('', Validators.required),
      isCombo: new FormControl('', Validators.required),
      isRegistrationProduct: new FormControl('', Validators.required),
      isInStock: new FormControl('', Validators.required),
    });
  }
  open(content) {
    this.modal.open(content);
  }
  // display edit modal
  openEditModel(editContent) {
    this.modal.open(editContent);
  }
  openImageModel(productImage, productId) {
    this.modal.open(productImage);
    this.product = this.products.find(product => product.id === productId);
  }
  detectFiles(event) {
    this.selectedFiles = event.target.files;
  }
  getMeasurementUnits() {
    this.productService.getMeasurementUnit().subscribe(
      (response: any) => {
        this.units = response;
        console.log(response);
      },
      (error) => {
        console.log(error);
      }
    );
  }
  getProducts() {
    // this.products = this.productService.getAllProducts();
    this.productService.getAllProducts().subscribe(
      (response: any) => {
        this.products = response.data;
        console.log(this.products);
      }
    );
  }
  addProduct() {
    this.productService.addProduct(this.addProductForm.value).subscribe(
      (response: Response) => {
        console.log(response);
        this.getProducts();
      },
      (error) => {
        console.log(error.message);
      }
    );
    console.log(this.addProductForm.value);
  }
  getProductCategories() {
    this.categoryService.getCategories().subscribe(
      (response: any) => {
        this.categories = response.data;
        console.log(this.categories);
      }
    );
  }
// Get product by Id
  getProduct(id: number) {
    this.product = this.products.find(product => product.id === id);
    this.editProductForm = new FormGroup({
      id: new FormControl(this.product.id, Validators.required),
      name: new FormControl(this.product.name, Validators.required),
      description: new FormControl(this.product.description, Validators.required),
      code: new FormControl(this.product.code, Validators.required),
      price: new FormControl(this.product.price, Validators.required),
      tags: new FormControl(this.product.tags, Validators.required),
      status: new FormControl(true, Validators.required),
      weight: new FormControl(this.product.weight, Validators.required),
      volume: new FormControl(this.product.volume, Validators.required),
      categoryId : new FormControl(this.product.category.id, Validators.required),
      measurementUnitId : new FormControl(this.product.measurementUnit.id, Validators.required),
      isCombo: new FormControl(this.product.isCombo, Validators.required),
      isRegistrationProduct: new FormControl(this.product.isRegistrationProduct, Validators.required),
      isInStock: new FormControl(this.product.isInStock, Validators.required),
    });
  }

  updateProduct() {
    this.productService.updateProduct(this.editProductForm.value).subscribe(
      (response: any) => {
        // success
        console.log(response);
        this.getProducts();
      },
      (error) => {
        console.log(error.message);
      }
    );
  }
  productimage(product_id: number) {
    this.uploadImage = new FormGroup({
      placeholder: new FormControl('', Validators.required),
      number: new FormControl('', Validators.required),
      image: new FormControl('', Validators.required),
    });
  }
  uploadProductImage() {
    if (this.uploadImage.invalid) {
      return;
    } else {
      const file = this.selectedFiles.item(0);
      console.log(file);
      const formData = new FormData();
      formData.append('image', file);
      formData.append('number', this.uploadImage.value.number);
      formData.append('placeHolder', this.uploadImage.value.placeholder);
      this.progressBar = true;
      this.productService.uploadProductImage(formData, this.product.id).
      subscribe(
        (response: any) => {
          console.log(response);
          this.progressBar = false;
          this.selectedFiles = null;
          this.toastSingle({message: 'Product Picture Uploaded successfully!', severity: 'success', summary: 'success'});
        },
        (error) => {
          console.log(error);
          this.progressBar = false;
          this.toastSingle({message: 'Oops Sorry! ' + this.errorBag.getHttpError(error), severity: 'error', summary: 'error'});
        }
      );
    }

  }

  toastSingle(toast: {message: string, severity: string, summary: string}) {
    // this.messageService.add({severity: toast.severity, summary: 'DLC ' +
    //     toast.summary + ' Message', detail: toast.message});
  }

}
