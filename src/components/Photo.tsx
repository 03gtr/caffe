import type { CSSProperties } from 'react';
import { photoSrcSet, photoUrl, type Photo as PhotoData } from '../content/photos';

interface PhotoProps {
  photo: PhotoData;
  /** height / width */
  ratio: number;
  sizes: string;
  className?: string;
  priority?: boolean;
  widths?: readonly number[];
  style?: CSSProperties;
  /** Alt text in the page language; defaults to the photo's Arabic description. "" = decorative. */
  alt?: string;
}

/** Responsive CDN image with intrinsic size (no layout shift) and a dominant-colour placeholder. */
export function Photo({ photo, ratio, sizes, className, priority = false, widths, style, alt }: PhotoProps) {
  return (
    <img
      className={className}
      src={photoUrl(photo, 960, ratio)}
      srcSet={photoSrcSet(photo, ratio, widths)}
      sizes={sizes}
      width={960}
      height={Math.round(960 * ratio)}
      alt={alt ?? photo.alt}
      loading={priority ? 'eager' : 'lazy'}
      decoding={priority ? 'sync' : 'async'}
      fetchPriority={priority ? 'high' : 'auto'}
      style={{ backgroundColor: photo.color, ...style }}
    />
  );
}
