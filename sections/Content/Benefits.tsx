import Icon, { AvailableIcons } from "../../components/ui/Icon.tsx";

/**
 * @title {{{title}}}
 */
interface BenefitCardProps {
  /** @title Icon */
  icon: AvailableIcons;
  /** @title Title */
  title: string;
  /**
   * @title Description
   * @format textarea
   */
  description: string;
}

interface Props {
  /** @title Section Title */
  title: string;
  /** @title Benefits */
  benefits: BenefitCardProps[];
}

function BenefitCard({ icon, title, description }: BenefitCardProps) {
  return (
    <li class="flex flex-col items-start p-6 border-[#f0f0f0] border-b md:border-b-0 last:border-b-0 md:border-r md:last:border-r-0">
      <div class="mb-3 md:mb-16">
        <div class="size-[50px] rounded-full bg-[#f5f5f5] flex items-center justify-center relative">
          <Icon
            id={icon}
            width={48}
            height={54}
            class="text-[#233389] absolute left-[.625rem] top-[.438rem]"
          />
        </div>
      </div>
      <h3 class="text-xl font-bold text-[#233389] mb-1 w-full">{title}</h3>
      <p class="text-gray-600 leading-relaxed">{description}</p>
    </li>
  );
}

export default function Benefits({ title, benefits }: Props) {
  return (
    <div class="py-[60px]">
      <div class="max-w-[1140px] mx-auto p-2.5">
        <h2 class="text-2xl font-bold text-[#233389] text-center mb-5 md:mb-12">
          {title}
        </h2>
        <ul
          class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 justify-center items-center mt-5 border-[#f0f0f0] border"
          style={{ boxShadow: "0 10px 10px 0 rgba(0,0,0,.14)" }}
        >
          {benefits.map((benefit) => (
            <BenefitCard key={benefit.title} {...benefit} />
          ))}
        </ul>
      </div>
    </div>
  );
}

const defaultProps: Props = {
  title: "Benefits of Wire Prefabrication",
  benefits: [
    {
      icon: "jobWatch",
      title: "Shorter Job Duration",
      description:
        "Prefabs can cut your installation time in half. You no longer have to take the time to prep the wiring yourself. Therefore, your crew can focus on core tasks. When you reduce your job duration, you can quickly move on to the next project.",
    },
    {
      icon: "jobWatch",
      title: "Reduced Labor Costs",
      description:
        "Cutting, twisting, and labeling wire on-site requires a larger crew. You can reduce your workforce size by simply opting for prefabricated wiring. As a result, you save thousands of dollars in labor costs.",
    },
    {
      icon: "jobWatch",
      title: "Less Waste",
      description:
        "Prepping wire on-site can lead to a significant amount of waste. Much of the waste ends up in landfills. You can nearly eliminate waste altogether by having your wiring prefabricated to exact specifications. Reduced waste saves you money in materials and cleanup.",
    },
    {
      icon: "jobWatch",
      title: "Smoother Workflow",
      description:
        "Every time you have to stop and cut wire, you disrupt what would otherwise be a smooth workflow. Prepping wire can cause delays, which ultimately cost you time and money. Job-ready wiring can prevent these disruptions, allowing you to work continuously until job completion.",
    },
  ],
};

export function Preview() {
  return <Benefits {...defaultProps} />;
}
