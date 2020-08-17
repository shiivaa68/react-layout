import { defineMessages } from 'react-intl';

export const scope = 'boilerplate.containers.PackageItem';

export default defineMessages({
    submitOrder: {
    id: `${scope}.submitOrder`,
    defaultMessage: ' پرداخت آنلاین',
  },

  titleOff: {
    id: `${scope}.titleOff`,
    defaultMessage: 'کد تخفیف',
  },

  submitOff: {
    id: `${scope}.submitOff`,
    defaultMessage: '  بررس کد تخفیف',
  },
  pricePackage: {
    id: `${scope}.pricePackage`,
    defaultMessage: 'قیمت:',
  },
  totalPrice: {
    id: `${scope}.totalPrice`,
    defaultMessage: 'جمع تخفیف:',
  },
  tax: {
    id: `${scope}.tax`,
    defaultMessage: ' مالیات بر ارزش افزوده:',
  },
  totalPriceSubmit: {
    id: `${scope}.totalPriceSubmit`,
    defaultMessage: ' مبلغ قابل پرداخت:',
  },
  continueBye: {
    id: `${scope}.continueBye`,
    defaultMessage: ' تکمیل خرید',
  },
  rules:{
    id: `${scope}.rules`,
    defaultMessage: ' با خرید پکیج، شما با شرایط استفاده از سرویس تماشاخونه موافقت می‌کنید!',
  }


}); 