import { useId } from "../../sdk/useId.ts";
import Icon, { AvailableIcons } from "../ui/Icon.tsx";

interface HelpLink {
  label: string;
  href: string;
}

interface Link {
  icon: AvailableIcons;
  label: string;
  href: string;
}

interface HelpCenterMenu {
  /** @title Title */
  title: string;
  /** @title Subtitle */
  subtitle?: string;
  /** @title Links */
  links: Link[];
  /** @title Help links */
  helpLinks: HelpLink[];
  /** @title Help button */
  helpButton?: {
    /** @title Text */
    text: string;
    /** @title Href */
    href: string;
  };
}

export interface HelpCenterProps {
  /** @title Label */
  label: string;
  /** @title Menu content */
  menu: HelpCenterMenu;
}

export default function HelpCenter({ menu, label }: HelpCenterProps) {
  const id = useId();

  return (
    <div class="relative">
      <input type="checkbox" id={id} class="peer hidden" />
      <label
        htmlFor={id}
        class="flex items-center gap-1 text-sm hover:text-blue-700 cursor-pointer"
      >
        <span>{label}</span>
        <Icon id="chevron-right" class="w-4 h-4" />
      </label>

      <label
        htmlFor={id}
        class="fixed inset-0 z-50 items-start justify-center bg-[#03044e] bg-opacity-50 peer-checked:flex hidden"
        tabIndex={-1}
      />
      <div class="bg-white rounded-lg shadow-lg mt-16 p-6 max-w-md absolute invisible opacity-0 peer-checked:visible peer-checked:opacity-100 transition-all duration-300 z-[51] w-max top-[calc(100%+12px)] left-1/2 -translate-x-1/2">
        <div class="mb-2">
          <div class="font-bold text-lg">{menu.title}</div>
          {menu.subtitle && (
            <div class="text-sm text-gray-500">{menu.subtitle}</div>
          )}
        </div>
        <div class="flex flex-col gap-2 mb-4">
          {menu.links.map((link) => (
            <a
              href={link.href}
              class="flex items-center gap-2 text-gray-700 text-sm"
            >
              <Icon id={link.icon} class="w-5 h-5" /> {link.label}
            </a>
          ))}
        </div>
        <hr class="my-4" />
        <div class="font-bold mb-2">Help</div>
        <div class="flex flex-col gap-1 mb-4">
          {menu.helpLinks.map((link) => (
            <a href={link.href} class="text-gray-800 text-sm">
              {link.label}
            </a>
          ))}
        </div>
        {menu.helpButton && (
          <a
            href={menu.helpButton.href}
            class="block mt-4 w-full border border-gray-400 rounded px-4 py-2 text-center font-semibold hover:bg-gray-100"
          >
            {menu.helpButton.text}
          </a>
        )}
      </div>
    </div>
  );
}
