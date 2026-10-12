/**
 * CONCEPT PHOTOGRAPHY — replace with the shop's own photos before publication.
 *
 * Every image below is a free (non-Unsplash+) photo published under the Unsplash License
 * (https://unsplash.com/license): commercial use allowed, attribution not required but
 * given anyway in the footer. Images are served from Unsplash's image CDN, which resizes
 * and converts them (AVIF/WebP via `auto=format`) on the fly.
 */
export interface Photo {
  /** Unsplash photo id. */
  id: string;
  /** Path on images.unsplash.com. */
  file: string;
  /** Slug used for the photo page link (credit). */
  slug: string;
  author: string;
  /** Dominant colour, used as the loading placeholder. */
  color: string;
  /** Arabic alternative text. */
  alt: string;
}

const photo = (p: Photo) => p;

export const photos = {
  hotLatte: photo({
    id: '1Me7ZXDEck8',
    file: 'photo-1777463940233-9e10f2a4815a',
    slug: 'latte-art-in-a-to-go-cup-on-a-metal-surface-1Me7ZXDEck8',
    author: 'Haberdoedas',
    color: '#c9b39c',
    alt: 'كوب سفري داكن فيه لاتيه ساخن برسمة حليب على شكل ورقة'
  }),
  icedLatte: photo({
    id: 'HRfnyL6AO-A',
    file: 'photo-1578314675249-a6910f80cc4e',
    slug: 'iced-coffee-in-plastic-cup-HRfnyL6AO-A',
    author: 'Rachel McDermott',
    color: '#594040',
    alt: 'آيس لاتيه بطبقات القهوة والحليب في كوب شفاف مع مصّاصة'
  }),
  espresso: photo({
    id: '3v0vppDjvMI',
    file: 'photo-1705952285570-113e76f63fb0',
    slug: 'a-cup-of-coffee-sitting-on-top-of-a-white-plate-3v0vppDjvMI',
    author: 'Katt Galvan',
    color: '#260c0c',
    alt: 'فنجان إسبريسو بكريما ذهبية على صحن صغير'
  }),
  espressoTonic: photo({
    id: 'Uhdp6G8zzWw',
    file: 'photo-1747103217713-43b8a7a3e3ba',
    slug: 'a-glass-of-coffee-with-cream-and-sunlight-Uhdp6G8zzWw',
    author: '- Kenny',
    color: '#a68c8c',
    alt: 'كأس مشروب قهوة بارد بطبقات ذهبية تحت ضوء شمس جانبي'
  }),
  citrusTea: photo({
    id: 'WKCjwrtjhVg',
    file: 'photo-1470752354724-60a1d2b1907f',
    slug: 'beverage-with-lemon-WKCjwrtjhVg',
    author: "Julia D'Alkmin",
    color: '#268cc0',
    alt: 'مشروب بارد بشريحة حمضيات من الأعلى على خلفية زرقاء'
  }),
  coldBrew: photo({
    id: 'yN7prWLW7xg',
    file: 'photo-1561641377-f7456d23aa9b',
    slug: 'glass-cup-of-beverage-yN7prWLW7xg',
    author: 'Wade Austin Ellis',
    color: '#d98c40',
    alt: 'كأس كولد برو داكن بمكعبات ثلج على خلفية برتقالية دافئة'
  }),
  iceDrop: photo({
    id: 'BIeXZhg_7sw',
    file: 'photo-1533007716222-4b465613a984',
    slug: 'macro-photography-of-dropping-ice-cube-in-cup-BIeXZhg_7sw',
    author: 'Kaffee Meister',
    color: '#a6a6a6',
    alt: 'مكعبات ثلج تسقط في كوب قهوة باردة مع رذاذ متطاير'
  }),
  mocha: photo({
    id: 'zKjidZxijiM',
    file: 'photo-1497048297103-b34f2fc1df34',
    slug: 'cup-filled-with-coffee-zKjidZxijiM',
    author: 'Rachael Gorjestani',
    color: '#0c2626',
    alt: 'كوب مشروب شوكولاتة وقهوة برغوة كثيفة من الأعلى'
  }),
  cappuccino: photo({
    id: 'J-4ozdP9EQ0',
    file: 'photo-1534234757579-8ad69d218ad4',
    slug: 'cappuccino-in-white-ceramic-teacup-J-4ozdP9EQ0',
    author: 'Lex Sirikiat',
    color: '#595959',
    alt: 'كابتشينو برسمة حليب في كوب أبيض'
  }),
  matchaIced: photo({
    id: 'gQ0lcnq8FAI',
    file: 'photo-1631679263320-004b9241ae5e',
    slug: 'a-green-and-white-drink-sitting-on-top-of-a-table-gQ0lcnq8FAI',
    author: 'Bakd&Raw by Karolin Baitinger',
    color: '#f3f3f3',
    alt: 'آيس ماتشا بطبقتين خضراء وبيضاء في كأس طويل'
  }),
  matchaHot: photo({
    id: 'C63YZ33DdvY',
    file: 'photo-1582785513054-8d1bf9d69c1a',
    slug: 'green-and-white-floral-cup-on-white-ceramic-saucer-C63YZ33DdvY',
    author: 'Alana Harris',
    color: '#595959',
    alt: 'ماتشا لاتيه ساخن برسمة حليب'
  }),
  tea: photo({
    id: 'asRm0zMpT3o',
    file: 'photo-1623241237041-67ece20b63de',
    slug: 'a-glass-filled-with-liquid-sitting-on-top-of-a-table-asRm0zMpT3o',
    author: 'Ahmet Kağan Hançer',
    color: '#262640',
    alt: 'استكان شاي أحمر يتصاعد منه البخار على خلفية داكنة'
  }),
  icedCaramel: photo({
    id: 'vZOZJH_xkUk',
    file: 'photo-1517701550927-30cf4ba1dba5',
    slug: 'clear-glass-filled-ice-coffee-vZOZJH_xkUk',
    author: 'Nathan Dumlao',
    color: '#40260c',
    alt: 'آيس لاتيه بالكراميل مع مكعبات ثلج في كأس شفاف'
  })
} satisfies Record<string, Photo>;

export type PhotoKey = keyof typeof photos;

const CDN = 'https://images.unsplash.com/';

/** Build a resized, auto-format CDN URL. `ratio` is height / width. */
export function photoUrl(p: Photo, width: number, ratio: number, quality = 70): string {
  const height = Math.round(width * ratio);
  return `${CDN}${p.file}?auto=format&fit=crop&crop=entropy&w=${width}&h=${height}&q=${quality}`;
}

export function photoSrcSet(p: Photo, ratio: number, widths: readonly number[] = [360, 540, 720, 960, 1280]): string {
  return widths.map((w) => `${photoUrl(p, w, ratio)} ${w}w`).join(', ');
}

export function photoPage(p: Photo): string {
  return `https://unsplash.com/photos/${p.slug}`;
}
