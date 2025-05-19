import type { RichText } from "apps/admin/widgets.ts";
import { SingleImage } from "../../components/ui/Image.tsx";
import TextRenderer from "../../components/ui/RichText.tsx";
import VideoWithThumbnail from "../../components/ui/VideoWithThumbnail.tsx";

/**
 * @title {{{thumbnail.alt}}}
 */
interface VideoProps {
  /** @title Thumbnail */
  thumbnail: SingleImage;
  /** @title YouTube URL */
  youtubeUrl: string;
}

interface Props {
  /** @title Section Title */
  title: string;
  /** @title Description (HTML) */
  description: RichText;
  /**
   * @title Background Color
   * @format color-input
   */
  backgroundColor?: string;
  /** @title Videos */
  videos: VideoProps[];
}

function VideoThumbnail({ thumbnail, youtubeUrl }: VideoProps) {
  return (
    <li class="relative">
      <VideoWithThumbnail
        url={youtubeUrl}
        thumbnail={thumbnail}
        alt={thumbnail.alt}
      />
    </li>
  );
}

export default function TextWithVideoList(
  { title, description, videos, backgroundColor }: Props,
) {
  return (
    <div
      class="py-16 px-4"
      style={{ backgroundColor: backgroundColor || "transparent" }}
    >
      <div class="max-w-[1140px] mx-auto">
        <h2 class="text-4xl font-bold text-[#233389] text-center mb-6">
          {title}
        </h2>
        <TextRenderer
          class="text-center text-gray-700 mb-4"
          content={description}
        />
        <ul class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3">
          {videos.map((video) => (
            <VideoThumbnail key={video.thumbnail.src} {...video} />
          ))}
        </ul>
      </div>
    </div>
  );
}

const defaultProps: Props = {
  title: "Cable-in-Conduit",
  description:
    "SIMpull™ Cable-in-Conduit provides easy installation, which reduces equipment costs and the amount of time you spend installing products. Safety is drastically improved since you spend less opening trenches, along traffic right-of-ways, and pulling heavy cables.",
  videos: [
    {
      thumbnail: {
        src: "https://ewne.vtexassets.com/arquivos/video-thumb-1.jpg",
        alt: "SIMpull Cable Installation Video 1",
      },
      youtubeUrl: "https://www.youtube.com/watch?v=video1",
    },
    {
      thumbnail: {
        src: "https://ewne.vtexassets.com/arquivos/video-thumb-2.jpg",
        alt: "SIMpull COILPAK Wire Payoff",
      },
      youtubeUrl: "https://www.youtube.com/watch?v=video2",
    },
    {
      thumbnail: {
        src: "https://ewne.vtexassets.com/arquivos/video-thumb-3.jpg",
        alt: "SIMpull COILPAK Mini Wire Payoff",
      },
      youtubeUrl: "https://www.youtube.com/watch?v=video3",
    },
    {
      thumbnail: {
        src: "https://ewne.vtexassets.com/arquivos/video-thumb-4.jpg",
        alt: "SIMpull Cable Features",
      },
      youtubeUrl: "https://www.youtube.com/watch?v=video4",
    },
  ],
};

export function Preview() {
  return <TextWithVideoList {...defaultProps} />;
}
