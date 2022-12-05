import Image from "next/image";
import React from "react";
import { HeaderItem } from "./HeaderItem";
import {
  HomeIcon,
  BadgeCheckIcon,
  CollectionIcon,
  LightningBoltIcon,
  SearchCircleIcon,
  UserIcon,
} from "@heroicons/react/outline";

const icons = [
  { title: "HOME", Icon: HomeIcon },
  { title: "TRENDING", Icon: LightningBoltIcon },
  { title: "VERIFIED", Icon: BadgeCheckIcon },
  { title: "COLLECTIONS", Icon: CollectionIcon },
  { title: "SEARCH", Icon: SearchCircleIcon },
  { title: "ACCOUNT", Icon: UserIcon },
];

export const Header = () => {
  return (
    <div className="flex flex-col sm:flex-row m-5 justify-between items-center">
      <ul className="flex flex-grow justify-evenly max-w-2xl">
        {icons.map(({ title, Icon }) => (
          <HeaderItem title={title} Icon={Icon} />
        ))}
      </ul>
      <Image
        src={"https://links.papareact.com/ua6"}
        alt="Image not found"
        width={200}
        height={100}
      />
    </div>
  );
};
