/**
 * SINGLE SOURCE OF TRUTH FOR BUSINESS INFORMATION.
 *
 * Everything here is either a temporary concept value or `null`.
 * `null` means "not provided by the client yet" — the matching UI is NOT rendered,
 * so the page never shows invented addresses, phone numbers, hours, prices or offers.
 * Fill these in with verified information from the shop owner before publishing.
 */
export interface OpeningHours {
  /** e.g. "السبت – الخميس" */
  days: string;
  /** e.g. "٧:٠٠ ص – ١٢:٠٠ م" */
  time: string;
}

export interface BusinessInfo {
  /** Temporary concept identity. Replace with the real shop name and logo. */
  name: { ar: string; en: string };
  /** True while the page shows concept content; drives the visible concept notices. */
  isConcept: boolean;
  address: string | null;
  mapUrl: string | null;
  phone: string | null;
  /** International format without "+" or spaces, e.g. "9647XXXXXXXXX". */
  whatsapp: string | null;
  orderUrl: string | null;
  instagram: string | null;
  hours: OpeningHours[] | null;
}

export const business: BusinessInfo = {
  name: { ar: 'بخار وصقيع', en: 'STEAM & FROST' },
  isConcept: true,
  address: null,
  mapUrl: null,
  phone: null,
  whatsapp: null,
  orderUrl: null,
  instagram: null,
  hours: null
};

export function hasContactInfo(b: BusinessInfo): boolean {
  return Boolean(b.address || b.mapUrl || b.phone || b.whatsapp || b.orderUrl || b.instagram || b.hours?.length);
}

/** Studio credit shown at the very end of the page. `url: null` renders the name without a link. */
export const poweredBy: { name: string; url: string | null } = {
  name: 'iq group',
  url: null
};
