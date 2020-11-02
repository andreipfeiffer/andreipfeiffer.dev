import React from "react";

type Props = {
  children: React.ReactNode;
};

export default function Code({ children }: Props) {
  return (
    <div className="remark-highlight">
      <pre className="language-custom">
        <code>{children}</code>
      </pre>
    </div>
  );
}
