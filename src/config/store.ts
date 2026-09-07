import { StoreConfig } from '../types/store';

export const storeConfig: StoreConfig = {
  storeNameAr: import.meta.env.VITE_STORE_NAME_AR || "متجر شذى للعطور والتجميل",
  storeNameEn: import.meta.env.VITE_STORE_NAME_EN || "Shatha Fragrances & Beauty",
  companyNameAr: import.meta.env.VITE_COMPANY_NAME_AR || "مؤسسة شذى خالد زيني التجارية",
  companyNameEn: import.meta.env.VITE_COMPANY_NAME_EN || "SHATHA KHALID ZAINI Establishment Commercial",
  taglineAr: import.meta.env.VITE_TAGLINE_AR || "عالم من العطور الشرقية والفرنسية الفاخرة ومستحضرات العناية والتجميل",
  taglineEn: import.meta.env.VITE_TAGLINE_EN || "World of Luxury Eastern & French Perfumes and Beauty Care",
  cr: import.meta.env.VITE_COMMERCIAL_REGISTRATION || "7054975896",
  taxNumber: import.meta.env.VITE_TAX_NUMBER || "310549758960003",
  shortAddress: import.meta.env.VITE_NATIONAL_ADDRESS_SHORT || "JHJA7534",
  city: import.meta.env.VITE_CITY || "جدة",
  district: import.meta.env.VITE_DISTRICT || "حي اليسر",
  fullAddress: import.meta.env.VITE_FULL_ADDRESS || "المملكة العربية السعودية - جدة - حي اليسر - الرمز البريدي JHJA7534",
  phone: import.meta.env.VITE_CONTACT_PHONE || "0558904378",
  whatsapp: import.meta.env.VITE_CONTACT_WHATSAPP || "966558904378",
  email: import.meta.env.VITE_CONTACT_EMAIL || "shatha@gmail.com",
  supportHours: import.meta.env.VITE_SUPPORT_HOURS || "السبت - الخميس: 9:00 ص - 10:00 م",
  currency: import.meta.env.VITE_CURRENCY || "SAR",
  currencySymbol: import.meta.env.VITE_CURRENCY_SYMBOL || "ر.س",
  freeShippingThreshold: Number(import.meta.env.VITE_FREE_SHIPPING_THRESHOLD) || 200,
  shippingCost: Number(import.meta.env.VITE_SHIPPING_COST) || 25,
};
