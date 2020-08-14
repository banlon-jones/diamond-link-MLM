// export const BASE_URI = 'https://mungwincore-customer.herokuapp.com';
export const BASE_URI = 'http://localhost:9090';
// export const BASE_URI = 'http://144.217.79.224:9090';
// export const BASE_URI = 'https://diamond-link-conglomerates.com/customer';
export const IMAGE_BASE_URI = 'https://diamond-link-conglomerates.com/dlc/uploads/';
export const loginAndRegisterUrls = {
  LOGIN: '/api/public/login',
  REGISTER: '/api/public/register',
  TOKEN_REFRESH: '/api/public/token/refresh',
  SET_RESET_PASSWORD: '/api/public/user/password/set',
  RESET_PASSWORD: '/api/public/user/password/reset'
};
export const customerUrls = {
  _AUTH_CUSTOMER: '/api/protected/customer/authenticated',
  _CUSTOMER_TREE: '/api/protected/customer/tree',
  _CUSTOMER_TREE3: '/api/protected/customer/tree/3',
  _CUSTOMER_UNREGISTERD_DOWNLINES : '/api/protected/customer/downLines/unregistered',
  _REGISTER_DOWNLINE : '/api/protected/customer/registerDownLine',
  _PROFILE_UPLOAD : '/api/protected/customer/profileUpload',
  _PROFILE_UPDATE: '/api/protected/customer/details/update',
  _CHANGE_PASSWORD: '/api/protected/customer/password/change',
  GET_FIRST_DOWN_LINES: '/api/protected/customer/down_lines',
  CUSTOMER_BASE: '/api/protected/customer',
  SEND_REFERRAL_MAIL: '/api/protected/customer/referral/mail/send',
  SEARCH_CUSTOMER: '/api/protected/customer/search',
  REMOVE_ROLES: '/api/protected/customer/roles/remove',
  ADD_ROLES: '/api/protected/customer/roles/add',
  GET_ROLES: '/api/protected/customer/roles',
  GET_ACCOUNT_SNAPSHOT: '/api/protected/customer/account/snapshot'
};
export const utilitiesUrls = {
  COUNTRIES: '/api/public/countries',
  PACKAGES: '/api/public/packages',
  CURRENCIES: '/api/public/resources/currencies',
  REGISTRATION_PACKAGES: '/api/public/business/product/registration/package'
};
export const packageUrl = {
  GET_PACKAGES: '/api/protected/business/packages/',
  CREATE_PACKAGE: '/api/protected/business/packages/create',
};
export const categoriesUrl = {
  GET_CATEGORIES: '/api/public/business/product/categories',
  CREATE_CATEGORY: '/api/protected/business/product/category/create'
};
export const departmentUrl = {
  GET_DEPARTMENT: '/api/public/business/product/departments',
  CREATE_DEPARTMENT: '/api/protected/business/product/department/create'
};
export const productUrl = {
  GET_PRODUCTS: '/api/public/business/product/list',
  CREATE_PRODUCT: '/api/protected/business/product/create',
  SEARCH_PRODUCT: '/api/public/business/product/search',
  PRODUCT_BASE_PROTECTED: '/api/protected/business/product/'
};
export const paymentsUrls = {
  GET_PENDING_ORDERS: '/api/protected/business/product/orders/pending',
  GET_REGISTRATION_ORDERS: '/api/protected/business/product/orders/registration',
  GET_PAYMENT_CHANNELS: '/api/protected/paycash/payment/channels',
  PAY_WITH_PAYCASH: '/api/protected/paycash/pay-cash/pay',
  PAY_WITH_VOUCHER: '/api/protected/paycash/voucher/pay',
  CREATE_VOUCHER: '/api/protected/paycash/voucher/create',
  CREATE_MAKER_ACCOUNT: '/api/protected/customer/voucher/maker/create',
  PAY_WITH_MTN_MOMO_BASIC: '/api/protected/paycash/mtn/momo/basic/pay'
};
export const transactionUrls = {
  CONFIRM_TRANSACTION: '/api/protected/paycash/transaction/confirm',
  GET_TRANSACTION_DETAILS: '/api/protected/paycash/transaction/details'
};
export const withdrawalUrls = {
  REQUEST_CASH_WITHDRAWAL: '/api/protected/paycash/withdraw/cash'
};
export const statementUrls = {
  GET_ACCOUNT_BALANCE: '/api/protected/paycash/account/balance',
  ACCOUNT_LISTING: '/api/protected/paycash/account/listing',
  STATEMENT: 'api/protected/paycash/statement/get',
  GET_PAYMENT_HISTORY: '/api/protected/paycash/payment/history',
  GET_TRANSACTION_BALANCE: '/transaction/balance',
};
export const cartUrls = {
  GETCARTITEMS: '/api/protected/business/product/cart/load',
  UPDATECART: '/api/protected/business/product/cart/items/update',
  ADDTOCART: '/api/protected/business/product/cart/items/add',
  CLEARCART: '/api/protected/business/product/cart/clear',
  CHECKOUT: '/api/protected/business/product/cart/checkout',
  REMOVE: '/api/protected/business/product/cart/items/remove',
  REGISTRATION_CHECKOUT: '/api/protected/business/product/cart/registration/checkout',
  REGISTRATION_ADD_TO_CART: '/api/protected/business/product/cart/registration/items/add',
};
export const measurementUnit = {
  GET_UNIT: '/api/protected/business/product/measurement/units'
};
export const productImageBaseUrl = {
  BASE_URI: 'https://diamond-link-conglomerates.com/',
};
export const orderUrls = {
  GET_ORDERS_ADMIN: '/api/protected/business/product/orders/admin'
};
