import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { ProductsService } from "./products.service";
import { NgbModal, NgbModalConfig } from "@ng-bootstrap/ng-bootstrap";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { CategoryService } from "../categories/category.service";
// import {MessageService} from 'primeng';
import { ErrorBagService } from '../../services/errors/error-bag.service';
var ManageProductsComponent = /** @class */ (function () {
    function ManageProductsComponent(productService, modal, modalConfig, categoryService, 
    // private messageService: MessageService,
    errorBag) {
        this.productService = productService;
        this.modal = modal;
        this.modalConfig = modalConfig;
        this.categoryService = categoryService;
        this.errorBag = errorBag;
        this.progressBar = false;
    }
    ManageProductsComponent.prototype.ngOnInit = function () {
        this.modalConfig.backdrop = 'static';
        this.modalConfig.keyboard = false;
        this.getProducts();
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
            categoryId: new FormControl('', Validators.required),
            measurementUnitId: new FormControl(14, Validators.required),
            isCombo: new FormControl('', Validators.required),
            isRegistrationProduct: new FormControl('', Validators.required),
            isInStock: new FormControl('', Validators.required),
        });
    };
    ManageProductsComponent.prototype.open = function (content) {
        this.modal.open(content);
    };
    // display edit modal
    ManageProductsComponent.prototype.openEditModel = function (editContent) {
        this.modal.open(editContent);
    };
    ManageProductsComponent.prototype.openImageModel = function (productImage, productId) {
        this.modal.open(productImage);
        this.product = this.products.find(function (product) { return product.id === productId; });
    };
    ManageProductsComponent.prototype.detectFiles = function (event) {
        this.selectedFiles = event.target.files;
    };
    ManageProductsComponent.prototype.getProducts = function () {
        var _this = this;
        // this.products = this.productService.getAllProducts();
        this.productService.getAllProducts().subscribe(function (response) {
            _this.products = response.data;
            console.log(_this.products);
        });
    };
    ManageProductsComponent.prototype.addProduct = function () {
        var _this = this;
        this.productService.addProduct(this.addProductForm.value).subscribe(function (response) {
            console.log(response);
            _this.getProducts();
        }, function (error) {
            console.log(error.message);
        });
        console.log(this.addProductForm.value);
    };
    ManageProductsComponent.prototype.getProductCategories = function () {
        var _this = this;
        this.categoryService.getCategories().subscribe(function (response) {
            _this.categories = response.data;
            console.log(_this.categories);
        });
    };
    // Get product by Id
    ManageProductsComponent.prototype.getProduct = function (id) {
        this.product = this.products.find(function (product) { return product.id === id; });
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
            categoryId: new FormControl(this.product.category.id, Validators.required),
            measurementUnitId: new FormControl('', Validators.required),
            isCombo: new FormControl(this.product.isCombo, Validators.required),
            isRegistrationProduct: new FormControl(this.product.isRegistrationProduct, Validators.required),
            isInStock: new FormControl(this.product.isInStock, Validators.required),
        });
    };
    ManageProductsComponent.prototype.updateProduct = function () {
        var _this = this;
        this.productService.updateProduct(this.editProductForm.value).subscribe(function (response) {
            // success
            console.log(response);
            _this.getProducts();
        }, function (error) {
            console.log(error.message);
        });
    };
    ManageProductsComponent.prototype.productimage = function (product_id) {
        this.uploadImage = new FormGroup({
            placeholder: new FormControl('', Validators.required),
            number: new FormControl('', Validators.required),
            image: new FormControl('', Validators.required),
        });
    };
    ManageProductsComponent.prototype.uploadProductImage = function () {
        var _this = this;
        if (this.uploadImage.invalid) {
            return;
        }
        else {
            var file = this.selectedFiles.item(0);
            console.log(file);
            var formData = new FormData();
            formData.append('image', file);
            formData.append('number', this.uploadImage.value.number);
            formData.append('placeHolder', this.uploadImage.value.placeholder);
            this.progressBar = true;
            this.productService.uploadProductImage(formData, this.product.id).
                subscribe(function (response) {
                console.log(response);
                _this.progressBar = false;
                _this.selectedFiles = null;
                _this.toastSingle({ message: 'Product Picture Uploaded successfully!', severity: 'success', summary: 'success' });
            }, function (error) {
                console.log(error);
                _this.progressBar = false;
                _this.toastSingle({ message: 'Oops Sorry! ' + _this.errorBag.getHttpError(error), severity: 'error', summary: 'error' });
            });
        }
    };
    ManageProductsComponent.prototype.toastSingle = function (toast) {
        // this.messageService.add({severity: toast.severity, summary: 'DLC ' +
        //     toast.summary + ' Message', detail: toast.message});
    };
    ManageProductsComponent = tslib_1.__decorate([
        Component({
            selector: 'app-manage-products',
            templateUrl: './manage-products.component.html',
            styleUrls: ['./manage-products.component.scss']
        }),
        tslib_1.__metadata("design:paramtypes", [ProductsService,
            NgbModal,
            NgbModalConfig,
            CategoryService,
            ErrorBagService])
    ], ManageProductsComponent);
    return ManageProductsComponent;
}());
export { ManageProductsComponent };
//# sourceMappingURL=manage-products.component.js.map