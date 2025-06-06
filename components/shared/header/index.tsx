import { APP_NAME } from "@/lib/constants";
import Image from "next/image";
import Link from "next/link";
import Menu from "./menu";
import CategoryDrawer from "./category-drawer";
import Search from "./search";
const Header = () => {
  return (
    <header className="w-full border-b">
      <div className="wrapper flex-between">
        {/* Logo + App Name */}
        <div className="flex-start ml-4">
          <CategoryDrawer />

          <Link href="/" className="flex-start">
            <Image
              src="/images/logo.svg"
              alt={APP_NAME}
              width={48}
              height={48}
              priority={true}
            />
            <span className="hidden lg:block font-bold text-2xl ml-3">
              {APP_NAME}
            </span>
          </Link>
        </div>
        {/* Cart + User */}
        <div className="space-x-2">
          <div className="hidden md:block">
            <Search />
          </div>
          <Menu />
        </div>
      </div>
    </header>
  );
};

export default Header;
