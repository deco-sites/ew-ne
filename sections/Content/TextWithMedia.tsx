import type { ImageWidget, RichText } from "apps/admin/widgets.ts";
import Image from "apps/website/components/Image.tsx";
import TextRenderer from "../../components/ui/RichText.tsx";
import VideoWithThumbnail from "../../components/ui/VideoWithThumbnail.tsx";
import { clx } from "../../sdk/clx.ts";

/**
 * @title Image
 */
interface MediaImage {
  /**
   * @hide
   * @default image
   */
  type: string;
  /** @title Image */
  src: ImageWidget;
  /** @title Alt text */
  alt: string;
  /** @title Width */
  width?: number;
  /** @title Height */
  height?: number;
}

/**
 * @title YouTube Video
 */
interface MediaVideo {
  /**
   * @hide
   * @default video
   */
  type: string;
  /** @title YouTube Video URL */
  url: string;
  /** @title Thumbnail image */
  thumbnail: ImageWidget;
  /** @title Alt text */
  alt: string;
}

type Media = MediaImage | MediaVideo;

interface Props {
  /** @title Content (HTML) */
  content: RichText;
  /** @title Media (image or video) */
  media: Media;
  /** @title Content side */
  contentSide: {
    /** @title Desktop */
    desktop: "Text on left" | "Text on right";
    /** @title Mobile */
    mobile: "Text on top" | "Text on bottom";
  };
}

function isImage(media: Media): media is MediaImage {
  return media.type === "image";
}

function isVideo(media: Media): media is MediaVideo {
  return media.type === "video";
}

function MediaContent({ media }: { media: Media }) {
  if (isImage(media)) {
    return (
      <Image
        src={media.src}
        alt={media.alt}
        width={media.width ?? 0}
        height={media.height}
        class="shadow max-w-full h-auto"
        loading="lazy"
      />
    );
  }
  if (isVideo(media)) {
    return (
      <VideoWithThumbnail
        url={media.url}
        thumbnail={{ src: media.thumbnail, alt: media.alt }}
        alt={media.alt}
      />
    );
  }
  return null;
}

export default function TextWithMedia(props: Props) {
  const { content, media, contentSide } = props || defaultProps;
  // Layout classes
  const flexDir = contentSide.desktop === "Text on right"
    ? "md:flex-row-reverse"
    : "md:flex-row";
  const mobileDir = contentSide.mobile === "Text on bottom"
    ? "flex-col-reverse"
    : "flex-col";

  return (
    <div class="pt-[60px] px-[20px] pb-[72px]">
      <div
        class={clx(
          "max-w-[1140px] mx-auto w-full flex items-center",
          mobileDir,
          flexDir,
        )}
      >
        <div class="flex-1 min-w-0">
          <TextRenderer
            class="prose max-w-none"
            content={content}
          />
        </div>
        <div class="flex-1 flex justify-center items-center">
          <div
            class={clx(
              contentSide.desktop === "Text on right"
                ? "md:pr-[15%]"
                : "md:pl-[15%]",
              contentSide.mobile === "Text on bottom" ? "pb-6" : "pt-6",
              "md:pt-0 md:pb-0",
            )}
          >
            <MediaContent media={media} />
          </div>
        </div>
      </div>
    </div>
  );
}

const defaultProps: Props = {
  content: `<h2>Wire Solutions in New England</h2>
<p>Electrical Wholesalers offers complete wire prefabrication services in New England. We can fully customize wire and cable to meet your exact job specifications. Our wire solutions leverage <b>Southwire's SIMpull™ Solutions</b> and include cutting, stripping, twisting, identification, and labeling. Our wire experts will assist you with selecting the products and configurations that best suit your project needs.<br />
We prefabricate and deliver project-ready products so that your crew can avoid cutting, configuring, or stripping wire on-site. This includes twisted or paired wires and cut and stripped wires in all gauge sizes. We offer larger sizes that are available upon request. Contact Electrical Wholesalers to place your wiring order. Let us help you with your upcoming project today!</p>`,
  media: {
    type: "image",
    src:
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80",
    alt: "Wire Solutions",
    width: 400,
    height: 300,
  },
  contentSide: {
    desktop: "Text on left",
    mobile: "Text on top",
  },
};

export function Preview() {
  return <TextWithMedia {...defaultProps} />;
}
