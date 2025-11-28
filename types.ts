export interface ServiceItem {
  title: string;
  description: string;
  action: 'quote' | 'availability';
}

export interface NavLink {
  label: string;
  path: string;
}

export const PHONE_NUMBER = "(919) 555-1234";
export const PHONE_HREF = "tel:+19195551234";
export const SMS_HREF = "sms:+19195551234";