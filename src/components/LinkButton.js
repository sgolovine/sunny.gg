import React from "react";

export const LinkButton = ({ title, href, IconComponent }) => (
  <a
    href={href}
    className="flex flex-row items-start justify-start p-4 border max-w-sm text-center bg-blue-600 my-2"
  >
    {IconComponent && (
      <div className="w-6">
        <IconComponent />
      </div>
    )}
    <p className="ml-4 text-gray-200 font-bold">{title}</p>
  </a>
);
