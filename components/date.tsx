import React from "react";

type Props = {
  date: string;
};

export default function FormattedDate({ date }: Props) {
  try {
    const formatted = new Intl.DateTimeFormat("en-US", {
      year: "numeric",
      day: "2-digit",
      month: "long",
    }).format(new Date(date));

    return <time dateTime={date}>{formatted}</time>;
  } catch (e) {
    console.warn(`Cannot parse date ${date}`, e);
  }
  return null;
}
