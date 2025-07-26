import React from "react";
import { LuUser } from "react-icons/lu";
import { currentUser } from "@clerk/nextjs/server";

export default async function UserIcon() {
  const user = await currentUser();

  const profileImage = user?.imageUrl;
  if (profileImage) {
    return (
      <img
        src={profileImage}
        className="w-6 h-6 rounded-full object-cover"
        alt="User icon"
      />
    );
  }

  return <LuUser className="h-6 w-6 bg-primary rounded-full text-white" />;
}
