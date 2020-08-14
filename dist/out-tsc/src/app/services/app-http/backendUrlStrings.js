export var BASE_URI = 'https://mungwincore-customer.herokuapp.com';
// export const BASE_URI = 'http://localhost:9090';
export var loginAndRegisterUrls = {
    LOGIN: '/api/public/login',
    REGISTER: '/api/public/register',
    TOKEN_REFRESH: '/api/public/token/refresh',
    SET_RESET_PASSWORD: '/api/public/user/password/set',
    RESET_PASSWORD: '/api/public/user/password/reset'
};
export var customerUrls = {
    _AUTH_CUSTOMER: '/api/protected/customer/authenticated',
    _CUSTOMER_TREE: '/api/protected/customer/tree',
    _CUSTOMER_UNREGISTERD_DOWNLINES: '/api/protected/customer/downLines/unregistered',
    _REGISTER_DOWNLINE: '/api/protected/customer/registerDownLine',
    _PROFILE_UPLOAD: '/api/protected/customer/uploads/avatar',
    _PROFILE_UPDATE: '/api/protected/customer/details/update',
    _CHANGE_PASSWORD: '/api/protected/customer/password/change'
};
export var utilitiesUrls = {
    COUNTRIES: '/api/public/countries',
    PACKAGES: '/api/public/packages',
    CURRENCIES: '/api/public/resources/currencies'
};
export var packageUrl = {
    GET_PACKAGES: '/api/protected/business/packages/',
    CREATE_PACKAGE: '/api/protected/business/packages/create',
};
export var categoriesUrl = {
    GET_CATEGORIES: '/api/public/business/product/categories',
    CREATE_CATEGORY: '/api/protected/business/product/category/create'
};
export var departmentUrl = {
    GET_DEPARTMENT: '/api/public/business/product/departments',
    CREATE_DEPARTMENT: '/api/protected/business/product/department/create'
};
export var productUrl = {
    GET_PRODUCTS: '/api/public/business/product/list',
    CREATE_PRODUCT: '/api/protected/business/product/create',
    SEARCH_PRODUCT: '/api/public/business/product/search'
};
export var paymentsUrls = {
    GET_PENDING_ORDERS: '/api/protected/business/product/orders/pending',
    GET_REGISTRATION_ORDERS: '/api/protected/business/product/orders/registration',
    GET_PAYMENT_CHANNELS: '/api/protected/paycash/payment/channels',
    PAY_WITH_PAYCASH: '/api/protected/paycash/pay-cash/pay',
    PAY_WITH_VOUCHER: '/api/protected/paycash/voucher/pay',
    CREATE_VOUCHER: '/api/protected/paycash/voucher/create',
    CREATE_MAKER_ACCOUNT: '/api/protected/customer/voucher/maker/create',
    PAY_WITH_MTN_MOMO_BASIC: '/api/protected/paycash/mtn/momo/basic/pay'
};
export var statementUrls = {
    GET_ACCOUNT_BALANCE: '/api/protected/paycash/account/balance',
    ACCOUNT_LISTING: '/api/protected/paycash/account/listing',
    STATEMENT: 'api/protected/paycash/statement/get',
    GET_PAYMENT_HISTORY: '/api/protected/paycash/payment/history',
    GET_TRANSACTION_BALANCE: '/transaction/balance',
};
export var cartUrls = {
    GETCARTITEMS: '/api/protected/business/product/cart/load',
    UPDATECART: '/api/protected/business/product/cart/items/update',
    ADDTOCART: '/api/protected/business/product/cart/items/add',
    CLEARCART: '/api/protected/business/product/cart/clear',
    CHECKOUT: '/api/protected/business/product/cart/checkout',
    REMOVE: '/api/protected/business/product/cart/items/remove',
};
//# sourceMappingURL=backendUrlStrings.js.map