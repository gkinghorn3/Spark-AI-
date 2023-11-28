import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import { UserButton } from "@clerk/nextjs";

const Navbar = () => {
  return (
    <>
      <div className="flex items-center p-4">
        <Button variant="ghost" size="icon" className="md:hidden">
          <Menu />
        </Button>
      </div>
      <div className="flex w-full justify-end">
        <UserButton afterSignOutUrl="/" />
      </div>
    </>
  );
};

export default Navbar;
