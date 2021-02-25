import React from "react";
import NextLink from "next/link";
import { useRouter } from "next/router";

type Props = {
  href: string;
  children: React.ReactElement;
  activeClass?: string;
};

export const MainLink = ({ children, href, activeClass }: Props) => {
  const router = useRouter();

  let className = children.props.className || "";

  // we check only the first segment to match
  if (activeClass && `/${router.pathname.split("/")[1]}`.startsWith(href)) {
    className = `${className} ${activeClass}`;
  }

  return (
    <NextLink href={href}>
      {React.cloneElement(children, { className })}
    </NextLink>
  );
};
