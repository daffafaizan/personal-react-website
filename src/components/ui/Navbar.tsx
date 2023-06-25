import { Fragment } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { Bars3Icon, BellIcon, XMarkIcon } from "@heroicons/react/24/outline";
import Dark from "./Dark";
import { Icon } from "@iconify/react";
import AnchorLink from "react-anchor-link-smooth-scroll";

const navigation = [
  { name: "Dashboard", href: "#", current: true, offset: "" },
  { name: "Technologies", href: "#technologies", current: false, offset: "" },
  { name: "Experience", href: "#experience", current: false, offset: "500" },
  { name: "Blog", href: "#", current: false, offset: "" },
  { name: "Contact", href: "#contact", current: false, offset: "" },
];

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

function Navbar() {
  return (
    <Disclosure
      as="nav"
      className="bg-cyan-700 dark:bg-cyan-800 sticky top-0 z-10"
    >
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-2">
            <div className="relative flex h-16 items-center justify-between">
              <div className="absolute inset-y-0 left-0 flex items-center xl:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-cyan-900 dark:hover:bg-cyan-950 hover:text-white">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex flex-1 items-center justify-center xl:items-stretch xl:justify-start">
                <div className="flex flex-shrink-0 items-center">
                  <img
                    className="block h-8 w-auto lg:hidden"
                    src="src\assets\astrohelmet.png"
                    alt="Your Company"
                  />
                  <img
                    className="hidden h-8 w-auto lg:block"
                    src="src\assets\astrohelmet.png"
                    alt="Your Company"
                  />
                </div>
                <div className="hidden xl:ml-6 xl:block">
                  <div className="flex space-x-4">
                    {navigation.map((item) => (
                      <AnchorLink
                        key={item.name}
                        href={item.href}
                        offset={item.offset}
                        className={classNames(
                          item.current
                            ? "bg-cyan-950 text-white"
                            : "text-gray-300 hover:bg-cyan-800 dark:hover:bg-cyan-900 hover:text-white",
                          "rounded-md px-3 py-2 text-sm font-medium"
                        )}
                        aria-current={item.current ? "page" : undefined}
                      >
                        {item.name}
                      </AnchorLink>
                    ))}
                  </div>
                </div>
              </div>
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 xl:static xl:inset-auto xl:ml-6 xl:pr-0">
                <Dark />
              </div>
            </div>
          </div>

          <Disclosure.Panel className="xl:hidden">
            <div className="space-y-1 px-2 pb-3 pt-2">
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  href={item.href}
                  className={classNames(
                    item.current
                      ? "bg-cyan-950 text-white"
                      : "text-gray-300 hover:bg-cyan-800 dark:hover:bg-cyan-900 hover:text-white",
                    "block rounded-md px-3 py-2 text-base font-medium"
                  )}
                  aria-current={item.current ? "page" : undefined}
                >
                  {item.name}
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}

export default Navbar;
