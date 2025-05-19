import Image, { type SingleImage } from "../../components/ui/Image.tsx";

/**
 * @title {{{title}}}
 */
interface CardProps {
  /** @title Image */
  image: SingleImage;
  /** @title Title */
  title: string;
  /** @title Description */
  description: string;
}

interface Props {
  /** @title Cards */
  cards: CardProps[];
}

function Card({ image, title, description }: CardProps) {
  return (
    <li class="overflow-hidden">
      <Image
        preload={false}
        desktop={{
          src: image.src,
          alt: image.alt,
          width: image.width,
          height: image.height,
        }}
        className="w-full object-cover"
      />
      <div class="mt-3.5">
        <h3 class="text-xl font-bold text-[#323c88] mb-2">{title}</h3>
        <p class="text-gray-600">{description}</p>
      </div>
    </li>
  );
}

export default function CardsGrid({ cards }: Props) {
  return (
    <div class="pb-[60px] px-[20px]">
      <div class="max-w-[1140px] mx-auto p-2.5">
        <ul class="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-10">
          {cards.map((card) => <Card key={card.title} {...card} />)}
        </ul>
      </div>
    </div>
  );
}

const defaultProps: Props = {
  cards: [
    {
      image: {
        src: "https://ewne.vtexassets.com/arquivos/simPullCable.jpg",
        alt: "SIMpull™ Reel Maneuverable Payoff System",
      },
      title: "SIMpull™ Reel Maneuverable Payoff System",
      description:
        "The SIMpull™ Reel Maneuverable Payoff System revolutionizes the job site by allowing one person to safely* move a reel that weighs up to 6,000 lbs. without the need of pallet jacks or other equipment.",
    },
    {
      image: {
        src: "https://ewne.vtexassets.com/arquivos/flange.jpg",
        alt: "SIMpull™ Flange",
      },
      title: "SIMpull™ Flange",
      description:
        "SIMpull™ Flange has a shaftless design that safely allows one person to turn a wooden reel up to 34\" and 2,000 lbs on level floors. It's a time-saving, field-installable solution that removes the need for heavy jack stands.",
    },
    {
      image: {
        src: "https://ewne.vtexassets.com/arquivos/pullingHeads.jpg",
        alt: "SIMpull™ Head",
      },
      title: "SIMpull™ Head",
      description:
        "SIMpull™ Head features a low-profile design to glide easily through bends and tight turns with no lubrication. The wire is ready to pull as soon as it is delivered, saving you time and labor on your job site and reducing waste.",
    },
    {
      image: {
        src: "https://ewne.vtexassets.com/arquivos/SimPullReels.jpg",
        alt: "SIMpull™ Truck",
      },
      title: "SIMpull™ Truck",
      description:
        "SIMpull™ Truck is a faster, cleaner, safer way to enhance productivity and lower total installation costs by eliminating various forms of waste such as excess cost, time, and labor and improving productivity, making you more competitive.",
    },
  ],
};

export function Preview() {
  return <CardsGrid {...defaultProps} />;
}
