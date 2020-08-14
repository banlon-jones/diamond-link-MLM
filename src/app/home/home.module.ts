import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChangePasswordComponent } from './user/change-password/change-password.component';
import {ProfileComponent} from "./user/profile/profile.component";
import {EditProfileComponent} from "./user/profile/edit-profile/edit-profile.component";
import {DashboardComponent} from "./dashboard/dashboard.component";
import {SidebarComponent} from "./sidebar/sidebar.component";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {HttpClientModule} from "@angular/common/http";
import {NavbarComponent} from "./navbar/navbar.component";
import {FooterComponent} from "./footer/footer.component";
import {RouterModule} from "@angular/router";
import {HomeRoute} from "./home-router";
import { ManagePackagesComponent } from './manage-packages/manage-packages.component';
import {ColumnRackComponent} from "./downlines/columnar/column-rack/column-rack.component";
import {ColumnRowComponent} from "./downlines/columnar/column-row/column-row.component";
import {ColumnTreeComponent} from "./downlines/columnar/column-tree/column-tree.component";
import {PaymentsComponent} from "./payments/payments.component";
import {PaymentDashboardComponent} from "./payments/payment-dashboard/payment-dashboard.component";
import {PaymentOrderComponent} from "./payments/payment-order/payment-order.component";
import {PaymentOrderRowComponent} from "./payments/payment-order-row/payment-order-row.component";
import {HistoryComponent} from "./history/history.component";
import {EditPackageComponent } from './manage-packages/edit-package/edit-package.component';
import { ReferralComponent} from './referral/referral.component';
import { ProductsComponent } from './products/products.component';
import { CategoriesComponent } from './categories/categories.component';
import { ShowProductComponent } from './products/show-product/show-product.component';
import { GeneologyTreeComponent } from './downlines/geneology/geneology-tree/geneology-tree.component';
import {OrganizationChartModule} from 'primeng/organizationchart';
import {ScrollPanelModule} from 'primeng/scrollpanel';
import { AddNodeComponent } from './downlines/geneology/add-node/add-node.component';
import {DialogModule} from 'primeng/dialog';
import {ProgressBarModule} from 'primeng/progressbar';
import {ProgressSpinnerModule} from 'primeng/progressspinner';
import {CarouselModule} from 'primeng/carousel';
import {ToastModule} from 'primeng/toast';
import { DepartmentComponent } from './department/department.component';
import { SidebarLinkComponent } from './sidebar/sidebar-link/sidebar-link.component';
import {SidebarModule} from 'primeng/sidebar';
import { SidebarCollapsibleLinkComponent } from './sidebar/sidebar-link/sidebar-collapsible-link/sidebar-collapsible-link.component';
import { ManageProductsComponent } from './manage-products/manage-products.component';
import { CartComponent } from './cart/cart.component';
import { ProductCatalogueItemComponent } from './products/product-catalogue-item/product-catalogue-item.component';
import { VoucherMakerComponent } from './payments/voucher-maker/voucher-maker.component';
import { BalanceDashboardComponent } from './balance/balance-dashboard/balance-dashboard.component';
import { AccountListingComponent } from './balance/account-listing/account-listing.component';
import { AccountListingRowComponent } from './balance/account-listing-row/account-listing-row.component';
import { HistoryDashboardComponent } from './history/history-dashboard/history-dashboard.component';
import { HistoryListComponent } from './history/history-list/history-list.component';
import { HistoryListRowComponent } from './history/history-list-row/history-list-row.component';
import {CartService} from "./cart/cart.service";
import { CartTableComponent } from './cart/cart-table/cart-table.component';
import { CartTableRowComponent } from './cart/cart-table-row/cart-table-row.component';
import { ManageRolesComponent } from './manage-roles/manage-roles.component';
import { WithdrawalComponent } from './payments/withdrawal/withdrawal.component';
import { ManageTransactionsComponent } from './manage-transactions/manage-transactions.component';
import { OrderDashboardComponent } from './viewOrders/order-dashboard/order-dashboard.component';
import { OrderTableComponent } from './viewOrders/order-table/order-table.component';
import { OrderRowComponent } from './viewOrders/order-row/order-row.component';
import { ShowOrderComponent } from './viewOrders/show-order/show-order.component';

@NgModule({
  providers: [
    CartService,
  ],
  declarations: [
    ChangePasswordComponent,
    ProfileComponent,
    EditProfileComponent,
    DashboardComponent,
    NavbarComponent,
    SidebarComponent,
    FooterComponent,
    ManagePackagesComponent,
    ColumnRackComponent,
    ColumnRowComponent,
    ColumnTreeComponent,
    HistoryComponent,
    ManagePackagesComponent,
    PaymentsComponent,
    PaymentDashboardComponent,
    PaymentOrderComponent,
    PaymentOrderRowComponent,
    EditPackageComponent,
    ReferralComponent,
    ProductsComponent,
    CategoriesComponent,
    ShowProductComponent,
    GeneologyTreeComponent,
    AddNodeComponent,
    DepartmentComponent,
    SidebarLinkComponent,
    SidebarCollapsibleLinkComponent,
    ManageProductsComponent,
    CartComponent,
    ProductCatalogueItemComponent,
    VoucherMakerComponent,
    BalanceDashboardComponent,
    AccountListingComponent,
    AccountListingRowComponent,
    HistoryDashboardComponent,
    HistoryListComponent,
    HistoryListRowComponent,
    CartTableComponent,
    CartTableRowComponent,
    ManageRolesComponent,
    WithdrawalComponent,
    ManageTransactionsComponent,
    OrderDashboardComponent,
    OrderTableComponent,
    OrderRowComponent,
    ShowOrderComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    NgbModule.forRoot(),
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(HomeRoute),
    OrganizationChartModule,
    ScrollPanelModule,
    DialogModule,
    ProgressBarModule,
    ToastModule,
    SidebarModule,
    CarouselModule,
    ProgressSpinnerModule
  ],
  exports: [
    ChangePasswordComponent,
    ProfileComponent,
    EditProfileComponent,
    DashboardComponent,
    NavbarComponent,
    SidebarComponent,
    FooterComponent,
    ManagePackagesComponent,
    ColumnRackComponent,
    ColumnRowComponent,
    ColumnTreeComponent,
    HistoryComponent,
    ManagePackagesComponent,
    PaymentsComponent,
    PaymentDashboardComponent,
    PaymentOrderComponent,
    PaymentOrderRowComponent,
    ReferralComponent,
    EditPackageComponent,
    ProductsComponent,
    CategoriesComponent,
    ShowProductComponent,
  ],
})
export class HomeModule { }
