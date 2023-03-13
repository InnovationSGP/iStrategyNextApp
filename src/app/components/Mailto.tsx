import Link from "next/link";
import React from "react";

export const Mailto = (props: {
  email: string;
  subject: string;
  body: string;
  children: any;
}) => {
  const { email, subject, body, children } = props;

  let params = subject || body ? "?" : "";
  if (subject) params += `subject=${encodeURIComponent(subject)}`;
  if (body) params += `${subject ? "&" : ""}body=${encodeURIComponent(body)}`;

  return (
    <Link
      className="p-2 px-4 capitalize text-white bg-primaryBlue rounded shadow hover:scale-105 "
      href={`mailto:${email}${params}`}
    >
      {children}
    </Link>
  );
};
