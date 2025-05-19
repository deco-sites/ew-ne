import { SingleImage } from "./Image.tsx";
import { useId } from "preact/hooks";

interface Props {
  /** @title Video URL */
  url: string;
  /** @title Thumbnail image */
  thumbnail: SingleImage;
  /** @title Alt text */
  alt: string;
}

export default function VideoWithThumbnail({ url, thumbnail, alt }: Props) {
  const id = useId();
  return (
    <div class="relative">
      <input type="checkbox" id={id} class="peer hidden" />
      <label htmlFor={id} class="block cursor-pointer">
        <img
          src={thumbnail.src}
          alt={alt}
          class="shadow max-w-full h-auto w-full"
          loading="lazy"
        />
        <span class="absolute inset-0 flex items-center justify-center">
          <svg width="64" height="64" viewBox="0 0 64 64" fill="none">
            <circle cx="32" cy="32" r="32" fill="#000" fillOpacity="0.5" />
            <polygon points="26,20 48,32 26,44" fill="#fff" />
          </svg>
        </span>
      </label>
      <VideoModal url={url} modalId={id} />
    </div>
  );
}

function VideoModal({ url, modalId }: { url: string; modalId: string }) {
  const videoURL = new URL(url);
  const embedId = videoURL.pathname === "/watch"
    ? videoURL.searchParams.get("v")
    : videoURL.pathname.split("/")[1];

  return (
    <label
      htmlFor={modalId}
      class="fixed inset-0 z-50 items-center justify-center bg-black bg-opacity-80 peer-checked:flex hidden"
      tabIndex={-1}
    >
      <div class="relative w-full flex justify-center items-center">
        <label
          htmlFor={modalId}
          class="absolute top-4 right-4 text-white text-3xl font-bold cursor-pointer z-10"
        >
          ×
        </label>
        <iframe
          width="960"
          height="540"
          src={`https://www.youtube.com/embed/${embedId}`}
          title="YouTube video player"
          frameBorder="0"
          allow="autoplay; encrypted-media"
          allowFullScreen
          class="rounded shadow max-w-full w-[90vw] h-[80vh]"
        />
      </div>
    </label>
  );
}
