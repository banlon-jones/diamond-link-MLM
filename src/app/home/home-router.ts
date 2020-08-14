import { Routes } from "@angular/router";
import {HomeComponent} from "./home.component";
import {DashboardComponent} from "./dashboard/dashboard.component";
import {ProfileComponent} from "./user/profile/profile.component";
import {ChangePasswordComponent} from "./user/change-password/change-password.component";
import { AuthGuard } from "../public/auth.guard";
import { ManagePackagesComponent } from './manage-packages/manage-packages.component';
import {BalanceDashboardComponent} from "./balance/balance-dashboard/balance-dashboard.component";
import {HistoryDashboardComponent} from "./history/history-dashboard/history-dashboard.component";
import {PaymentsComponent} from "./payments/payments.component";
import {ColumnTreeComponent} from "./downlines/columnar/column-tree/column-tree.component";
import {ReferralComponent} from "./referral/referral.component";
import {ProductsComponent} from "./products/products.component";
import {CategoriesComponent} from "./categories/categories.component";
import {ShowProductComponent} from "./products/show-product/show-product.component";
import { GeneologyTreeComponent } from './downlines/geneology/geneology-tree/geneology-tree.component';
import {DepartmentComponent} from "./department/department.component";
import {ManageProductsComponent} from "./manage-products/manage-products.component";
import {CartComponent} from "./cart/cart.component";
import {PaymentDashboardComponent} from './payments/payment-dashboard/payment-dashboard.component';
import {VoucherMakerComponent} from './payments/voucher-maker/voucher-maker.component';
import {PermissionGuard} from '../services/route-guards/permission.guard';
import {ManageRolesComponent} from './manage-roles/manage-roles.component';
import {ManageTransactionsComponent} from './manage-transactions/manage-transactions.component';
import {WithdrawalComponent} from './payments/withdrawal/withdrawal.component';
import {OrderDashboardComponent} from './viewOrders/order-dashboard/order-dashboard.component';

export const HomeRoute: Routes = [

  {
    path: '', component: HomeComponent, canActivate: [AuthGuard], canActivateChild: [AuthGuard],
    children: [
    { path: '', component: DashboardComponent, canActivate: [AuthGuard] },
    { path: 'dashboard', component: DashboardComponent, canActivate: [PermissionGuard], data: {permissions: ['DASHBOARD']}  },
    { path: 'profile', component: ProfileComponent, canActivate: [PermissionGuard], data: {permissions: ['PROFILE']} },
    { path: 'change_password', component: ChangePasswordComponent,
      canActivate: [PermissionGuard], data: {permissions: ['CHANGE_PASSWORD']}},
    { path: 'manage_packages', component: ManagePackagesComponent,
      canActivate: [PermissionGuard], data: {permissions: ['MANAGE_PACKAGES']} },
    { path: 'balance', component: BalanceDashboardComponent, canActivate: [PermissionGuard], data: {permissions: ['BALANCE']} },
    { path: 'history', component: HistoryDashboardComponent, canActivate: [PermissionGuard], data: {permissions: ['HISTORY']}},
    { path: 'payments', component: PaymentsComponent, canActivate: [PermissionGuard], data: {permissions: ['PAYMENTS']} },
    { path: 'down-line-columns', component: ColumnTreeComponent,
      canActivate: [PermissionGuard], data: {permissions: ['DOWN_LINE_COLUMNS']}},
    { path: 'down-line-genealogy', component: GeneologyTreeComponent,
      canActivate: [PermissionGuard], data: {permissions: ['DOWN_LINE_GENEALOGY']}},
    { path: 'referral', component: ReferralComponent, canActivate: [PermissionGuard], data: {permissions: ['REFERRAL']}},
    { path: 'products', component: ProductsComponent, canActivate: [PermissionGuard], data: {permissions: ['PRODUCTS']} },
    { path: 'categories', component: CategoriesComponent, canActivate: [PermissionGuard], data: {permissions: ['CATEGORIES']}},
    { path: 'product/:id', component: ShowProductComponent, canActivate: [PermissionGuard], data: {permissions: ['PRODUCT=ID']}},
    { path: 'departments', component: DepartmentComponent, canActivate: [AuthGuard]},
    { path: 'manage_products', component: ManageProductsComponent,
      canActivate: [PermissionGuard], data: {permissions: ['MANAGE_PRODUCTS']}},
    { path: 'cart', component: CartComponent, canActivate: [PermissionGuard], data: {permissions: ['PRODUCTS']}},
    { path: 'payments/dashboard', component: PaymentDashboardComponent, canActivate: [PermissionGuard], data: {permissions: ['PAYMENTS']}},
    { path: 'payment-vouchers/maker', component: VoucherMakerComponent,
      canActivate: [PermissionGuard], data: {permissions: ['PAYMENT_VOUCHER']}},
    {path: 'manage_roles', component: ManageRolesComponent, canActivate: [PermissionGuard], data: {permissions: ['MANAGE_ROLES']}},
      {path: 'manage_transactions', component: ManageTransactionsComponent, canActivate: [PermissionGuard],
      data: {permissions: ['MANAGE_TRANSACTIONS']}},
      {path: 'withdrawal', component: WithdrawalComponent, canActivate: [PermissionGuard],
      data: {permissions: ['WITHDRAWAL']}},
      {path: 'orders', component: OrderDashboardComponent, canActivate: [PermissionGuard], data: {permissions: ['ORDERS']}}
  ]
  }
];
