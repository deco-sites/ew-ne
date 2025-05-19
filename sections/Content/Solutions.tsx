import type { RichText } from "apps/admin/widgets.ts";
import TextRenderer from "../../components/ui/RichText.tsx";

/**
 * @title {{{title}}}
 */
interface CardProps {
  /** @title Title */
  title: string;
  /** @title Items */
  items: string[];
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
  /** @title Cards */
  cards: CardProps[];
}

function SolutionCard({ title, items }: CardProps) {
  return (
    <div class="bg-white pb-2 px-8 pt-8 md:p-8 shadow-md">
      <h3 class="text-xl md:text-2xl font-bold text-[#233389] mb-2 md:mb-6">{title}</h3>
      <ul class="space-y-3">
        {items.map((item) => (
          <li class="flex items-start text-sm">
            <span class="w-1.5 h-1.5 rounded-full bg-[#a5121a] mt-2 mr-3 flex-shrink-0" />
            <span class="text-gray-700 font-semibold">{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function Solutions(
  { title, description, backgroundColor, cards }: Props,
) {
  return (
    <div
      class="py-[60px]"
      style={{ backgroundColor: backgroundColor || "#f5f5f5" }}
    >
      <div class="max-w-[1140px] mx-auto p-2.5">
        <h2 class="text-2xl font-bold text-[#233389] text-center mb-1">
          {title}
        </h2>
        <TextRenderer
          class="text-gray-700 mb-2.5"
          content={description}
        />
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
          {cards.map((card) => <SolutionCard key={card.title} {...card} />)}
        </div>
      </div>
    </div>
  );
}

const defaultProps: Props = {
  title: "Our Solutions",
  description:
    "Each of our wire solutions is designed to save you money, reduce installation time, and improve job site safety. Contact Electrical Warehouse today when you need help with the following services or resources:",
  backgroundColor: "#f5f5f5",
  cards: [
    {
      title: "Education & Awareness",
      items: [
        "Discover new solutions and workflow possibilities.",
        "Integrate products, services, and planning tools.",
        "Execute pre-con planning, timing, and impact for maximum efficiency.",
      ],
    },
    {
      title: "Pre-Con Planning",
      items: [
        "Discover new solutions and workflow possibilities.",
        "Integrate products, services, and planning tools.",
        "Execute pre-con planning, timing, and impact for maximum efficiency.",
      ],
    },
    {
      title: "Execution Support",
      items: [
        "Receive materials on time based on pre-con planning.",
        "Get the right support at the right time.",
        "Take advantage of field training and solution execution checklists.",
      ],
    },
    {
      title: "Improvement & Extending",
      items: [
        "Continue to optimize solutions for compounded benefits.",
        "Increase safety, productivity, and profitability.",
        "Reduce the learning curve and close execution gaps.",
      ],
    },
  ],
};

export function Preview() {
  return <Solutions {...defaultProps} />;
}
