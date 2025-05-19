import type { Color } from "apps/admin/widgets.ts";
import Image, { ImageProps } from "../../components/ui/Image.tsx";

interface BreadcrumbItem {
  /** @title Label */
  label: string;
  /** @title URL */
  href?: string;
}

interface Props {
  /** @title Background image */
  background: ImageProps;
  /** @title Overlay */
  overlay?: {
    /** @title Color */
    color: Color;
    /**
     * @title Opacity
     * @description Opacity of the overlay (0-100)
     * @default 50
     * @minValue 0
     * @maxValue 100
     */
    opacity: number;
  };
  /** @title Title */
  title: string;
  /** @title Breadcrumb */
  breadcrumb: BreadcrumbItem[];
}

export default function BannerWithBreadcrumb(props: Props) {
  const { background, overlay, title, breadcrumb } = props || defaultProps;
  return (
    <div class="relative w-full flex flex-col justify-center items-center text-center">
      <Image {...background} className="w-full h-full object-cover" />
      {overlay && (
        <div
          class="absolute inset-0 z-[1]"
          style={{
            background: overlay.color,
            opacity: overlay.opacity / 100,
          }}
        />
      )}
      <h1 class="absolute text-4xl md:text-5xl z-[2] font-bold text-white mb-4 drop-shadow-lg">
        {title}
      </h1>
      {breadcrumb && (
        <nav class="text-white text-sm flex flex-wrap justify-center absolute z-[2] bottom-1.5">
          {breadcrumb.map((item, idx) => (
            <>
              {item.href
                ? (
                  <a href={item.href} class="hover:underline text-white/90">
                    {item.label}
                  </a>
                )
                : <span class="font-bold">{item.label}</span>}
              {idx < breadcrumb.length - 1 && <span class="mx-1">/</span>}
            </>
          ))}
        </nav>
      )}
    </div>
  );
}

const defaultProps: Props = {
  background: {
    preload: false,
    desktop: {
      src:
        "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80",
      alt: "Wire Solutions",
    },
  },
  overlay: {
    color: "#000000",
    opacity: 60,
  },
  title: "Wire Solutions",
  breadcrumb: [
    { label: "Home", href: "/" },
    { label: "Solution", href: "/solution" },
    { label: "Wire Solutions" },
  ],
};

export function Preview() {
  return <BannerWithBreadcrumb {...defaultProps} />;
}
