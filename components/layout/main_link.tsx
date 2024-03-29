import NextLink from "next/link";
import { useRouter } from "next/router";
import React from "react";

type Props = {
  href: string;
  children: React.ReactElement;
  activeClass?: string;
  exact?: boolean;
};

export const MainLink = ({
  children,
  href,
  activeClass,
  exact = false,
}: Props) => {
  const router = useRouter();
  let className = children.props.className || "";

  // we check only the first segment to match
  if (activeClass && isActivePath(href, exact)) {
    className = `${className} ${activeClass}`;
  }

  return (
    <NextLink href={href}>
      {React.cloneElement(children, { className })}
    </NextLink>
  );

  function isActivePath(path: string, exact: boolean) {
    if (exact) {
      return router.pathname === path;
    }

    return `/${router.pathname.split("/")[1]}`.startsWith(path);
  }
};
