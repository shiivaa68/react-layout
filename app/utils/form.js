export const arabicIndic066 = '٠١٢٣٤٥٦٧٨٩';
export const arabicIndic06F = '۰۱۲۳۴۵۶۷۸۹';

export const arabicIndic066Pattern = /[٠-٩]/g;
export const arabicIndic06FPattern = /[۰-۹]/g;

export const faDigit2En = (someString = '') =>
  someString
    .replace(arabicIndic066Pattern, d => arabicIndic066.indexOf(d))
    .replace(arabicIndic06FPattern, d => arabicIndic06F.indexOf(d));

export const isAllEnDigit = (digitStr = '') => /^\d*$/.test(digitStr);

export const onlyDigits = (digitStr = '') =>
  digitStr.replace(/\D/g, '').replace(/^0+/g, '');