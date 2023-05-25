import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import classNames from "classnames";

export default function Header() {
  const [active, setActive] = useState(false);
  const router = useRouter();

  interface Content {
    id: number;
    title: string;
    url: string;
    active: boolean;
  }

  const content: Content[] = [
    {
      id: 1,
      title: "Home",
      url: "/",
      active: router.pathname === "/",
    },
    {
      id: 2,
      title: "About",
      url: "/about",
      active: router.pathname === "/about",
    },
    {
      id: 3,
      title: "Skills",
      url: "/skills",
      active: router.pathname === "/skills",
    },
    {
      id: 4,
      title: "Projects",
      url: "/projects",
      active: router.pathname === "/projects",
    },
    {
      id: 5,
      title: "Contact",
      url: "/contact",
      active: router.pathname === "/contact",
    },
  ];

  return (
    <header className="milkblur fixed h-[80px] w-full bg-black/20 border-b border-white/10">
      <div className="flex h-full w-full items-center">
        <div className="flex w-1/2 items-center justify-center ">
          <h1 className="header-name text-trasnparent text-3xl font-bold">
            Vinicius Pinheiro
          </h1>
        </div>
        <div className="flex h-full w-2/4 items-center justify-start pl-10">
          <ul className="relative flex h-full items-center gap-6 text-lg font-semibold tracking-wider">
            {content.map((item, index) => (
              <li
                key={index}
                className="relative flex h-full items-center px-6 text-base "
              >
                <Link
                  href={item.url}
                  className={classNames(
                    "text-white",
                    item.active &&
                      "bg-gradient-to-br from-rose-500 to-blue-800 bg-clip-text text-transparent"
                  )}
                >
                  {item.title}
                </Link>
                {item.active && (
                  <div className="absolute flex h-full w-full items-end justify-center">
                    <div className="absolute mr-11 h-1 w-full rounded-t-lg bg-gradient-to-br from-rose-500 to-blue-800"></div>
                  </div>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </header>
  );
}
