import Image from "next/image";
import Link from "next/link";

export default function SocialButtons() {
  const buttonContent = [
    {
      icon: "/icons/social/icon-zap.svg",
      href: "a",
    },
    {
      icon: "/icons/social/icon-insta.svg",
      href: "a",
    },
    {
      icon: "/icons/social/icon-linkedin.png",
      href: "a",
      middle: true,
    },
    {
      icon: "/icons/social/icon-github.svg",
      href: "a",
    },
    {
      icon: "/icons/social/icon-mail.svg",
      href: "a",
    },
  ];

  return (
    <div className="flex h-full w-full">
      {buttonContent.map((item, index) => {
        return (
          <div
            key={index}
            className="flex h-full w-full items-center justify-center"
          >
            <Button icon={item.icon} href={item.href} />
          </div>
        );
      })}
    </div>
  );
}

const Button = (props: { icon: string; href: string; middle?: boolean }) => {
  return (
    <Link
      className="group relative h-full max-h-[50px] w-full max-w-[50px] rounded-full bg-white p-1.5"
      href={props.href}
    >
      <div className="relative h-full w-auto rounded-full bg-gradient-to-t from-rose-500  to-blue-800 p-3 text-white transition-all duration-300 ease-in-out group-hover:scale-125">
        <Image
          src={props.icon}
          width={70}
          height={70}
          alt="social"
          className="scale-150"
        />
      </div>
    </Link>
  );
};
