"use client";

import Button from "@/components/ui/button/button";
import Logo from "@/components/ui/logo/logo";
import Link from "next/link";

const Navbar = ({
  theme = "homepage",
}: {
  theme: "homepage" | "sidepage";
}): JSX.Element => {
  return (
    <nav
      className={`container flex items-center justify-between transition-all`}
    >
      <Link className="block h-10" href="/">
        <Logo
          colorClassName={
            theme === "homepage" ? "fill-white" : "fill-dark-blue"
          }
        />
      </Link>

      <Button
        className={`border-dark-blue bg-dark-blue text-white hover:bg-transparent hover:${theme === "homepage" ? "text-white" : "text-dark-blue"} hover:${theme === "homepage" && "border-white"}`}
      >
        <Link href="tel:+842613597598">ĐẶT PHÒNG NGAY</Link>
      </Button>
    </nav>
  );
};

export default Navbar;
