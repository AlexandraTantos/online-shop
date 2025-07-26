import React from "react";
import { HiHome } from "react-icons/hi";
import { Button } from "../ui/button";
import Link from "next/link";

export default function Logo() {
  return (
    <Button size="icon" asChild>
      <Link href="/" aria-label="Home">
        <HiHome className="w-6 h-6" aria-hidden="true" />
      </Link>
    </Button>
  );
}
