// please register new routes here as you define them
export const permissions = new Map ([
  ['DASHBOARD', '/dashboard'],
  ['PROFILE', '/profile'],
  ['CHANGE_PASSWORD', '/change_password'],
  ['MANAGE_PACKAGES', '/manage_packages'],
  ['BALANCE', '/balance'],
  ['HISTORY', '/history'],
  ['PAYMENTS', '/payments'],
  ['DOWN_LINE_COLUMNS', '/down-line-columns'],
  ['DOWN_LINE_GENEALOGY', '/down-line-genealogy'],
  ['REFERRAL', '/referral'],
  ['PRODUCTS', '/products'],
  ['CATEGORIES', '/categories'],
  ['PRODUCT=ID', '/product/:id'],
  ['PAYMENT_VOUCHER', '/payment-vouchers/maker'],
  ['MANAGE_PRODUCTS', '/manage_products'],
  ['MANAGE_ROLES', '/manage_roles'],
  ['WITHDRAWAL', '/withdrawal'],
  ['MANAGE_TRANSACTIONS', '/manage_transactions'],
  ['ORDERS', '/orders'],
  ['ORDER=ID', '/order/:id']
]);
