import { useDevice } from "@deco/deco/hooks";
import type { ImageWidget } from "apps/admin/widgets.ts";
import Image from "apps/website/components/Image.tsx";
import Bag from "../../components/header/Bag.tsx";
import HelpCenter, {
  HelpCenterProps,
} from "../../components/header/HelpCenter.tsx";
import Icon from "../../components/ui/Icon.tsx";

interface Branch {
  /** @title Branch name */
  name: string;
  /** @title Branch address */
  address: string;
}

interface NavItem {
  /** @title Label */
  label: string;
  /** @title URL */
  href: string;
  /** @title Children */
  children?: NavItem[];
}

interface Props {
  /** @title Logo */
  logo: {
    /** @title Image source */
    src: ImageWidget;
    /** @title Alt text */
    alt: string;
    /** @title Width */
    width?: number;
    /** @title Height */
    height?: number;
  };
  /** @title Navigation items */
  navItems: NavItem[];
  /** @title Branch */
  branch: Branch;
  /** @title Search placeholder */
  searchPlaceholder: string;
  /** @title User menu text */
  userMenuText: string;
  /** @title Help Center Menu */
  helpCenterMenu: HelpCenterProps;
}

// Desktop Header
function HeaderDesktop({
  logo,
  navItems,
  branch,
  searchPlaceholder,
  userMenuText,
  helpCenterMenu,
}: Props) {
  return (
    <>
      <div class="h-[170px] w-full" />
      <header class="w-full fixed left-0 right-0 top-0 z-50">
        {/* Top bar */}
        <div class="px-12 bg-white border-b border-gray-200">
          <div class="flex items-center justify-between max-w-[85rem] mx-auto h-[72px]">
            <a href="/" aria-label="Store logo">
              <Image
                src={logo.src}
                alt={logo.alt}
                width={logo.width || 120}
                height={logo.height || 32}
              />
            </a>
            <nav class="flex gap-6">
              {navItems.map((item) => (
                <div class="relative group">
                  <a
                    href={item.href}
                    class="font-semibold flex items-center gap-1 hover:text-blue-700"
                  >
                    <Icon id="chevron-right" class="w-5 h-5" />
                    <span>{item.label}</span>
                    {item.children && (
                      <Icon id="chevron-right" class="w-4 h-4" />
                    )}
                  </a>
                  {item.children && (
                    <ul class="absolute left-0 top-full bg-white shadow-lg rounded mt-2 hidden group-hover:block min-w-[180px] z-10">
                      {item.children.map((sub) => (
                        <li>
                          <a
                            href={sub.href}
                            class="block px-4 py-2 hover:bg-gray-100"
                          >
                            {sub.label}
                          </a>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </nav>
            <div class="flex items-center gap-6">
              <HelpCenter {...helpCenterMenu} />
              <a
                href="/login"
                class="flex items-center gap-1 text-sm hover:text-blue-700"
              >
                <Icon id="account_circle" class="w-5 h-5" />
                <span>{userMenuText}</span>
              </a>
              <Bag />
            </div>
          </div>
        </div>
        {/* Barra azul: localização e busca */}
        <div class="bg-[#323C88] px-12 h-[98px] flex items-center gap-10">
          <div class="flex items-center gap-2 text-white text-base shrink-0">
            <Icon id="home_pin" class="w-5 h-5" />
            <span class="font-bold">My Branch :</span>
            <span>{branch.name}</span>
            <span class="text-gray-200">, {branch.address}</span>
          </div>
          <form class="flex w-full max-w-[570px]">
            <input
              type="text"
              placeholder={searchPlaceholder}
              class="w-full px-4 py-2 rounded-l bg-white text-gray-700 border-none focus:outline-none"
            />
            <button
              type="submit"
              class="bg-gray-600 px-4 rounded-r flex items-center justify-center"
            >
              <Icon id="search" class="w-5 h-5 text-white" />
            </button>
          </form>
        </div>
      </header>
    </>
  );
}

// Mobile Header
function HeaderMobile({
  logo,
  searchPlaceholder,
}: Props) {
  return (
    <header class="w-full">
      {/* Top bar */}
      <div class="flex items-center justify-between px-3 py-2 bg-white border-b border-gray-200">
        <button type="button" class="btn btn-ghost btn-square">
          <Icon id="menu" class="w-6 h-6" />
        </button>
        <a href="/" aria-label="Store logo">
          <Image
            src={logo.src}
            alt={logo.alt}
            width={logo.width || 100}
            height={logo.height || 24}
          />
        </a>
        <div class="flex items-center gap-2">
          <a href="/login" class="btn btn-ghost btn-square">
            <Icon id="account_circle" class="size-7" />
          </a>
          <Bag />
        </div>
      </div>
      {/* Barra de busca */}
      <div class="bg-white px-3 py-2 flex items-center gap-2 border-b border-gray-100">
        <Icon id="search" class="w-6 h-6 text-gray-400" />
        <input
          type="text"
          placeholder={searchPlaceholder}
          class="flex-1 px-2 py-1 bg-transparent text-gray-700 border-none focus:outline-none"
        />
        <button type="button" class="btn btn-ghost btn-square">
          <Icon id="pan_zoom" class="w-6 h-6 text-gray-400" />
        </button>
      </div>
    </header>
  );
}

export default function Header(props: Props) {
  const device = useDevice();
  return device === "desktop"
    ? <HeaderDesktop {...props} />
    : <HeaderMobile {...props} />;
}

export function Preview() {
  return <Header {...defaultProps} />;
}

const defaultProps: Props = {
  logo: {
    src:
      "https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/2291/986b61d4-3847-4867-93c8-b550cb459cc7",
    alt: "Electrical Wholesalers, Inc. New England",
    width: 120,
    height: 32,
  },
  navItems: [
    {
      label: "Categories",
      href: "#",
      children: [{ label: "Subcat 1", href: "#" }],
    },
    { label: "Brand", href: "#" },
    { label: "List", href: "#" },
    { label: "Customer Resources", href: "#" },
  ],
  branch: {
    name: "New Bedford",
    address: "MA",
  },
  searchPlaceholder: "Search keyword or part number",
  userMenuText: "Login / Register",
  helpCenterMenu: {
    label: "Help Center",
    menu: {
      title: "Help Center",
      subtitle: "9:00 AM - 5:00 PM",
      links: [
        { label: "FAQ", href: "#", icon: "call" },
        { label: "Contact Us", href: "#", icon: "favorite" },
      ],
      helpLinks: [
        { label: "FAQ", href: "#" },
        { label: "Contact Us", href: "#" },
      ],
      helpButton: {
        text: "Get Help",
        href: "#",
      },
    },
  },
};
