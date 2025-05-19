import type { ImageWidget } from "apps/admin/widgets.ts";
import DecoImage from "apps/website/components/Image.tsx";
import { Picture, Source } from "apps/website/components/Picture.tsx";

export interface SingleImage {
  /** @title Image source */
  src: ImageWidget;
  /** @title Alt text */
  alt: string;
  /** @title Width */
  width?: number;
  /** @title Height */
  height?: number;
}

export interface ImageProps {
  /**
   * @title Preload
   * @description If true, the image will be preloaded. Useful for performance when the image is used on the top of the page.
   */
  preload?: boolean;
  /** @title Desktop image */
  desktop: SingleImage;
  /**
   * @title Mobile image
   * @description Optional. If not provided, the desktop image will be used on mobile.
   */
  mobile?: SingleImage;
  /**
   * @ignore
   */
  loading?: "eager" | "lazy";
  /**
   * @ignore
   */
  className?: string;
}

export default function Image(props: ImageProps) {
  const { preload = false, desktop, mobile, loading = "lazy", className } = props;

  if (mobile && desktop) {
    return (
      <Picture preload={preload}>
        <Source
          src={desktop.src}
          width={desktop.width ?? 0}
          height={desktop.height}
          media="(min-width: 768px)"
        />
        <Source
          src={mobile.src}
          width={mobile.width ?? 0}
          height={mobile.height}
          media="(max-width: 767px)"
        />
        <img
          src={desktop.src}
          alt={desktop.alt}
          width={desktop.width}
          height={desktop.height}
          loading={loading}
          className={className}
        />
      </Picture>
    );
  }

  return (
    <DecoImage
      preload={preload}
      src={desktop.src}
      alt={desktop.alt}
      width={desktop.width ?? 0}
      height={desktop.height}
      loading={loading}
      className={className}
    />
  );
}
