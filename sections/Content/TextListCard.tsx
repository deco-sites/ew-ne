import type { RichText } from "apps/admin/widgets.ts";
import Image, { type ImageProps } from "../../components/ui/Image.tsx";
import { clx } from "../../sdk/clx.ts";

interface Props {
  /** @title Title */
  title: string;
  /** @title Description (HTML) */
  description: RichText;
  /** @title Items */
  items: string[];
  /** @title Content alignment */
  contentAlignment: "Left" | "Center" | "Right";
  /** @title Background image */
  background: ImageProps;
}

export default function TextListCard(props: Props) {
  const { title, description, items, background, contentAlignment } = props ||
    defaultProps;
  const contentAlignmentClass = contentAlignment === "Center"
    ? "justify-center"
    : contentAlignment === "Right"
    ? "justify-end"
    : "justify-start";
  return (
    <div class="pt-[60px] px-[20px] pb-[40px] relative z-0">
      <Image
        {...background}
        className="absolute inset-0 w-full h-full object-cover -z-[1]"
      />
      <div
        class={clx(
          "max-w-[1140px] mx-auto w-full flex items-center",
          contentAlignmentClass,
        )}
      >
        <div class="max-w-4xl md:w-1/2 bg-white shadow-xl p-12">
          <h2 class="text-3xl font-bold text-[#233389] mb-4">{title}</h2>
          <div
            class="mb-6 text-gray-700"
            dangerouslySetInnerHTML={{ __html: description }}
          />
          <ul class="grid grid-cols-1 md:grid-cols-2 gap-y-2 gap-x-8 list-disc pl-5">
            {items.map((item) => (
              <li class="text-base text-[#a5121a] font-semibold">
                <span class="text-[#333333]">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

const defaultProps: Props = {
  title: "Wire Services We Offer",
  description:
    `<p>Our <b>RTI (Ready To Install) facility</b> is fully equipped with advanced equipment and technology to accommodate your custom prefab assembly needs. We offer a variety of wire solutions in New England including:</p>`,
  items: [
    "Wire Cutting",
    "Wire identification & labeling",
    "MC/Flex Whips",
    "Wire management",
    "Residential, Commercial, Industrial",
    "Wire pairing",
    "Wire & cable pulling",
    "SIMpull solutions",
    "Colored wire feeders",
    "Prepared wire & cable",
  ],
  contentAlignment: "Right",
  background: {
    preload: false,
    desktop: {
      src:
        "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80",
      alt: "Wire Services We Offer",
    },
  },
};

export function Preview() {
  return <TextListCard {...defaultProps} />;
}
